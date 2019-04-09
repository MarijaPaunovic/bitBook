import { API_BASE_URL } from '../shared/constants';
// import Post from '../entities/Post';
import { PostVideo, PostImage, PostText } from '../entities/Post';
const fetchPosts = () => {
    return fetch(`${API_BASE_URL}/posts?_embed=comments`, {
        method: "GET",
        headers: {
            "content-type": "application/json",
            "x-api-key": "B1tD3V"
        }
    })
        .then(response => response.json())
        .then(postsArray => {
            const posts = postsArray
                .map(post => {
                    if (post.type === 'video') {
                        return new PostVideo(post.id, post.userId, post.createdAt, post.type, post.comments, post.videoUrl)
                    }
                    else if (post.type === 'image') {
                        return new PostImage(post.id, post.userId, post.createdAt, post.type, post.comments, post.imageUrl)
                    }
                    else if (post.type === 'text') {
                        return new PostText(post.id, post.userId, post.createdAt, post.type, post.comments, post.text)
                    }
                    else {
                        return "Error"
                    }

                })

            return posts;
        })
}

export default fetchPosts;