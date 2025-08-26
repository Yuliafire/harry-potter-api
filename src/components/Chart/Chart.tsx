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
import styles from './Chart.module.scss';

interface HouseData {
  house: string;
  students: number;
  fill: string;
}

interface HouseChartProps {
  data: Record<string, number>;
}

const RoundedBar = ({
  fill,
  x,
  y,
  width,
  height,
}: {
  fill: string;
  x: number;
  y: number;
  width: number;
  height: number;
}) => {
  const radius = Math.min(10, Math.min(width, height) / 2);

  return (
    <g>
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        fill={fill}
        rx={radius}
        ry={radius}
      />
    </g>
  );
};

function HouseChart({ data }: HouseChartProps) {
  const houseColors: Record<string, string> = {
    Gryffindor: '#AE0001',
    Hufflepuff: '#ECB939',
    Ravenclaw: '#222F5B',
    Slytherin: '#2A623D',
  };

  const chartData: HouseData[] = Object.entries(data).map(
    ([house, students]) => ({
      house,
      students,
      fill: houseColors[house] || '#8884d8',
    })
  );

  const CustomTooltip = ({
    active,
    payload,
    label,
  }: {
    active?: boolean;
    payload?: Array<{ value: number }>;
    label?: string;
  }) => {
    if (active && payload && payload.length && label && houseColors[label]) {
      return (
        <div className={styles.customTooltip}>
          <p
            className={styles.tooltipLabel}
            style={{ color: houseColors[label] || '#000' }}
          >
            {`${label}: ${payload[0].value} students`}
          </p>
        </div>
      );
    }
    return null;
  };

  const totalStudents = Object.values(data).reduce(
    (sum, count) => sum + count,
    0
  );

  return (
    <div className={styles.houseDashboard}>
      <h1 className={styles.dashboardTitle}>Harry Potter House Statistics</h1>

      <div className={styles.totalCard}>
        <h2 className={styles.totalTitle}>Total Students</h2>
        <p className={styles.totalNumber}>{totalStudents}</p>
      </div>

      <div className={styles.houseCards}>
        {chartData.map(({ house, students, fill }) => (
          <div
            key={house}
            className={styles.houseCard}
            style={{ borderTopColor: fill }}
          >
            <h3 className={styles.houseName} style={{ color: fill }}>
              {house}
            </h3>
            <div className={styles.studentCount}>{students}</div>
            <p className={styles.studentLabel}>students</p>
          </div>
        ))}
      </div>

      <div className={styles.chartContainer}>
        <h2 className={styles.chartTitle}>Students by House</h2>
        <ResponsiveContainer width="100%" height={350}>
          <BarChart
            data={chartData}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
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
    </div>
  );
}

export default HouseChart;
