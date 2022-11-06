import { throwIf } from '../helper/throw-if.js';
import HttpStatus from 'http-status-codes';
import { BusinessException } from '../exceptions/business-exception.js';
import { commentRespository } from '../repository/comment-repository.js';
import { postRepository } from '../repository/post-repository.js';

const businessException = new BusinessException('Not found.', HttpStatus.BAD_REQUEST);

class CommentService {
    async create(username, postId) {
        const post = await postRepository.findById(postId);
        throwIf(businessException, !post);
        const createdComment = await commentRespository.create(username, postId);
        return createdComment;
    }

    async deleteById(id) {
        const deletedComment = await commentRespository.deleteById(id);
        throwIf(businessException, !deletedComment);
        return deletedComment;
    }
}

export const commentService = new CommentService();