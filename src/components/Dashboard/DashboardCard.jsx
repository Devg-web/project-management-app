import classes from "./DashboardCard.module.css";
function DashboardCard({ title, value }) {
  return (
    <div className={classes.card}>
      <h3>{title}</h3>
      <p>{value}</p>
    </div>
  );
}

export default DashboardCard;