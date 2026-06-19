import "../styles/dashboard.css";

function DeleteModal({ taskTitle, onConfirm, onCancel }) {
  return (
    <div className="modal-overlay">
      <div className="delete-modal">

        <div className="delete-icon">
          🗑️
        </div>

        <h2>Delete Task</h2>

        <p>
          Are you sure you want to delete
        </p>

        <strong>"{taskTitle}"</strong>

        <p
          style={{
            marginTop: "15px",
            color: "#777",
          }}
        >
          This action cannot be undone.
        </p>

        <div className="delete-buttons">

          <button
            className="cancel-btn"
            onClick={onCancel}
          >
            Cancel
          </button>

          <button
            className="delete-btn"
            onClick={onConfirm}
          >
            Delete
          </button>

        </div>

      </div>
    </div>
  );
}

export default DeleteModal;