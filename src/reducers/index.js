import {combineReducers} from 'redux';
import mcradroidReducer from './mcradroidReducer';
const allReducers = combineReducers({
    mcradroidReducer,
})

export default allReducers;