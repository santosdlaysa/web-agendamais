import { ElementType } from 'react';

interface DifferentialCardProps {
  icon: ElementType;
  title: string;
  description: string;
  iconColor?: string;
}

export function DifferentialCard({ icon: Icon, title, description, iconColor = 'text-accent' }: DifferentialCardProps) {
  return (
    <div className="p-6 bg-white border border-gray-100 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 text-center">
      <Icon className={`w-8 h-8 ${iconColor} mx-auto mb-4`} />
      <h4 className="font-semibold text-xl mb-2">{title}</h4>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}
