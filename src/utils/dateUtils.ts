import { parse, isWithinInterval, isValid } from 'date-fns';

export const parseHarryPotterDate = (
  dateString: string | null
): Date | null => {
  if (!dateString) return null;

  if (dateString.includes('-')) {
    const parts = dateString.split('-');
    if (parts.length === 3) {
      return parse(dateString, 'dd-MM-yyyy', new Date());
    }
  }

  const year = parseInt(dateString, 10);
  if (!isNaN(year)) {
    return new Date(year, 0, 1);
  }

  return null;
};

export const isDateInRange = (
  date: Date | null,
  startDate: Date | null,
  endDate: Date | null
): boolean => {
  if (!date) return false;
  if (!startDate && !endDate) return true;

  if (startDate && endDate) {
    return isWithinInterval(date, { start: startDate, end: endDate });
  }

  if (startDate && !endDate) {
    return date >= startDate;
  }

  if (!startDate && endDate) {
    return date <= endDate;
  }

  return false;
};
