import './App.css';
import React from "react";
import {InputData} from "./components/InputData/InputData";
import Chart from "./components/Chart/Chart";
import 'materialize-css'

function App() {

    return (
        <div className={'container'}>
            <Chart/>
            <InputData/>
        </div>
    )
}

export default App;
