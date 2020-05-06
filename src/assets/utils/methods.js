
const moment = require('moment');
/**
 * @param {array} tasks with tasks
 * @returns {obj} were obj wherw key is date, value is array with this date
 */
export const sortByDate = (tasks) => { 
    const sortTasks = {}
    tasks.forEach(task => { 
        if(!task.dateE){ 
            if(Object.keys(sortTasks).indexOf('No date') === -1){ // if task doesn't have dateE
                sortTasks['No date'] = [task] //create new key and add first elem in arr
            } else {
                sortTasks['No date'].push(task) //add el in arr
            }
        } else {
            if(Object.keys(sortTasks).indexOf(moment(task.dateE).format('DD.MM.YY')) === -1){ //Check has 'sortTasks' key like date
            sortTasks[moment(task.dateE).format('DD.MM.YY')] = [task] //create new key and add first elem in arr
         } else {
            sortTasks[moment(task.dateE).format('DD.MM.YY')].push(task) //add el in arr
         }
        }
         
    });
    return sortTasks
}
/**
 * @param {array} tasks with tasks
 * @returns {array} were all tasks was filltered by dateE
 */
export const inOrderTasksByDateE = (tasks) => {
    const tasksInOrder = tasks.sort((a,b) => {
        return moment(a.dateE).unix() - moment(b.dateE).unix()
    })
    return tasksInOrder
}