import { useState } from "react";
import API from "../services/api";
import "../styles/dashboard.css";

function TaskModal({ closeModal, fetchTasks }) {
  const [taskData, setTaskData] = useState({
    title: "",
    description: "",
    priority: "Medium",
    dueDate: "",
  });

  const handleChange = (e) => {
    setTaskData({
      ...taskData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.post("/tasks", taskData);

      fetchTasks();

      closeModal();
    } catch (error) {
      console.log(error);
      alert("Failed to create task");
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal">

        <h2>Add New Task</h2>

        <form onSubmit={handleSubmit}>
            <label className="field-label">
  Task Title
</label>

          <input
            type="text"
            name="title"
            placeholder="Task Title"
            onChange={handleChange}
            required
          />
<label className="field-label">
  Description
</label>
          <textarea
            name="description"
            placeholder="Description of the task"
            onChange={handleChange}
          />

          <label className="field-label">
  Priority
</label>

<select
  name="priority"
  value={taskData.priority}
  onChange={handleChange}
>
  <option value="High">High</option>
  <option value="Medium">Medium</option>
  <option value="Low">Low</option>
</select>
<label className="field-label">
  Due Date
</label>
          <input
            type="date"
            name="dueDate"
            onChange={handleChange}
          />

          <div className="modal-buttons">

            <button
              type="submit"
              className="save-btn"
            >
              Create Task
            </button>

            <button
              type="button"
              className="cancel-btn"
              onClick={closeModal}
            >
              Cancel
            </button>

          </div>

        </form>

      </div>
    </div>
  );
}

export default TaskModal;