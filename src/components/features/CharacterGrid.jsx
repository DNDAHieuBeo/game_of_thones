import React from 'react';
import { useCharacters } from '@/hooks/useCharacters';
import { useStore } from '@/store/useStore';
import { CharacterCard } from './CharacterCard';
import { CharacterDetailDialog } from './CharacterDetailDialog';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

export function CharacterGrid() {
  const { searchQuery, selectedHouse, setSelectedHouse } = useStore();
  const { data: allCharacters, isLoading, error } = useCharacters();

  // Dynamically extract unique houses from all characters
  const dynamicHouses = React.useMemo(() => {
    if (!allCharacters) return ['All'];
    const uniqueHouses = new Set(allCharacters.map(c => c.house).filter(Boolean));
    return ['All', ...Array.from(uniqueHouses).sort()];
  }, [allCharacters]);

  // Filter the characters locally for the grid display based on state
  // (though useCharacters handles filtering, we might want to do it here if we want smoother transitions)
  const { data: characters } = useCharacters({ search: searchQuery, house: selectedHouse });

  return (
    <div className="space-y-8 flex-1 flex flex-col pb-8">
      {/* House House Filter Tabs */}
      <div className="flex flex-wrap gap-2 pb-2 border-b border-border/40">
        {dynamicHouses.map((house) => (
          <button
            key={house}
            onClick={() => setSelectedHouse(house)}
            className={cn(
              "px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest rounded-full border transition-all duration-200 whitespace-nowrap",
              selectedHouse === house
                ? "bg-got-crimson text-white border-got-crimson shadow-md scale-105"
                : "bg-white/50 text-got-bronze border-border/60 hover:border-got-bronze/40 hover:bg-white"
            )}
          >
            {house}
          </button>
        ))}
      </div>

      {/* Grid Status */}
      {isLoading && (
        <div className="flex-1 flex justify-center items-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-got-crimson"></div>
        </div>
      )}

      {error && (
        <div className="text-center py-20">
          <p className="text-got-crimson font-serif text-lg">Failed to retrieve records from the Citadel.</p>
          <p className="text-muted-foreground text-sm italic">Error: {error.message}</p>
        </div>
      )}

      {!isLoading && !error && characters?.length === 0 && (
        <div className="text-center py-20 bg-white/30 backdrop-blur-sm rounded-xl border border-dashed border-border/60">
          <p className="text-got-bronze font-serif text-xl italic uppercase tracking-wider">No souls found in the archives</p>
          <p className="text-muted-foreground text-sm mt-2">Try searching for a different name or house...</p>
        </div>
      )}

      {/* Characters Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {characters?.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>

      <CharacterDetailDialog />
    </div>
  );
}
