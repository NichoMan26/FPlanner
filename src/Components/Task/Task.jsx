import React from 'react'
import cls from './Task.module.css'
import clsx from 'clsx'

const Task = ({task, number}) => {
    return(
        <li className={clsx('list-group-item p-1',cls.task)}>
            <span>{number}</span>
            <span>{task.title}</span>
            <span>{task.dateE}</span>
            <button className={clsx('text-center btn m-0 p-0 cursor-pointer',cls.icon)}><i className="icon-ok"></i></button>
            <button className={clsx('text-center btn m-0 p-0 cursor-pointer',cls.icon)}><i className="icon-trash"></i></button>
        </li>
    )
}
export default Task