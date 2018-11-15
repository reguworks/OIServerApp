import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from "cors";
import { UserRoutes } from './routers/UserRoutes';

class App {
    public routes = new UserRoutes();
    public app: express.Application;
    public userRoutes: UserRoutes = new UserRoutes();

    constructor() {
        this.app = express();
        this.config();    
    }

    private config(): void{
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(cors()); 
        this.userRoutes.routes(this.app);
    }
}

export default new App().app;