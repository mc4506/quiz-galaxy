import React, { Fragment, useEffect } from 'react';
import Timer from '../../components/timer';
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
          </div>

        </main>

      </div>
    </Fragment >
  )
}

export default ToRenderEverything;