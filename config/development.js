const dotenv = require('dotenv');
const path = require('path');

const envPath = path.join(__dirname,'env/.env.development');

//Load environment variables from .env.development file
dotenv.config({path:envPath});

module.exports = {
    server:{
        port:process.env.PORT || 3000,
        serverName:process.env.NODE_ENV
    },
    database:{
        connectionUri:process.env.DATABASE_URI
    },
    logging: {
        level:process.env.LOG_LEVEL || 'debug'
    }
}