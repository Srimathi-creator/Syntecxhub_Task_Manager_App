import { useState } from "react";
import API from "../services/api";
import "../styles/dashboard.css";

function EditTaskModal({
  task,
  closeModal,
  fetchTasks,
}) {
  const [formData, setFormData] = useState({
    title: task.title,
    description: task.description,
    priority: task.priority,
    dueDate: task.dueDate
      ? task.dueDate.split("T")[0]
      : "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.put(
        `/tasks/${task._id}`,
        formData
      );

      fetchTasks();

      closeModal();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal">

        <h2>Edit Task</h2>

        <form onSubmit={handleSubmit}>

          <label className="field-label">
            Task Title
          </label>

          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />

          <label className="field-label">
            Description
          </label>

          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
          />

          <label className="field-label">
            Priority
          </label>

          <select
            name="priority"
            value={formData.priority}
            onChange={handleChange}
          >
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
          </select>

          <label className="field-label">
            Due Date
          </label>

          <input
            type="date"
            name="dueDate"
            value={formData.dueDate}
            onChange={handleChange}
          />

          <div className="modal-buttons">

            <button
              type="submit"
              className="save-btn"
            >
              Save Changes
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

export default EditTaskModal;