const PALETTE = [
'#E8714D',
'#6B98F5',
'#4ADE80',
'#B57CF5',
'#F0B940',
'#38C4E8',
'#F87AB5',
'#2DD4B8'
];

export function colorForName(name: string) {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  return PALETTE[Math.abs(hash) % PALETTE.length];
}