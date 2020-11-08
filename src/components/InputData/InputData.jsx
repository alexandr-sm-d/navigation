import React, {useState} from 'react'
import style from './InputData.module.css'
import FirstPoint from "./Points/FirstPoint";
import SecondPoint from "./Points/SecondPoint";
import ThirdPoint from "./Points/ThirdPoint";
import DataTime from "./DataTime";


export const InputData = props => {
    return (
        <div className={style.input}>
            <FirstPoint/>
            <SecondPoint/>
            <ThirdPoint/>
            <DataTime/>
        </div>
    )
}