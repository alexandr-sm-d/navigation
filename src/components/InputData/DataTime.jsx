import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {addTime} from "./Points/FirstPoint";


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
        <div className={""}>
            <h3>Time:</h3>
            <form onSubmit={props.handleSubmit}>
                <Field
                    type="number"
                    autoComplete='off'
                    required
                    component='input'
                    name="t1"
                    placeholder="Enter t1"
                />
                <Field
                    type="number"
                    autoComplete='off'
                    required
                    component='input'
                    name="t2"
                    placeholder="Enter t2"
                />
                <Field
                    type="number"
                    autoComplete='off'
                    required
                    component='input'
                    name="t3"
                    placeholder="Enter t3"
                />
                <div>
                    <button>Add</button>
                </div>
            </form>
        </div>
    )
}

const DataTimeReduxForm = reduxForm({
    form: 'data_time'
})(DataTimeForm)


export default connect(null, {addTime})(DataTime)

