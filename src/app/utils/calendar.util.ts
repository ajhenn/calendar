const PALETTE = [
  '#F87AB5',
  '#6B98F5',
  '#4ADE80',
  '#B57CF5',
  '#F0B940',
  '#38C4E8',
  '#E8714D',
  '#2DD4B8'
];

// Store assigned colors
const nameColorMap = new Map<string, string>();
let colorIndex = 0;

export function colorForName(name: string): string {
  if (!name) return '#999999'; // fallback

  // If already assigned, return it
  if (nameColorMap.has(name)) {
    return nameColorMap.get(name)!;
  }

  const color = PALETTE[colorIndex % PALETTE.length];
  nameColorMap.set(name, color);

  colorIndex++;
  return color;
}


export function parseLocalDate(value: string | Date): Date {
  if (value instanceof Date) {
    return value;
  }
  const [year, month, day] = value.split('-').map(Number);
  return new Date(year, month - 1, day); // month is 0-indexed in JavaScript Date
}