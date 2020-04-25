import React from 'react'
import cls from './Task.module.css'
import clsx from 'clsx'

const moment = require('moment');

const Task = ({task, number, deleteTask}) => {
    const onClickDeleteTaskHandler = (e) => {
        console.log('e: ', e.currentTarget.getAttribute('data-taskid'));

        e.preventDefault()
        //deleteTask()
    }

    return(
        <li className={clsx('list-group-item p-1',cls.task)}>
            <span>{number}</span>
            <span>{task.title}</span>
            <span>{task.dateE 
                    ? moment(task.dateE).format('DD.MM.YY - HH:MM')
                    : '--no date--'}</span>
            <button className={clsx('text-center btn m-0 p-0 cursor-pointer',cls.icon, {'text-success':task.isDone})}><i className="icon-ok"></i></button>
            <button data-taskid={task.id} onClick={onClickDeleteTaskHandler} className={clsx('text-center btn m-0 p-0 cursor-pointer',cls.icon , )}><i className="icon-trash"></i></button>
        </li>
    )
}
export default Task