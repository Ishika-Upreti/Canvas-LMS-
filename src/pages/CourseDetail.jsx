// src/pages/CourseDetail.jsx
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import courses from '../data/courses';
import CourseOverview from '../components/CourseOverview';
import CourseAssignments from '../components/CourseAssignments';
import CourseGrades from '../components/CourseGrades';
import './CourseDetail.css';

const CourseDetail = () => {
  const { id } = useParams();
  const [selectedTab, setSelectedTab] = useState('overview');

  const course = courses.find((c) => c.id === Number(id));

  if (!course) return <p>Course not found.</p>;

  return (
    <div className="course-detail-container">
      <h1 className="course-title">{course.title}</h1>
      <p className="course-instructor">Instructor: {course.instructor}</p>

      <div className="tab-row" style={{ marginBottom: '20px' }}>
        <button
          className={selectedTab === 'overview' ? 'active-tab' : ''}
          onClick={() => setSelectedTab('overview')}
        >
          Overview
        </button>
        <button
          className={selectedTab === 'assignments' ? 'active-tab' : ''}
          onClick={() => setSelectedTab('assignments')}
        >
          Assignments
        </button>
        <button
          className={selectedTab === 'grades' ? 'active-tab' : ''}
          onClick={() => setSelectedTab('grades')}
        >
          Grades
        </button>
      </div>

      <div className="course-section">
        {selectedTab === 'overview' && <CourseOverview course={course} />}
        {selectedTab === 'assignments' && <CourseAssignments course={course} />}
        {selectedTab === 'grades' && <CourseGrades course={course} />}
      </div>
    </div>
  );
};

export default CourseDetail;
