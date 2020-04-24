const moment = require('moment');

export const dateNow = (params = 'D.M.YY - H:m:ss') => {
    return moment().format(params)
    
}