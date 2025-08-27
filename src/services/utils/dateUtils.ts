import { parse } from 'date-fns';

export const parseHarryPotterDate = (
  dateString: string | null
): Date | null => {
  if (!dateString || !dateString.includes('-')) return null;

  const parts = dateString.split('-');
  if (parts.length !== 3) return null;

  const [day, month, year] = parts.map((part) => part.padStart(2, '0'));
  const formattedDate = `${day}-${month}-${year}`;

  const parsedDate = parse(formattedDate, 'dd-MM-yyyy', new Date());
  return parsedDate instanceof Date && !isNaN(parsedDate.getTime())
    ? parsedDate
    : null;
};

export const isDateInRange = (
  date: Date | null,
  startDate: Date | null,
  endDate: Date | null
): boolean => {
  if (!date || !(date instanceof Date) || isNaN(date.getTime())) return false;
  if (!startDate && !endDate) return true;

  if (startDate && endDate) {
    const adjustedEndDate = new Date(endDate);
    adjustedEndDate.setHours(23, 59, 59, 999);
    return date >= startDate && date <= adjustedEndDate;
  }

  if (startDate) {
    return date >= startDate;
  }

  if (endDate) {
    const adjustedEndDate = new Date(endDate);
    adjustedEndDate.setHours(23, 59, 59, 999);
    return date <= adjustedEndDate;
  }

  return false;
};
