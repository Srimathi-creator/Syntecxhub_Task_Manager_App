import API from "../services/api";
import { useState } from "react";
import EditTaskModal from "./EditTaskModal";
import DeleteModal from "./DeleteModal";

function TaskCard({ task, fetchTasks }) {
  const [showEdit, setShowEdit] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  
  const markCompleted = async () => {
    try {
      await API.put(`/tasks/${task._id}`, {
        status: "Completed",
      });

      fetchTasks();
    } catch (error) {
      console.log(error);
    }
  };

const confirmDelete = async () => {
  try {
    await API.delete(`/tasks/${task._id}`);

    fetchTasks();

    setShowDeleteModal(false);

  } catch (error) {
    console.log(error);
  }
};

  return (
    <>
      <div className="task-card">
        <h3>{task.title}</h3>

        <p>{task.description}</p>
        <p className="due-date">
    📅 Due:
    {" "}
    {task.dueDate
      ? new Date(task.dueDate).toLocaleDateString()
      : "Not Set"}
</p>

        <p>
          Priority: <strong>{task.priority}</strong>
        </p>

        <p>
          Status: <strong>{task.status}</strong>
        </p>

        <div className="task-actions">

          <button
            className="edit-btn"
            onClick={() => setShowEdit(true)}
          >
            Edit
          </button>

          {task.status === "Pending" && (
            <button
              className="complete-btn"
              onClick={markCompleted}
            >
              Complete
            </button>
          )}

          <button
  className="delete-btn"
  onClick={() =>
    setShowDeleteModal(true)
  }
>
  Delete
</button>

        </div>
      </div>

      {showEdit && (
        <EditTaskModal
          task={task}
          closeModal={() => setShowEdit(false)}
          fetchTasks={fetchTasks}
        />
      )}
      {showDeleteModal && (
  <DeleteModal
    taskTitle={task.title}
    onConfirm={confirmDelete}
    onCancel={() =>
      setShowDeleteModal(false)
    }
  />
)}
    </>
  );
}

export default TaskCard;