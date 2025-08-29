import type { JSX } from 'react';
import { HOUSE_COLORS, type HouseName } from '../../../types/types';
import styles from './CustomTooltip.module.scss';

interface CustomTooltipProps {
  active?: boolean;
  payload?: Array<{ value: number }>;
  label?: string;
}

export const CustomTooltip = ({
  active,
  payload,
  label,
}: CustomTooltipProps): JSX.Element | null => {
  if (!active || !payload?.length || !label) return null;

  const houseColor = HOUSE_COLORS[label as HouseName] || HOUSE_COLORS.Default;

  return (
    <div className={styles.customTooltip}>
      <p className={styles.tooltipLabel} style={{ color: houseColor }}>
        {`${label}: ${payload[0].value} students`}
      </p>
    </div>
  );
};
