import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from "cors";

import { UserRoutes } from './routers/UserRoutes';
import { EmailRoutes } from './routers/Emailroutes';
import { Logger } from './logger';

class App {
    public app: express.Application;
    
    public userRoutes: UserRoutes = new UserRoutes();
    public emailRoutes: EmailRoutes = new EmailRoutes();

    constructor() {
        this.app = express();
        this.config();
        Logger.Init();  
    }

    private config(): void{
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(cors());

        this.userRoutes.routes(this.app);
        this.emailRoutes.routes(this.app);
    }
}

export default new App().app;