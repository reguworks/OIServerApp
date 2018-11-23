import { Request, Response, next } from 'express';
import connection from '../models/db';
import * as jwt from 'jsonwebtoken';
import { DBHelper } from '../models/dbHelper'
import { Logger } from '../logger';

const config = require('../../settings/config.json');

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
            Logger.info('User: ' + req.body.username + ' attempting login');
            connection.getConnection(function (err, conn) {
                conn.query("CALL user_login(" +
                "'" + req.body.username + "'," +
                "'" + req.body.password + "'" +
                ")"
                    , function (err, result, fields) {
                        if (err) {
                            res.status(400).send({
                                message: err.message.toString()
                            });
                            Logger.error('User: ' + req.body.username + ' was unable login: ' + err.message.toString());
                        }
                        else {
                            Logger.info('Login: ' + req.body.username + ' successfull!');
                            res.status(200).send({
                                message: 'Login successful!',
                                token: jwt.sign({ username: req.body.username }, config.secret)
                            });
                            
                        }

                        conn.release();
                    })
            })
        } catch (err) {
            Logger.error('Error while logging in (public userLogin): ' + err.message.toString());
            res.status(400).send({
                message: err.message.toString()
            });
        }
    }
}