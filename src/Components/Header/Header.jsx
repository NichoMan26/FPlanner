import React from 'react'
import clsx from 'clsx'

import cls from './Header.module.css'
import LogoInfo from '../LogoInfo/LogoInfo'
import DateNow from '../DateNow/DateNow'

const Header = (props) => {
    return(
            <div className={clsx(cls.header, 'm-0 bg-dark d-flex justify-content-between align-items-center')}>
                <a className={cls.logo} href="/">FPlanner</a>
                <p className='m-0 text-primary'><DateNow/></p>
                <LogoInfo/>
            </div>
    )
}
export default Header