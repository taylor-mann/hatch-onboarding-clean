'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface ROI {
  label: string;
  subtitle: string;
}

interface Integration {
  name: string;
  subtitle: string;
  logo: string;
  required?: boolean;
}

interface MissionCard {
  id: string;
  title: string;
  description: string;
  roi: ROI[];
  integrations: Integration[];
  assigned: boolean;
}

const imgGong = 'http://localhost:3845/assets/16deb36488755388a043a3c22073eab67a72f696.png';
const imgDrive = 'http://localhost:3845/assets/532366cc707be9078d9a9fef1245f23f299f5718.png';
const imgSalesforce = 'http://localhost:3845/assets/7ff5d41e5d2de540833aa17f73d614c87998b9bc.png';
const imgSlack = 'http://localhost:3845/assets/85f71a76ba3ba09c52ab3fb2dd05a70ab645594b.png';

const defaultMissions: MissionCard[] = [
  {
    id: 'always-on',
    title: 'Always-On Competitive Research',
    description:
      'Your personal intel analyst that continuously collects and analyzes data to generate insights, build competitor profiles, and spot trends automatically.',
    roi: [
      { label: '25%', subtitle: 'higher trust vs. ChatGPT' },
      { label: '7 hours', subtitle: 'saved from research & updates each week' },
      { label: '100%', subtitle: 'competitor coverage in minutes' },
    ],
    integrations: [
      { name: 'Gong', subtitle: 'Call Recording', logo: imgGong, required: true },
      { name: 'Drive', subtitle: 'Knowledge Base', logo: imgDrive },
    ],
    assigned: true,
  },
  {
    id: 'deal-tip',
    title: 'Deal Tip Agent',
    description:
      'Proactive, personalized deal support for every seller.',
    roi: [
      { label: '10x', subtitle: 'more deal support' },
      { label: '<2 hours', subtitle: 'response time after competitive calls' },
      { label: '100%', subtitle: 'evidence-based responses' },
    ],
    integrations: [
      { name: 'Gong', subtitle: 'Call Recording', logo: imgGong },
      { name: 'Salesforce', subtitle: 'CRM', logo: imgSalesforce, required: true },
      { name: 'Slack', subtitle: 'Messaging', logo: imgSlack },
    ],
    assigned: false,
  },
];

export default function Missions() {
  const [missions, setMissions] = useState<MissionCard[]>(defaultMissions);
  const router = useRouter();

  const toggle = (id: string) => {
    setMissions((prev) =>
      prev.map((m) => (m.id === id ? { ...m, assigned: !m.assigned } : m))
    );
  };

  const anySelected = missions.some((m) => m.assigned);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <header className="flex items-center justify-between px-10 pt-10 pb-6 w-full">
        <span className="text-xl font-bold">Klue</span>
        <div className="w-20 h-2 bg-gray-200 rounded" />
      </header>
      <div className="border-b" />

      {/* Content */}
      <div className="flex flex-1 flex-col lg:flex-row">
        {/* Hero Panel */}
        <aside className="hidden lg:flex flex-col items-center justify-end bg-[#f8f6f7] w-[618px] pt-5 gap-16">
          {/* Placeholder images */}
          <div className="w-[536px] h-[329px] bg-cover bg-center mix-blend-multiply" style={{backgroundImage:`url('http://localhost:3845/assets/91c0f65f924f35adb339cbc7e3a18d1cf1a4acbc.png')`}} />
          <div className="w-[307px] h-[307px] bg-cover bg-center mb-10" style={{backgroundImage:`url('http://localhost:3845/assets/56d13d4a0eae3e1301f58778a665b4c8546fb9da.png')`}} />
        </aside>

        {/* Step 2 content */}
        <section className="flex flex-col flex-1 gap-10 px-10 py-10">
          <div className="max-w-2xl">
            <h1 className="text-2xl font-semibold text-[#011627] mb-3">Assign Missions</h1>
            <p className="text-sm font-medium text-[#464646]">
              Scale your compete program by assigning missions to Klue's Compete Agent. Enable your team with compete insights where and when they need it.
            </p>
          </div>

          {/* Checklist Cards */}
          <div className="flex flex-col gap-6 max-w-2xl">
            {missions.map((m) => (
              <div
                key={m.id}
                className={`rounded-lg border ${m.assigned ? 'border-[#e8ecff] bg-[#f9f9ff]' : 'border-neutral-200 bg-white'} p-5 flex gap-5`}
              >
                <input
                  type="checkbox"
                  checked={m.assigned}
                  onChange={() => toggle(m.id)}
                  className="size-5 accent-[#3751ff] mt-1"
                />
                <div className="flex flex-col gap-4 flex-1">
                  <div>
                    <h3 className="text-base font-semibold text-[#011627]">
                      {m.title}
                    </h3>
                    <p className="text-sm font-medium text-[#464646] mt-1">
                      {m.description}
                    </p>
                  </div>

                  {/* ROI Stats */}
                  <div className="flex flex-col md:flex-row gap-3 w-full">
                    {m.roi.map((r) => (
                      <div
                        key={r.label}
                        className="flex-1 text-center border rounded-[3px] p-3"
                        style={{ borderColor: m.id === 'always-on' ? '#dbe1ff' : '#e5e5e5' }}
                      >
                        <p className="text-base font-semibold text-[#011627]">
                          {r.label}
                        </p>
                        <p className="text-[12px] text-[#717171] font-medium">
                          {r.subtitle}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Integrations */}
                  <div className="mt-3">
                    <p className="text-[12px] font-bold text-[#464646] mb-2">
                      Integrations Checklist
                    </p>
                    <div className="flex flex-wrap gap-5">
                      {m.integrations.map((intg) => (
                        <div key={intg.name} className="relative w-[198px] h-[60px]">
                          <div className="absolute inset-0 bg-white border border-neutral-200 rounded-[3px] flex items-center gap-2 px-4 py-3">
                            <div className="w-9 h-9 bg-white border border-neutral-200 rounded-[3px] flex items-center justify-center overflow-hidden">
                              <img src={intg.logo} alt={intg.name} className="object-contain w-full h-full mix-blend-multiply" />
                            </div>
                            <div>
                              <p className="text-sm font-semibold text-[#011627] leading-4">
                                {intg.name}
                              </p>
                              <p className="text-[12px] font-medium text-[#464646] leading-5">
                                {intg.subtitle}
                              </p>
                            </div>
                          </div>
                          {intg.required && (
                            <span className="absolute -top-2 left-1 bg-[#efeded] rounded-[3px] px-1 text-[12px] text-[#464646] font-semibold">
                              Required
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="border-t border-[#efeded] px-10 py-5 flex justify-between items-center w-full">
        <button
          onClick={() => router.back()}
          className="w-8 h-8 border-2 border-[#efeded] rounded-lg flex items-center justify-center"
        >
          <span className="sr-only">Back</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#464646"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4"
          >
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
        <button
          disabled={!anySelected}
          onClick={() => router.push('/')}
          className="bg-[#3751ff] text-white px-6 py-2 rounded-lg disabled:opacity-50"
        >
          Next
        </button>
      </footer>
    </div>
  );
} 