import React from 'react'
import SingleTaskForm from './SingleTaskForm';
import Preload from '../Shareable/preloader/Preloader';

const moment = require('moment');
// import cls from './SingleTask.module.css'
// import clsx from 'clsx'

const SingleTask = ({singleTask, updateSingleTask}) => {
    
    console.log('singleTask: ', singleTask.id);
    return(
        <>
        {singleTask.id === null 
        ?  <Preload/>
        :   <>
                <div className='d-flex justify-content-between align-items-center'>
                    <h1>{singleTask.title}</h1>
                    <span>Creation: {moment(singleTask.dateC).format('D MMM YY - HH:m')}</span>
                </div>
                <SingleTaskForm singleTask={singleTask}
                                updateSingleTask={updateSingleTask}/>
            </>
        }</>
    )
}
export default SingleTask