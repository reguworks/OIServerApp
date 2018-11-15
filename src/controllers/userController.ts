import { Request, Response } from 'express';
import connection from '../db/db';

export class UserController {
    constructor() {
    }

    async getAllUsers(req: Request, res: Response) {
        try {
            connection.getConnection(function (err, conn) {
                conn.query("select * from users", function (err, result, fields) {
                    if (err)
                        throw err;
                        
                    console.log(result);
                    res.json(result);
                    conn.release();
                })
            })

        } catch (error) {
            console.log("Error " + error);
        }
    }
}

