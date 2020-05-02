import React, {useState,useEffect} from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"
const moment = require('moment')



const DatePick = ({changeDateE, singleTask}) => {
  useEffect(() => {
    setStartDate(new Date(moment(singleTask.dateE ? singleTask.dateE : new Date()).format('YYYY/MM/DD-HH:mm')))
  },[singleTask]);
  const [startDate, setStartDate] = useState(null);
  const handleOnChange = (date) => {
    setStartDate(date)
    changeDateE(moment(date).format())
    console.log('moment(date): ', moment(date));

  }
  return(
    <DatePicker
      selected={startDate}
      onChange={handleOnChange}
      minDate={new Date()}
      dateFormat="dd.MM.yy - hh:mm"
      showTimeInput
      placeholderText="Select expiration date"
    />)
  }
export default DatePick