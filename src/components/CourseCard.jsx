// src/components/CourseCard.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./CourseCard.css";


const colors = ["#43a047", "#3a8d2bff", "#43a047", "#3a8d2bff", "#43a047", "#3a8d2bff"];

const CourseCard = ({ course }) => {
  const bgColor = colors[parseInt(course.id) % colors.length];

  return (
    <div className="course-card" style={{ backgroundColor: bgColor }}>
      <h3>{course.title}</h3>
      <p>{course.instructor}</p>
      <Link to={`/courses/${course.id}`} className="card-link">
        Go to Course
      </Link>
    </div>
  );
};

export default CourseCard;
