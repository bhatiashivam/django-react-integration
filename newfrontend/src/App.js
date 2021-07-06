import React, { useState } from 'react';
import './App.css';

const App = () => {
    let [data, setData] = useState('');

    const getData = () => {
        fetch('http://localhost:8000/api/todos/')
            .then((res) => res.json())
            .then((data) => setData(JSON.stringify(data)))
            .catch((error) => console.log(error));
    };

    return (
        <div className="App">
            <header className="App-header">
                <button onClick={getData}>get data</button>
                <p>{data}</p>
            </header>
        </div>
    );
};

export default App;
