import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from "redux-devtools-extension";

import AuthReducer from './reducers/AuthReducer'
import PostReducer from "./reducers/PostReducer";


const rootReducer=combineReducers({
    auth:AuthReducer,
	post:PostReducer
})


const middlewares = [thunk];
const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(...middlewares))
);



export default store