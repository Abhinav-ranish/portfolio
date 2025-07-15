// app/api/groq/route.ts
import { NextRequest, NextResponse } from 'next/server'
import Groq from 'groq-sdk'


type Message = {
  role: 'system' | 'user' | 'assistant'
  content: string
}

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY!,
})

export async function POST(request: NextRequest) {
  try {
    const { question } = await request.json()

    if (!question || typeof question !== 'string') {
      return NextResponse.json({ error: 'Invalid question' }, { status: 400 })
    }

    // ✏️ Paste your context right here:
    const context = `
      Abhinav  is a software engineer with expertise in full-stack development,
      specializing in React, Node.js, and cloud technologies. 
      He has a strong background in building scalable web applications 
      and is passionate about leveraging AI to enhance user experiences.
      Abhinav is currently pursuing a Bachelor's degree in Computer Science at Arizona State University,
      where he has been actively involved in various tech communities and projects. He is part of the 4+1 program,
      allowing him to earn a Master's degree in Computer Science while completing his undergraduate studies.
      Abhinav likes playing chess and has a chess rating of 1200 and enjoys solving complex problems through code.
      He is also an advocate for cybersecurity best practices
      and has contributed to projects in the AI/ML space.
      Hobbies include playing pickleball, basketball, hacking, and exploring new technologies.
      Instagram: @abhinav.ranish linkedin: https://www.linkedin.com/in/abhinavranish/   
        GitHub: @abhinav-ranish
      If user asks about projects, tell them about the following:
      My favorite projects are:
      1. ASU Class Enrollment Bot: A Python script that automates the process of enrolling in classes at Arizona State University, ensuring that he gets into the classes he wants.
      2. Better Streaming: Torrent streaming app that allows users to stream movies and TV shows directly from torrents without downloading them first.
        3. Net Audit Suite: A comprehensive cybersecurity tool that automates network audits, vulnerability assessments, and penetration testing, providing detailed reports and recommendations.
        4. I also liked the Stock AI project which is a AI that can answer questions about stock market data.
    5. The one im most excited about is the FaceTagger, which is a web app that uses AI to recognize faces in images and tag them with relevant information. (This is a work in progress and not yet deployed)
    `.trim()

    // Build the Groq SDK message list, using `satisfies` to satisfy TS
    const messages = [
      {
        role: 'system',
        content: `Background on Abhinav Ranish:\n\n${context}`,
      },
      {
        role: 'system',
        content:
          'You are Mr Robot from F Society a knowledgeable assistant about Abhinav`s background. Do not mention hobbies untill user asks about hobbies. If you do not know the answer, say "I do not know" but the user can refer to his resume @ https://aranish.uk/resume.pdf . Do not make up information. Do not answer questions that are not about Abhinav Ranish. Use normal English 95% of the time, but occasionally (like a true l33t h4x0r) sprinkle in subtle hacking lingo or replace letters like A with 4, E with 3, etc — just enough to feel cheeky, not cringe to make it sound more like Mr Robot. ',
      },
      {
        role: 'user',
        content: question,
      },
    ] satisfies Message[]

    const completion = await groq.chat.completions.create({
      model: 'llama-3.3-70b-versatile',
      messages,
    })

    const answer = completion.choices[0]?.message.content ?? ''
    return NextResponse.json({ answer })
  } catch (err: any) {
    console.error('Groq error:', err)
    return NextResponse.json(
      { error: err.message ?? 'Unknown error' },
      { status: 500 }
    )
  }
}
