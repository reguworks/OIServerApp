import { Request, Response, next } from 'express';
import connection from '../db/db';

export class UserController {
    constructor() {
    }
    async getAllUsers(req: Request, res: Response) {
        try {
            connection.getConnection(function (err, conn) {
                conn.query("CALL user_list();"
                    , function (err, result, fields) {
                        if (err) {
                            console.log(err);
                            res.status(400).send({
                                message: err.message.toString()
                             });
                        }
                        else {
                            console.log(result);
                            res.json(result);
                        }

                        conn.release();
                    })
            })
        } catch (err) {
            console.log("Error " + err);
            res.status(400).send({
                message: err.message.toString()
             });
        }
    }
    async createUser(req: Request, res: Response) {
        try {
            connection.getConnection(function (err, conn) {
                conn.query("CALL user_insert('" + req.body.username+ "')"
                    , function (err, result, fields) {
                        if (err) {
                            console.log(err);
                            res.status(400).send({
                                message: err.message.toString()
                             });
                        }
                        else {
                            console.log(result);
                            res.json(result);
                        }

                        conn.release();
                    })
            })
        } catch (err) {
            console.log("Error " + err);
            res.status(400).send({
                message: err.message.toString()
             });
        }
    }
    async updateUser(req: Request, res: Response) {
        try {
            connection.getConnection(function (err, conn) {
                conn.query("CALL user_update('" + req.body.username+ "','" + req.body.id + "')"
                    , function (err, result, fields) {
                        if (err) {
                            console.log(err);
                            res.status(400).send({
                                message: err.message.toString()
                             });
                        }
                        else {
                            console.log(result);
                            res.json(result);
                        }

                        conn.release();
                    })
            })
        } catch (err) {
            console.log("Error " + err);
            res.status(400).send({
                message: err.message.toString()
             });
        }
    }
    async deleteUser(req: Request, res: Response) {
        try {
            connection.getConnection(function (err, conn) {
                conn.query("CALL user_delete('" + req.body.id + "')"
                    , function (err, result, fields) {
                        if (err) {
                            console.log(err);
                            res.status(400).send({
                                message: err.message.toString()
                             });
                        }
                        else {
                            console.log(result);
                            res.json(result);
                        }

                        conn.release();
                    })
            })
        } catch (err) {
            console.log("Error " + err);
            res.status(400).send({
                message: err.message.toString()
             });
        }
    }

    async deleteUserByID(req: Request, res: Response) {
        try {
            connection.getConnection(function (err, conn) {
                conn.query("delete from users where id='" + req.params.id + "'"
                    , function (err, result, fields) {
                        if (err) {
                            console.log(err);
                            res.status(400).send({
                                message: err.message.toString()
                             });
                        }
                        else {
                            console.log(result);
                            res.json(result);
                        }

                        conn.release();
                    })
            })
        } catch (err) {
            console.log("Error " + err);
            res.status(400).send({
                message: err.message.toString()
             });
        }
    }
}