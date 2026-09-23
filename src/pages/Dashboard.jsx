import DashboardCard from "../components/Dashboard/DashboardCard";
import classes from "./Dashboard.module.css";

const dashboardData = [
  {
    id: 1,
    title: "Total Projects",
    value: 12,
  },
  {
    id: 2,
    title: "Tasks",
    value: 38,
  },
  {
    id: 3,
    title: "Completed",
    value: 25,
  },
  {
    id: 4,
    title: "Team Members",
    value: 8,
  },
  {
    id: 5,
    title: "Overdue",
    value: 4,
  },
];

function Dashboard() {
  return (
    <>
      <h1>Dashboard</h1>

      <div className={classes.grid}>
        {dashboardData.map((item) => (
          <DashboardCard
            key={item.id}
            title={item.title}
            value={item.value}
          />
        ))}
      </div>
    </>
  );
}

export default Dashboard;