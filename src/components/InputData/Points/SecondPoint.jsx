import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {addPoint} from "./FirstPoint";

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
        <div className={""}>
            <h3>Second Point:</h3>
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

const SecondPointReduxForm = reduxForm({
    form: 'second_point'
})(SecondPointForm)


export default connect(null, {addPoint})(SecondPoint)

