import * as mysql from 'mysql';

const connection = new mysql.createPool({
    host: 'localhost',
    port: '3306',
    user: 'app',
    password: '1234',
    database: 'insurance'
})

export default connection;

