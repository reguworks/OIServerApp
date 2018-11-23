import { Request, Response, next } from 'express';
const config = require('../../settings/config.json');
import * as jwt from 'jsonwebtoken';
import connection from '../database/db';
import { Logger } from '../logger';


export class DBHelper {
    public static verifyToken(req: Request, res: Response) {
        let token = req.headers.authorization;
        let tokenStr;
        try {
            Logger.info('Token received: ' + token.toString());
            if(token != undefined){
                tokenStr = token.substr(7, token.length);
            }

            var decoded = jwt.verify(tokenStr, config.secret);
            Logger.info('Token: ' + token.toString() + ' verified successfully!');

        } catch (err) {
            res.status(400).send({
                message: err.message.toString()
            });

            Logger.error('Token: ' + token.toString() + ' was unable to be verified: ' + err.message.toString());
            return;
        }
    }

    public static executeQuery(req: Request, res: Response, query: string){
        try {
            Logger.info('Query begin: ' + query.toString());
            connection.getConnection(function (err, conn) {
                conn.query(query, function (err, result, fields) {
                        if (err) {                            
                            Logger.error('Query: ' + query.toString() + ' caused an error: ' + err.message.toString());
                            res.status(400).send({
                                message: err.message.toString()
                            });                            
                        }
                        else {
                            Logger.info('Query: ' + query.toString() + ' was executed successfully!');
                            res.json(result);                            
                        }
                        conn.release();
                    })
            })
        } catch (err) {
            Logger.error('Error while executing a query (public static executeQuery): '   + err.message.toString());
            res.status(400).send({
                message: err.message.toString()
            });
        }
    }
}