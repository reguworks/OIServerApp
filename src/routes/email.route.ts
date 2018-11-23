import { EmailController } from '../controllers/email.controller';

export class EmailRoutes {
    public controller: EmailController = new EmailController();

    public routes(app): void {
        app.route('/email')
        .post(this.controller.sendemail)
        
    }
}