'use client';
import React, { useState, useRef, useEffect } from 'react';

interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

const klueIcon = (
  <svg width="26" height="21" viewBox="0 0 32 26" className="text-neutral-900">
    <rect width="32" height="26" fill="currentColor" />
  </svg>
);

export default function ChatDrawer() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;
    const updated = [...messages, { role: 'user' as const, content: input }];
    setMessages(updated);
    setInput('');
    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ messages: updated }),
    });
    const data = await res.json();
    setMessages((m) => [...m, { role: 'assistant' as const, content: data.reply }]);
  };

  const suggestions = [
    'How does Rapid7 compare against Panterra?',
  ];

  return (
    <aside className="w-[300px] flex-1 flex flex-col bg-gradient-to-b from-white to-[#f5f7ff] rounded-2xl border border-[#efeded] shadow-[0px_4px_12px_0px_rgba(1,22,39,0.03)]">
      {/* Header */}
      <div className="flex justify-between items-center px-3 py-3">
        {/* Left actions placeholder */}
        <button className="p-1 opacity-0">
          <svg width="20" height="20" />
        </button>
        <div className="flex items-center gap-1">
          {klueIcon}
          <span className="font-semibold text-base text-[#464646]">Ask Klue</span>
        </div>
        {/* Right actions placeholder */}
        <button className="p-1">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
            <path d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Messages list */}
      <div ref={listRef} className="flex-1 overflow-y-auto px-4 pb-4">
        {/* Intro prompt */}
        {messages.length === 0 && (
          <div className="text-sm text-[#717171] leading-[1.85]">
            <p className="font-bold text-[#011627] mb-4">Morning, Jo Anne! 👋</p>
            <p className="mb-4">
              Welcome to Klue. Getting high confidence competitive insights is now easier than ever.
            </p>
            <p className="mb-3">Let's see how. Start by doing a simple comparison question:</p>
            {suggestions.map((s) => (
              <button
                key={s}
                onClick={() => setInput(s)}
                className="inline-flex items-center bg-[#f2f3ff] text-[#3751ff] text-sm font-semibold px-2 py-1 rounded-[5px]"
              >
                {s}
              </button>
            ))}
          </div>
        )}
        <div className="space-y-4 mt-4">
          {messages.map((m, i) => (
            <div key={i} className={m.role === 'user' ? 'text-right' : 'text-left'}>
              <p
                className={`inline-block max-w-[80%] text-sm leading-[1.5] rounded-lg px-3 py-2 ${
                  m.role === 'user'
                    ? 'bg-[#3751ff] text-white font-semibold'
                    : 'bg-white border border-neutral-200'
                }`}
              >
                {m.content}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Input */}
      <div className="p-4">
        <div className="bg-white border border-[#bdbdbd] rounded-lg">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="How can I help?"
            className="w-full p-4 text-sm text-[#717171] placeholder-[#717171] focus:outline-none resize-none bg-transparent"
            rows={3}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                sendMessage();
              }
            }}
          />
          <div className="flex items-center justify-between px-4 pb-4 pt-0">
            <span className="text-xs text-[#717171]">{input.length}/500</span>
            <button
              onClick={sendMessage}
              className="bg-[#f2f3ff] text-[#3751ff] text-sm font-semibold px-3 py-1 rounded-[5px]"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
} 