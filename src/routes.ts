import { Router } from 'express';
import { CreateUserController } from './controllers/CreateUserController';
import { CreateTagController } from './controllers/CreateTagController'
import { ensureAdmin } from './middlewares/ensureAdmin';
import { AuthenticateUserController } from './controllers/AuthenticateUserController';
import { CreateComplimentController } from './controllers/CreateComplimentController';
import { ensureAuthenticated } from './middlewares/ensureAuthenticated';
import { ListUserSendComplimentsController } from './controllers/ListUserSendComplimentsController';
import { ListUserReceiveComplimentsController } from './controllers/ListUserReceiveComplimentsController';
import { ListTagsController } from './controllers/ListTagsController';
import { ListUserController } from './controllers/ListUserController';

const routes = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenticateUserController();
const createComplimentController = new CreateComplimentController();
const listUserSendComplimentsController = new ListUserSendComplimentsController();
const listUserReceiveComplimentsController = new ListUserReceiveComplimentsController();
const listTagsController = new ListTagsController();
const listUserController = new ListUserController();

routes.post('/user', createUserController.handler);
routes.post('/tag', ensureAuthenticated, ensureAdmin, createTagController.handler);
routes.post('/login', authenticateUserController.handler);
routes.post('/compliment', ensureAuthenticated, createComplimentController.handler);

routes.get('/user/compliments/send', ensureAuthenticated, listUserSendComplimentsController.handler)
routes.get('/user/compliments/receive', ensureAuthenticated, listUserReceiveComplimentsController.handler)
routes.get('/tag', ensureAuthenticated, listTagsController.handler)
routes.get('/user', ensureAuthenticated, ensureAdmin, listUserController.handler)

export { routes }