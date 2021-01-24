import React, { Fragment, useEffect, useState } from 'react';
import Switch from '../../components/Switch';
// import FormControl from 'react-bootstrap/FormControl';
import "./style.css";
function QuestionDisplay(props) {
    var answers=props.answers;
    const [box, setBox] = useState(false);
    
    useEffect(() => {
        randomizer();
        
    }, []);
    // props.question,props.answers[], props.right[],props.user, props.type props.background props.picture
    function randomizer() {

        let testArray = [];
        let answerCount = props.answers.length;
        let positionN = 0;
        for (let i = 0; i < answerCount; i++) {
            positionN = Math.floor(Math.random() * answers.length)
            testArray.push(answers[positionN]);
            answers.splice(positionN, 1);

        }
        console.log(box);
    }


    return (
        <Fragment>
            <h2>{props.question}</h2>
            <form>

               { props.answers.map((answerOption, j) => {
                   return(
                    <div>
                        <input type={props.type} id={"answer_" + j} name={"answer_" + j} />
                        <label htmlFor={"answer_" + j}>{answerOption.text}</label><br />
                        {(answerOption.img.length>0)?<img src={answerOption.img} alt={answerOption} style={{width:'300px'}} />: <br /> }
                    </div>
                   )
                })}

            </form>

            {/* <InputGroup>
    <InputGroup.Prepend>
      <InputGroup.Radio aria-label="Radio button for following text input" />
    </InputGroup.Prepend>
    <FormControl aria-label="Text input with radio button" />

  </InputGroup> */}




        </Fragment>
    );
}
export default QuestionDisplay;