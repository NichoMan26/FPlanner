const SET_TASKS = 'SET_TASKS'
const ADD_NEW_TASK = 'ADD_NEW_TASK'
const DELETE_TASK = 'DELETE_TASK'
const DONE_TASK = 'DONE_TASK'
const UNDONE_TASK = 'UNDONE_TASK'
const ADD_IN_DISABLED_TASK = 'ADD_IN_DISABLED_TASK'
const REMOVE_FROM_DISABLED_TASK = 'REMOVE_FROM_DISABLED_TASK'

let initState = {
    tasks: [],
    disabledTask:[]

}

const tasksReducer = (state = initState, action) => {
    switch(action.type){

        case SET_TASKS:
            return {...state, tasks:[...action.tasks]}
        case ADD_NEW_TASK:
            return {...state, tasks:[...state.tasks, action.newTask]}
        case DELETE_TASK:
            return {...state, tasks:[...state.tasks.filter((task) => { //filter arr with task and delete task with id
                if(+task.id !== +action.taskId) return task
                return null
           })]}
        case DONE_TASK:
            return {...state, tasks:[...state.tasks.map((task) => { //filter arr with task and delete task with id
                if(+task.id === +action.taskId) {
                    task.isDone = true
                    return task
                }
                return task
           })]}
        case UNDONE_TASK:
            return {...state, tasks:[...state.tasks.map((task) => { //filter arr with task and delete task with id
                if(+task.id === +action.taskId) {
                    task.isDone = false
                    return task
                }
                return task
           })]}
        case ADD_IN_DISABLED_TASK:
            return {...state, disabledTask:[...state.disabledTask, +action.taskId]}
        case REMOVE_FROM_DISABLED_TASK:
            return {...state, disabledTask:[...state.disabledTask].filter((taskId) => {
                if(+taskId !== +action.taskId) return taskId
                return null
            })}
        default:
            return state
    }
}
export const setTasks = (tasks) => ({type:SET_TASKS, tasks})
export const addNewTask = (newTask) => ({type:ADD_NEW_TASK, newTask})
export const deleteTask = (taskId) => ({type:DELETE_TASK, taskId})
export const doneTask = (taskId) => ({type:DONE_TASK, taskId})
export const unDoneTask = (taskId) => ({type:UNDONE_TASK, taskId})
export const addInDisabledTask = (taskId) => ({type:ADD_IN_DISABLED_TASK, taskId})
export const removeFromDisabledTask = (taskId) => ({type:REMOVE_FROM_DISABLED_TASK, taskId})
export default tasksReducer 