import * as nodemailer from 'nodemailer';
import { Message } from './models/message'
import { Request, Response, next } from 'express';

const config = require('../settings/config.json');

export class Mailer {

    public sendMail(message: Message, res: Response) {
        let smtpConfig = {
            host: config['email-contact'].host,
            port: config['email-contact'].port,
            secure: config['email-contact'].secure,
            auth: {
                user: config['email-contact'].sender,
                pass: config['email-contact'].password
            }
        };

        let transporter = nodemailer.createTransport(smtpConfig);

        let mailOptions = {
            from: config['email-contact'].sender,
            to: config['email-contact'].receiver,
            subject: config['email-contact'].subject,
            text: 
                'First Name: ' + message.firstName + '\n' + 
                'Last Name: ' + message.lastName + '\n' + 
                'Email: ' + message.email + '\n' + 
                'Phone: ' + message.phone + '\n' + 
                'Message: ' + message.message
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





