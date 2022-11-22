import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Clock from './components/clock';

function App() {
  const [timerDays,setTimerDays]=useState();
  const [timerHours,setTimerHours]=useState();
  const [timerMinutes,setTimerMinutes]=useState();
  const [timerSeconds,setTimerSeconds]=useState();
  
  let interval:any;
  
  const startTimer=()=>{
    debugger
    const countDownDate=new Date("Nov 23,2022").getTime();
    
    interval=setInterval(()=>{
      const now=new Date().getTime();
      
      const distance=countDownDate-now;
      console.log(distance)
      
      const days:any=Math.floor(distance/(24*60*60*1000))
      const hours:any=Math.floor(distance%(24*60*60*1000)/(1000*60*60))
      const Minutes:any=Math.floor(distance%(60*60*1000)/(1000*60))
      const seconds:any=Math.floor(distance%(60*1000)/(1000))
       
     if(distance<0){
        clearInterval(interval.current)
     } else{
      setTimerDays(days)
      setTimerHours(hours)
      setTimerMinutes(Minutes)
      setTimerSeconds(seconds)
     }
      
    })

  };
  useEffect(()=>{
    startTimer()
  })

  return (
    <div className="App">
       <Clock
        timerDays={timerDays}
        timerHours={timerHours}
        timerMinutes={timerMinutes}
        timerSeconds={timerSeconds}
       />
    </div>
  );
}

export default App;
