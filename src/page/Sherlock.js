import React from 'react';
import { Link } from 'react-router-dom';

function Sherlock() {
  return (
    <>
      it will be the story of sherlock i liked
      <Link className="exitLink" to="/">
        <button>나가기</button>
      </Link>
    </>
  );
}

export default Sherlock;
