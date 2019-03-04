/**
 * @date:2019-03-04$ 10:28$
 * @author:ljl$
 */
import {createStore, combineReducers, applyMiddleware, compose} from "redux";
import thunkMiddleware from 'redux-thunk';
import { cacheMiddleware } from "./utils/redux-cache";



const reducer = combineReducers({

})

const middlewares = [thunkMiddleware, cacheMiddleware]

if (process.env.NODE_ENV !== 'production') {
	const reduxLogger = require('redux-logger').logger
	middlewares.push(reduxLogger)
}

const storeEnhancers = compose(
	applyMiddleware(...middlewares)
)

export default createStore(reducer, storeEnhancers)
