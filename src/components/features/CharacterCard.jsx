import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { useStore } from '@/store/useStore';

const houseColors = {
  Stark: "bg-got-steel text-white border-got-steel/20",
  Lannister: "bg-got-crimson text-white border-got-crimson/20",
  Targaryen: "bg-got-dark text-got-gold border-got-gold/20",
  Baratheon: "bg-got-gold text-got-dark border-got-gold/20",
  Greyjoy: "bg-got-dark text-got-gold border-got-gold/20",
  Tyrell: "bg-green-800 text-yellow-100 border-yellow-100/20",
  Martell: "bg-orange-700 text-got-gold border-got-gold/20",
  'Night\'s Watch': "bg-black text-white border-white/20",
};

export function CharacterCard({ character }) {
  const { setSelectedCharacterId } = useStore();

  return (
    <Card
      className="group relative overflow-hidden transition-all duration-300 cursor-pointer border-ornate bg-white/40 backdrop-blur-sm animate-card-entry"
      onClick={() => setSelectedCharacterId(character.id)}
    >
      <div className='p-3'>
        <div className="aspect-[3/4] overflow-hidden rounded-sm relative shadow-inner">
          <img
            src={character.image}
            alt={character.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      </div>


      <CardContent className="p-3 pt-0 transform group-hover:-translate-y-1 transition-transform duration-300">
        <div className="flex flex-col gap-0.5">
          <Badge className={cn("mb-0.5 w-fit text-[9px] px-1.5 py-0 uppercase font-bold tracking-widest", houseColors[character.house] || "bg-got-bronze")}>
            {character.house}
          </Badge>
          <h3 className="text-lg font-bold text-got-crimson font-serif tracking-tight leading-tight">
            {character.name}
          </h3>
          <p className="text-[10px] text-got-bronze font-medium italic truncate max-w-[95%]">
            {character.title}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
