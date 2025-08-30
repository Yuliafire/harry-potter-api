export interface Character {
  id: string;
  name: string;
  alternate_names: string[];
  species: string;
  gender: string;
  house: string;
  dateOfBirth: string | null;
  yearOfBirth: number | null;
  wizard: boolean;
  ancestry: string;
  eyeColour: string;
  hairColour: string;
  wand: {
    wood: string;
    core: string;
    length: number | null;
  };
  patronus: string;
  hogwartsStudent: boolean;
  hogwartsStaff: boolean;
  actor: string;
  alternate_actors: string[];
  alive: boolean;
  image: string;
}

export const HOUSE_COLORS = {
  Gryffindor: '#AE0001',
  Hufflepuff: '#ECB939',
  Ravenclaw: '#222F5B',
  Slytherin: '#2A623D',
  Default: '#8884d8',
} as const;

export type HouseName = keyof typeof HOUSE_COLORS;
