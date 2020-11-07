import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunkMiddleware from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'
import {dataReducer} from "../components/Chart/Reducer/dataReducer";

let reducersLits = combineReducers({
    data: dataReducer,
    form: formReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducersLits, composeEnhancers(
    applyMiddleware(thunkMiddleware)
));

window.store = store;
export default store;