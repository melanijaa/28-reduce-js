import { useReducer } from 'react';
import './App.css';
import listReducer from './Reducers/listReducer';


function App() {

    const [list, listDispach] = useReducer(listReducer, []);

    const newList = () => {
        const action = {
            type: 'new'
        }
        listDispach(action);
    }

    const sortList = () => {
        const action = {
            type: 'sort'
        }
        listDispach(action);
    }

    const f5000 = () => {
        const action = {
            type: 'f5000'
        }
        listDispach(action);
    }

    const f4000 = () => {
        const action = {
            type: 'f4000'
        }
        listDispach(action);
    }

    const freset = () => {
        const action = {
            type: 'freset'
        }
        listDispach(action);
    }

    const DefSortList = () => {
        const action = {
            type: 'DefSortList'
        }
        listDispach(action);
    }

    const add = () => {
        const action = {
            type: 'add'
        }
        listDispach(action);
    }

    return (
        <div className="App">
            <header className="App-header">
                <h1>REDUCER</h1>
                <div className="kvc">
                <button onClick={newList}>New List</button>
                <button onClick={sortList}>Sort List</button>
                <button onClick={DefSortList}>Default Sort List</button>
                <button onClick={f5000}>Filter more 5000</button>
                <button onClick={f4000}>Filter less 4000</button>
                <button onClick={freset}>Filter Reset</button>
                <button onClick={add}>Add to List</button>
                </div>
                <div className="kvc">
                    {
                        list.map((o, i) => o.show ? <div key={i} className="kv" style={{backgroundColor:o.color}}><i>{o.number}</i></div> : null)
                    }
                </div>

            </header>
        </div>
    );

    

}

export default App;