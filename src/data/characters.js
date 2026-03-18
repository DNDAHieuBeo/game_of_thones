/** @type {Object.<string, import("../types/character").Character[]>} */
export const characters = [
  {
    id: "jon-snow",
    name: "Jon Snow",
    house: "Stark",
    title: "King in the North",
    image: "https://api.dicebear.com/9.x/avataaars/svg?seed=JonSnow&mouth=serious&top=longHair&hairColor=2c1b18",
    bio: "Born of ice and fire, the bastard son of Eddard Stark who rose to lead the Night's Watch. A man of honor caught between ancient vows and the destiny of a kingdom. His path led him beyond the Wall, where he faced the cold truths of the world, and eventually back to Winterfell to reclaim his family's legacy.",
    stats: {
      combat: 95,
      intelligence: 88,
      diplomacy: 82,
      command: 91
    },
    currentTitles: [
      "Lord Commander of the Night's Watch (former)",
      "The White Wolf",
      "Warden of the North"
    ],
    associates: ["Ghost (Direwolf)", "Samwell Tarly", "Arya Stark", "Sansa Stark"]
  },
  {
    id: "daenerys-targaryen",
    name: "Daenerys Targaryen",
    house: "Targaryen",
    title: "Mother of Dragons",
    image: "https://api.dicebear.com/9.x/avataaars/svg?seed=Daenerys&top=longHair&hairColor=fcf5e1",
    bio: "The last scion of House Targaryen, Daenerys rose from an exiled princess to a powerful queen. With her three dragons, she sought to reclaim the Iron Throne and break the chains of oppression throughout the known world.",
    stats: {
      combat: 70,
      intelligence: 92,
      diplomacy: 85,
      command: 98
    },
    currentTitles: [
      "Queen of the Andals and the First Men",
      "Protector of the Seven Kingdoms",
      "Khaleesi of the Great Grass Sea",
      "Breaker of Chains"
    ],
    associates: ["Drogon", "Jorah Mormont", "Missandei", "Tyrion Lannister"]
  },
  {
    id: "eddard-stark",
    name: "Eddard Stark",
    house: "Stark",
    title: "Hand of the King",
    image: "https://api.dicebear.com/9.x/avataaars/svg?seed=NedStark&facialHair=majestic&top=longHair&hairColor=4a3728",
    bio: "Lord of Winterfell and Warden of the North, Eddard 'Ned' Stark is a man of unwavering honor. His appointment as Hand of the King led him into the treacherous world of King's Landing politics.",
    stats: {
      combat: 88,
      intelligence: 75,
      diplomacy: 70,
      command: 95
    },
    currentTitles: [
      "Lord of Winterfell",
      "Warden of the North",
      "Hand of the King"
    ],
    associates: ["Catelyn Stark", "Robert Baratheon", "Jon Snow", "Arya Stark"]
  },
  {
    id: "cersei-lannister",
    name: "Cersei Lannister",
    house: "Lannister",
    title: "Queen Regent",
    image: "https://api.dicebear.com/9.x/avataaars/svg?seed=Cersei&top=longHair&hairColor=f5d142",
    bio: "Ambitious and fiercely protective of her children, Cersei Lannister will stop at nothing to maintain the power of House Lannister in the Seven Kingdoms.",
    stats: {
      combat: 30,
      intelligence: 95,
      diplomacy: 80,
      command: 85
    },
    currentTitles: [
      "Queen Regent",
      "Lady of Casterly Rock",
      "Protector of the Realm"
    ],
    associates: ["Jaime Lannister", "Tywin Lannister", "Qyburn", "The Mountain"]
  },
  {
    id: "tyrion-lannister",
    name: "Tyrion Lannister",
    house: "Lannister",
    title: "The Imp",
    image: "https://api.dicebear.com/9.x/avataaars/svg?seed=Tyrion&facialHair=beardMajestic&top=shortHair&hairColor=f5d142",
    bio: "Often underestimated because of his size, Tyrion uses his superior wit and intellect to survive and influence the power struggles of Westeros.",
    stats: {
      combat: 45,
      intelligence: 99,
      diplomacy: 96,
      command: 78
    },
    currentTitles: [
      "Hand of the King",
      "Master of Coin (former)",
      "Lord Protectors of the Vale"
    ],
    associates: ["Bronn", "Varys", "Jaime Lannister", "Daenerys Targaryen"]
  },
  {
    id: "arya-stark",
    name: "Arya Stark",
    house: "Stark",
    title: "No One",
    image: "https://api.dicebear.com/9.x/avataaars/svg?seed=Arya&top=shortHair&hairColor=2c1b18",
    bio: "A girl of fierce spirit, Arya Stark refused the traditional path of a lady to become a skilled assassin. Her journey across Westeros and Essos led her to become a shadow in the night.",
    stats: {
      combat: 94,
      intelligence: 85,
      diplomacy: 40,
      command: 60
    },
    currentTitles: [
      "Princess of Winterfell",
      "Faceless Man (acolyte)",
      "The Night's Slayer"
    ],
    associates: ["Nymeria (Direwolf)", "Syrio Forel", "The Hound", "Gendry"]
  }
];
