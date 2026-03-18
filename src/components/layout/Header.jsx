import React from 'react';

export function Header() {
  return (
    <header className="bg-sidebar border-b border-sidebar-border py-8 px-6 text-center">
      <h1 className="text-4xl font-bold text-gradient-gold tracking-wide uppercase font-serif">
        Chronicles of Ice and Fire
      </h1>
      <p className="mt-2 text-got-bronze text-sm italic font-medium">
        Valar Morghulis — All Men Must Die
      </p>
    </header>
  );
}
