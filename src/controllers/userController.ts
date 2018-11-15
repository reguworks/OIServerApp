import { Request, Response } from 'express';

import connection from '../db/db';

export class UserController {
    constructor() {
    }

    async getAllUsers(req: Request, res: Response) {
        try {
            connection.getConnection(function (err, conn) {
                conn.query("select * from users", function (err, result, fields) {
                    if (err) {
                        conn.release();
                        throw err;
                    }
                        
                    console.log(result);
                    res.json(result);
                    conn.release();
                })
            })

        } catch (error) {
            console.log("Error " + error);
            res.json(error);
        }
    }

    async createUser(req: Request, res: Response) {
        let username=req.body.username;
        let id=req.body.id;
        try {
            connection.getConnection(function (err, conn) {
                conn.query("INSERT INTO users (id, username) VALUES ('" + id.toString() + "','" + username.toString() + "')" , function (err, result, fields) {
                    if (err) {
                        conn.release();
                        throw err;
                    }
                        
                    console.log(result);
                    res.json(result);
                    conn.release();
                })
            })

        } catch (error) {
            console.log("Error " + error);
            res.json(error);
        }
    }
}

