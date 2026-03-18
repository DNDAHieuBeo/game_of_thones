/**
 * @typedef {Object} CharacterStats
 * @property {number} combat - 0-100
 * @property {number} intelligence - 0-100
 * @property {number} diplomacy - 0-100
 * @property {number} command - 0-100
 */

/**
 * @typedef {Object} Character
 * @property {string} id - Unique identifier
 * @property {string} name - Full name (e.g., "Jon Snow")
 * @property {string} title - Primary title or alias (e.g., "Lord Commander")
 * @property {string} house - House name (e.g., "Stark")
 * @property {string} image - URL to character portrait
 * @property {string} bio - Short description or chronicles text
 * @property {CharacterStats} stats - Combat, Intelligence, Diplomacy, Command ratings
 * @property {string[]} currentTitles - List of official titles held
 * @property {string[]} associates - List of known associates or companions
 */

export {};
