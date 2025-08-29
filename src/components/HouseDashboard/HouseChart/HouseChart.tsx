import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { RoundedBar } from '../RoundedBar/RoundedBar';
import { CustomTooltip } from '../CustomTooltip/CustomTooltip';
import styles from './HouseChart.module.scss';
import type { JSX } from 'react';

interface HouseChartProps {
  data: { house: string; students: number; fill: string }[];
}

export const HouseChart = ({ data }: HouseChartProps): JSX.Element => (
  <div className={styles.chartContainer}>
    <h2 className={styles.chartTitle}>Students by House</h2>
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis dataKey="house" />
        <YAxis />
        <Tooltip content={<CustomTooltip />} />
        <Legend />
        <Bar
          dataKey="students"
          name="Number of Students"
          shape={<RoundedBar />}
          animationDuration={1500}
          animationEasing="ease-in-out"
        />
      </BarChart>
    </ResponsiveContainer>
  </div>
);
