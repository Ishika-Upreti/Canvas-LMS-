// components/CourseGrid.js
import React from "react";
import CourseCard from "./CourseCard";
import courses from "../data/courses";
import './CourseGrid.css';


const CourseGrid = () => {
  return (
    <div className="course-grid">
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
};

export default CourseGrid;
