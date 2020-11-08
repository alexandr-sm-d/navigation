import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {addTime} from "./Points/FirstPoint";
import style from './Points/FirstPoint.module.css'


const DataTime = ({addTime}) => {

    const submit = (formData) => {
        console.log("time:", formData)
        addTime(formData)
    }

    return (
        <div className={""}>
            <DataTimeReduxForm onSubmit={submit}/>
        </div>
    )
}

const DataTimeForm = props => {
    return (
        <div className={style.formTime}>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <h6>Введите время прох-ия сигнала до 1 приемника:</h6>
                    <Field
                        type="number"
                        autoComplete='off'
                        required
                        component='input'
                        name="t1"
                        placeholder="t1"
                        style={{width: '30px', marginRight: '15px'}}
                    />
                </div>
                <div>
                    <h6>Введите время прох-ия сигнала до 2 приемника:</h6>
                    <Field
                        type="number"
                        autoComplete='off'
                        required
                        component='input'
                        name="t2"
                        placeholder="t2"
                        style={{width: '30px', marginRight: '15px'}}
                    />
                </div>
                <div>
                    <h6>Введите время прох-ия сигнала до 3 приемника:</h6>
                    <Field
                        type="number"
                        autoComplete='off'
                        required
                        component='input'
                        name="t3"
                        placeholder="t3"
                        style={{width: '30px', marginRight: '15px'}}
                    />
                </div>

                <div>
                    <button className={'btn'}>Обработать данные</button>
                </div>
            </form>
        </div>
    )
}

const DataTimeReduxForm = reduxForm({
    form: 'data_time'
})(DataTimeForm)


export default connect(null, {addTime})(DataTime)

