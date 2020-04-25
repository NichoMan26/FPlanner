import React from 'react'
// import cls from './Content.module.css'
// import clsx from 'clsx'
import TasksListContainer from '../TasksList/TasksListContainer'

const Content = (props) => {
    return(
            <div className='container p-1'>
                <TasksListContainer/>
            </div>
    )
}
export default Content