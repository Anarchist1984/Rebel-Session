import React from 'react';
import { Chrome, Mail } from 'lucide-react';

interface ProductCardProps {
  title: string;
  description: string;
  type: 'research' | 'gmail';
  comingSoon?: boolean;
}

export function ProductCard({ title, description, type, comingSoon = true }: ProductCardProps) {
  return (
    <div className="bg-gradient-to-br from-black to-blue-950/30 p-8 rounded-2xl border border-blue-900/30 backdrop-blur-sm group hover:border-orange-500/50 transition-all">
      <div className="mb-4">
        {type === 'research' ? (
          <Chrome className="w-12 h-12 text-orange-500" />
        ) : (
          <Mail className="w-12 h-12 text-blue-500" />
        )}
      </div>
      <h3 className="text-xl font-bold mb-3 group-hover:text-orange-500 transition-colors">{title}</h3>
      <p className="text-gray-400 mb-4">{description}</p>
      {comingSoon && (
        <span className="inline-block px-3 py-1 bg-orange-500/20 text-orange-400 text-sm rounded-full">
          Coming Soon
        </span>
      )}
    </div>
  );
}