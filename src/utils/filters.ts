import type { Character } from '../types/types';
import { parseHarryPotterDate, isDateInRange } from './dateUtils';

export const filterStudentsByHouseAndDate = (
  characters: Character[],
  startDate: Date | null,
  endDate: Date | null
): Record<string, number> => {
  const houses = ['Gryffindor', 'Hufflepuff', 'Ravenclaw', 'Slytherin'];
  const houseCounts: Record<string, number> = {
    Gryffindor: 0,
    Hufflepuff: 0,
    Ravenclaw: 0,
    Slytherin: 0,
  };

  characters.forEach((character) => {
    if (!character.hogwartsStudent) return;
    if (!houses.includes(character.house)) return;

    const dob = parseHarryPotterDate(character.dateOfBirth);
    if (isDateInRange(dob, startDate, endDate)) {
      houseCounts[character.house]++;
    }
  });

  return houseCounts;
};
