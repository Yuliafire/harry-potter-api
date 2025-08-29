import { HOUSE_COLORS, type HouseName } from '../../types/types';

export interface HouseChartData {
  house: string;
  students: number;
  fill: string;
}

export const transformHouseData = (
  data: Record<string, number>
): HouseChartData[] => {
  return Object.entries(data).map(([house, students]) => ({
    house,
    students,
    fill: HOUSE_COLORS[house as HouseName] || HOUSE_COLORS.Default,
  }));
};

export const calculateTotalStudents = (
  data: Record<string, number>
): number => {
  return Object.values(data).reduce((sum, count) => sum + count, 0);
};
