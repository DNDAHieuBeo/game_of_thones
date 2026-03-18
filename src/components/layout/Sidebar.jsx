import React from 'react';
import { useStore } from '@/store/useStore';
import { cn } from '@/lib/utils';
import { useQuery } from '@tanstack/react-query';
import { 
  Castle, 
  Map as MapIcon, 
  Book, 
  Sparkles,
  Globe
} from 'lucide-react';

const navItems = [
  { id: 'Great Houses', label: 'Great Houses', icon: Castle },
  { id: 'Ancient Lore', label: 'Ancient Lore', icon: Book },
  { id: 'Prophecies', label: 'Prophecies', icon: Sparkles },
];

export function Sidebar() {
  const { selectedHouse, setSelectedHouse } = useStore();

  const { data: continents } = useQuery({
    queryKey: ['continents'],
    queryFn: async () => {
      const response = await fetch('https://thronesapi.com/api/v2/Continents');
      return response.json();
    }
  });

  return (
    <aside className="w-64 bg-sidebar border-r border-sidebar-border flex flex-col h-full">
      <div className="p-6">
        <h2 className="text-got-gold font-serif text-lg mb-6 tracking-tight uppercase border-b border-sidebar-border pb-2">
          The Realms
        </h2>
        
        <div className="space-y-6">
          <section>
            <p className="text-[10px] uppercase tracking-widest text-got-bronze font-bold mb-3">Navigation</p>
            <nav className="space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setSelectedHouse(item.id === 'Great Houses' ? 'All' : item.id)}
                  className={cn(
                    "w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md transition-colors",
                    "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                    selectedHouse === (item.id === 'Great Houses' ? 'All' : item.id)
                      ? "bg-sidebar-accent text-sidebar-primary"
                      : "text-sidebar-foreground/70"
                  )}
                >
                  <item.icon className="size-4" />
                  {item.label}
                </button>
              ))}
            </nav>
          </section>

          <section>
            <p className="text-[10px] uppercase tracking-widest text-got-bronze font-bold mb-3">Continents</p>
            <div className="space-y-1">
              {continents?.map((continent) => (
                <div 
                  key={continent.id}
                  className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-sidebar-foreground/60"
                >
                  <Globe className="size-4 text-got-gold/50" />
                  {continent.name}
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
      
      <div className="mt-auto p-6 border-t border-sidebar-border">
        <div className="bg-sidebar-accent/50 p-3 rounded-lg border border-sidebar-border">
          <p className="text-[10px] uppercase tracking-widest text-got-bronze font-bold mb-1">Current House</p>
          <p className="text-sidebar-foreground font-serif text-sm">{selectedHouse === 'All' ? 'Westeros' : `House ${selectedHouse}`}</p>
        </div>
      </div>
    </aside>
  );
}
