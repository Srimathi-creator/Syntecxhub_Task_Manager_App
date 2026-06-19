import "../styles/dashboard.css";

function LogoutModal({ onConfirm, onCancel }) {
  return (
    <div className="modal-overlay">
      <div className="delete-modal">

        <div className="delete-icon">
          🚪
        </div>

        <h2>Logout</h2>

        <p>
          Are you sure you want to logout?
        </p>

        <p
          style={{
            marginTop: "10px",
            color: "#666",
          }}
        >
          You will need to login again to continue.
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
            Logout
          </button>

        </div>

      </div>
    </div>
  );
}

export default LogoutModal;