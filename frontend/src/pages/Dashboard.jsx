import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import TaskModal from "../components/TaskModal";
import TaskCard from "../components/TaskCard";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import StatsCards from "../components/StatsCards";

import API from "../services/api";

import "../styles/dashboard.css";

function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [activeTab, setActiveTab] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/");
      return;
    }

    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const res = await API.get("/tasks");

      setTasks(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  const filteredTasks = tasks
  .filter((task) => {
    if (activeTab === "pending")
      return task.status === "Pending";

    if (activeTab === "completed")
      return task.status === "Completed";

    return true;
  })
  .filter((task) =>
    task.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Navbar />

      <div className="dashboard-container">
        <Sidebar activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        tasks={tasks}
/>
      <div className="dashboard-content">
      <div className="dashboard-header">

  <div>

    <h1>
      Welcome back,
      {" "}
      {JSON.parse(localStorage.getItem("user"))?.name}
      👋
    </h1>

    <p className="dashboard-subtitle">
      Stay productive and complete your goals today.
    </p>

  </div>

  <button
    className="add-btn"
    onClick={() => setShowModal(true)}
  >
    + Add Task
  </button>

</div>

<div className="search-container">
  <input
    type="text"
    placeholder="🔍 Search tasks..."
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
    className="search-input"
  />
</div>

<StatsCards tasks={tasks} />

          <h2
  style={{
    marginTop: "30px",
    marginBottom: "15px",
  }}
>
  {activeTab === "all"
    ? "All Tasks"
    : activeTab === "pending"
    ? "Pending Tasks"
    : "Completed Tasks"}
</h2>

          <div className="tasks-grid">

  {filteredTasks.length === 0 ? (

    <div className="task-card">

      <h3>No Tasks Found</h3>

      <p>No tasks available in this category.</p>

    </div>

  ) : (

    filteredTasks.map((task) => (

      <TaskCard
        key={task._id}
        task={task}
        fetchTasks={fetchTasks}
      />

    ))

  )}

</div>
        </div>
      </div>

      {showModal && (
        <TaskModal
          closeModal={() => setShowModal(false)}
          fetchTasks={fetchTasks}
        />
      )}
    </>
  );
}

export default Dashboard;