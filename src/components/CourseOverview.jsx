import React from 'react';

const CourseOverview = ({ course }) => {
  return (
    <div>
      <h2>Course Overview</h2>
      <p>{course.overview}</p>

      <div style={{ marginTop: '1rem', opacity: 0.9 }}>
        <strong>Progress:</strong> {course.progress}%
      </div>
    </div>
  );
};

export default CourseOverview;
