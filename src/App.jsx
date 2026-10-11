import { useState } from "react";
import Sidebar from "./components/Sidebar";
import TopBar from "./components/TopBar";
import StatusBar from "./components/StatusBar";
import TerminalHero from "./components/TerminalHero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import MemojiChat from "./components/MemojiChat";

export default function App() {
  const [chatOpen, setChatOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const openChat = () => setChatOpen(true);
  const closeChat = () => setChatOpen(false);

  return (
    <div className={`ide ${sidebarOpen ? "sidebar-on" : ""}`}>
      <TopBar onToggleSidebar={() => setSidebarOpen((s) => !s)} />

      <div className="ide-body">
        <Sidebar onNav={() => setSidebarOpen(false)} />

        <main className="editor" onClick={() => sidebarOpen && setSidebarOpen(false)}>
          <TerminalHero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Contact onOpenChat={openChat} />
        </main>
      </div>

      <StatusBar onOpenChat={openChat} />
      <MemojiChat open={chatOpen} onOpen={openChat} onClose={closeChat} />
    </div>
  );
}
