require('dotenv').config()
const prettyLog = require('../logging/pretty-logs')

const options = {
    query: e => {
        if(process.env.NODE_ENV === 'dev') {
            console.log(e.query)
        }
    }
}

const pgp = require ('pg-promise')(options)


//modified to link database on deployment
function setDatabase() {
    if (process.env.NODE_ENV ===
        /** dev has to be the same word used in the local environment 
         * otherwise even if HEROKU doesn't care, locally will break
         * the functions flow.
         */
        'dev' || !process.env.NODE_ENV) 
        {
            prettyLog(`DB name is ${process.env.DB_NAME}`, null)
            return pgp ({
            database: process.env.DB_NAME,
            port: 5432,
            host: 'localhost',  
            })
        } else if (process.env.NODE_ENV === 'production') {
            return pgp(process.env.DATABASE_URL)
        }
}


// module.exports = setDatabase()
module.exports = setDatabase()

//this next line work before deployment
// module.exports = pgp({
//     database: process.env.DB_NAME,
//     port: 5432,
//     host: 'localhost',
// })