import React from 'react';
import { Link } from 'react-router-dom';

function Basic() {
  return (
    <div className="BasicBase">
      <div>이름 : 손용휘</div>
      <div>생년월일 : 1994-01-20</div>
      <div>현재 사용가능 스택 : React,Javascript, SCSS</div>
      <Link to="/">나가기</Link>
    </div>
  );
}

export default Basic;
