const ADD_NEW_TASK = 'ADD_NEW_TASK'
const DELETE_TASK = 'DELETE_TASK'

let initState = {
    tasks: [ 
    ],
}
const tasksReducer = (state = initState, action) => {
    switch(action.type){

        case ADD_NEW_TASK:
            return {...state, tasks:[...state.tasks, action.newTask]}
        case DELETE_TASK:
            return {...state, tasks:[...state.tasks, action.newTask]}
        default:
            return state
    }
}
export const addNewTask = (newTask) => ({type:ADD_NEW_TASK, newTask})
export const deleteTask = (taskId) => ({type:DELETE_TASK, taskId})
export default tasksReducer 