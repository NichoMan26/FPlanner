import React, {useState} from 'react'
import cls from './TaskCreate.module.css'
import clsx from 'clsx'
import { tasksAPI } from '../../API/api';   

const moment = require('moment');


const TaskCreate = ({task, number, addNewTask}) => {
    const [titleState, setTitleState] = useState('')
    const [disabled, setDisabled] = useState(false)
    const onChangeTitleHandler = (e) => { // change value in textarea
        setTitleState(e.currentTarget.value);
    }
    const onClickAddTaskHandler = (e) => {
        e.preventDefault()
        if(!titleState.trim()) return
        setDisabled(true)
        let newTaskId
        tasksAPI.addTask({id:1,title:titleState, description:'', dateC:moment(), dateE:'', isDone:false}).then(
            (data) => {
                newTaskId = data.data.id
                addNewTask({id:newTaskId,title:titleState, description:'', dateC:moment(), dateE:'', isDone:false})
                setTitleState('')
                setDisabled(false)
                }
            )
            
        
    }

    return(
        <li className={clsx('list-group-item p-1',cls.task)}>
            <span>#</span>
            <form className='d-flex m-0' action="">
                <textarea autoFocus onChange={onChangeTitleHandler} 
                            value={titleState} 
                            placeholder='Create new task' 
                            rows='1' 
                            className={clsx('m-0 py-0', cls.textarea)} 
                            type="text" />
                <button onClick={onClickAddTaskHandler} 
                        disabled={disabled}
                        type="submit" 
                        className={clsx('btn ml-1 p-0', cls.button)}>
                            <i className="icon-plus"></i>
                </button>
            </form>
            
        </li>
    )
}
export default TaskCreate