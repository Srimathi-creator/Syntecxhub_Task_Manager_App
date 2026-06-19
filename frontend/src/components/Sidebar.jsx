import "../styles/dashboard.css";

function Sidebar({
  activeTab,
  setActiveTab,
  tasks,
}) {
  const user = JSON.parse(
    localStorage.getItem("user")
  );

  const pendingCount = tasks.filter(
    (task) => task.status === "Pending"
  ).length;

  const completedCount = tasks.filter(
    (task) => task.status === "Completed"
  ).length;

  return (
    <div className="sidebar">

      <div className="welcome-card">
        <h3>
          Hey, {user?.name}
        </h3>

        <p>
          Let's crush some tasks!
        </p>
      </div>

      <ul className="menu-list">

        <li
          className={
            activeTab === "all"
              ? "active-menu"
              : ""
          }
          onClick={() =>
            setActiveTab("all")
          }
        >
          <span>🏠 Dashboard</span>
        </li>

        <li
          className={
            activeTab === "pending"
              ? "active-menu"
              : ""
          }
          onClick={() =>
            setActiveTab("pending")
          }
        >
          <span>📋 Pending Tasks</span>

          <div className="count-badge">
            {pendingCount}
          </div>
        </li>

        <li
          className={
            activeTab === "completed"
              ? "active-menu"
              : ""
          }
          onClick={() =>
            setActiveTab("completed")
          }
        >
          <span>✅ Completed Tasks</span>

          <div className="count-badge">
            {completedCount}
          </div>
        </li>

      </ul>

    </div>
  );
}

export default Sidebar;