import React from 'react'
import cls from './TaskHeader.module.css'
import clsx from 'clsx'

const TaskHeader = ({task, number}) => {
    return(
        <li className={clsx('list-group-item active p-1', cls.task)}>
            <span>№</span>
            <span>Title</span>
            <span>Date expiration</span>
            <span type="submit" 
                    className={clsx('ml-1 p-0', cls.button)}>
                        <i className="icon-wrench"></i>
                </span>
        </li>
    )
}
export default TaskHeader