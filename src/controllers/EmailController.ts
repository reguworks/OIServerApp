import { Request, Response, next } from 'express';
import { Mailer } from '../mailer/mailer';
import { Message } from '../models/message'


export class EmailController {
    constructor() {
    }

    public sendemail(req: Request, res: Response) {

        let message: Message = new Message();
        let mailer: Mailer = new Mailer();

        message.firstName = req.body.firstName;
        message.lastName = req.body.lastName;
        message.email = req.body.email;
        message.phone = req.body.phone;
        message.message = req.body.message;

        mailer.sendMail(message, res); 
    }
}