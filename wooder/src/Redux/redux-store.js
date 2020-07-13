import { createStore, combineReducers, applyMiddleware } from 'redux';
import DataReducer from './DataReducer';


let reducers = combineReducers({
	Data: DataReducer,
});

let store = createStore(reducers);

window.store = store;
export default store;