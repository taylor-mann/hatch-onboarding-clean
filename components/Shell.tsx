'use client';
import React from 'react';
import { usePathname } from 'next/navigation';
import NavBar from './NavBar';
import ChatDrawer from './ChatDrawer';

const DragHandle = () => (
  <div className="flex items-center justify-center px-2">
    <div className="w-1 h-10 bg-neutral-200 rounded-full" />
  </div>
);

export default function Shell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  if (pathname.startsWith('/signup') || pathname.startsWith('/missions')) {
    // Dedicated auth flow without nav/chat
    return <>{children}</>;
  }

  return (
    <div className="flex h-screen bg-[#fdfcfc] p-4 pb-0">
      <NavBar />
      <DragHandle />
      <main className="flex-1 flex flex-col bg-white rounded-tl-2xl rounded-tr-2xl border border-[#efeded] shadow-sm overflow-hidden">
        {/* Header */}
        <header className="flex items-center justify-between px-5 py-4 border-b border-[#efeded]">
          <h1 className="text-2xl font-semibold">Home</h1>
        </header>
        {/* Body */}
        <div className="flex-1 overflow-y-auto">
          {children}
        </div>
      </main>
      <DragHandle />
      <div className="flex flex-col h-full py-3">
        <ChatDrawer />
      </div>
    </div>
  );
} 