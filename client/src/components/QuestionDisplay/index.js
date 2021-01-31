import React, { Fragment, useEffect } from 'react';
import { Button } from 'react-bootstrap';
// import Switch from '../../components/Switch';
import "./style.css";
const QuestionDisplay = props => {


    useEffect(() => {
        for (let i = 0; i < document.querySelectorAll(".checkOut").length; i++) {
            document.querySelector("#answer_" + i).checked = false;
            if (props.checkedMarks.indexOf(i) >= 0) document.querySelector("#answer_" + i).checked = true;
        }

    });
    function checkingMulti(e) {
        if (props.type === 1) {
            for (let i = 0; i < props.answers.length; i++) {
                document.querySelector("#answer_" + i).checked = false;

            }
            document.querySelector("#" + e.target.id).checked = true;
        }
        let choice = [];
        for (let i = 0; i < props.answers.length; i++) {
            if (document.querySelector("#answer_" + i).checked === true) {
                choice.push(i);
            }
        }
        props.onChange(choice);
    }

    return (
        <Fragment >
            <form style={{ opacity: props.vis }}>
                <h2 style={{ color: "white" }} >{props.question}</h2>
                {props.answers.map((answerOption, j) => {
                    return (
                        <div>
                            <input type="checkbox" id={"answer_" + j} className="checkOut" value={j} onChange={e => checkingMulti(e)} />
                            <label htmlFor={"answer_" + j} style={{ color: "white", marginLeft: "5px" }}>{answerOption.text}</label><br />
                            {(answerOption.img.length > 0) ? <img src={answerOption.img} alt={answerOption} style={{ width: '300px' }} /> : <br />}
                        </div>

                    )
                })}
            </form>
        </Fragment>
    );
}
export default QuestionDisplay;