import React from 'react'
import cls from './TaskHeader.module.css'
import clsx from 'clsx'

const TaskHeader = ({task, number}) => {
    return(
        <li className={clsx('list-group-item active p-1', cls.task)}>
            <span>№</span>
            <span>Title</span>
            <span>Date expiration</span>
            <span className={clsx('text-center m-0 p-0 cursor-pointer')}></span>
        </li>
    )
}
export default TaskHeader