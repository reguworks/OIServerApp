import * as express from 'express';

class userRouter {
    public router = express.Router();

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
        this.router.get('/:id', function (req, res) {
            //res.send('API works again!')
            //Call a method to call StoredProcedure to select by ID. This must be done in a controller.
        });
    }
}
export default new userRouter().router;