import { Request, Response, next } from 'express';
import connection from '../db/db';
import * as jwt from 'jsonwebtoken';

export const secret: string = '2541';

export class UserController {

    constructor() {
    }
    async getAllUsers(req: Request, res: Response) {
        let token = req.headers.authorization;
        let tokenStr;
        try {
            if(token != undefined){
                tokenStr = token.substr(7, token.length);
            }

            console.log(token);
            var decoded = jwt.verify(tokenStr, secret);

        } catch (err) {
            res.status(400).send({
                message: err.message.toString()
            });
            return;
        }
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
        let token = req.headers.authorization;
        let tokenStr;
        try {
            if(token != undefined){
                tokenStr = token.substr(7, token.length);
            }

            console.log(token);
            var decoded = jwt.verify(tokenStr, secret);

        } catch (err) {
            res.status(400).send({
                message: err.message.toString()
            });
            return;
        }
        try {
            connection.getConnection(function (err, conn) {
                conn.query("CALL user_insert('" + req.body.username + "')"
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
        let token = req.headers.authorization;
        let tokenStr;
        try {
            if(token != undefined){
                tokenStr = token.substr(7, token.length);
            }

            console.log(token);
            var decoded = jwt.verify(tokenStr, secret);

        } catch (err) {
            res.status(400).send({
                message: err.message.toString()
            });
            return;
        }
        try {
            connection.getConnection(function (err, conn) {
                conn.query("CALL user_update('" + req.body.username + "','" + req.body.id + "')"
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
        let token = req.headers.authorization;
        let tokenStr;
        try {
            if(token != undefined){
                tokenStr = token.substr(7, token.length);
            }

            console.log(token);
            var decoded = jwt.verify(tokenStr, secret);

        } catch (err) {
            res.status(400).send({
                message: err.message.toString()
            });
            return;
        }
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
        let token = req.headers.authorization;
        let tokenStr;
        try {
            if(token != undefined){
                tokenStr = token.substr(7, token.length);
            }

            console.log(token);
            var decoded = jwt.verify(tokenStr, secret);

        } catch (err) {
            res.status(400).send({
                message: err.message.toString()
            });
            return;
        }
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

    async userLogin(req: Request, res: Response) {
        try {
            connection.getConnection(function (err, conn) {
                conn.query("CALL user_login('" + req.body.username + "')"
                    , function (err, result, fields) {
                        if (err) {
                            console.log(err);
                            res.status(400).send({
                                message: err.message.toString()
                            });
                        }
                        else {
                            console.log(result);
                            //res.json(result);
                            res.status(200).send({
                                message: 'Login successful!',
                                token: jwt.sign({ username: req.body.username }, secret)
                            });
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