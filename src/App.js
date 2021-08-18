import React from 'react';
import { useReducer } from 'react';
import './App.css';
import reducer from './reducers';
import {addOne, applyNumber, changeOperation, clearDisplay, memoryClear, memoryRecall, memorySave} from './actions'
import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';
import { initialState } from './reducers';

function App() {
const [state, dispatch] = useReducer(reducer, initialState);

// const handleAddOne = () => {
//   dispatch(addOne(1))
// }

const handleApplyNumber = (event) =>{
  const number = Number(event.target.textContent)
  dispatch(applyNumber(number))
}

const handleOperator = (event) =>{
  const operator = event.target.textContent
  dispatch(changeOperation(operator))
}

const handleClear = () =>{
  dispatch(clearDisplay())
}

const handleMemorySave = ()=>{
  dispatch(memorySave())
}

const handleMemoryRecall = ()=>{
  dispatch(memoryRecall())
}

const handleMemoryClear = ()=>{
  dispatch(memoryClear())
}

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"><img width="40px" src="./Lambda-Logo-Red.png"/> Lambda Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay value={state.total}/>
            <div className="row details">
              <span id="operation"><b>Operation:</b>{state.operation}</span>
              <span id="memory"><b>Memory:</b>{state.memory}</span>
            </div>
            
            <div className="row">
              <CalcButton value={"M+"} onClick={handleMemorySave}/>
              <CalcButton value={"MR"} onClick={handleMemoryRecall}/>
              <CalcButton value={"MC"} onClick={handleMemoryClear}/>
            </div>

            <div className="row">
              <CalcButton value={1} /*onClick={handleAddOne}*/ onClick={e =>handleApplyNumber(e)}/>
              <CalcButton value={2} onClick={e =>handleApplyNumber(e)}/>
              <CalcButton value={3} onClick={e =>handleApplyNumber(e)}/>
            </div>

            <div className="row">
              <CalcButton value={4} onClick={e =>handleApplyNumber(e)}/>
              <CalcButton value={5} onClick={e =>handleApplyNumber(e)}/>
              <CalcButton value={6} onClick={e =>handleApplyNumber(e)}/>
            </div>

            <div className="row">
              <CalcButton value={7} onClick={e =>handleApplyNumber(e)}/>
              <CalcButton value={8} onClick={e =>handleApplyNumber(e)}/>
              <CalcButton value={9} onClick={e =>handleApplyNumber(e)}/>
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={e => handleOperator(e)}/>
              <CalcButton value={"*"} onClick={e => handleOperator(e)}/>
              <CalcButton value={"-"} onClick={e => handleOperator(e)}/>
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick={handleClear}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
