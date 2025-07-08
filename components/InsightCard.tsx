'use client';
import React, { useState } from 'react';

export interface Insight {
  id: number;
  title: string;
  description: string;
  badge?: string;
  category?: string;
  updatedAt?: string;
  disabled?: boolean;
}

export default function InsightCard({ insight }: { insight: Insight }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`border border-neutral-200 rounded-lg p-0 shadow-[0px_4px_12px_0px_rgba(1,22,39,0.03)] ${
        insight.disabled ? 'opacity-50 cursor-not-allowed' : 'bg-white'
      }`}
    >
      <div className="p-8">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            {insight.badge && (
              <span className="text-[12px] font-semibold bg-[#bdffdc] text-[#00562f] px-1 py-px rounded-[3px] capitalize">
                {insight.badge}
              </span>
            )}
            {insight.category && (
              <span className="text-[#3751ff] text-sm font-medium">{insight.category}</span>
            )}
          </div>
          {insight.updatedAt && (
            <div className="flex items-center gap-1 text-sm text-[#717171]">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 2L3.5 7v6c0 4.5 3 8.7 8.5 9.8c5.5-1.1 8.5-5.3 8.5-9.8V7L12 2z" />
                <polyline points="9 12 12 15 16 10" />
              </svg>
              <span>{insight.updatedAt}</span>
            </div>
          )}
        </div>
        <button
          className="w-full text-left font-serif text-lg text-[#011627] leading-normal"
          onClick={() => !insight.disabled && setOpen(!open)}
        >
          {insight.title}
        </button>
        {open && <p className="mt-3 text-sm text-[#464646]">{insight.description}</p>}
      </div>
    </div>
  );
}