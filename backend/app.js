import './dotenv.js';
import express from 'express';
import bodyParser from 'body-parser';
import 'express-async-errors';
import cors from 'cors';
import { database } from './infra/database.js';
import { errorHandler } from './middleware/error-handler.js';
import { postController } from './controllers/post-controller.js';
import { commentController } from './controllers/comment-controller.js';

const { PORT } = process.env;

const app = express();
const router = express.Router();

// Loading database
database.authenticate().then(() => {
    console.log('Connection has been established successfully with database.');
}).catch(e => {
    console.log('Unable to connect to the database:', e);
});

// Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Endpoint routes
console.log('Loading endpoints...');
router.use('/post', postController);
router.use('/comment', commentController);

// Error handlers
console.log('Loading error handlers...');
router.use(errorHandler);

// Load routes, interceptors and handlers
app.use(router);

app.listen(PORT, () => {
    console.log(`Server is now running on port ${PORT}`);
});