const dotenv = require('dotenv');
const path = require('path');

const envPath = path.join(__dirname, 'env/config/.env.production')
dotenv.config({path:envPath});

module.exports = {
    server:{
        port:process.env.PORT
    },
    database:{
        connectionUri:process.env.DATABASE_URI
    },
    logging:{
        level:process.env.LOG_LEVEL
    }
}