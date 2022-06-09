import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {

    const [books, setBooks] = useState([]);

    useEffect(() => {
        axios.get('http://in3.dev/knygos/')
        .then(res => {
            setBooks(res.data)
        })
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                <h1>REDUCER</h1>
                <div>
                    {
                       books.length ? books.map(b => <div key={b.id}>{b.title}</div>) : <h2>Loading...</h2>
                    }
                </div>
            </header>
        </div>
    );

    

}

export default App;