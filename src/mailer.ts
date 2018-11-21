import * as nodemailer from 'nodemailer';
import { Message } from './models/message'
import { Request, Response, next } from 'express';
import * as mailerSettings from './settings/mailer-user';

export class Mailer {

    public sendMail(message: Message, res: Response) {
        let smtpConfig = {
            host: mailerSettings.host,
            port: mailerSettings.port,
            secure: true, // use SSL
            auth: {
                user: mailerSettings.sender,
                pass: mailerSettings.password
            }
        };

        let transporter = nodemailer.createTransport(smtpConfig);

        let mailOptions = {
            from: mailerSettings.sender,
            to: mailerSettings.receiver,
            subject: mailerSettings.subject,
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





