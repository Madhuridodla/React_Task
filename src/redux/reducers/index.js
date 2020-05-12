import { combineReducers } from 'redux';
import LoginReducer from './loginReducer';

// Combine all reducers into root reducer
export default combineReducers({
    reducer: LoginReducer
});