import { type ElementType } from 'react';

interface UseCaseCardProps {
  icon: ElementType;
  title: string;
  description: string;
  borderColor: string;
  iconColor: string;
}

export function UseCaseCard({ icon: Icon, title, description, borderColor, iconColor }: UseCaseCardProps) {
  return (
    <div className={`p-6 bg-white rounded-xl shadow-md border-b-4 ${borderColor}`}>
      <Icon className={`w-8 h-8 ${iconColor} mb-4`} />
      <h4 className="font-semibold text-xl mb-2">{title}</h4>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}
