import React from 'react';

const CourseGrades = ({ course }) => {
  const rows = course.grades || [];
  if (!rows.length) return <p>No grades posted yet.</p>;

  return (
    <div>
      <h2>Grades</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead style={{ background: '#e8f5e9', color: '#2e7d32' }}>
          <tr>
            <th style={{ textAlign: 'left', padding: '8px' }}>Item</th>
            <th style={{ textAlign: 'right', padding: '8px' }}>Score</th>
            <th style={{ textAlign: 'right', padding: '8px' }}>Max</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((g, idx) => (
            <tr key={idx} style={{ borderBottom: '1px solid #ddd' }}>
              <td style={{ padding: '8px' }}>{g.item}</td>
              <td style={{ padding: '8px', textAlign: 'right' }}>{g.score}</td>
              <td style={{ padding: '8px', textAlign: 'right' }}>{g.max}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CourseGrades;
