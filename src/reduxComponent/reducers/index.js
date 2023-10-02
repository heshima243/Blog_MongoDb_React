import {combineReducers} from 'redux'
import userReducer from '../reducers/user.reducer'
import postReducer from '../reducers/post.reducer'


export default combineReducers({
    // REDUCES
    userReducer,
    postReducer
})