import React from 'react';
import { Link } from 'react-router-dom';

function Sherlock() {
  return (
    <div className="sherlockBase">
      <div className="sherlockPage sherlockPage_1">
        In 2017, I was fully interested in Sherlock which had been on air from
        England. It made me to dream about trip to 221B Baker street. So when i
        had finished my military service, i booked airline tickets and rooms.
        But i had gotten no exact plans like where to go, what to eat, even what
        to do. After 15 hours from seoul, i landed on heathrow. At first,
        everything was amazing. there were a little korean words i could see,
        and the others couldn`t read except english.{' '}
        <div className="sherlockPage_lastline">
          I was bewildered but excited.
        </div>
      </div>
      <div className="sherlockPage sherlockPage_2">
        But the story wasn`t flowing how i wanted. when i entered immigration
        zone, the officer wanted me to open whole of my baggage. because i was
        suspicious. i got no friend, no family, and they told me that most of
        korean trip 2 or 3 days and go to France. but i said i planned for
        november, a month, so that`s the reason why they checked my luggage.
        After i heard that reason, i understood why , but it made me to feel oh
        it wouldn`t be easy....
      </div>
      <Link className="exitLink" to="/">
        <button>나가기</button>
      </Link>
    </div>
  );
}

export default Sherlock;
