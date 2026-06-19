# 🚀 TaskFlow - Full Stack Task Manager Application

TaskFlow is a modern full-stack Task Management application built using the **MERN Stack**. It enables users to securely manage their daily tasks with authentication, profile management, task filtering, search, and real-time dashboard statistics.

Designed with a clean and responsive user interface, TaskFlow demonstrates complete CRUD operations, JWT authentication, MongoDB integration, and modern React development practices.

---

## 📌 Features

### 🔐 Authentication

* User Registration
* Secure Login
* JWT Authentication
* Protected Routes
* Logout Confirmation Modal
* Password Encryption using bcrypt

### 👤 Profile Management

* View Profile
* Update Name & Email
* Change Password
* Show/Hide Password
* Task Statistics
* Recent Activity Panel

### ✅ Task Management

* Create Tasks
* View All Tasks
* Edit Tasks
* Delete Tasks
* Complete Tasks
* Pending Tasks
* Search Tasks
* Filter by Status

### 📊 Dashboard

* Welcome Dashboard
* Total Tasks
* Completed Tasks
* Pending Tasks
* Completion Percentage
* Responsive Task Cards

### 🎨 User Interface

* Modern Responsive Design
* Gradient Buttons
* Interactive Sidebar
* Search Bar
* Confirmation Modals
* Hover Effects
* Clean Card-Based Layout

---

# 🛠 Tech Stack

## Frontend

* React.js
* React Router DOM
* Axios
* React Icons
* CSS3

## Backend

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* JWT Authentication
* bcryptjs
* dotenv

---

# 📁 Project Structure

```
TaskFlow/
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── .env
│
├── frontend/
│   ├── src/
│   │
│   ├── assets/
│   ├── components/
│   ├── pages/
│   ├── services/
│   ├── styles/
│   ├── App.jsx
│   └── main.jsx
│
└── README.md
```

---

# ⚙ Installation

## 1️⃣ Clone Repository

```bash
git clone https://github.com/yourusername/taskflow.git
```

```
cd taskflow
```

---

## 2️⃣ Backend Setup

```
cd backend
```

Install dependencies

```bash
npm install
```

Create a **.env** file

```
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key
```

Run backend

```bash
npm start
```

or

```bash
npm run dev
```

---

## 3️⃣ Frontend Setup

```
cd frontend
```

Install dependencies

```bash
npm install
```

Run

```bash
npm run dev
```

---

# 📡 API Endpoints

## Authentication

| Method | Endpoint                  | Description     |
| ------ | ------------------------- | --------------- |
| POST   | /api/auth/register        | Register User   |
| POST   | /api/auth/login           | Login User      |
| GET    | /api/auth/profile         | Get Profile     |
| PUT    | /api/auth/profile         | Update Profile  |
| PUT    | /api/auth/change-password | Change Password |

---

## Tasks

| Method | Endpoint       | Description   |
| ------ | -------------- | ------------- |
| GET    | /api/tasks     | Get All Tasks |
| POST   | /api/tasks     | Create Task   |
| PUT    | /api/tasks/:id | Update Task   |
| DELETE | /api/tasks/:id | Delete Task   |

---

# 🔒 Authentication Flow

1. User registers an account.
2. Password is encrypted using **bcrypt**.
3. User logs in.
4. Server generates a JWT token.
5. Token is stored in Local Storage.
6. Axios automatically sends the token in Authorization headers.
7. Protected APIs validate the JWT before allowing access.

---

# 📸 Application Modules

### 🔑 Login Page

* Secure authentication
* Show/Hide password
* Form validation

### 📝 Registration Page

* User registration
* Password encryption
* Duplicate email validation

### 📊 Dashboard

* Task Overview
* Search Tasks
* Statistics Cards
* Task Filters
* Responsive Layout

### 📋 Task Management

* Add Task
* Edit Task
* Delete Task
* Mark as Completed
* Search Tasks

### 👤 Profile

* Edit Personal Information
* Change Password
* Task Statistics
* Recent Activity

---

# 🚀 Future Enhancements

* Dark Mode
* Task Categories
* Priority Color Badges
* Calendar View
* Drag & Drop Tasks
* Email Notifications
* Due Date Reminders
* File Attachments
* Team Collaboration
* Dashboard Charts

---

# 💻 Skills Demonstrated

* MERN Stack Development
* REST API Development
* JWT Authentication
* CRUD Operations
* MongoDB Atlas
* React Hooks
* State Management
* Protected Routes
* Responsive UI Design
* Component-Based Architecture

---

# 👩‍💻 Author

**Srimathi S**

Final Year Computer Science Engineering Student

---

# 📜 License

This project is developed for educational and portfolio purposes.
