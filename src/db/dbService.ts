import * as mysql from 'mysql';

export class dbService {

    private mysqlConnection;

    constructor(connection: mysql.connection) {
        this.mysqlConnection = connection;
    }

    async openConnection() {
        return this.mysqlConnection.open()
    }

    async closeConnection() {
        return this.mysqlConnection.close()
    }

    public async getAllUsers() {
        return this.mysqlConnection.query('SELECT * FROM USERS;')
    }
    // this.mysqlConnection.connect((err)=>{
    //     if(!err){
    //         console.log('DB connection successful!');
    //     }
    //     else
    //         console.log('DB connection failed: ' + JSON.stringify(err, undefined, 2));
    // });
}
