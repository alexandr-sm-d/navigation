import React from 'react'
import style from './Chart.module.css'
import {Example2} from "../InputData/example";
import {connect} from "react-redux";

const Chart = ({data}) => {
    console.log('CHART RERENDER')
    return (
        <div className={style.chart}>
            Chart
            <Example2 data={data}/>
        </div>
    )
}

const mstp = state => {
    return {
        data: state.data
    }
}

export default connect(mstp, null)(Chart)

