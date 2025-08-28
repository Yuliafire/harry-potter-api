import React from 'react';
import { useForm } from 'react-hook-form';
import styles from './DateFilter.module.scss';

interface DateFilterProps {
  onFilter: (startDate: Date | null, endDate: Date | null) => void;
}

interface FormData {
  startDate: string;
  endDate: string;
}

function DateFilter({ onFilter }: DateFilterProps) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    defaultValues: { startDate: '', endDate: '' },
    mode: 'onChange',
  });

  const watchEndDate = watch('endDate');

  const onSubmit = (data: FormData) => {
    const parsedStartDate = data.startDate ? new Date(data.startDate) : null;
    const parsedEndDate = data.endDate ? new Date(data.endDate) : null;
    onFilter(parsedStartDate, parsedEndDate);
  };

  const handleClear = () => {
    reset();
    onFilter(null, null);
  };

  return (
    <div className={styles.dateFilter}>
      <h2>Filter by Birth Date</h2>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <div className={styles.dateInputs}>
          <div className={styles.inputGroup}>
            <label htmlFor="startDate">From:</label>
            <input
              type="date"
              id="startDate"
              {...register('startDate', {
                required: 'Start date is required',
                validate: (value) => {
                  const start = value ? new Date(value) : null;
                  const end = watchEndDate ? new Date(watchEndDate) : null;
                  if (start && end && start > end) {
                    return 'Start date must be before or equal to end date.';
                  }
                  return true;
                },
              })}
              aria-describedby={
                errors.startDate ? 'startDate-error' : undefined
              }
            />
            {errors.startDate && (
              <p id="startDate-error" className={styles.error}>
                {errors.startDate.message}
              </p>
            )}
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="endDate">To:</label>
            <input
              type="date"
              id="endDate"
              {...register('endDate', { required: 'End date is required' })}
              aria-describedby={errors.endDate ? 'endDate-error' : undefined}
            />
            {errors.endDate && (
              <p id="endDate-error" className={styles.error}>
                {errors.endDate.message}
              </p>
            )}
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
