import { UserController } from '../controllers/UserController';

export class UserRoutes {
    public controller: UserController = new UserController();

    public routes(app): void {
        app.route('/users')
        .get(this.controller.getAllUsers)
        .post(this.controller.createUser)
        .put(this.controller.updateUser)
        .delete(this.controller.deleteUser)

        app.route('/users/:id')
        .delete(this.controller.deleteUserByID)
    }
}

