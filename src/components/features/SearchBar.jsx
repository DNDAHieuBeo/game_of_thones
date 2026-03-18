import React from 'react';
import { useStore } from '@/store/useStore';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

export function SearchBar() {
  const { searchQuery, setSearchQuery } = useStore();

  return (
    <div className="relative max-w-md w-full">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-got-bronze pointer-events-none" />
      <Input
        type="text"
        placeholder="Search for a character or title..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="pl-10 bg-white/50 border-ornate focus-visible:ring-got-crimson placeholder:text-muted-foreground/60 font-serif"
      />
    </div>
  );
}
