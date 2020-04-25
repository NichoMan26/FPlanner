import {combineReducers, createStore} from 'redux'
import tasksReducer from './tasksReducer'
import appReducer from './appReducer'

const reducers = combineReducers({
    tasks: tasksReducer,
    app: appReducer,
})

let store = createStore(reducers)

window.store = store
export default store