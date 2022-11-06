import express from 'express';
import HttpStatus from 'http-status-codes';
import { commentService } from '../services/comment-service.js';
import { validator } from '../middleware/validator.js';
import { validatorSchema } from '../middleware/schema-validator.js';

const router = express.Router();

const create = async (request, response) => {
    const { username } = request.body;
    const postId = request.params.id;
    const createdComment = await commentService.create(username, postId);
    response.status(HttpStatus.OK).json(createdComment);
};

const deleteById = async (request, response) => {
    const commentId = request.params.id;
    const deletedComment = await commentService.deleteById(commentId);
    response.status(HttpStatus.OK).json('Comment deleted ' + deletedComment);
};

router.post('/create/:id', validator(validatorSchema), create);
router.delete('/:id', deleteById);

export const commentController = router;