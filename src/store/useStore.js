import { create } from 'zustand';

export const useStore = create((set) => ({
  searchQuery: '',
  selectedHouse: 'All',
  selectedCharacterId: null,

  setSearchQuery: (query) => set({ searchQuery: query }),
  setSelectedHouse: (house) => set({ selectedHouse: house }),
  setSelectedCharacterId: (id) => set({ selectedCharacterId: id }),
  
  resetFilters: () => set({ searchQuery: '', selectedHouse: 'All' }),
}));
