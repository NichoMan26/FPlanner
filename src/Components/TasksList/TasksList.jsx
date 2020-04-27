import React from 'react'
// import cls from './TasksList.module.css'
// import clsx from 'clsx'
import Task from '../Task/Task'
import TaskCreate from '../TaskCreate/TaskCreate'
import TaskHeader from '../TaskHeader/TaskHeader'



const TasksList = ({tasks, addNewTask, deleteTask, doneTask, unDoneTask, arrDisabledTask, addInDisabledTask}) => {
    let outTasks = tasks.map((task, idx) => {
        return <Task key={idx} 
                    task={task} 
                    deleteTask={deleteTask} 
                    doneTask={doneTask}
                    unDoneTask={unDoneTask}
                    addInDisabledTask={addInDisabledTask}
                    arrDisabledTask={arrDisabledTask}
                    number={++idx}/>
    })
    return(
        <ul className='list-group m-0'>
            <TaskHeader/>
            <TaskCreate addNewTask={addNewTask}/>
            {outTasks}
        </ul>
    )
}
export default TasksList