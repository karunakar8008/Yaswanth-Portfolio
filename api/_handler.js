// ============================================================================
//  CHAT HANDLER  —  shared by the Vercel function (api/chat.js) and the local
//  dev server (wired into Vite in vite.config.js).
//  Framework-agnostic: uses only standard Node req/res, so it runs anywhere.
// ============================================================================

import Anthropic from "@anthropic-ai/sdk";
import { buildSystemPrompt } from "./_resume-context.js";

// Model ID — NOTE: IDs use dashes, not dots. "claude-haiku-5.5" is INVALID;
// the correct id is "claude-haiku-5-5". Hardcoded so a stray ANTHROPIC_MODEL
// env var (e.g. a dotted value) can't break it. Change here if you want another.
const MODEL = "claude-haiku-5-5";

// Guardrails to bound token usage / cost.
const MAX_MESSAGES = 20; // only the most recent turns are kept
const MAX_CHARS_PER_MESSAGE = 2000;
const MAX_TOKENS = 1024; // concise recruiter answers

function send(res, status, body) {
  res.statusCode = status;
  res.setHeader("Content-Type", "application/json");
  res.setHeader("Cache-Control", "no-store");
  res.end(JSON.stringify(body));
}

async function readJson(req) {
  // Vercel may pre-parse the body; the raw dev server does not.
  if (req.body !== undefined && req.body !== null) {
    return typeof req.body === "string" ? JSON.parse(req.body || "{}") : req.body;
  }
  const chunks = [];
  for await (const chunk of req) chunks.push(chunk);
  const raw = Buffer.concat(chunks).toString("utf8");
  return raw ? JSON.parse(raw) : {};
}

/** Keep only valid user/assistant turns, trim length, cap count. */
function sanitizeMessages(input) {
  if (!Array.isArray(input)) return [];
  const cleaned = input
    .filter(
      (m) =>
        m &&
        (m.role === "user" || m.role === "assistant") &&
        typeof m.content === "string" &&
        m.content.trim().length > 0
    )
    .map((m) => ({
      role: m.role,
      content: m.content.slice(0, MAX_CHARS_PER_MESSAGE),
    }))
    .slice(-MAX_MESSAGES);

  // The Messages API requires the first message to be from the user.
  while (cleaned.length && cleaned[0].role !== "user") cleaned.shift();
  return cleaned;
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return send(res, 405, { error: "method_not_allowed", message: "Use POST." });
  }

  if (!process.env.ANTHROPIC_API_KEY) {
    return send(res, 503, {
      error: "not_configured",
      message:
        "The assistant isn't configured yet. Set ANTHROPIC_API_KEY to enable it.",
    });
  }

  let messages;
  try {
    const body = await readJson(req);
    messages = sanitizeMessages(body.messages);
  } catch {
    return send(res, 400, { error: "bad_request", message: "Invalid JSON body." });
  }

  if (messages.length === 0) {
    return send(res, 400, {
      error: "bad_request",
      message: "Send at least one user message.",
    });
  }

  try {
    const client = new Anthropic(); // reads ANTHROPIC_API_KEY from env
    const response = await client.messages.create({
      model: MODEL,
      max_tokens: MAX_TOKENS,
      output_config: { effort: "low" }, // snappy, low-cost answers
      system: [
        {
          type: "text",
          text: buildSystemPrompt(),
          cache_control: { type: "ephemeral" }, // cache the large, stable prompt
        },
      ],
      messages,
    });

    if (response.stop_reason === "refusal") {
      return send(res, 200, {
        reply:
          "I can only help with questions about Karunakar's professional background. Feel free to ask about his experience, skills, or projects.",
      });
    }

    const reply = response.content
      .filter((b) => b.type === "text")
      .map((b) => b.text)
      .join("\n")
      .trim();

    return send(res, 200, {
      reply:
        reply ||
        "Sorry, I couldn't generate a response. Please try rephrasing your question.",
    });
  } catch (err) {
    const status = err?.status;
    console.error("[chat] error:", status, err?.message || err); // visible in Vercel logs
    if (status === 429) {
      return send(res, 429, {
        error: "rate_limited",
        message: "The assistant is busy right now — please try again in a moment.",
      });
    }
    return send(res, 500, {
      error: "server_error",
      message:
        "Sorry, I'm having trouble answering right now. Please try again, or email Karunakar at gudipudikarunakar9@gmail.com.",
    });
  }
}
