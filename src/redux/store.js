import {combineReducers, createStore} from 'redux'
import tasksReducer from './tasksReducer'
import singleTaskReducer from './singleTaskReducer'
import {reducer as formReducer} from 'redux-form'

const reducers = combineReducers({
    tasks: tasksReducer,
    singleTask: singleTaskReducer,  
    form:formReducer,
})

let store = createStore(reducers)

window.store = store
export default store