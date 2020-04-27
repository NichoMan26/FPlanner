import React from 'react'
import cls from './Task.module.css'
import clsx from 'clsx'

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
        <li onClick={(e) => {
            if(e.target.tagName === 'SPAN' || e.target.tagName === 'LI'){
                console.log('redirect');
            }
        }} className={clsx('list-group-item p-1',cls.task)}>
            <span>{number}</span>
            <span>{task.title}</span>
            <span>{task.dateE 
                    ? moment(task.dateE).format('DD.MM.YY - HH:mm')
                    : '--no date--'}</span>
            <button disabled={arrDisabledTask.includes(task.id)} data-taskid={task.id} onClick={onClickIsDoneTaskHandler} className={clsx('text-center btn m-0 p-0 cursor-pointer',cls.icon, {'text-success':task.isDone})}><i className="icon-ok"></i></button>
            <button disabled={arrDisabledTask.includes(task.id)} data-taskid={task.id} onClick={onClickDeleteTaskHandler} className={clsx('text-center btn m-0 p-0 cursor-pointer',cls.icon , )}><i className="icon-trash"></i></button>
        </li>
    )
}
export default Task