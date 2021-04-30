import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from "redux-devtools-extension";

import AuthReducer from './reducers/AuthReducer'


const rootReducer=combineReducers({
    auth:AuthReducer
})


const middlewares = [thunk];
const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(...middlewares))
);



export default store