import React from 'react';

export function Footer() {
  return (
    <footer className="mt-auto py-8 px-6 bg-parchment-texture border-t border-border text-center">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-got-bronze font-medium">
        <p>© Maester's Archive, Citadel 298 AC</p>
        <div className="flex gap-6 uppercase tracking-widest">
          <a href="#" className="hover:text-got-crimson transition-colors">Raven Network</a>
          <a href="#" className="hover:text-got-crimson transition-colors">The Wall</a>
          <a href="#" className="hover:text-got-crimson transition-colors">Iron Bank</a>
        </div>
      </div>
    </footer>
  );
}
