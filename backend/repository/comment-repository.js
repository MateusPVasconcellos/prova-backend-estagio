import { CommentSchema } from '../infra/schema/comment-schema.js';

class CommentRepository {
    create(username, postId) {
        return CommentSchema.create({
            username,
            postId
        });
    }

    deleteById(id) {
        return CommentSchema.destroy({
            where: {id}
        });
    }

}

export const commentRespository = new CommentRepository();