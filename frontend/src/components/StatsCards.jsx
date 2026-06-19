import "./../styles/dashboard.css";

function StatsCards({ tasks }) {
  const total = tasks.length;

  const completed = tasks.filter(
    (task) => task.status === "Completed"
  ).length;

  const pending = tasks.filter(
    (task) => task.status === "Pending"
  ).length;

  const completionRate =
    total > 0
      ? Math.round((completed / total) * 100)
      : 0;

  return (
    <div className="stats-grid">
      <div className="stat-card">
        <h2>{total}</h2>
        <p>Total Tasks</p>
      </div>

      <div className="stat-card">
        <h2>{completed}</h2>
        <p>Completed</p>
      </div>

      <div className="stat-card">
        <h2>{pending}</h2>
        <p>Pending</p>
      </div>

      <div className="stat-card">
        <h2>{completionRate}%</h2>
        <p>Completion Rate</p>
      </div>
    </div>
  );
}

export default StatsCards;