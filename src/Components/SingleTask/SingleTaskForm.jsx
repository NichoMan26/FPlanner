import React, {useState, useEffect} from 'react'
import DatePick from '../Shareable/DayPicker/DatePick'

import cls from './SingleTaskForm.module.css'
import clsx from 'clsx'


const SingleTaskForm = ({ singleTask, updateSingleTask }) => {
    useEffect(() => {
        setTaskUpdate(singleTask)
      }, [singleTask]);

    const [taskUpdate, setTaskUpdate] = useState(singleTask)

    const changeTitle = (e) => { // change value in title
        setTaskUpdate({...taskUpdate, title:e.currentTarget.value})
    }
    const changeDescription = (e) => { // change value in description
        setTaskUpdate({...taskUpdate, description:e.currentTarget.value})
    }
    const changeDateE = (dateE) => { // change value in dateE
        setTaskUpdate({...taskUpdate, dateE})
    }
    const changeDone = (e) => { // change value in dateE
        setTaskUpdate({...taskUpdate, isDone:!taskUpdate.isDone})
    }
    const onHandleReset = (e) => {
        e.preventDefault()
        setTaskUpdate(singleTask)
    }
    const onHandleSave = (e) => {
        e.preventDefault()
        updateSingleTask(taskUpdate)
    }
    
    return (
        <form>
            <div className="d-flex">
                <label htmlFor="title" className={clsx('mr-1', cls.label)}>Title:</label>
                <input className={clsx(cls.input)} 
                        id='title' 
                        onChange={changeTitle} 
                        type="text" 
                        value={taskUpdate.title} />
            </div>
            <div className="d-flex">
                <label htmlFor="description" className={clsx('mr-1', cls.label)}>Description:</label>
                <textarea className={clsx(cls.input, 'p-0 pl-1 pr-1')} 
                        rows='1' id='description' 
                        onChange={changeDescription} 
                        type="text" 
                        value={taskUpdate.description} />
            </div>
            <div className="d-flex">
                <label htmlFor="Date expiration" className={clsx('mr-1', cls.label)}>Date expiration:</label>
                <DatePick singleTask={singleTask} changeDateE={changeDateE}/>
            </div>
            <div className="d-flex">
                <label htmlFor="Done" className={clsx('mr-1', cls.label)}>Done:</label>
                <input className={clsx(cls.input)} 
                        id='Done' 
                        onChange={changeDone} 
                        type="checkbox" 
                        checked={taskUpdate.isDone}
                        value={taskUpdate.isDone} />
            </div>
            <div className='d-flex justify-content-end align-items-center'>
                <button onClick={onHandleSave} className='btn btn-success' type='submit'>Save</button>
                <button onClick={onHandleReset} className='btn btn-danger ml-1'>Reset</button>
            </div>
        </form>
       
    )
}
export default SingleTaskForm