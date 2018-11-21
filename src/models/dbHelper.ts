import { Request, Response, next } from 'express';
import secret  from '../settings/secret'
import * as jwt from 'jsonwebtoken';
import connection from '../settings/db';

export class DBHelper {
    public static verifyToken(req: Request, res: Response) {
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
    }

    public static executeQuery(req: Request, res: Response, query: string){
        try {
            connection.getConnection(function (err, conn) {
                conn.query(query, function (err, result, fields) {
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