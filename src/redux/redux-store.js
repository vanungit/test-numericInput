import { applyMiddleware, combineReducers, createStore} from "redux";
import RangeReducer from "./Range-reducer";

import thunkMiddleware from "redux-thunk";
import { compose } from "redux";


let rootreducers = combineReducers({
    RangeReducer: RangeReducer
});


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootreducers, composeEnhancers(applyMiddleware(thunkMiddleware)));


export default store;