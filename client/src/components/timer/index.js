import React, { Fragment, useState } from 'react';
import { Button } from 'react-bootstrap';
import "./style.css";
function Timer(props) {
    
    const [displayTime, setDisplayTime] = useState(stringTime(props.hours,props.minutes, props.seconds));
    let secondsLeft = props.hours * 3600 + props.minutes * 60 + props.seconds;
    function timerDraw(event) {
        let seconds=props.seconds;
        let minutes=props.minutes;
        let hours=props.hours;
        event.preventDefault();
            let timerInterval = setInterval(function () {
                secondsLeft--;
                if (seconds === 0) {
                    seconds=59;
                }
                else seconds--;
                if (seconds === 59){ 
                   if (minutes===0){
                       minutes=59;
                       hours--;
                   }else minutes--;
                }
                setDisplayTime(stringTime(hours,minutes,seconds));
                if ((secondsLeft === 0)) {
                    clearInterval(timerInterval);
                }
            
            }, 1000);
        
    };
    function stringTime(h,m,s){
        return `${h<10? '0'+h:h}hours ${m<10? '0'+m:m}minutes ${s<10? '0'+s:s}seconds`
    }

    return (
        <Fragment>
            <h3> Time left</h3>
            <h4>{displayTime}</h4>
            <Button
                variant="primary"
                onClick={timerDraw}>Start</Button>
        </Fragment>
    );
}
export default Timer;