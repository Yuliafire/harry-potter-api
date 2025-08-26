import React, { useState } from 'react';
import { parseISO } from 'date-fns';
import styles from './DateFilter.module.scss';

interface DateFilterProps {
  onFilter: (startDate: Date | null, endDate: Date | null) => void;
}

function DateFilter({ onFilter }: DateFilterProps) {
  const [startDate, setStartDate] = useState<string>('');
  const [endDate, setEndDate] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const parsedStartDate = startDate ? parseISO(startDate) : null;
    const parsedEndDate = endDate ? parseISO(endDate) : null;

    if (parsedStartDate && parsedEndDate && parsedStartDate > parsedEndDate) {
      setError('Start date must be before or equal to end date.');
      return;
    }

    setError(null);
    onFilter(parsedStartDate, parsedEndDate);
  };

  const handleClear = () => {
    setStartDate('');
    setEndDate('');
    setError(null);
    onFilter(null, null);
  };

  return (
    <div className={styles.dateFilter}>
      <h2>Filter by Birth Date</h2>
      {error && <p className={styles.error}>{error}</p>}
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.dateInputs}>
          <div className={styles.inputGroup}>
            <label htmlFor="startDate">From:</label>
            <input
              type="date"
              id="startDate"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="endDate">To:</label>
            <input
              type="date"
              id="endDate"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </div>
        </div>
        <div className={styles.buttonGroup}>
          <button type="submit" className={styles.applyButton}>
            Apply Filter
          </button>
          <button
            type="button"
            onClick={handleClear}
            className={styles.clearButton}
          >
            Clear Filter
          </button>
        </div>
      </form>
    </div>
  );
}

export default DateFilter;
