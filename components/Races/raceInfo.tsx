import React, { useState, useEffect, useContext } from 'react';
import RaceInfoLine from './raceInfoLine';
import { DataContext } from './context';

type timeLeftType = {
  days: number,
  hours: number,
  minutes: number,
  seconds: number
}

// calculates the remaining time till the start of the race
const calculateCountdown = (time: number): timeLeftType => {
  let difference = +new Date(time) - +new Date();

  let timeLeft = {
    "days": 0,
    "hours": 0,
    "minutes": 0,
    "seconds": 0
  };

  timeLeft = {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60)
  };

  return timeLeft;
}

/**
 * Component to hold the race information.
 * 
 * @Component
 * @param {*} props 
 */
export default function RaceInfo(props: any) {
    const [timeLeft, setTimeLeft] = useState(calculateCountdown(props.info.startTime));
    const { data, setData } = useContext(DataContext);

    useEffect(() => {
      const timer = setTimeout(() => {
        setTimeLeft(calculateCountdown(props.info.startTime));
      }, 1000);
      if (timeLeft.seconds < -59) {
        let filtered = data.filter(v => v.id !== props.info.id)
        setData(filtered)
      }
   
      return () => clearTimeout(timer);
    });

    let countdownString = timeLeft.minutes.toLocaleString('en-US', {
      minimumIntegerDigits: 2,
      useGrouping: false
    }) + ":" + timeLeft.seconds.toLocaleString('en-US', {
      minimumIntegerDigits: 2,
      useGrouping: false
    })

    return(
      <>
        <RaceInfoLine text={"Meeting Name -- "+props.info.meetingName} />
        <RaceInfoLine text={"Race No. -- "+props.info.raceNo} />
        <RaceInfoLine text={"Start Time -- "+countdownString} />
      </>
    )
}
