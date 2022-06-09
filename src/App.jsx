import { useEffect, useReducer } from 'react';
import './App.css';
import rand from './Functions/rand';
import colorReducer from './Reducers/colorReducer';
import numberReducer from './Reducers/numberReducer';

function App() {
  const [color, dispachColor] = useReducer(colorReducer, 'yellow');
  const [numb, dispachNumb] = useReducer(numberReducer, '0000');

  const goPink = () => {
    const action = {
      type: 'go_pink'
    }
    dispachColor(action);
  }

  const goYellow = () => {
    const action = {
      type: 'go_y'
    }
    dispachColor(action);
  }

  const goColor = () => {
    const action = {
      type: 'change_color'
    }
    dispachColor(action);
  }

  const goChange = () => {
    const action = {
      type: 'change_color_to'
    }
    dispachColor(action);
  }

  const number1 = () => {
    const action = {
      type: 'do1'
    }
    dispachNumb(action);
  }

  const number2 = () => {
    const action = {
      type: 'do2', 
      payload: rand(0, 100)
    }
    dispachNumb(action);
  }

  /* lemputės
  useEffect(() => {
    setInterval(()=> dispachColor({type: 'change_color'}), 2500)
  }, [])
  */

  return (
    <div className="App">
      <header className="App-header">
        <h1 style={{backgroundColor: color}}>Welcome to Reducer
        <span> {numb} </span>
        </h1>
        <button onClick={goPink}>Go pink</button>
        <button onClick={goYellow}>Go Yellow</button>
        <button onClick={goColor}>Change color</button>
        <button onClick={goChange}>Change</button>
        <button onClick={number1}>Go 1</button>
        <button onClick={number2}>Go 2</button>
      </header>
    </div>
  );
}

export default App;
