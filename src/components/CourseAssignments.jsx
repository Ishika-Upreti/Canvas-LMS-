import React from 'react';

const CourseAssignments = ({ course }) => {
  const items = course.assignments || [];
  if (!items.length) return <p>No assignments yet.</p>;

  return (
    <div>
      <h2>Assignments</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {items.map(a => (
          <li key={a.id}
              style={{
                background: '#f5f5f5',
                marginBottom: '10px',
                padding: '10px',
                borderRadius: '8px',
                display: 'flex',
                justifyContent: 'space-between'
              }}>
            <span><strong>{a.title}</strong></span>
            <span>Due: {a.due} • {a.status}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseAssignments;
