'use client'
import React, { useState, useRef, useEffect } from 'react'

const SPAM_TIMEOUT_MS = 5000
const STORAGE_KEY = 'chatHistory'

type Message = {
    sender: 'user' | 'ai'
    text: string
}

export default function ChatPage() {
    const [input, setInput] = useState('')
    const [messages, setMessages] = useState<Message[]>([])
    const [loading, setLoading] = useState(false)
    const [canSend, setCanSend] = useState(true)
    const chatEndRef = useRef<HTMLDivElement>(null)
    const chatContainerRef = useRef<HTMLDivElement>(null)
    const inputRef = useRef<HTMLTextAreaElement>(null)

    useEffect(() => {
        if (canSend && inputRef.current) {
            inputRef.current.focus()
        }
    }, [canSend])

    useEffect(() => {
        const saved = localStorage.getItem(STORAGE_KEY)
        if (saved) {
            try {
                const parsed = JSON.parse(saved)
                if (Array.isArray(parsed) && parsed.length > 0) {
                    setMessages(parsed)
                } else {
                    // No valid messages, show intro message
                    setMessages([
                        {
                            sender: 'ai',
                            text:
                                'Hi, I’m Mr. Robot. How can I help you today? I am here to provide information about Abhi.',
                        },
                    ])
                }
            } catch {
                console.warn('Failed to parse chat history')
                // Fallback if JSON is invalid
                setMessages([
                    {
                        sender: 'ai',
                        text:
                            'Hi, I’m Mr. Robot. How can I help you today? I am here to provide information about Abhi.',
                    },
                ])
            }
        } else {
            // No saved data at all
            setMessages([
                {
                    sender: 'ai',
                    text:
                        'Hi, I’m Mr. Robot. How can I help you today? I am here to provide information about Abhi.',
                },
            ])
        }
    }, [])



    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(messages))
    }, [messages])

    useEffect(() => {
        const container = chatContainerRef.current
        const shouldScroll =
            messages.length > 5 ||
            (container && container.scrollHeight > container.clientHeight)

        if (shouldScroll) {
            chatEndRef.current?.scrollIntoView({ behavior: 'smooth' })
        }
    }, [messages, loading])


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!input.trim() || !canSend) return

        const userText = input.trim()
        setInput('')
        setLoading(true)
        setCanSend(false)

        setMessages((prev) => [...prev, { sender: 'user', text: userText }])

        try {
            const res = await fetch('/api/groq', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ question: userText }),
            })
            const { answer, error } = await res.json()
            const aiText = answer ?? error ?? 'No response'
            setMessages((prev) => [...prev, { sender: 'ai', text: aiText }])
        } catch {
            setMessages((prev) => [
                ...prev,
                { sender: 'ai', text: 'Network error, please try again.' },
            ])
        } finally {
            setLoading(false)
            setTimeout(() => setCanSend(true), SPAM_TIMEOUT_MS)
        }
    }

    const secondsLeft = Math.ceil(
        (SPAM_TIMEOUT_MS -
            Math.min(SPAM_TIMEOUT_MS, Date.now() % SPAM_TIMEOUT_MS)) / 1000
    )

    return (
        <div className="h-screen flex flex-col max-w-3xl mx-auto">

            {/* 🧾 Scrollable message area */}
            <div
                ref={chatContainerRef}
                className="flex-1 overflow-y-auto px-6 pt-4 pb-40 space-y-4">
                {messages.map((m, i) => (
                    <div
                        key={i}
                        className={`flex ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                        <div
                            className={
                                m.sender === 'user'
                                    ? 'bg-pink-400 text-white rounded-tl-lg rounded-bl-lg rounded-tr-lg px-4 py-2 max-w-[80%]'
                                    : 'bg-gray-700 text-gray-100 rounded-tr-lg rounded-br-lg rounded-tl-lg px-4 py-2 max-w-[80%]'
                            }
                        >
                            {m.text}
                        </div>
                    </div>
                ))}
                <div ref={chatEndRef} className="scroll-mb-40" />
            </div>

            {/* 💬 Sticky Input Bar */}
            <div className="sticky bottom-0 bg-gray-900 border-t border-gray-700 p-4">
                <form
                    onSubmit={handleSubmit}
                    className="flex items-center space-x-2 max-w-3xl mx-auto"
                >
                    <textarea
                        ref={inputRef}
                        className="flex-1 p-3 rounded border border-gray-600 bg-gray-800 text-gray-100 focus:outline-none focus:ring resize-none h-[48px]"
                        rows={1}
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter' && !e.shiftKey) {
                                e.preventDefault()
                                handleSubmit(e as any)
                            }
                        }}
                        placeholder={
                            canSend
                                ? 'Type your question…'
                                : `Please wait ${secondsLeft}s`
                        }
                        disabled={!canSend || loading}
                    />

                    <button
                        type="submit"
                        disabled={!canSend || loading || !input.trim()}
                        className="bg-pink-400 text-white px-4 py-2 rounded disabled:opacity-50"
                    >
                        {loading ? '…' : 'Send'}
                    </button>
                </form>

                {!canSend && (
                    <p className="mt-2 text-xs text-center text-gray-400">
                        Slow down! Please wait a few seconds before asking again.
                    </p>
                )}
            </div>
        </div>
    )
}
