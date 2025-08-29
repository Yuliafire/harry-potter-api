import type { JSX } from 'react';
import { HOUSE_COLORS, type HouseName } from '../../../types/types';
import styles from './HouseCard.module.scss';

interface HouseCardProps {
  house: string;
  students: number;
}

export const HouseCard = ({ house, students }: HouseCardProps): JSX.Element => {
  const houseColor = HOUSE_COLORS[house as HouseName] || HOUSE_COLORS.Default;

  return (
    <div className={styles.houseCard} style={{ borderTopColor: houseColor }}>
      <h3 className={styles.houseName} style={{ color: houseColor }}>
        {house}
      </h3>
      <div className={styles.studentCount}>{students}</div>
      <p className={styles.studentLabel}>students</p>
    </div>
  );
};
