import React, {useState} from 'react'
import cls from './LogoInfo.module.css'
import clsx from 'clsx'

const LogoInfo = (props) => {
    const [logIn, setLogIn] = useState(true) /// after delete this hook
    return(
            logIn // check login user or no and render appropriate component
                ? <a className={clsx('border', 'border-primary', cls.logoInfo)} href="/login">
                    {true
                        ? <i className={clsx("icon-user", cls.icon)}></i>
                        : <img src="" alt=""/>}
                    Log Out</a> 
                : <a className={clsx('border', 'border-primary', cls.logoInfo)} href="/login">Log In</a>
    )
}
export default LogoInfo