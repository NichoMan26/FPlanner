import React, {useState} from 'react'
const moment = require('moment');
const DateNow = (props) => {
    const [date, setDate] = useState(moment().format('D.M.YY - H:m:ss'))
    

    const checkTime = () => {
            setDate(moment().format('D MMM YY - H:m:ss'))
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