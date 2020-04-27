import React from 'react'
import {connect} from 'react-redux'
import TasksList from './TasksList'
import {addNewTask, deleteTask, setTasks, doneTask, unDoneTask, addInDisabledTask, removeFromDisabledTask} from '../../redux/tasksReducer'
import {tasksAPI} from '../../API/api'




class TasksListContainer extends React.Component{
    
    componentDidMount(){
        tasksAPI.getTasks().then(data => {
                this.props.setTasks(JSON.parse(data.body))
            }
        )
    }
    // onPageChanged = (currentPage) => {
    //     this.props.requestUsers(currentPage, this.props.pageSize)
    // }
    render(){
        return (
            <TasksList tasks={this.props.tasks}
                        addInDisabledTask={this.props.addInDisabledTask}
                        arrDisabledTask={this.props.arrDisabledTask}
                        addNewTask={this.props.addNewTask}
                        deleteTask={this.props.deleteTask}
                        doneTask={this.props.doneTask}
                        unDoneTask={this.props.unDoneTask}
                        />
        )       
    }
}

let mapStateToProps = (state) => {
    return{
        tasks: state.tasks.tasks,
        arrDisabledTask:state.tasks.disabledTask,

    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addNewTask:(newTask) => {
            dispatch(addNewTask(newTask))
        },
        deleteTask:(taskId) => {
            tasksAPI.deleteTask(taskId)
            .then(
                (data,err) => {
                    if(err) throw err
                    if(+data.status === 200){
                        dispatch(deleteTask(taskId))
                        dispatch(removeFromDisabledTask(taskId))
                    }
                }
            )
        },
        doneTask:(taskId) => {
            tasksAPI.done(taskId)
            .then(
                (data,err) => {
                    if(err) throw err
                    if(+data.status === 200){
                        dispatch(doneTask(taskId))
                        dispatch(removeFromDisabledTask(taskId))
                    }
                }
            )
        },
        unDoneTask:(taskId) => {
            tasksAPI.unDone(taskId)
            .then(
                (data,err) => {
                    if(err) throw err
                    if(+data.status === 200){
                        dispatch(unDoneTask(taskId))
                        dispatch(removeFromDisabledTask(taskId))
                    }
                }
            )
        },
        setTasks:(tasks) => {
            dispatch(setTasks(tasks))
        },
        addInDisabledTask:(taskId) => {
            dispatch(addInDisabledTask(taskId))
        },
    }
}
export default connect( mapStateToProps, mapDispatchToProps)(TasksListContainer)