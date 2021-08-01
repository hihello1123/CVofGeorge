import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="Home">
      <Link to="/Basic">기본 정보</Link>
    </div>
  );
}

export default Home;
