import React from 'react'
import cls from './Task.module.css'
import clsx from 'clsx'
import {Link} from 'react-router-dom'

const moment = require('moment');

const Task = ({task, number, deleteTask, doneTask, unDoneTask, arrDisabledTask, addInDisabledTask}) => {
    const onClickDeleteTaskHandler = (e) => {
        e.preventDefault()
        let taskId = e.currentTarget.getAttribute('data-taskid')
        addInDisabledTask(taskId)
        deleteTask(taskId)
    }
    const onClickIsDoneTaskHandler = (e) => {
        e.preventDefault()
        let taskId = e.currentTarget.getAttribute('data-taskid')
        addInDisabledTask(taskId)
        task.isDone ? unDoneTask(taskId) : doneTask(taskId);
    }

    return(
        <li 
        // onClick={(e) => {
        //     if(e.target.tagName === 'SPAN' || e.target.tagName === 'LI'){
        //         window.location.pathname = '/task/' + task.id // redirectim na SingleTask with id:(newTaskId)
        //     }
        // }} 
        className={clsx('list-group-item p-1',cls.task)}>
           <Link className={cls.taskBody} to={`/task/${task.id}`}>
                <span>{number}</span>
                <span className={task.isDone ? cls.done : ''}>
                    {task.title}
                </span>
                <span>{task.dateE 
                        ? moment(task.dateE).format('DD.MM.YY - HH:mm')
                        : '--no date--'}
                </span>
            </Link>
            <button disabled={arrDisabledTask.includes(task.id)} 
                    data-taskid={task.id} onClick={onClickIsDoneTaskHandler} 
                    className={clsx('text-center btn m-0 p-0 cursor-pointer',cls.icon, {'text-success':task.isDone})}>
                        <i className="icon-ok"></i>
            </button>
            <button disabled={arrDisabledTask.includes(task.id)} 
                    data-taskid={task.id} 
                    onClick={onClickDeleteTaskHandler} 
                    className={clsx('text-center btn m-0 p-0 cursor-pointer',cls.icon , )}>
                        <i className="icon-trash"></i>
            </button>
        </li>
    )
}
export default Task