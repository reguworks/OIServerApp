import * as express from 'express';

class userRouter {
    public router = express.Router();

    constructor() { 
        this.router.use(function timeLog (req, res, next) {
            console.log('Time: ', Date.now())
            next()
          })
        // define the home page route
        this.router.get('/', function (req, res) {
            res.send('API works!')
        });
    }
   

}
export default new userRouter().router;