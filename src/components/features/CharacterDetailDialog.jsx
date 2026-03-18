import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription
} from '@/components/ui/dialog';
import { useStore } from '@/store/useStore';
import { useCharacter } from '@/hooks/useCharacters';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';
import { Book, Users, Sword, Brain, Handshake, Crown } from 'lucide-react';

const statIcons = {
  combat: Sword,
  intelligence: Brain,
  diplomacy: Handshake,
  command: Crown
};

const statColors = {
  combat: "bg-got-crimson",
  intelligence: "bg-got-gold",
  diplomacy: "bg-blue-600",
  command: "bg-got-bronze"
};

export function CharacterDetailDialog() {
  const { selectedCharacterId, setSelectedCharacterId } = useStore();
  const { data: character, isLoading } = useCharacter(selectedCharacterId);

  return (
    <Dialog open={!!selectedCharacterId} onOpenChange={(open) => !open && setSelectedCharacterId(null)}>
      <DialogContent className="w-[98vw] md:w-[95vw] lg:w-[1200px] sm:max-w-none p-0 overflow-hidden border-ornate bg-parchment-texture">
        <DialogTitle className="sr-only">Character Details</DialogTitle>
        <DialogDescription className="sr-only">Detailed lore and statistics for the selected character.</DialogDescription>

        {isLoading ? (
          <div className="p-20 flex justify-center items-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-got-crimson"></div>
          </div>
        ) : character && (
          <div className="flex flex-col md:flex-row h-full max-h-[85vh]">
            {/* Sidebar / Image area */}
            <div className="w-full md:w-1/3 relative flex-shrink-0">
              <img
                src={character.image}
                alt={character.name}
                className="w-full h-full object-cover min-h-[300px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-got-dark/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <Badge className="bg-got-crimson text-white mb-2 uppercase font-bold tracking-widest border-none">
                  House {character.house}
                </Badge>
                <h2 className="text-3xl font-bold text-white font-serif drop-shadow-lg leading-tight uppercase">
                  {character.name}
                </h2>
                <p className="text-got-gold italic font-medium text-sm drop-shadow-md uppercase tracking-tight">
                  {character.title}
                </p>
              </div>
            </div>

            {/* Content area */}
            <ScrollArea className="flex-1 p-8">
              <div className="space-y-8">
                {/* Biography */}
                <section>
                  <div className="flex items-center gap-2 text-got-crimson mb-3">
                    <Book className="size-4" />
                    <h3 className="font-serif text-lg font-bold uppercase tracking-tight">The Chronicles</h3>
                  </div>
                  <p className="text-sm text-foreground/80 leading-relaxed font-medium first-letter:text-4xl first-letter:font-serif first-letter:mr-2 first-letter:float-left first-letter:text-got-crimson">
                    {character.bio}
                  </p>
                </section>

                <Separator className="bg-border/40" />

                {/* Statistics */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6">
                  {Object.entries(character.stats).map(([key, value]) => {
                    const Icon = statIcons[key];
                    return (
                      <div key={key} className="space-y-2">
                        <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-tight text-got-bronze">
                          <div className="flex items-center gap-1.5">
                            <Icon className="size-3.5 text-got-crimson" />
                            <span>{key}</span>
                          </div>
                          <span className="text-got-crimson">{value} / 100</span>
                        </div>
                        <Progress value={value} className={cn("h-1.5 bg-border/20", `[&>div]:${statColors[key]}`)} />
                      </div>
                    );
                  })}
                </section>

                <Separator className="bg-border/40" />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {/* Titles */}
                  <section>
                    <h3 className="font-serif text-sm font-bold uppercase tracking-tight text-got-crimson mb-4 border-l-2 border-got-crimson pl-3">
                      Current Titles
                    </h3>
                    <ul className="space-y-3">
                      {character.currentTitles.map((title, i) => (
                        <li key={i} className="flex gap-2 text-xs font-medium text-foreground/70">
                          <span className="text-got-gold">•</span>
                          {title}
                        </li>
                      ))}
                    </ul>
                  </section>

                  {/* Associates */}
                  <section>
                    <h3 className="font-serif text-sm font-bold uppercase tracking-tight text-got-crimson mb-4 border-l-2 border-got-crimson pl-3">
                      Known Associates
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {character.associates.map((associate, i) => (
                        <div key={i} className="bg-sidebar-accent/50 border border-sidebar-border/30 px-3 py-1.5 rounded text-[10px] font-bold text-got-gold uppercase tracking-tighter">
                          {associate}
                        </div>
                      ))}
                    </div>
                  </section>
                </div>

                <div className="pt-4 text-center">
                  <p className="text-[10px] text-got-bronze italic uppercase tracking-[0.2em]">
                    Valar Morghulis • Year 300 AC
                  </p>
                </div>
              </div>
            </ScrollArea>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
