import { UserController } from '../controllers/UserController';

export class UserRoutes {
    public controller: UserController = new UserController();

    public routes(app): void {

        app.route('/users')
        .get(this.controller.getAllUsers);
    }
}

