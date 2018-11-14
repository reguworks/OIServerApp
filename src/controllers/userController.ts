import { Request, Response } from 'express';
import dbService from "../db/dbConnection";

 class userController {

    private dbService;
    
    constructor(dbService: any) {
        this.dbService = dbService;
        
    }

    async connect() {
        return this.dbService.openConnection()
    }

    async close() {
        return this.dbService.closeConnection()
    }

    async getAllUsers(req: Request, res: Response) {
        let users

        try {
            users = await this.dbService.getAllUsers();
        } catch (error) {
            console.log("Error " + error);
        }

        res.json(users);
    }
}
 export default new userController(dbService)
