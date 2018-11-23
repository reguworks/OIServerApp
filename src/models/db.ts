import * as mysql from 'mysql';
const config = require('../../settings/config.json');

const connection = new mysql.createPool({
    host: config['database'].host,
    port: config['database'].port,
    user: config['database'].user,
    password: config['database'].password,
    database: config['database'].database
})

export default connection;

