import { Router } from 'express';
import { CreateUserController } from './controllers/CreateUserController';
import { CreateTagController } from './controllers/CreateTagController'
import { ensureAdmin } from './middlewares/ensureAdmin';
import { AuthenticateUserController } from './controllers/AuthenticateUserController';
import { CreateComplimentController } from './controllers/CreateComplimentController';

const routes = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenticateUserController();
const createComplimentController = new CreateComplimentController()

routes.post('/user', createUserController.handler);
routes.post('/tag', ensureAdmin, createTagController.handler);
routes.post('/login', authenticateUserController.handler);
routes.post('/compliment', createComplimentController.handler);

export { routes }