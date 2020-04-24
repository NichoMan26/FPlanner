import React, {useState} from 'react'
import {dateNow} from '../../assets/utils/methods'
const DateNow = (props) => {
    const [date, setDate] = useState(dateNow())
    

    const checkTime = () => {
            setDate(dateNow())
             clearTimeout(timerId);
    }
    let timerId = setInterval(checkTime, 1000)
    return(
            <>
                {date}
            </>
    )
}
export default DateNow