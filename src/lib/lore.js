/**
 * Deterministic Lore Generator
 * Since ThronesAPI provides limited data, this utility generates consistent
 * bios, stats, and metadata based on a character's unique identity.
 */

const BIOS = [
  "A figure of immense influence in the Seven Kingdoms, known for a complex legacy of honor and ambition. Their journey through the snows of the North and the heat of the South is written in blood and ice.",
  "Born into a world of shifting allegiances, this individual has navigated the treacherous waters of King's Landing with a mixture of cunning and resilience that few can match.",
  "A warrior of legend, whose name is whispered with both fear and respect across the Narrow Sea. They carry the weight of their house's ancient history on their shoulders.",
  "Known for a sharp wit and a sharper mind, this person has often found themselves at the center of the realm's most pivotal moments, proving that knowledge is more powerful than any sword.",
  "A survivor of the highest order, they have endured the greatest tragedies of the Long Night and the War of the Five Kings, emerging with a reinforced sense of duty to their kin.",
  "Hidden within the shadows of the Great Game, this individual's true motives remain a mystery even to their closest associates. A master of whispers and subtle maneuvers."
];

const TITLES = [
  "Protector of the Realm",
  "Warden of the Marches",
  "Lord of the High Seas",
  "Keeper of the Ancient Keys",
  "Master of the Hidden Valley",
  "Voice of the Citadel",
  "Shadow of the Iron Throne"
];

const ASSOCIATES = [
  "Ser Davos Seaworth",
  "Lady Melisandre",
  "Varys",
  "Petyr Baelish",
  "Bronn of the Blackwater",
  "Tormund Giantsbane",
  "Brienne of Tarth",
  "Podrick Payne"
];

/**
 * Generates a deterministic integer from a string (hash)
 */
const getSeed = (str) => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  return Math.abs(hash);
};

export const getEnrichedLore = (character) => {
  const seed = getSeed(character.fullName || character.name || "Default");
  
  // Deterministic Bio
  const bio = BIOS[seed % BIOS.length];
  
  // Deterministic Stats
  const stats = {
    combat: 40 + (seed % 56),      // 40-95
    intelligence: 50 + (seed % 46), // 50-95
    diplomacy: 30 + (seed % 66),    // 30-95
    command: 45 + (seed % 51)       // 45-95
  };
  
  // Deterministic Extra Titles & Associates
  const currentTitles = [
    character.title,
    TITLES[seed % TITLES.length]
  ].filter(t => t && t !== "Unknown");

  const associates = [
    ASSOCIATES[seed % ASSOCIATES.length],
    ASSOCIATES[(seed + 1) % ASSOCIATES.length]
  ];

  return { bio, stats, currentTitles, associates };
};
