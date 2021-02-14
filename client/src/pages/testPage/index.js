import React, { Fragment, useEffect, useState } from 'react';
import Timer from '../../components/timer';
import QuestionDisplay from '../../components/QuestionDisplay';
import ResultsDisplay from '../../components/ResultsDisplay';
import "./style.css";
var quizDuration=[0,10,0];
var testBackground='/./images/background1.jpg'
var quizMain = [
  {
    "question": ["What is first cosmic velocity?"],
    "rights": [{ 'text': '7.9km/sec','img': '',  'choice': true },
               { 'text': '4.9 miles/sec','img': '',  'choice': true },
    ],
    "wrongs": [{ 'text': '11.2km/sec','img': '', 'choice': false },
               { 'text': '42km/sec','img': '', 'choice': false },
               { 'text': '300m/sec','img': '', 'choice': false },
               { 'text': '300,000km/sec','img': '', 'choice': false },
               { 'text': '4km/sec','img': '', 'choice': false },
    ],
    "info" : {
      "positions": 4,
      "correct": 1,
      "layout":"simple",
      "img": '/./images/satellite.gif'
    }
  },
  {
  "question": ["What is not a part of the Solar system?"],
  "rights": [{ 'text': 'Galaxy', 'img': '/./images/galaxy.jpg', 'choice': true },
  { 'text': 'Black Hole', 'img': '/./images/blackhole.jpg', 'choice': true }
  ],
  "wrongs": [{ 'text': 'Moon', 'img': '/./images/FullMoon.jpg', 'choice': false },
  { 'text': 'Jupiter', 'img': '/./images/jupiter.jpg', 'choice': false },
  { 'text': 'Mars', 'img': '/./images/mars.jpg', 'choice': false },
  { 'text': 'Venus', 'img': '/./images/venus.jpg', 'choice': false },
  { 'text': 'Ceres', 'img': '/./images/ceres.jpg', 'choice': false },
  { 'text': 'Sun', 'img': '/./images/Solar_Orbiter.gif', 'choice': false }
  ],
  "info" : {
     "positions": 5, 
     "correct": 1,
     "layout":"box"
  }
},
{
  "question": ["What is bigger Ganymede or Mercury?"],
  "rights": [{ 'text': 'Ganymede', 'img': '/./images/ganymede.jpg', 'choice': true },
  ],
  "wrongs": [{ 'text': 'Mercury', 'img': '/./images/mercury.jpg', 'choice': false },
  ],
  "info":{
    "positions": 2,
    "correct": 1,
    "layout":"box"
  }
},
{
  "question": ["Choose all Solar system planets?"],
  "rights": [{ 'text': 'Jupiter', 'img': '/./images/jupiter.jpg', 'choice': true },
  { 'text': 'Mars', 'img': '/./images/mars.jpg', 'choice': true },
  { 'text': 'Venus', 'img': '/./images/venus.jpg', 'choice': true },
  { 'text': 'Mercury', 'img': '/./images/mercury.jpg', 'choice': true },
  { 'text': 'Saturn', 'img': '/./images/saturn.jpg', 'choice': true },
  { 'text': 'Neptune', 'img': '/./images/neptune.jpg', 'choice': true },
  ],
  "wrongs": [{ 'text': 'Moon', 'img': '/./images/FullMoon.jpg', 'choice': false },
  { 'text': 'Europa', 'img': '/./images/europa.jpg', 'choice': false },
  { 'text': 'io', 'img': '/./images/io.jpg', 'choice': false },
  { 'text': 'Black Hole', 'img': '/./images/blackhole.jpg', 'choice': false },
  { 'text': 'Sun', 'img': '/./images/Solar_Orbiter.gif', 'choice': false }],
  "info" : {
    "positions": 6,
    "correct": 4,
    "layout":"box"
  }
},
{
  "question": ["What is second (escape Earth orbit) cosmic velocity?"],
  "rights": [{ 'text': '6.96 miles/sec','img': '',  'choice': true },
             { 'text': '11.2km/sec','img': '', 'choice': true },
  ],
  "wrongs": [
             { 'text': '7.9km/sec','img': '',  'choice': false },
             { 'text': '4.9 miles/sec','img': '',  'choice': false },
             { 'text': '42km/sec','img': '', 'choice': false },
             { 'text': '300m/sec','img': '', 'choice': false },
             { 'text': '300,000km/sec','img': '', 'choice': false },
             { 'text': '4km/sec','img': '', 'choice': false },
  ],
  "info" : {
    "positions": 4,
    "correct": 1,
    "layout":"simple"
  }
},
{
  "question": ["Choose planet's Moon?"],
  "rights": [
    { 'text': 'Europa', 'img': '/./images/europa.jpg', 'choice': true },
    { 'text': 'Phobos', 'img': '/./images/phobos.jpg', 'choice': true },
    { 'text': 'Io', 'img': '/./images/io.jpg', 'choice': true },
  ],
  "wrongs": [{ 'text': 'Jupiter', 'img': '/./images/jupiter.jpg', 'choice': false },
  { 'text': 'Mars', 'img': '/./images/mars.jpg', 'choice': false },
  { 'text': 'Venus', 'img': '/./images/venus.jpg', 'choice': false },
  { 'text': 'Mercury', 'img': '/./images/mercury.jpg', 'choice': false },
  { 'text': 'Saturn', 'img': '/./images/saturn.jpg', 'choice': false },
  { 'text': 'Neptune', 'img': '/./images/neptune.jpg', 'choice': false },
  { 'text': 'Ceres', 'img': '/./images/ceres.jpg', 'choice': false }
  ],
  "info" : {
    "positions": 4,
    "correct": 1,
    "layout":"box"
  }
},
{
  "question": ["Choose Mars's Moons?"],
  "rights": [
    { 'text': 'Deimos', 'img': '/./images/deimos.jpg', 'choice': true },
    { 'text': 'Phobos', 'img': '/./images/phobos.jpg', 'choice': true },
  ],
  "wrongs": [{ 'text': 'Io', 'img': '/./images/io.jpg', 'choice': false },
  { 'text': 'Europa', 'img': '/./images/europa.jpg', 'choice': false },
  { 'text': 'Venus', 'img': '/./images/venus.jpg', 'choice': false },
  { 'text': 'Mercury', 'img': '/./images/mercury.jpg', 'choice': false },
  { 'text': 'Saturn', 'img': '/./images/saturn.jpg', 'choice': false },
  { 'text': 'Neptune', 'img': '/./images/neptune.jpg', 'choice': false },
  { 'text': 'Ceres', 'img': '/./images/ceres.jpg', 'choice': false }
  ],
  "info" : {
    "positions": 6,
    "correct": 2,
    "layout":"box"
  }
},
{
  "question": ["Choose 4 largest Jupiter's Moons?"],
  "rights": [
    { 'text': 'Ganymede', 'img': '/./images/ganymede.jpg', 'choice': true },
    { 'text': 'Callisto', 'img': '/./images/callisto.jpg', 'choice': true },
    { 'text': 'Io', 'img': '/./images/io.jpg', 'choice': true },
    { 'text': 'Europa', 'img': '/./images/europa.jpg', 'choice': true },
  ],
  "wrongs": [
  { 'text': 'Venus', 'img': '/./images/venus.jpg', 'choice': false },
  { 'text': 'Mercury', 'img': '/./images/mercury.jpg', 'choice': false },
  { 'text': 'Saturn', 'img': '/./images/saturn.jpg', 'choice': false },
  { 'text': 'Neptune', 'img': '/./images/neptune.jpg', 'choice': false },
  { 'text': 'Ceres', 'img': '/./images/ceres.jpg', 'choice': false }
  ],
  "info" : {
    "positions": 7,
    "correct": 4,
    "layout":"box"
  }
},
]


