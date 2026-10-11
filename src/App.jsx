import { useState } from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Credentials from "./components/Credentials";
import Contact from "./components/Contact";
import MemojiChat from "./components/MemojiChat";
import { profile } from "./data/content";

export default function App() {
  const [chatOpen, setChatOpen] = useState(false);
  const openChat = () => setChatOpen(true);
  const closeChat = () => setChatOpen(false);

  return (
    <>
      <Nav />
      <main>
        <Hero onOpenChat={openChat} />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Credentials />
        <Contact onOpenChat={openChat} />
      </main>
      <footer className="footer">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <span>·</span>
        <span>crafted with care in Charlotte, NC</span>
      </footer>
      <MemojiChat open={chatOpen} onOpen={openChat} onClose={closeChat} />
    </>
  );
}
