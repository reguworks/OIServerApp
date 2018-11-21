import { Request, Response, next } from 'express';
import connection from '../settings/db';
import * as jwt from 'jsonwebtoken';
import { DBHelper } from '../models/dbHelper'

import secret  from '../settings/secret'

export class UserController {
    //private query: string = "";
    
    constructor() {
    }
    public getAllUsers(req: Request, res: Response) {
        DBHelper.verifyToken(req, res);
        let query = "CALL user_list();";
        DBHelper.executeQuery(req, res, query)        
    }
    public createUser(req: Request, res: Response) {
        DBHelper.verifyToken(req, res); 
        let query  = "CALL user_insert("+
        "'" + req.body.username + "',"+
        "'" + req.body.firstName + "',"+
        "'" + req.body.lastName + "',"+
        "'" + req.body.password + "'"+
         ")";
         DBHelper.executeQuery(req, res, query)   
    }
    public updateUser(req: Request, res: Response) {
        DBHelper.verifyToken(req, res); 
        let query  = "CALL user_update(" +
        "'" + req.body.username + "'," +
        "'" + req.body.id + "'," +
        "'" + req.body.firstName + "'," +
        "'" + req.body.lastName + "'," +
        "'" + req.body.password + "'" +
        ")";
        DBHelper.executeQuery(req, res, query)         
    }
    public deleteUser(req: Request, res: Response) {
        DBHelper.verifyToken(req, res); 
        let query  = "CALL user_delete('" + req.body.id + "')";
        DBHelper.executeQuery(req, res, query) 
    }

    public deleteUserByID(req: Request, res: Response) {
        DBHelper.verifyToken(req, res); 
        let query  = "CALL user_delete('" + req.params.id + "')"
        DBHelper.executeQuery(req, res, query) 
    }

    public userLogin(req: Request, res: Response) {
        try {
            connection.getConnection(function (err, conn) {
                conn.query("CALL user_login(" +
                "'" + req.body.username + "'," +
                "'" + req.body.password + "'" +
                ")"
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