'use client';

import { ReactNode } from 'react';

interface PathCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  onClick?: () => void;
}

export default function PathCard({ icon, title, description, onClick }: PathCardProps) {
  return (
    <div
      onClick={onClick}
      className="path-card card bg-white p-8 rounded-2xl text-center cursor-pointer"
    >
      <div className="mb-4 flex justify-center">{icon}</div>
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
      <button className="mt-4 text-fuchsia-600 font-semibold hover:text-fuchsia-800">
        Explore Resources →
      </button>
    </div>
  );
}