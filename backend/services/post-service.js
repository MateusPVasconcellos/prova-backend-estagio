import { throwIf } from '../helper/throw-if.js';
import HttpStatus from 'http-status-codes';
import { postRepository } from '../repository/post-repository.js';
import { BusinessException } from '../exceptions/business-exception.js';

class PostService {
    async create(post) {
        const createdPost = await postRepository.create(post);
        return createdPost;
    }

    async findAll() {
        const allPosts = await postRepository.findAll();
        throwIf(new BusinessException('Not found', HttpStatus.BAD_REQUEST), !allPosts);
        return allPosts;
    }

    async findById(id) {
        const post = await postRepository.findById(id);
        throwIf(new BusinessException('Not found', HttpStatus.BAD_REQUEST), !post);
        return post;
    }

    async deleteById(id) {
        const deletedPost = await postRepository.deleteById(id);
        throwIf(new BusinessException('Not found', HttpStatus.BAD_REQUEST), !deletedPost);
        return deletedPost;
    }
}

export const postService = new PostService();