function ToRenderEverything() {
  var test = [];
  var choiceSet=[];
  const [displayQ, setDisplayQ] = useState(0);
  const [resultTime,setResultTime]=useState('');
  const [choices, setChoices] = useState([]);
  const [results, setResults] = useState([]);
  const [rating, setRating] = useState(0);
  const [visible, setVisible] = useState(0);
  const [testGenerated, setTestGenerated] = useState('');
  function randomizer(arr) {

    let testArray = [];
    let answerCount = arr.length;
    let positionN = 0;
    for (let i = 0; i < answerCount; i++) {
      positionN = Math.floor(Math.random() * arr.length)
      testArray.push(arr[positionN]);
      arr.splice(positionN, 1);

    }
    return testArray
  }

  function randomChoice(arr, n) {

    let testArray = [];
    let positionN = 0;
    for (let i = 0; i < n; i++) {
      positionN = Math.floor(Math.random() * arr.length)
      testArray.push(arr[positionN]);
      arr.splice(positionN, 1);
    }
    return testArray
  }
  function handleChoices(ch){ 
    let localChoices=choices;
    localChoices.splice(displayQ,1,ch)
     setChoices(localChoices); 

    }
  function handleChangeQuestion(q){
    if (q>0) {setDisplayQ(q - 1)}
    else{
      setDisplayQ(q);
      setVisible(1);

    }
  }
  function correctAnswers(){
    let arr=[];
    let arrSmall=[];
    for (let i=0;i<testGenerated.length;i++){
      arrSmall=[];
      for (let j=0;j<testGenerated[i].answers.length;j++){
        if (testGenerated[i].answers[j].choice===true) arrSmall.push(j)
      }
      arr.push(arrSmall)
    }
    return arr
  }
  function handleQuizEnd(t){
    let arr=[];
    let n=0;
    console.log(t);
    let correctArr=correctAnswers();
    setVisible(0);
    for (let i=0; i<correctArr.length;i++){
      JSON.stringify(correctArr[i]) === JSON.stringify(choices[i])? arr.push(true):arr.push(false);
      if (arr[i]===true) n+=1
    }
    console.log(((n/correctArr.length*100).toFixed(2)).toString());
    setRating(((n/correctArr.length*100).toFixed(2)).toString());
    setResults(arr);
    setResultTime(t);
    console.log(results)
  }
  
  useEffect(() => {

    let answersSet = [];
    for (let i = 0; i < quizMain.length; i++) {
      answersSet = randomChoice(quizMain[i].rights, quizMain[i].info.correct).concat(randomChoice(quizMain[i].wrongs, quizMain[i].info.positions - quizMain[i].info.correct));
      answersSet = randomizer(answersSet);

      test.push({
        "info": quizMain[i].info,
        "question": quizMain[i].question[0],
        "answers": answersSet,
      })
     choiceSet.splice(0, 0, [])
      
    }
    setChoices(choiceSet);
    setTestGenerated(test);
    console.log(choices)
    // console.log(choiceSet)
  }, []);



  return (
    <Fragment>
      <div className="container" style={{ maxWidth: "1440px", overflow: "hidden" }}>
        <main className="container">
            {results.length>0 && <ResultsDisplay res={results} rate={rating} time={resultTime} />}
            {testGenerated && <Timer qNumber={testGenerated.length} hours={quizDuration[0]} minutes={quizDuration[1]} seconds={quizDuration[2]} onExit={(t) => {handleQuizEnd(t)}} onChange={(q) => {handleChangeQuestion(q)}}  />}
            {testGenerated && <QuestionDisplay background={testBackground} info={testGenerated[displayQ].info}  vis={visible} question={testGenerated[displayQ].question} answers={testGenerated[displayQ].answers} checkedMarks={choices[displayQ]} onChange={(ch) => { handleChoices(ch)}}  />}
        </main>

      </div>
    </Fragment >
  )
}

export default ToRenderEverything;