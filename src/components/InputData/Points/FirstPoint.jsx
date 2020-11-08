import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import * as axios from 'axios';
import {setPoint, setTargetWay} from "../../Chart/Reducer/actionCreators";
import {getWay} from "../../../logic/logic";
import style from './FirstPoint.module.css'

const FirstPoint = ({addPoint}) => {

    const submit = (formData) => {
        console.log("Input coordinate:", formData)
        addPoint(formData)
    }

    const initialValues = {id: 1}

    return (
        <div className={""}>
            <FirstPointReduxForm onSubmit={submit} initialValues={initialValues}/>
        </div>
    )
}

const FirstPointForm = props => {
    return (
        <div className={style.form}>
            <form onSubmit={props.handleSubmit}>
                <h6>Введите координаты первого радиоприемника: </h6>
                <Field
                    type="number"
                    autoComplete='off'
                    required
                    component='input'
                    name="x"
                    placeholder="x"
                    style={{width: '30px', marginRight: '15px'}}
                />
                <Field
                    type="number"
                    autoComplete='off'
                    required
                    component='input'
                    name="y"
                    placeholder="y"
                    style={{width: '30px', marginRight: '15px'}}
                />
                <button className={'btn small'}>Добавить</button>
            </form>
        </div>
    )
}

const FirstPointReduxForm = reduxForm({
    form: 'first_point'
})(FirstPointForm)

export const addPoint = (formData) => async dispatch => {
    // debugger
    await axios.put('/coordinats/' + formData.id, formData)
    dispatch(getPoints(formData.id))
}

export const addTime = (formData) => async dispatch => {
    // debugger
    await axios.post('/time_data', formData)
    dispatch(getTargetCoordinate())
}

const getTargetCoordinate = () => async (dispatch, getState) => {
    let response = await axios.get('/time_data', {
        transformResponse: [
            function (data) {
                let x1 = getState().data.coordinateFirstRadioreciever.x
                let y1 = getState().data.coordinateFirstRadioreciever.y
                let x2 = getState().data.coordinateSecondRadioreciever.x
                let y2 = getState().data.coordinateSecondRadioreciever.y
                let x3 = getState().data.coordinateThirdRadioreceiver.x
                let y3 = getState().data.coordinateThirdRadioreceiver.y
                let processedData = JSON.parse(data).map(el => `${el.t1};${el.t2};${el.t3}`)

                let newData = getWay(x1, y1, x2, y2, x3, y3, processedData)

                return newData
            }
        ]
    })
    console.log('response.data', response.data)
    dispatch(setTargetWay(response.data))
}

const getPoints = (id) => async dispatch => {
    let response = await axios.get('/coordinats/' + id)
    dispatch(setPoint(response.data))
}

export default connect(null, {addPoint})(FirstPoint)

