import React from 'react';
import { SearchBar } from '@/components/features/SearchBar';
import { CharacterGrid } from '@/components/features/CharacterGrid';

export default function HomePage() {
  return (
    <div className="space-y-10">
      {/* Page Header / Hero section */}
      <section className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-2">
          <h2 className="text-got-crimson font-serif text-3xl font-bold uppercase tracking-tight">
            The Archival Records
          </h2>
          <p className="text-muted-foreground text-sm italic font-medium">
            Sifting through the chronicles of the Seven Kingdoms.
          </p>
        </div>
        <SearchBar />
      </section>

      {/* Main Content: Characters Grid */}
      <CharacterGrid />
    </div>
  );
}
