import express from 'express';
import HttpStatus from 'http-status-codes';
import { postService } from '../services/post-service.js';
import { validator } from '../middleware/validator.js';
import { validatorSchema } from '../middleware/schema-validator.js';

const router = express.Router();

const create = async (request, response) => {
    const post = request.body;
    const createdPost = await postService.create(post);
    response.status(HttpStatus.OK).json(createdPost);
};

const findAll = async (request, response) => {
    const posts = await postService.findAll();
    response.status(HttpStatus.OK).json(posts);
};

const findById = async (request, response) => {
    const postId = request.params.id;
    const post = await postService.findById(postId);
    response.status(HttpStatus.OK).json(post);
};

const deleteById = async (request, response) => {
    const postId = request.params.id;
    const deletedPost = await postService.deleteById(postId);
    response.status(HttpStatus.OK).json('Post deleted ' + deletedPost);
};

router.post('/create', validator(validatorSchema), create);
router.get('/findall', findAll);
router.get('/:id', findById);
router.delete('/:id', deleteById);

export const postController = router;