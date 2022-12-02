import { API_SOCIAL_URL } from "../constants.mjs";

import { authFetch } from "../authFetch.mjs";

const action = "/posts";

/**
 * Gets defaults numbers of posts from the API(100 posts).
 */

export async function getPosts() {
    const updatePostURL = `${API_SOCIAL_URL}${action}`;

    const response = await authFetch(updatePostURL);

    return await response.json();
}

/**
 * Calling the post with ID from the API.
 * @param {number} id of the the post.
 */

export async function getPost(id) {
    if (!id) {
        throw new Error("Get requires a postID");
    }
    const getPostURL = `${API_SOCIAL_URL}${action}/${id}`;

    const response = await authFetch(getPostURL);

    return await response.json();
}
