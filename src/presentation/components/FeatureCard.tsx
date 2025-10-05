import { type ElementType } from 'react';

interface FeatureCardProps {
  icon: ElementType;
  title: string;
  items: string[];
  borderColor?: string;
}

export function FeatureCard({ icon: Icon, title, items, borderColor = 'border-primary/50' }: FeatureCardProps) {
  return (
    <div className={`p-6 bg-white rounded-xl shadow-lg border-t-4 ${borderColor}`}>
      <Icon className="w-8 h-8 text-primary mb-4" />
      <h4 className="text-2xl font-bold mb-3">{title}</h4>
      <ul className="text-gray-600 space-y-2 text-sm">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            <span className="w-4 h-4 text-green-500 mr-2">✓</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
