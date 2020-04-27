import React from 'react'
import {Route, Switch} from 'react-router-dom'
// import cls from './Content.module.css'
// import clsx from 'clsx'
import TasksListContainer from '../TasksList/TasksListContainer'
import SingleTask from '../SingleTask/SingleTask'

const Content = (props) => {
    return(
            <div className='container p-1'>
                <Switch/>
                    <Route exact path='/'>
                        <TasksListContainer/>
                    </Route>
                    <Route path='/task/:taskId' >
                        <SingleTask/>
                    </Route>
                <Switch/>
            </div>
    )
}
export default Content