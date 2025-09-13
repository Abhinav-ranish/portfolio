"use client";

import { useEffect, useState } from "react";
import { Hero } from "@/components/Hero";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

export default function HomePage() {
  const [isMobile, setIsMobile] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      if (typeof window !== "undefined") {
        const mobile =
          /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) ||
          window.innerWidth < 768;
        setIsMobile(mobile);
        if (mobile) setShowPopup(true);
      }
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <main className="h-screen w-full overflow-y-scroll snap-y snap-mandatory scroll-smooth bg-neutral-950 text-neutral-100">
      {/* Mobile popup */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/70 backdrop-blur-sm">
          <div className="bg-neutral-900 text-white rounded-xl p-6 max-w-sm mx-auto shadow-lg text-center">
            <h2 className="text-lg font-semibold text-pink-300 mb-2">
              Heads up!
            </h2>
            <p className="text-gray-300 text-sm mb-4">
              New UI for mobile is under development and will be available in
              the next 30 days.
            </p>
            <button
              onClick={() => {
                setShowPopup(false);
                window.location.href = "/old";
              }}
              className="px-4 py-2 rounded-lg bg-pink-400 text-white hover:bg-pink-500 transition"
            >
              Continue to Old UI
            </button>
          </div>
        </div>
      )}

      {/* Desktop / existing UI */}
      {!isMobile && (
        <>
          {/* Hero with AI Chat */}
          <section
            id="hero"
            className="h-screen w-full flex flex-col justify-center snap-start"
          >
            <Hero />
          </section>

          {/* Work Experience Timeline */}
          <section
            id="experience"
            className="w-full min-h-screen py-20 snap-start"
          >
            <Experience />
          </section>
          

          {/* Spotlight Projects */}
          <section id="projects" className="h-screen w-full snap-start">
            <Projects />
          </section>

          {/* Contact */}
          <section id="contact" className="h-screen w-full snap-start">
            <Contact />
          </section>
        </>
      )}
    </main>
  );
}
