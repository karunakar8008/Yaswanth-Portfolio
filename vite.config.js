import react from "@vitejs/plugin-react";
import { defineConfig, loadEnv } from "vite";

// Dev-only plugin: serves POST /api/chat using the same handler Vercel runs in
// production, so `npm run dev` gives you the full site + working chatbot with no
// separate backend process. In production (Vercel), api/chat.js handles it.
function chatApiPlugin(env) {
  return {
    name: "chat-api-dev",
    configureServer(server) {
      // Make .env values available to the server-side handler via process.env.
      if (env.ANTHROPIC_API_KEY) process.env.ANTHROPIC_API_KEY = env.ANTHROPIC_API_KEY;
      if (env.ANTHROPIC_MODEL) process.env.ANTHROPIC_MODEL = env.ANTHROPIC_MODEL;

      server.middlewares.use("/api/chat", async (req, res) => {
        try {
          // Imported lazily so the SDK is never bundled into the client.
          const { default: handler } = await import("./api/_handler.js");
          await handler(req, res);
        } catch (err) {
          console.error("[chat-api-dev] error:", err);
          res.statusCode = 500;
          res.setHeader("Content-Type", "application/json");
          res.end(JSON.stringify({ error: "server_error", message: "Dev handler failed." }));
        }
      });
    },
  };
}

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // Load all env vars (no VITE_ prefix filter) from .env files.
  const env = loadEnv(mode, process.cwd(), "");
  return {
    plugins: [react(), chatApiPlugin(env)],
  };
});
