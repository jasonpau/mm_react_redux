import { combineReducers } from 'redux';
import memoryMatchReducer from './memory_match_reducer';

const rootReducer = combineReducers({
    memoryMatch: memoryMatchReducer
});

console.log('=====RIGHT BEFORE ROOT REDUCER');
export default rootReducer;