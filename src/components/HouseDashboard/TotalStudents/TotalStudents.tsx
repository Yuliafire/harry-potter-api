import type { JSX } from 'react';
import styles from './TotalStudents.module.scss';

interface TotalStudentsCardProps {
  total: number;
}

export const TotalStudentsCard = ({
  total,
}: TotalStudentsCardProps): JSX.Element => (
  <div className={styles.totalCard}>
    <h2 className={styles.totalTitle}>Total Students</h2>
    <p className={styles.totalNumber}>{total}</p>
  </div>
);
