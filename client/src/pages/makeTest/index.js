import React, { Fragment, useState } from 'react';
import GetQuestion from '../../components/GetQuestion.js';
import "./style.css";
import { Row, Col, Button } from 'react-bootstrap';
var demoArr=[];
function ToRenderEverything() {
    const [testName, setTestName] = useState('');
    const [testBackground, setTestBackground] = useState('');


 
    // function handleReturnData(t, corr) {
    //     let localChoices = t;
    //     (corr) ? setCorrectAnswersArray(localChoices) : setWrongAnswersArray(localChoices);
    // }

    return (
        <Fragment>
            <div className="container" style={{ maxWidth: "1440px", overflow: "hidden" }}>
                <main className="container">
                    <h3 className='headerStyle'>Enter your test Name</h3>
                    <input style={{ width: '100%' }} onChange={e => setTestName(e.target.value)} />

                    <h4 className='headerStyle'>Add test background image link</h4>
                    <input style={{ width: '100%' }} onChange={e => setTestBackground(e.target.value)} />
                    
                   
                    <GetQuestion />
                            {/* {correctAnswersArray && <GetAnswers answers={correctAnswersArray} correct={true} onDelete={(n) => delRecord(n, 1)} onNew={(e) => newRecord(e, 1)} onChange={(t) => handleReturnData(t, 1)} />} */}
                        
                </main>

            </div>
        </Fragment >
    )
}
export default ToRenderEverything;
