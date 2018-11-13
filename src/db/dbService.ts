import * as mysql from 'mysql';

class dbService {
    
    private initMySQL(): void {
        let mysqlConnection = mysql.createConnection({
            host:'localhost',
            port:'3306',
            user:'app',
            password:'1234',
            database: 'insurance'
        });

        mysqlConnection.connect((err)=>{
            if(!err){
                console.log('DB connection successful!');
            }
            else
                console.log('DB connection failed: ' + JSON.stringify(err, undefined, 2));
        });
    }
}

export default new dbService();