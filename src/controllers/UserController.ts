import { Request, Response } from 'express';
import connection from '../db/db';

export class UserController {
    constructor() {
    }
    async getAllUsers(req: Request, res: Response) {
        try {
            connection.getConnection(function (err, conn) {
                conn.query("select * from users"
                    , function (err, result, fields) {
                        if (err) {
                            conn.release();
                            res.json(err);
                        }
                        else {
                            console.log(result);
                            res.json(result);
                            conn.release();
                        }
                    })
            })
        } catch (error) {
            console.log("Error " + error);
            res.json(error);
        }
    }
    async createUser(req: Request, res: Response) {
        let username = req.body.username;
        let id = req.body.id;
        try {
            connection.getConnection(function (err, conn) {
                conn.query("INSERT INTO users (id, username) VALUES ('" + id.toString() + "','" + username.toString() + "')"
                    , function (err, result, fields) {
                        if (err) {
                            conn.release();
                            res.json(err);
                        }
                        else {
                            console.log(result);
                            res.json(result);
                            conn.release();
                        }
                    })
            })
        } catch (error) {
            console.log("Error " + error);
            res.json(error);
        }
    }
    async updateUser(req: Request, res: Response) {
        let username = req.body.username;
        let id = req.body.id;
        try {
            connection.getConnection(function (err, conn) {
                conn.query("update users set username='" + username.toString() + "' where id='" + id.toString() + "'"
                    , function (err, result, fields) {
                        if (err) {
                            conn.release();
                            res.json(err);
                        }
                        else {
                            console.log(result);
                            res.json(result);
                            conn.release();
                        }
                    })
            })
        } catch (error) {
            console.log("Error " + error);
            res.json(error);
        }
    }
    async deleteUser(req: Request, res: Response) {
        let username = req.body.username;
        let id = req.body.id;
        try {
            connection.getConnection(function (err, conn) {
                conn.query("delete from users where id='" + id.toString() + "'"
                    , function (err, result, fields) {
                        if (err) {
                            conn.release();
                            res.json(err);
                        }
                        else {
                            console.log(result);
                            res.json(result);
                            conn.release();
                        }
                    })
            })
        } catch (error) {
            console.log("Error " + error);
            res.json(error);
        }
    }
}