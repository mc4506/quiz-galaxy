import React, { Fragment, useState } from 'react';
import GetQuestion from '../../components/GetQuestion.js';
import TestCreateNav from '../../components/testCreateNav';
import "./style.css";
import { Row, Col, Button } from 'react-bootstrap';
var demoArr=[];
var emptyQ={
    question:'',
    rights:[{ text: '', img: '', choice:true }],
    wrongs:[{ text: '', img: '', choice: false}],
    info:{
        positions:2,
        correct:1,
        layout:'',
        img:''
    }
}
function ToRenderEverything() {
    const [testName, setTestName] = useState('');
    const [displayQ, setDisplayQ] = useState(0);
    const [testBackground, setTestBackground] = useState('');
    const [testArray, setTestArray] = useState([emptyQ]);
    function handleUpdateQuestion(q){
        if (q>0) {setDisplayQ(q - 1)}
        else{
          setDisplayQ(q);
        //   setVisible(1);
        }
        console.log(displayQ);
        console.log(testArray)
    }
    function handleReturnQuestion(t){
        let arr=[...testArray];
        if (Object.getOwnPropertyNames(t)[0]==="question") arr[displayQ].question=t.question;
        if (Object.getOwnPropertyNames(t)[0]==="mainImg") arr[displayQ].info.img=t.mainImg;
        if (Object.getOwnPropertyNames(t)[0]==="layout1") arr[displayQ].info.layout=t.layout1;
        if (Object.getOwnPropertyNames(t)[0]==="positionsCount") arr[displayQ].info.positions=t.positionsCount;
        if (Object.getOwnPropertyNames(t)[0]==="correctCount") arr[displayQ].info.correct=t.correctCount;
        if (Object.getOwnPropertyNames(t)[0]==="rights") arr[displayQ].rights=t.rights;
        if (Object.getOwnPropertyNames(t)[0]==="wrongs") arr[displayQ].wrongs=t.wrongs;
        setTestArray(arr);
        console.log(arr);
    }
    function handleAdd(e){
        // e.preventDefault()
        setTestArray(oldArray => [...oldArray, {
            question:'',
            rights:[{ text: '', img: '', choice:true }],
            wrongs:[{ text: '', img: '', choice: false}],
            info:{
                positions:2,
                correct:1,
                layout:'',
                img:''
            }
        }]); 
       
        setDisplayQ(testArray.length);
        console.log(displayQ);
    }
    function handleDelete(){
        setTestArray(testArray.filter(item => testArray.indexOf(item) !== displayQ));
        
    }
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
                     <TestCreateNav qNumber={testArray.length ? testArray.length : 0} onNew={(e)=>handleAdd(e)} onDel={(t) => {handleDelete(t)}} onChange={(q) => {handleUpdateQuestion(q)}}  />
                   
                  {testArray[displayQ] && 
                   <GetQuestion q={testArray[displayQ]} onChange={(t) => handleReturnQuestion(t)} />
                  }
                            {/* {correctAnswersArray && <GetAnswers answers={correctAnswersArray} correct={true} onDelete={(n) => delRecord(n, 1)} onNew={(e) => newRecord(e, 1)} onChange={(t) => handleReturnData(t, 1)} />} */}
                        
                </main>

            </div>
        </Fragment >
    )
}
export default ToRenderEverything;
