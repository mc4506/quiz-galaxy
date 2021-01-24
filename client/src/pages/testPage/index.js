import React, { Fragment, useEffect } from 'react';
import Timer from '../../components/timer';
import QuestionDisplay from '../../components/QuestionDisplay'
import "./style.css";
function ToRenderEverything() {
  useEffect(() => {
    
   
  }, []);
 


  return (
    <Fragment>
      <div className="container" style={{ maxWidth: "1440px", overflow: "hidden" }}>
        <main className="container">
          <div className="jumbotron jumbotron-fluid bg-transparent">
            <div className="text-black align-middle">

             <h1>Hello</h1>
             <Timer hours={1} minutes={0} seconds={0} />
            </div>
            <QuestionDisplay type={"checkbox"} question={"What is not a part of the Solar system?"} answers={[{'text':'Galaxy','img':'/./images/galaxy.jpg'},{'text':'Moon','img':'/./images/FullMoon.jpg'},{'text':'Jupiter','img':'/./images/jupiter.jpg'},{'text':'Mars','img':'/./images/mars.jpg'}, {'text':'Venus','img':'/./images/venus.jpg'},{'text':'Sun','img':'/./images/Solar_Orbiter.gif'}]} />
          </div>

        </main>

      </div>
    </Fragment >
  )
}

export default ToRenderEverything;