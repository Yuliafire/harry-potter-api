import type { Character } from '../../types/types';

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
    if (!character.hogwartsStudent || !houses.includes(character.house)) return;

    if (!startDate && !endDate) {
      houseCounts[character.house]++;
      return;
    }

    const dob = character.dateOfBirth ? new Date(character.dateOfBirth) : null;

    if (dob && isDateInRange(dob, startDate, endDate)) {
      houseCounts[character.house]++;
    }
  });

  return houseCounts;
};

const isDateInRange = (
  date: Date,
  startDate: Date | null,
  endDate: Date | null
): boolean => {
  const dateStr = date.toISOString().split('T')[0];

  if (startDate && endDate) {
    const startStr = startDate.toISOString().split('T')[0];
    const endStr = endDate.toISOString().split('T')[0];
    return dateStr >= startStr && dateStr <= endStr;
  }

  if (startDate) {
    const startStr = startDate.toISOString().split('T')[0];
    return dateStr >= startStr;
  }

  if (endDate) {
    const endStr = endDate.toISOString().split('T')[0];
    return dateStr <= endStr;
  }

  return true;
};
