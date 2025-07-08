'use client';
import InsightCard, { Insight } from '../components/InsightCard';

const sampleInsights: Insight[] = [
  {
    id: 1,
    title: 'We\u2019ve identified 5 top competitors.\nConfirm them now.',
    description: 'Open the competitor confirmation wizard to review the list.',
    badge: 'To Do',
    category: 'Account Setup',
    updatedAt: 'April 9',
  },
  {
    id: 2,
    title: 'Learn how to ask questions.',
    description: 'A quick guide on interacting with Klue.',
    badge: 'To Do',
    category: 'How to Use Klue',
    updatedAt: 'April 9',
  },
  {
    id: 3,
    title: 'Review an insight',
    description: 'Review the generated insight content.',
    badge: 'To Do',
    category: 'How to Use Klue',
    updatedAt: 'April 9',
  },
  {
    id: 4,
    title: 'Insights are being generated...',
    description: '',
    category: 'Deal Tip',
    badge: undefined,
    updatedAt: 'April 9',
    disabled: true,
  },
];

export default function Home() {
  return (
    <div className="px-8 py-5 space-y-5 overflow-y-auto h-full">
      {sampleInsights.map((insight) => (
        <InsightCard key={insight.id} insight={insight} />
      ))}
    </div>
  );
} 