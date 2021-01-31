import React, { Fragment, useState } from 'react';
import { Button } from 'react-bootstrap';
import "./style.css";
function Timer(props) {
    var timerInterval
    const [displayTime, setDisplayTime] = useState(stringTime(props.hours, props.minutes, props.seconds));
    let secondsLeft = props.hours * 3600 + props.minutes * 60 + props.seconds;
    function timerDraw(event) {
        let seconds = props.seconds;
        let minutes = props.minutes;
        let hours = props.hours;
        questionNumberSet('0');
        event.preventDefault();
        timerInterval = setInterval(function () {
            secondsLeft--;
            if (seconds === 0) {
                seconds = 59;
            }
            else seconds--;
            if (seconds === 59) {
                if (minutes === 0) {
                    minutes = 59;
                    hours--;
                } else minutes--;
            }
            setDisplayTime(stringTime(hours, minutes, seconds));
            if ((secondsLeft === 0)) {
                clearInterval(timerInterval);
                document.querySelector(".testNav").classList.add('invisible');
                props.onExit("00h00m00s");
            }

        }, 1000);

    };
    function stringTime(h, m, s) {
        return `${h < 10 ? '0' + h : h}hours ${m < 10 ? '0' + m : m}minutes ${s < 10 ? '0' + s : s}seconds`
    }
    function stopTest() {
        clearInterval(timerInterval);
        document.querySelector(".testNav").classList.add('invisible');
        props.onExit(displayTime);
    }
    function questionNumberSet(n) {
        let questionNow = document.querySelector("#questionPage");
        if (Number.isInteger(n)) {

            if (n === 1) {
                if (questionNow.value === "") { questionNow.value = 1; }
                else if (parseInt(questionNow.value) < props.qNumber) { questionNow.value = parseInt(questionNow.value) + 1 }
                else questionNow.value = 1;
            }
            if (n === -1) {
                if (questionNow.value === "") { questionNow.value = props.qNumber; }
                else if (parseInt(questionNow.value) > 1) { questionNow.value -= 1 }
                else questionNow.value = props.qNumber;
            }
        } else {
            if (n === "0") {
                document.querySelector(".testNav").classList.remove('invisible');
                questionNow.value = 1;
            } else questionNow.value = n;
        }
        (n === "0") ? props.onChange(0) : props.onChange(parseInt(questionNow.value));
    }
    return (
        <Fragment>

            <Button
                variant="primary"
                onClick={timerDraw}>Start</Button>
            <div className="testNav invisible">
                <h3> Time left</h3>
                <h4>{displayTime}</h4>
                <Button
                    variant="primary"
                    onClick={e => { questionNumberSet('1') }}>First</Button>
                <Button
                    variant="primary"
                    onClick={e => { questionNumberSet(-1) }}>Back</Button>
                <input type="number" id="questionPage" min="1" max={props.qNumber.toString()} onClick={e => questionNumberSet(e.target.value)}></input>
                <Button
                    variant="primary"
                    onClick={e => { questionNumberSet(1) }}>Next</Button>
                <Button
                    variant="primary"
                    onClick={e => { questionNumberSet(props.qNumber.toString()) }}>Last</Button>
                <Button
                    variant="danger"
                    onClick={stopTest}>STOP</Button>
            </div>
        </Fragment>
    );
}
export default Timer;