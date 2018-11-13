import { dbService } from "../db/dbService";

export class userController {

    private dbService;
    
    constructor(dbService: dbService) {
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

        res.json()
    }
}


