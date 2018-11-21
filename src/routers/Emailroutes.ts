import { EmailController } from '../controllers/EmailController';

export class EmailRoutes {
    public controller: EmailController = new EmailController();

    public routes(app): void {
        app.route('/email')
        .post(this.controller.sendemail)
        
    }
}