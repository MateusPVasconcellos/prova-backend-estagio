import { PostSchema } from '../infra/schema/post-schema.js';

class PostRepository {
    create(post) {
        return PostSchema.create(post);
    }

    findAll() {
        return PostSchema.findAll();
    }

    findById(id) {
        return PostSchema.findByPk(id);
    }

    deleteById(id) {
        return PostSchema.destroy({
            where: { id }
        });
    }
}

export const postRepository = new PostRepository();