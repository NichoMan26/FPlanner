import * as axios from 'axios'

export const instance = axios.create({
    //withCredentials:true,
    baseURL:'http://localhost/',
    // headers: {  'Access-Control-Allow-Methods': 'POST, GET, PUT, DELETE, OPTIONS',
    //             'Access-Control-Allow-Origin': '*',
    //             'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
    // }
})

export const tasksAPI = {
    getTasks(){
    return instance.get(`/task`)
    .then(response => response.data)
    },
    addTask(task){ //create new task
        let newTask = JSON.stringify(task)
        return instance.post(`/task`, {body:newTask})
    },
    deleteTask(id){ //delete task
        // let newTask = JSON.stringify(task)
        return instance.delete(`/task/${id}`)
    },
    done(taskId){
        let task = JSON.stringify(taskId)
        return instance.post(`/done`, {body:task})
    },
    unDone(taskId){
        return instance.delete(`/done/${taskId}`)
    }
//     unFollow(userId){
//         return instance.delete(`follow/${userId}`)
//         .then(response => response.data)
//     },
//     follow(userId){
//         return instance.post(`follow/${userId}`)
//         .then(response => response.data)
//     },
//     getProfile(userId){
//         console.warn('Obsoled method. Please use "profileAPI" object')
//         return profileAPI.getProfile(userId)
//     }
}
// export const request = (url) => {
//     axios.get(PATH + url).then((res) => {
//         console.log('res: ', JSON.parse(res.data.body));
//         return res

//     }).catch((err) => {
//         console.error(err)
//     })
// }