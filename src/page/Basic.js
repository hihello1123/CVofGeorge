import React from 'react';
import { Link } from 'react-router-dom';

function Basic() {
  return (
    <div className="basicBase">
      <img
        className="hoDuGuaZa"
        src={`${process.env.PUBLIC_URL}/photo_SYH.jpeg`}
        alt=""
      />
      <div className="whitePaper">
        <label className="labelName">이름 : </label>
        <div className="divName">손용휘</div>
        <label className="labelBirth">생년월일 : </label>
        <div className="divBirth">1994-01-20</div>
        <label className="labelStack">현재 사용가능 스택 : </label>
        <div className="divStack">React,Javascript, SCSS</div>
        <label className="labelSchool">학력 : </label>
        <div className="divSchool1">고려대학교 부속고등학교 졸업</div>
        <div className="divSchool2"> 코드스테이츠 수료</div>
      </div>
      <Link className="exitLink" to="/">
        <button>나가기</button>
      </Link>
    </div>
  );
}

export default Basic;
