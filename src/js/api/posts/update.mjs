import { API_SOCIAL_URL } from "../constants.mjs";

import { authFetch } from "../authFetch.mjs";

const action = "/posts";
const method = "put";

/**
 * Updates a post
 * @param {string} postData - Input information.
 */

export async function updatePost(postData) {
    // Error for missing post id.
    if (postData.id) {
        throw new Error("Update requires a postID");
    }

    const updatePostURL = `${API_SOCIAL_URL}${action}/${postData.id}`;

    const response = await authFetch(updatePostURL, {
        method,
        body: JSON.stringify(postData)
    });

    return await response.json();
}
