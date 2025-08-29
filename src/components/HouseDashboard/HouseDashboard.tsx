import { HouseCard } from './HouseCard/HouseCard';
import { TotalStudentsCard } from './TotalStudents/TotalStudents';
import { HouseChart } from './HouseChart/HouseChart';
import {
  transformHouseData,
  calculateTotalStudents,
} from '../../services/utils/transfromHouseData';
import styles from './HouseDashboard.module.scss';

interface HouseDashboardProps {
  data: Record<string, number>;
}

export const HouseDashboard = ({ data }: HouseDashboardProps) => {
  const chartData = transformHouseData(data);
  const totalStudents = calculateTotalStudents(data);

  return (
    <div className={styles.houseDashboard}>
      <h1 className={styles.dashboardTitle}>Harry Potter House Statistics</h1>

      <TotalStudentsCard total={totalStudents} />

      <div className={styles.houseCards}>
        {chartData.map(({ house, students }) => (
          <HouseCard key={house} house={house} students={students} />
        ))}
      </div>

      <HouseChart data={chartData} />
    </div>
  );
};

export default HouseDashboard;
