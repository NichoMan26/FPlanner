import React from 'react'
import {connect} from 'react-redux'
import {setSingleTask} from '../../redux/singleTaskReducer'
import {tasksAPI} from '../../API/api'
import SingleTask from '../SingleTask/SingleTask'

class SingleTaskContainer extends React.Component{
    
    componentDidMount(){
        let taskId = +this.props.match.params.taskId
        tasksAPI.getTask(taskId).then(data => {
            this.props.setSingleTask(data.task)
            }
        )
    }
    render(){
        return (
            <SingleTask singleTask={this.props.singleTask}
                        updateSingleTask={this.props.updateSingleTask}
                        />
        )       
    }
}

let mapStateToProps = (state) => {
    return{
        singleTask:state.singleTask
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        setSingleTask:(singleTask) => {
            dispatch(setSingleTask(singleTask))
        },
        updateSingleTask:(newSingleTask) => {
            tasksAPI.updateTask(newSingleTask)
        }
        
    }
}


export default connect( mapStateToProps, mapDispatchToProps)(SingleTaskContainer)