import * as mysql from 'mysql';
import dbService from "../db/dbService";

// Don't actually connect here
// Just create the object so it's ready for connection.
const connection = new mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'app',
    password: '1234',
    database: 'insurance'
})

// Wire up the internal db connection
// Remember this is a singleton.
export default new dbService(connection);