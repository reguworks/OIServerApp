import * as express from 'express';
import { userController } from '../controllers/userController';
import { dbService } from "../db/dbService";

class userRouter {
    public router = express.Router();
    private controller: userController = new userController(new dbService({
        host: 'localhost',
        port: '3306',
        user: 'app',
        password: '1234',
        database: 'insurance'
    }));

    constructor() {
        this.configHomePage();
        this.configReadByID();
    }

    private configHomePage(): void {
        this.router.get('/', function (req, res) {
            //res.send('API works!')
            //Call a method to call StoredProcedure to select all users. This must be done in a controller.
        });
    }

    private configReadByID(): void {
        this.router.get('/users', this.controller.getAllUsers);
    }
}
export default new userRouter().router;
