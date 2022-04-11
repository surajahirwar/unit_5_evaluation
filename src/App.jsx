
import { useState } from "react"

import "./App.css"


function App() {

  const [count_1, setCounter] = useState(0)
  const [wicket, setWicket] = useState(0)
  const [add_over, add_Over] = useState(0)


  const over_add=(value)=>{
      
    if(add_over+value>=0){
      add_Over(add_over+value)
    }
  }


  const add_1=(value)=>{
    if(count_1+value>=0){
      setCounter(count_1+value)
    }
  }

  const add_wicket=(value)=>{
    if(wicket+value>=0){
      setWicket(wicket+value)
    }
  }

  return (
    <div className="App">
      <h3>India:</h3>
      <div className="banner">
        <div>
          Score:
          <h1 className="scoreCount">
          {count_1}
          </h1>
        </div>
        <div>
          Wicket:
          <h1 className="wicketCount">
            {
              wicket
            }
          </h1>
        </div>

        <div>
          Over:
          <h1 className="overCount">
          {add_over}
          </h1>
        </div>
      </div>

      <div className="addScore">
        Add Score
        {/* these buttons should add the respective amount in the score */}
        <button onClick={()=>add_1(1)} className="addScore1">Add 1</button>
        <button onClick={()=>add_1(4)} className="addScore4">Add 4</button>
        <button onClick={()=>add_1(6)} className="addScore6">Add 6</button>
      </div>

      <div className="addWicket">
        Add Wicket
        {/* Increase the count of wicket */}
        <button onClick={()=>add_wicket(1)}>Add 1 wicket</button>
      </div>

      <div className="addBall">
        Add ball
        {/* Increase the total number of balls thrown here. */}
        <button onClick={()=>over_add(1)}>Add 1</button>
      </div>

      {/* If score reaches greater than 100, show text "India Won" without quotes in h1 tag with class name 'status' */}
    </div>
  );
}

export default App;
