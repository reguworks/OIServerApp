import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from "cors";
import userRouters from './routers/userRouters';

class App {

    public app: express.Application;

    constructor() {
        this.app = express();
        this.config();    
    }

    private config(): void{
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(cors()); 

        //Create routers for all subroutes
        this.app.use('/user', userRouters);
    }
}

export default new App().app;