import { useEffect, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import API from "../services/api";
import Navbar from "../components/Navbar";
import "../styles/dashboard.css";

function Profile() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
  name: "",
  email: "",
});
const [passwordData, setPasswordData] = useState({
  currentPassword: "",
  newPassword: "",
  confirmPassword: "",
});
const [showPassword, setShowPassword] = useState({
  current: false,
  new: false,
  confirm: false,
});
const [stats, setStats] = useState({
  total: 0,
  completed: 0,
  pending: 0,
  completion: 0,
});
const [recentTasks, setRecentTasks] = useState([]);


useEffect(() => {
  fetchProfile();
  fetchTaskStats();
  fetchRecentTasks();
}, []);

const fetchProfile = async () => {
  try {
    const res = await API.get("/auth/profile");

    setUser({
      name: res.data.name,
      email: res.data.email,
    });
  } catch (error) {
    console.log(error);
  }
};
const fetchTaskStats = async () => {
  try {
    const res = await API.get("/tasks");

    const tasks = res.data;

    const total = tasks.length;

    const completed = tasks.filter(
      (task) => task.status === "Completed"
    ).length;

    const pending = tasks.filter(
      (task) => task.status === "Pending"
    ).length;

    const completion =
      total > 0
        ? Math.round((completed / total) * 100)
        : 0;

    setStats({
      total,
      completed,
      pending,
      completion,
    });

  } catch (error) {
    console.log(error);
  }
};
const fetchRecentTasks = async () => {
  try {
    const res = await API.get("/tasks");

    const latestTasks = res.data
      .sort(
        (a, b) =>
          new Date(b.createdAt) -
          new Date(a.createdAt)
      )
      .slice(0, 5);

    setRecentTasks(latestTasks);
  } catch (error) {
    console.log(error);
  }
};

const handleChange = (e) => {
  setUser({
    ...user,
    [e.target.name]: e.target.value,
  });
};

const updateProfile = async () => {
  try {
    const res = await API.put(
      "/auth/profile",
      user
    );

    localStorage.setItem(
      "user",
      JSON.stringify(res.data.user)
    );

    alert("Profile Updated Successfully!");

    fetchProfile();
  } catch (error) {
    alert(
      error.response?.data?.message ||
      "Failed to Update"
    );
  }
};
const handlePasswordChange = (e) => {
  setPasswordData({
    ...passwordData,
    [e.target.name]: e.target.value,
  });
};

const changePassword = async () => {
  if (
    passwordData.newPassword !==
    passwordData.confirmPassword
  ) {
    alert("New passwords do not match!");
    return;
  }

  try {
    const res = await API.put(
      "/auth/change-password",
      {
        currentPassword: passwordData.currentPassword,
        newPassword: passwordData.newPassword,
      }
    );

    alert(res.data.message);

    setPasswordData({
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    });
  } catch (error) {
    alert(
      error.response?.data?.message ||
      "Failed to change password"
    );
  }
};

  return (
    <>
      <Navbar />

      <div className="profile-page">

        {/* Left Section */}
        <div className="profile-main">

          <button
            className="back-btn"
            onClick={() => navigate("/dashboard")}
          >
            <b>← Back to Dashboard</b>
          </button>

          <div className="profile-header">

            <div className="profile-avatar-large">
              {user.name?.charAt(0).toUpperCase()}
            </div>

            <div>
              <h1>Account Settings</h1>
              <p>Manage your profile and security settings</p>
            </div>

          </div>

          <div className="profile-grid">

            {/* Personal Info */}
            <div className="profile-card">

              <h3>👤 Personal Information</h3><br></br>

              <label><b>Name</b></label>

              <input
  type="text"
  name="name"
  value={user.name}
  onChange={handleChange}
/>
<br></br>

              <label><b>Email</b></label>

              <input
  type="email"
  name="email"
  value={user.email}
  onChange={handleChange}
/>

              <button
  className="save-btn"
  onClick={updateProfile}
>
  Save Changes
</button>

            </div>

            {/* Security */}
            <div className="profile-card">

              <h3>🔒 Security</h3><br></br>

              <div className="password-group">

  <input
    type={showPassword.current ? "text" : "password"}
    name="currentPassword"
    placeholder="Current Password"
    value={passwordData.currentPassword}
    onChange={handlePasswordChange}
  />

  <span
    className="password-toggle"
    onClick={() =>
      setShowPassword({
        ...showPassword,
        current: !showPassword.current,
      })
    }
  >
    {showPassword.current ? (
      <FaEyeSlash />
    ) : (
      <FaEye />
    )}
  </span>

</div>
<div className="password-group">

  <input
    type={showPassword.new ? "text" : "password"}
    name="newPassword"
    placeholder="New Password"
    value={passwordData.newPassword}
    onChange={handlePasswordChange}
  />

  <span
    className="password-toggle"
    onClick={() =>
      setShowPassword({
        ...showPassword,
        new: !showPassword.new,
      })
    }
  >
    {showPassword.new ? (
      <FaEyeSlash />
    ) : (
      <FaEye />
    )}
  </span>

</div>

<div className="password-group">

  <input
    type={showPassword.confirm ? "text" : "password"}
    name="confirmPassword"
    placeholder="Confirm Password"
    value={passwordData.confirmPassword}
    onChange={handlePasswordChange}
  />

  <span
    className="password-toggle"
    onClick={() =>
      setShowPassword({
        ...showPassword,
        confirm: !showPassword.confirm,
      })
    }
  >
    {showPassword.confirm ? (
      <FaEyeSlash />
    ) : (
      <FaEye />
    )}
  </span>

</div>

             <button
  className="save-btn"
  onClick={changePassword}
>
  Change Password
</button>

            </div>

          </div>

        </div>

        {/* Right Section */}
        <div className="profile-sidebar">

          <div className="profile-card">

            <h3>📊 Task Statistics</h3>

            <div className="stats-mini">
              <div>
                <h2>{stats.total}</h2>
                <p>Total</p>
              </div>

              <div>
                <h2>{stats.completed}</h2>
                <p>Completed</p>
              </div>
            </div>

            <div className="stats-mini">
              <div>
                <h2>{stats.pending}</h2>
                <p>Pending</p>
              </div>

              <div>
                <h2>{stats.completion}%</h2>
                <p>Completion</p>
              </div>
            </div>

            <h4 style={{ marginTop: "20px" }}>
              Task Progress
            </h4>

            <div className="progress-bar">
              <div className="progress-fill" style={{width: `${stats.completion}%`,}}>
              </div>
            </div>

          </div>

          <div className="profile-card">

            <h3>🕒 Recent Activity</h3>

{recentTasks.length === 0 ? (
  <p>No recent activity.</p>
) : (
  recentTasks.map((task) => (
    <div
      key={task._id}
      className="recent-task"
    >
      <div>
        <strong>{task.title}</strong>

        <p
          style={{
            fontSize: "13px",
            color: "#777",
          }}
        >
          {task.status}
        </p>
      </div>

      <span>
        {task.status === "Completed"
          ? "🟢"
          : "🟠"}
      </span>
    </div>
  ))
)}

          </div>

        </div>

      </div>
    </>
  );
}

export default Profile;