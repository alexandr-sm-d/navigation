import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {addPoint} from "./FirstPoint";
import style from './FirstPoint.module.css'

const SecondPoint = ({addPoint}) => {

    const submit = (formData) => {
        console.log("Input coordinate:", formData)
        addPoint(formData)
    }

    const initialValues = {id: 2}

    return (
        <div className={""}>
            <SecondPointReduxForm onSubmit={submit} initialValues={initialValues}/>
        </div>
    )
}

const SecondPointForm = props => {
    return (
        <div className={style.form}>
            <form onSubmit={props.handleSubmit}>
                <h6>Введите координаты второго радиоприемника (км): </h6>
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
                <button className={`btn ${style.secPoint}`}>Добавить</button>
            </form>
        </div>
    )
}

const SecondPointReduxForm = reduxForm({
    form: 'second_point'
})(SecondPointForm)


export default connect(null, {addPoint})(SecondPoint)

