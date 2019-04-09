
class Post {
    constructor(id, userId, createdAt, type, comments) {
        this.id = id;
        this.userId = userId;
        this.createdAt = createdAt;
        this.type = type;
        this.comments = comments;
    }
}
//export default Post;

class PostVideo extends Post {
    constructor(id, userId, createdAt, type, comments, videoUrl) {
        super(id, userId, createdAt, type, comments)
        this.videoUrl = videoUrl;
    }
}
class PostImage extends Post {
    constructor(id, userId, createdAt, type, comments, imageUrl) {
        super(id, userId, createdAt, type, comments)
        this.imageUrl = imageUrl;
    }
}

class PostText extends Post {
    constructor(id, userId, createdAt, type, comments, text) {
        super(id, userId, createdAt, type, comments)
        this.text = text;
    }
}
export { Post, PostVideo, PostImage, PostText }