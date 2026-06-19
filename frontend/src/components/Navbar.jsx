import { useState } from "react";
import { useNavigate } from "react-router-dom";

import LogoutModal from "./LogoutModal";

import "../styles/dashboard.css";

function Navbar() {

  const navigate = useNavigate();

  const [showLogoutModal, setShowLogoutModal] =
    useState(false);

  const user = JSON.parse(
    localStorage.getItem("user")
  );

  const logout = () => {

    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/");

  };

  return (
    <>
      <div className="navbar">

        <div
          className="logo"
          onClick={() => navigate("/dashboard")}
          style={{ cursor: "pointer" }}
        >
          ⚡ TaskFlow
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "15px",
          }}
        >

          <div
            className="profile"
            onClick={() => navigate("/profile")}
            style={{ cursor: "pointer" }}
            title="Profile"
          >
            {user?.name?.charAt(0).toUpperCase()}
          </div>

          <button
            className="logout-btn"
            onClick={() =>
              setShowLogoutModal(true)
            }
          >
            Logout
          </button>

        </div>

      </div>

      {showLogoutModal && (

        <LogoutModal

          onConfirm={logout}

          onCancel={() =>
            setShowLogoutModal(false)
          }

        />

      )}

    </>
  );
}

export default Navbar;