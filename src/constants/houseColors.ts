// constants/houseColors.ts
export const HOUSE_COLORS = {
  Gryffindor: '#AE0001',
  Hufflepuff: '#ECB939',
  Ravenclaw: '#222F5B',
  Slytherin: '#2A623D',
  Default: '#8884d8',
} as const;

export type HouseName = keyof typeof HOUSE_COLORS;
