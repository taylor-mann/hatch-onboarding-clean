'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Signup() {
  const router = useRouter();
  const [form, setForm] = useState({
    firstName: 'Joanne',
    lastName: 'Smith',
    email: 'jsmith@jfrog.com',
    role: '',
  });
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const passwordsMatch = password === confirmPassword && password.length > 0;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!passwordsMatch) return;
    await fetch('/api/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
    router.push('/missions');
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <header className="flex items-center justify-between px-10 py-6 w-full">
        <span className="text-xl font-bold">Klue</span>
        {/* Placeholder for steps indicator */}
        <div className="w-20 h-2 bg-gray-200 rounded" />
      </header>
      <div className="border-b" />

      {/* Content */}
      <div className="flex flex-1 flex-col lg:flex-row">
        {/* Left Hero */}
        <aside className="hidden lg:flex flex-col justify-center gap-5 w-1/2 bg-[#00ccff] px-20 text-[#011627]">
          <h1 className="text-4xl font-bold flex items-center gap-2">
            <span>👋</span> Welcome!
          </h1>
          <h2 className="text-xl font-semibold">
            Let's set up Klue for your company
          </h2>
          <p className="text-sm text-[#464646] max-w-sm">
            The details you provide here will shape how your sales team accesses
            knowledge, targets buyers, and succeeds in every deal.
          </p>
        </aside>

        {/* Form Area */}
        <section className="flex flex-1 items-center justify-center p-5">
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-lg shadow border border-neutral-200 w-full max-w-xl p-8 flex flex-col gap-6"
          >
            {/* Card Heading */}
            <div>
              <h3 className="text-lg font-semibold text-[#011627] mb-1">
                Activate your Account
              </h3>
              <p className="text-xs font-medium text-[#464646]">
                Confirm the info below and create a password.
              </p>
            </div>

            {/* Inputs Section */}
            <div className="flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {/* First Name */}
                <div className="flex flex-col gap-1">
                  <label className="text-xs text-[#717171] font-medium">
                    First Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    value={form.firstName}
                    onChange={(e) =>
                      setForm({ ...form, firstName: e.target.value })
                    }
                    required
                    className="border border-neutral-200 rounded-[5px] px-2 py-1 text-sm"
                  />
                </div>
                {/* Last Name */}
                <div className="flex flex-col gap-1">
                  <label className="text-xs text-[#717171] font-medium">
                    Last Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    value={form.lastName}
                    onChange={(e) =>
                      setForm({ ...form, lastName: e.target.value })
                    }
                    required
                    className="border border-neutral-200 rounded-[5px] px-2 py-1 text-sm"
                  />
                </div>
              </div>

              {/* Email & Role */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {/* Email */}
                <div className="flex flex-col gap-1">
                  <label className="text-xs text-[#717171] font-medium">
                    Email <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="email"
                    value={form.email}
                    disabled
                    className="border border-[#bdbdbd] bg-[#efeded] rounded-[5px] px-2 py-1 text-sm text-[#bdbdbd]"
                  />
                  <p className="text-[10px] text-[#464646] mt-1">
                    To change your email please contact Klue support.
                  </p>
                </div>
                {/* Role */}
                <div className="flex flex-col gap-1">
                  <label className="text-xs text-[#717171] font-medium">
                    Role <span className="text-red-600">*</span>
                  </label>
                  <select
                    value={form.role}
                    onChange={(e) => setForm({ ...form, role: e.target.value })}
                    required
                    className="border border-neutral-200 rounded-[5px] px-2 py-1 text-sm"
                  >
                    <option value="" disabled>
                      Select
                    </option>
                    <option value="Account Executive (AE)">Account Executive (AE)</option>
                    <option value="Product Marketing Manager">Product Marketing Manager</option>
                    <option disabled>------</option>
                    <option value="SDR or BDR">SDR or BDR</option>
                    <option value="Sales Engineer">Sales Engineer</option>
                    <option value="Sales Enablement">Sales Enablement</option>
                    <option value="Account Manager">Account Manager</option>
                    <option value="Sales Manager / Sales Director / VP Sales">Sales Manager / Sales Director / VP Sales</option>
                    <option value="Other Sales Role">Other Sales Role</option>
                    <option value="Customer Success">Customer Success</option>
                    <option value="Competitive Intelligence Analyst/Manager">Competitive Intelligence Analyst/Manager</option>
                    <option value="Marketer">Marketer</option>
                    <option value="Product Manager">Product Manager</option>
                    <option value="Executive">Executive</option>
                    <option value="None of the Above">None of the Above</option>
                  </select>
                </div>
              </div>

              {/* Passwords */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="flex flex-col gap-1">
                  <label className="text-xs text-[#717171] font-medium">
                    Password <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="border border-neutral-200 rounded-[5px] px-2 py-1 text-sm"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-xs text-[#717171] font-medium">
                    Confirm Password <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    className={`border rounded-[5px] px-2 py-1 text-sm ${
                      passwordsMatch
                        ? 'border-neutral-200'
                        : 'border-red-500'
                    }`}
                  />
                </div>
              </div>
            </div>

            {/* Footer Button */}
            <div className="flex justify-end border-t border-[#efeded] pt-6">
              <button
                type="submit"
                disabled={!passwordsMatch}
                className="bg-[#3751ff] text-white px-6 py-2 rounded-lg disabled:opacity-50"
              >
                Confirm & Continue
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
} 