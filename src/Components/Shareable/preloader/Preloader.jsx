import React from 'react'
import cls from './Preloader.module.css'
import preloaderIMG from '../../../assets/img/preloader.gif'
//import clsx from 'clsx'

//const moment = require('moment');

const Preloader = () => {
    return(
        <div className={cls.preloader}>
            <img src={preloaderIMG} alt="preloader"/>
        </div>
    )
}
export default Preloader