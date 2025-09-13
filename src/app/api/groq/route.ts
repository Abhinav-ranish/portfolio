// app/api/groq/route.ts
import { NextRequest, NextResponse } from "next/server";
import { isRateLimited } from "@/lib/rateLimiter";
import Groq from "groq-sdk";

type Message = {
  role: "system" | "user" | "assistant";
  content: string;
};

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY!,
});

export async function POST(request: NextRequest) {
  try {
    const ip = request.headers.get("x-forwarded-for") || "unknown";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Slow down." },
        { status: 429 }
      );
    }
    const { question, context } = await request.json();

    if (!question || typeof question !== "string") {
      return NextResponse.json({ error: "Invalid question" }, { status: 400 });
    }

    const baseContext = `
  Abhi is a software engineer with expertise in full-stack development,
  specializing in React, Node.js, and cloud technologies. 
  He has a strong background in building scalable web applications 
  and is passionate about leveraging AI to enhance user experiences.
  Abhi is currently pursuing a Bachelor's degree in Computer Science at Arizona State University,
  where he has been actively involved in various tech communities and projects. He is part of the 4+1 program,
  allowing him to earn a Master's degree in Computer Science while completing his undergraduate studies.
  Abhi likes playing chess and has a chess rating of 1200 and enjoys solving complex problems through code.
  He is also an advocate for cybersecurity best practices
  and has contributed to projects in the AI/ML space.
  Hobbies include playing pickleball, basketball, hacking, and exploring new technologies.
  Never say "I don't know" just use the contexts provided to you to answer the questions.
  Refer to Abhinav as Abhi and do not reveal full name unless asked.
  Engage users with bit of humor if they say hi or hello be friendly, dont just say I only can answer questions about Abhinav.
  Humor is appreciated but dont talk about anything policitical or religious or controversial or corporate. dad jokes are allowed.
  Don't add humor till the user asks for a joke or seems friendly.
  Instagram: @abhinav.ranish linkedin: https://www.linkedin.com/in/abhinavranish/   
  GitHub: @abhinav-ranish
  Best Projects:

    (Most Proud Off) 
    Stock AI Analyzer – AI tool combining market data, news, and sentiment for actionable stock insights.
    Tech: Python, Ollama, React 
    🌐 https://stock.aranish.uk

    FaceTagger – Offline face detection and tagging for massive photo libraries.
    Tech: Python, InsightFace, Streamlit

    BetterStreaming – Custom streaming app with a Rust-based WebTorrent backend.
    Tech: React, Rust, PostgreSQL

    Work Experience:
    SWE / Cyber Intern – Ampcus Inc (Jun 2025 – Aug 2025)
    Led web app penetration testing (SQLi, XSS, auth flaws) with Burp Suite, built an AI stock analyzer for executives, and developed advanced UI features using ShadCN, TanStack, and REST APIs while balancing cyber and SWE roles.

    AI / SWE Intern – Tranzyd (Dec 2024 – May 2025)
    Built contract automation features using sentence-transformers, Ollama, and Python; integrated SQLite backend and UI workflows; also prototyped an AI-powered stock analyzer with RAG and FAISS.

    Technology Consultant – ASU (Nov 2024 – Present)
    Provided in-class tech support, managed real-time faculty requests, and ensured smooth classroom tech operations through proactive maintenance and troubleshooting.

`.trim();

    // Merge context if provided
    const mergedContext =
      context && typeof context === "string"
        ? `${baseContext}\n\nExtra details:\n${context}`
        : baseContext;

    // Build the Groq SDK message list, using `satisfies` to satisfy TS
    const messages = [
      {
        role: "system",
        content: `Background on Abhinav Ranish:\n\n${mergedContext}`,
      },
      {
        role: "system",
        content:
          'You are a virtual chatbot for Abhinav. Do not mention hobbies unless asked. If you do not know the answer, never say "I do not know" ask the user to refer to his resume @ https://aranish.uk/resume.pdf and if questions are related to projects or experience ask user to use the project / experience buttons in the chatbot so u can get context clues. Do not make up information. Do not answer questions which are not related to Abhinav Ranish.',
      },
      {
        role: "user",
        content: question,
      },
    ] satisfies Message[];

    const completion = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages,
    });

    const answer = completion.choices[0]?.message.content ?? "";
    return NextResponse.json({ answer });
  } catch (err: any) {
    console.error("Groq error:", err);
    return NextResponse.json(
      { error: err.message ?? "Unknown error" },
      { status: 500 }
    );
  }
}
