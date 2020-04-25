import {connect} from 'react-redux'
import TasksList from './TasksList'
import {addNewTask, deleteTask} from '../../redux/tasksReducer'



let mapStateToProps = (state) => {
    return{
        tasks: state.tasks.tasks,

    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addNewTask:(newTask) => {
            dispatch(addNewTask(newTask))
        },
        deleteTask:(taskId) => {
            dispatch(deleteTask(taskId))
        },
    }
}
export default connect( mapStateToProps, mapDispatchToProps)(TasksList)