import React, { useState } from 'react';
import { parse } from 'date-fns';
import styles from './DateFilter.module.scss';

interface DateFilterProps {
  onFilter: (startDate: Date | null, endDate: Date | null) => void;
}

const DateFilter: React.FC<DateFilterProps> = ({ onFilter }) => {
  const [startDate, setStartDate] = useState<string>('');
  const [endDate, setEndDate] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const parsedStartDate = startDate
      ? parse(startDate, 'yyyy-MM-dd', new Date())
      : null;
    const parsedEndDate = endDate
      ? parse(endDate, 'yyyy-MM-dd', new Date())
      : null;

    onFilter(parsedStartDate, parsedEndDate);
  };

  const handleClear = () => {
    setStartDate('');
    setEndDate('');
    onFilter(null, null);
  };

  return (
    <div className={styles.dateFilter}>
      <h2>Filter by Birth Date</h2>
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
};

export default DateFilter;
