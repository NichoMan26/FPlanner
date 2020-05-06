const SET_SINGLE_STATE = 'SET_SINGLE_STATE'


/////********************/////
let initState = {
    id: null,
    title: '',
    description: '',
    dateC: '',
    dateE: '',
    isDone: false
}
const singleTaskReducer = (state = initState, action) => {
    //console.log('action: ', action.type);
    switch(action.type){

        case SET_SINGLE_STATE:// set value for SingleTask
            return {...state, ...action.singleTask}
        default:
            return state
    }
}
export const setSingleTask = (singleTask) => ({type:SET_SINGLE_STATE, singleTask})
export default singleTaskReducer 