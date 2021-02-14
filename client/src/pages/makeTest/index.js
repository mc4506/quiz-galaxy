import React, { Fragment, useState } from 'react';
import QuestionDisplay from '../../components/QuestionDisplay';
import GetAnswers from '../../components/GetAnswers.js';
import "./style.css";
import { Row, Col, Button } from 'react-bootstrap';
var demoArr=[];
function ToRenderEverything() {
    const [correctAnswersArray, setCorrectAnswersArray] = useState([]);
    const [wrongAnswersArray, setWrongAnswersArray] = useState([]);
    const [question, setQuestion] = useState("");
    const [positions, setPositions] = useState(0);
    const [correct, setCorrect] = useState(0);
    const [img, setImg] = useState('');
    const [layout, setLayout] = useState('');
    const [show, setShow] = useState(false);

    // list available layouts
    var layouts = ["simple", "box"];
    function handleReturnData(t, corr) {
        let localChoices = t;
        (corr) ? setCorrectAnswersArray(localChoices) : setWrongAnswersArray(localChoices);
    }
    function newRecord(e, corr) {
        (corr) ? setCorrectAnswersArray(choice => [...choice, e]) : setWrongAnswersArray(choice => [...choice, e]);
    }
    function showLayout(e){
        e.preventDefault();
       let arr=correctAnswersArray.slice(0,correct);
       demoArr=wrongAnswersArray.slice(0,positions-correct);
       for (let i=0; i<arr.length;i++){
           demoArr.push(arr[i]);
       }
        (show===false)? setShow(true): setShow(false)
    }

    function delRecord(n, corr) {
        function notEqual(value) {
            console.log((value.text !== del));
            return (value.text !== del);
        }
        let del = '';
        (corr) ? del= correctAnswersArray[n].text : del= wrongAnswersArray[n].text;
        // console.log(question,img,positions, layout, correct, show)
        // console.log(del)
        (corr)? setCorrectAnswersArray(correctAnswersArray.filter(notEqual)) : setWrongAnswersArray(wrongAnswersArray.filter(notEqual));
        
    }

    return (
        <Fragment>
            <div className="container" style={{ maxWidth: "1440px", overflow: "hidden" }}>
                <main className="container">
                    <h3 className='headerStyle'>Enter your question</h3>
                    <textarea style={{ width: '100%' }} onChange={e => setQuestion(e.target.value)} />
                    <h4 className='headerStyle'>Add your question main picture link (if you have one)</h4>
                    <input style={{ width: '100%' }} onChange={e => setImg(e.target.value)} />
                    <label style={{ width: '100%', color: 'yellow' }}>
                    <select style={{ width: '40%', marginRight: '5px', marginTop: '5px' }} onChange={e => setLayout(e.target.value)} >
                        {layouts.map((option, i) => {
                            return (           
                                    <option value={option}>{option}</option>                            
                            )
                        }
                        )}
                        </select>


                        Choose question layout
                    </label>
                    <label style={{ width: '50%', color: 'yellow' }}>
                        <input type="number" min={0} max={correctAnswersArray.length + wrongAnswersArray.length} style={{ width: '20%', marginRight: '5px', marginTop: '5px' }} onChange={e => setPositions(e.target.value)} />
                        How mamy positions would be displayed?(Maximum should be less then answers options)
                    </label>
                    <label style={{ width: '50%', color: 'yellow' }}>
                        <input type="number" min={0} max={correctAnswersArray.length} style={{ width: '20%', marginRight: '5px', marginTop: '5px' }} onChange={e => setCorrect(e.target.value)} />
                        How mamy correct options should be selected?(Maximum should be less then correct answers options)
                    </label>
                    <Row>
                        <Col xs={12} md={6}>
                            <h3 className='headerStyle'>Enter text of the correct answers:</h3>
                            {correctAnswersArray && <GetAnswers answers={correctAnswersArray} correct={true} onDelete={(n) => delRecord(n, 1)} onNew={(e) => newRecord(e, 1)} onChange={(t) => handleReturnData(t, 1)} />}
                        </Col>
                        <Col xs={12} md={6}>
                            <h3 className='headerStyle'>Enter text of the wrong answers:</h3>
                            {wrongAnswersArray && <GetAnswers answers={wrongAnswersArray} correct={false} onDelete={(n) => delRecord(n, 0)} onNew={(e) => newRecord(e, 0)} onChange={(t) => handleReturnData(t, 0)} />}
                        </Col>
                        <Button onClick={e=>showLayout(e)} >Preview</Button>
                    </Row>
                    
                    {show && <QuestionDisplay style={{pointerEvents:'none'}} background={''} info={{positions: positions, correct: correct,layout: layout}}  vis={1} question={question} answers={demoArr} checkedMarks={[]} onChange={(ch) => { }}  />}
                </main>

            </div>
        </Fragment >
    )
}
export default ToRenderEverything;
