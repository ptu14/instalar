"use client"
import React,{useEffect, useState} from "react";

export default function CountDown(){
    let [days, setDays] = useState(0);
    let [hours, setHours] = useState(0);
    let [minutes, setMinutes] = useState(0);
    let [seconds, setSeconds] = useState(0);
  
    let deadline = "December, 31, 2024";
  
    let getTime = () => {
      let time = Date.parse(deadline) - Date.now();
  
      setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
      setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
      setMinutes(Math.floor((time / 1000 / 60) % 60));
      setSeconds(Math.floor((time / 1000) % 60));
    };
  
    useEffect(() => {
      let interval = setInterval(() => getTime(deadline), 1000);
  
      return () => clearInterval(interval);
    }, []);
    return(
        <div id="event-sale">
            <ul className="count-down list-unstyled m-0">
                <li id="days" className="count-number fw-semibold mb-0 list-inline-item px-3">{days}<p className='count-head'>Days</p> </li>
                <li id="hours" className="count-number fw-semibold mb-0 list-inline-item px-3">{hours}<p className='count-head'>Hours</p></li>
                <li id="mins" className="count-number fw-semibold mb-0 list-inline-item px-3">{minutes}<p className='count-head'>Mins</p></li>
                <li id="secs" className="count-number fw-semibold mb-0 list-inline-item px-3">{seconds}<p className='count-head'>Secs</p></li>
            </ul>
        </div>
    )
}