import * as express from 'express';
import userController from '../controllers/userController';

const controller = userController;
const router = express.Router();

class userRoutes {

    constructor(){
        this.initDefaultRoute();
        this.initUsersRoute();
    }

    private initDefaultRoute(): void {
        router.get('/', function (req, res) {
            res.send('API works!')
            //Call a method to call StoredProcedure to select all users. This must be done in a controller.
        });
    }

    private initUsersRoute(): void {
        router.get('/users', controller.getAllUsers);
    }

}
export default router;

//will make it like this: https://github.com/LaurenceHo/angular4-express-mysql/tree/master/server/src
