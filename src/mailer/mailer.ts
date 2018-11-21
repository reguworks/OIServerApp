import * as nodemailer from 'nodemailer';
import { Message } from '../models/message'
import { Request, Response, next } from 'express';

export class Mailer {

    public sendMail(message: Message, res: Response) {

        var smtpConfig = {
            host: 'smtp.abv.bg',
            port: 465,
            secure: true, // use SSL
            auth: {
                user: 'mlipcinski@abv.bg',
                pass: 'Ml254163!'
            }
        };

        let transporter = nodemailer.createTransport(smtpConfig);

        let mailOptions = {
            from: 'mlipcinski@abv.bg',
            to: 'mlipcinski@abv.bg',
            subject: 'Query for Optimal Insurance',
            text: 'First Name: ' + message.firstName + '\n' + 'Last Name: ' + message.lastName + '\n' + 'Email: ' + message.email + '\n' + 'Phone: ' + message.phone + '\n' + 'Message: ' + message.message
        };

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error.message);
                res.status(400).send({
                    message: error.message.toString()
                });
            }
            else {
                res.json(info.response.toString());
            }
        });
    }
}





