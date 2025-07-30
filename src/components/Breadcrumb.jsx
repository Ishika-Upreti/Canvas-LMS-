// src/components/Breadcrumb.jsx

import { Link, useParams } from 'react-router-dom';

const Breadcrumb = () => {
  const { id } = useParams(); // this is the course ID

  return (
    <div style={{
      fontSize: '14px',
      margin: '16px 0',
      color: '#666'
    }}>
      <Link to="/" style={{ textDecoration: 'none', color: '#007bff' }}>Dashboard</Link>
      <span> &gt; </span>
      <span style={{ fontWeight: 'bold' }}>Course {id}</span>
    </div>
  );
};

export default Breadcrumb;
