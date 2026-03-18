import { useQuery } from '@tanstack/react-query';
import { getEnrichedLore } from '../lib/lore';

const API_BASE = 'https://thronesapi.com/api/v2';

const mapCharacter = (apiChar) => {
  const enriched = getEnrichedLore(apiChar);
  
  return {
    id: apiChar.id,
    name: apiChar.fullName,
    house: apiChar.family.replace('House ', ''), // Clean up house names
    title: apiChar.title,
    image: apiChar.imageUrl,
    ...enriched
  };
};

// Simulating API fetch
const fetchCharacters = async () => {
  const response = await fetch(`${API_BASE}/Characters`);
  if (!response.ok) throw new Error('Failed to fetch character records from the Citadel.');
  const data = await response.json();
  return data.map(mapCharacter);
};

export const useCharacters = (filters = { search: '', house: 'All' }) => {
  return useQuery({
    queryKey: ['characters'],
    queryFn: fetchCharacters,
    select: (data) => {
      return data.filter(char => {
        const matchesSearch = char.name.toLowerCase().includes(filters.search.toLowerCase()) ||
                            char.title.toLowerCase().includes(filters.search.toLowerCase());
        const matchesHouse = filters.house === 'All' || 
                           char.house.toLowerCase().includes(filters.house.toLowerCase()) ||
                           filters.house.toLowerCase().includes(char.house.toLowerCase());
        return matchesSearch && matchesHouse;
      });
    }
  });
};

export const useCharacter = (id) => {
  return useQuery({
    queryKey: ['character', id],
    queryFn: async () => {
      const response = await fetch(`${API_BASE}/Characters/${id}`);
      if (!response.ok) throw new Error('Character record not found in the archives.');
      const data = await response.json();
      return mapCharacter(data);
    },
    enabled: id !== null && id !== undefined
  });
};
