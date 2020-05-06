import React from 'react'
 import cls from './TasksList.module.css'
// import clsx from 'clsx'
import Task from '../Task/Task'
import TaskCreate from '../TaskCreate/TaskCreate'
import TaskHeader from '../TaskHeader/TaskHeader'
import { sortByDate } from '../../assets/utils/methods'



const TasksList = ({tasks, addNewTask, deleteTask, doneTask, unDoneTask, arrDisabledTask, addInDisabledTask}) => {
    const sortTasks = sortByDate(tasks)
    let outTasks = [] 
    Object.keys(sortTasks).forEach((taskArr) => {
        outTasks.push(<span className={cls.date} key={taskArr}>{taskArr}</span>)
        sortTasks[taskArr].forEach((task, idx) => {
            outTasks.push(<Task key={task.id} 
                            task={task} 
                            deleteTask={deleteTask} 
                            doneTask={doneTask}
                            unDoneTask={unDoneTask}
                            addInDisabledTask={addInDisabledTask}
                            arrDisabledTask={arrDisabledTask}
                            number={++idx}/>
        )})
    })
    outTasks.push(<ul key={'fefefe'} className={cls.totalTasks}>
                    <li className='list-unstyled'>Total tasks: {tasks.length}</li>
                    <li className='list-unstyled'>Done tasks: {tasks.length}</li>
                    <li className='list-unstyled'>Undone tasks: {tasks.length}</li>
                </ul>)
    return(
        <ul className='list-group m-0'>
            <TaskHeader/>
            <TaskCreate addNewTask={addNewTask}/>
            {outTasks}
        </ul>
    )
}
export default TasksList