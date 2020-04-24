import React, {useState} from 'react'
import cls from './TaskCreate.module.css'
import clsx from 'clsx'

//import {dateNow} from '../../assets/utils/methods'

const TaskCreate = ({task, number}) => {
    const [titleState, setTitleState] = useState('')
    const onChangeTitleHandler = (e) => { // change value in textarea
        setTitleState(e.currentTarget.value);
    }
    const onClickAddTaskHandler = (e) => { // create fetch and sent om srver with titleState and dateNow
        e.preventDefault()
        //add post method here
        setTitleState('')
    }
    return(
        <li className={clsx('list-group-item p-1',cls.task)}>
            <span>#</span>
            <form className='d-flex m-0' action="">
                <textarea autoFocus onChange={onChangeTitleHandler} value={titleState} placeholder='Create new task' rows='1' className={clsx('m-0 p-0', cls.textarea)} type="text" />
                <button onClick={onClickAddTaskHandler} type="submit" className={clsx('btn ml-1 p-0', cls.button)}><i className="icon-plus"></i></button>
            </form>
            
        </li>
    )
}
export default TaskCreate