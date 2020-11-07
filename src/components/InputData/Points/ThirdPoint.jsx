import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {addPoint} from "./FirstPoint";

const ThirdPoint = ({addPoint}) => {

    const submit = (formData) => {
        console.log("Input coordinate:", formData)
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
        <div className={""}>
            <h3>Third Point:</h3>
            <form onSubmit={props.handleSubmit}>
                <Field
                    type="number"
                    autoComplete='off'
                    required
                    component='input'
                    name="x"
                    placeholder="Enter X"
                />
                <Field
                    type="number"
                    autoComplete='off'
                    required
                    component='input'
                    name="y"
                    placeholder="Enter Y"
                />
                <div>
                    <button>Save</button>
                </div>
            </form>
        </div>
    )
}

const ThirdPointReduxForm = reduxForm({
    form: 'Third_point'
})(ThirdPointForm)


export default connect(null, {addPoint})(ThirdPoint)

