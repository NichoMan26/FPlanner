import React from 'react'
// import cls from './Content.module.css'
// import clsx from 'clsx'
import TasksList from '../TasksList/TasksList'

const Content = (props) => {
    return(
            <div className='container p-1'>
                <TasksList/>
            </div>
    )
}
export default Content