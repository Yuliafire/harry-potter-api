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

interface HouseChartProps {
  data: { house: string; students: number; fill: string }[];
}

export const HouseChart = ({ data }: HouseChartProps) => (
  <div className={styles.chartContainer}>
    <h2 className={styles.chartTitle}>Students by House</h2>

    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data} className="houseChart">
        <CartesianGrid />
        <XAxis dataKey="house" />
        <YAxis />
        <Tooltip content={<CustomTooltip />} />
        <Legend />
        <Bar
          dataKey="students"
          name="Number of Students"
          shape={<RoundedBar />}
        />
      </BarChart>
    </ResponsiveContainer>
  </div>
);
