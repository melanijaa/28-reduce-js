import { useReducer } from 'react';
import './App.css';
import colorReducer from './Reducers/colorReducer';

function App() {
  const [color, dispachColor] = useReducer(colorReducer, 'yellow');

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

  return (
    <div className="App">
      <header className="App-header">
        <h1 style={{backgroundColor: color}}>Welcome to Reducer</h1>
        <button onClick={goPink}>Go pink</button>
        <button onClick={goYellow}>Go Yellow</button>
        <button onClick={goColor}>Change color</button>
      </header>
    </div>
  );
}

export default App;
