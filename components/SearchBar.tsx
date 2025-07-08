'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SearchBar() {
  const router = useRouter();
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/?q=${encodeURIComponent(query)}`);
  };

  return (
    <form onSubmit={handleSubmit} className="flex">
      <input
        type="text"
        placeholder="Search insights..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="flex-1 border rounded-l px-2 py-1"
      />
      <button type="submit" className="bg-blue-500 text-white px-3 rounded-r">
        Search
      </button>
    </form>
  );
} 