import React from "react";
import './Dashboard.css';
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import CourseGrid from "../components/CourseGrid";
import TodoList from "../components/TodoList";
import courses from '../data/courses';

const tasks = [
  { id: 1, title: "Finish React assignment", dueDate: "2025-07-30" },
  { id: 2, title: "Watch UI design video", dueDate: "2025-07-29" },
  { id: 3, title: "Submit GitHub repo", dueDate: "2025-07-30" },
];

const Dashboard = () => {
  return (
    <div className="dashboard-layout">
      <Sidebar /> {/* ✅ Use the component, not duplicate code */}

      <div className="main-content">
        <Header />

        <div className="breadcrumb">
          <span>Dashboard</span>
        </div>

        <CourseGrid courses={courses} />
        <TodoList tasks={tasks} />
      </div>
    </div>
  );
};

export default Dashboard;
