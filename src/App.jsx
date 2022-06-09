import { useReducer, useState } from 'react';
import './App.css';
import rand from './Functions/rand';
import colorReducer from './Reducers/colorReducer';
import numberReducer from './Reducers/numberReducer';
import kvReducer from './Reducers/kvReducer';

function App() {
  const [color, dispachColor] = useReducer(colorReducer, 'yellow');
  const [numb, dispachNumb] = useReducer(numberReducer, '0000');
  const [colorInput, setColorInput] = useState('#F8dd00');
  const [textInput, setTextInput] = useState('');
  const [h2, setH2] = useState('');
  const [kv, dispachKv] = useReducer(kvReducer, []);

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

  const goChangeTo = () => {
    const action = {
      type: 'change_color_to',
      payload: colorInput
    }
    dispachColor(action);
  }

  const goChangeToThis = () => {
    const action = {
      type: 'change_color_to',
      payload: colorInput
    }
    dispachColor(action);
  }

  const goText = () => {
    setH2(textInput);
    const action = {
        type: 'go_text',
        payload: textInput
    }
    dispachNumb(action);
}

  const goKv = () => {
    const action = {
      type: 'gokv'
    }
    dispachKv(action);
}

  return (
    <div className="App">
      <header className="App-header">
        <div>
        <h1 style={{backgroundColor: color}}>Welcome to Reducer
        <span> {numb} </span>
        </h1>
        <button onClick={goPink}>Go pink</button>
        <button onClick={goYellow}>Go Yellow</button>
        <button onClick={goColor}>Change color</button>
        <button onClick={number1}>Go 1</button>
        <button onClick={number2}>Go 2</button>
        <input type="color" value={colorInput} onChange={e => setColorInput(e.target.value)}></input>
        <button onClick={goChangeTo}>h1 go change to this color</button>
        </div>
        <h2>{h2}</h2>
        <input type="text" value={textInput} onChange={e => setTextInput(e.target.value)}></input>
        <button onClick={goText}>Go Text</button>
        <button onClick={goKv}>Go []</button>
        <div className="kvc">
                {
                    kv.map((_, i) => <div className="kv" key={i}></div>)
                }
            </div>
      </header>
    </div>
  );
}

export default App;
