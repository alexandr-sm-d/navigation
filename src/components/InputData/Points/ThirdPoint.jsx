import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {addPoint} from "./FirstPoint";
import style from './FirstPoint.module.css'


const ThirdPoint = ({addPoint}) => {

    const submit = (formData) => {
        addPoint(formData)
    }

    const initialValues = {id: 3}

    return (
        <div className={""}>
            <ThirdPointReduxForm onSubmit={submit} initialValues={initialValues}/>
        </div>
    )
}

const ThirdPointForm = props => {
    return (
        <div className={style.form}>
            <form onSubmit={props.handleSubmit}>
                <h6>Введите координаты третьего радиоприемника (км): </h6>
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
                <button className={'btn'}>Добавить</button>
            </form>
        </div>
    )
}

const ThirdPointReduxForm = reduxForm({
    form: 'Third_point'
})(ThirdPointForm)


export default connect(null, {addPoint})(ThirdPoint)

