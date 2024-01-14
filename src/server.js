const app = require('./app');
const config = require('../config/development')

if(process.env.NODE_ENV === 'production') {
    Object.assign(config, require('../config/production'))
}

const port = config.server.port;
const serverName = config.server.serverName;

app.listen(port, ()=>{
    console.log(`Server is running on port ${port} and server name is ${serverName} !`);
})