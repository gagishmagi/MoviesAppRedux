import {combineReducers} from 'redux'

import searchReducer from './searchReducer'
import authReducer from './authReducer';


export default combineReducers({
    movies: searchReducer,
    auth: authReducer
});
