import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home">
      <Link className="linkNames first" to="/Basic">
        Basic Profiles
      </Link>
      <Link className="linkNames second" to="/Sherlock">
        Sherlock
      </Link>
    </div>
  );
}

export default Home;
