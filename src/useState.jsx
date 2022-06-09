import { useState } from 'react';
import './App.css';

function App() {
  const [color, setColor] = useState('yellow');

  const goPink = () => {
    setColor('pink');
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 style={{backgroundColor: color}}>Welcome to Reducer</h1>
        <button onClick={goPink}>Go pink</button>
      </header>
    </div>
  );
}

export default App;
