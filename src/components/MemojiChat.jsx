import { useEffect, useRef, useState } from "react";
import { chatbot } from "../data/content";
import Memoji from "./Memoji";
import { CloseIcon, SendIcon, SparkleIcon } from "./Icons";

/* Memoji-style chatbot:
   - Avatar "drops in" from above with a bouncy spring when opened.
   - A speech bubble sits beside the memoji showing the latest assistant text.
   - Mouth animates while the API call is in flight (and briefly while typing out).
   - Chat input is a floating pill below the memoji; suggestions appear first.
   - Previous messages are shown in a compact history below the bubble. */
export default function MemojiChat({ open, onOpen, onClose }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [bubble, setBubble] = useState(chatbot.greeting);
  const [typing, setTyping] = useState(false);
  const inputRef = useRef(null);
  const historyRef = useRef(null);
  const typeTimer = useRef(0);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 350);
  }, [open]);

  // Auto-scroll compact history to the bottom.
  useEffect(() => {
    if (historyRef.current) {
      historyRef.current.scrollTo({ top: historyRef.current.scrollHeight, behavior: "smooth" });
    }
  }, [messages, bubble]);

  // Typewriter effect for the big speech bubble — "speaks" the reply.
  function speak(fullText) {
    clearInterval(typeTimer.current);
    setTyping(true);
    setBubble("");
    let i = 0;
    typeTimer.current = setInterval(() => {
      i += 2;
      setBubble(fullText.slice(0, i));
      if (i >= fullText.length) {
        clearInterval(typeTimer.current);
        setTyping(false);
      }
    }, 22);
  }

  useEffect(() => () => clearInterval(typeTimer.current), []);

  async function send(text) {
    const content = text.trim();
    if (!content || loading) return;
    const next = [...messages, { role: "user", content }];
    setMessages(next);
    setInput("");
    setLoading(true);
    setBubble("…");
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next }),
      });
      const data = await res.json().catch(() => ({}));
      const reply = data.reply || data.message || "Sorry — something went wrong. Please try again.";
      setMessages((m) => [...m, { role: "assistant", content: reply }]);
      speak(reply);
    } catch {
      const err = "I couldn't reach the server. Try again in a moment.";
      setMessages((m) => [...m, { role: "assistant", content: err }]);
      speak(err);
    } finally {
      setLoading(false);
    }
  }

  function onKeyDown(e) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send(input);
    }
  }

  const speaking = loading || typing; // triggers the mouth animation

  return (
    <>
      {/* Floating launcher (visible only when panel is closed) */}
      <button
        className={`memoji-fab ${open ? "hidden" : ""}`}
        onClick={onOpen}
        aria-label="Open assistant"
      >
        <SparkleIcon width={16} height={16} />
        <span>Say hi to {chatbot.avatarName}</span>
      </button>

      {/* Backdrop fades in; clicking it closes */}
      <div className={`memoji-backdrop ${open ? "on" : ""}`} onClick={onClose} aria-hidden="true" />

      {/* The dropping stage */}
      <div className={`memoji-stage ${open ? "open" : ""}`} role="dialog" aria-label="AI assistant">
        {/* The dropping memoji + its speech bubble */}
        <div className="drop-wrap">
          <div className="drop-rope" aria-hidden="true" />
          <div className="drop-memoji">
            <Memoji speaking={speaking} size={130} />
          </div>

          <div className={`speech ${bubble ? "on" : ""}`}>
            <div className="speech-tail" />
            <strong className="speech-name">{chatbot.avatarName}</strong>
            <p className="speech-text">
              {bubble}
              {typing && <span className="speech-caret">▍</span>}
            </p>
          </div>

          <button className="memoji-close" onClick={onClose} aria-label="Close">
            <CloseIcon />
          </button>
        </div>

        {/* Suggestion chips (only before any messages are sent) */}
        {messages.length === 0 && (
          <div className="memoji-sugs">
            {chatbot.suggestions.map((s) => (
              <button key={s} className="sug" onClick={() => send(s)}>
                {s}
              </button>
            ))}
          </div>
        )}

        {/* Compact history of previous turns */}
        {messages.length > 0 && (
          <div className="memoji-history" ref={historyRef} data-lenis-prevent>
            {messages.map((m, i) => (
              <div key={i} className={`hmsg ${m.role}`}>
                <span className="hmsg-who">{m.role === "user" ? "you" : chatbot.avatarName}</span>
                <span className="hmsg-text">{m.content}</span>
              </div>
            ))}
          </div>
        )}

        {/* Input pill */}
        <form
          className="memoji-input"
          onSubmit={(e) => {
            e.preventDefault();
            send(input);
          }}
        >
          <input
            ref={inputRef}
            type="text"
            value={input}
            placeholder={`ask ${chatbot.avatarName} anything about Yaswanth…`}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={onKeyDown}
          />
          <button type="submit" disabled={!input.trim() || loading} aria-label="Send">
            <SendIcon width={16} height={16} />
          </button>
        </form>
      </div>
    </>
  );
}
