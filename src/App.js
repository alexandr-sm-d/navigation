import './App.css';
import React from "react";
import {InputData} from "./components/InputData/InputData";
import Chart from "./components/Chart/Chart";


function App() {

    return (
        <div className={'container'}>
            <Chart/>
            <InputData/>
        </div>
    )
}

export default App;
