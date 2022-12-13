import { API_SOCIAL_URL } from "../constants.mjs";
import { authFetch } from "../authFetch.mjs";
import * as templates from "../../templates/index.mjs";

const action = "/posts";
const author = "?_author=true";

/**
 * Gets defaults numbers of posts from the API(100 posts).
 */

export async function getPosts() {
  const getPostsURL = `${API_SOCIAL_URL}${action}${author}`;

  const response = await authFetch(getPostsURL);

  return await response.json();
}

/**
 * Calling the post with ID from the API.
 * @param {number} id of the the post.
 * @returns a single post.
 */

export async function getPost(id) {
  if (!id) {
    throw new Error("Requires postID");
  }
  const getPostURL = `${API_SOCIAL_URL}${action}/${id}${author}`;

  const response = await authFetch(getPostURL);

  return await response.json();
}

/**
 * Displays the posts on the "/profile/
 */
export async function postFeed() {
  const posts = await getPosts();
  const container = document.querySelector("#posts");
  templates.renderPostTemplates(posts, container);
}

/**
 * Function that displays single post.
 */
export async function singlePost() {
  const queryString = document.location.search;
  const params = new URLSearchParams(queryString);
  const id = params.get("id");

  const post = await getPost(id);
  const singlePostContainer = document.querySelector("#single-post");
  templates.renderPostTemplate(post, singlePostContainer);
}

/**
 * Function that displays the edited posts.
 */
/*
export async function displayEditedPost() {
  const queryString = document.location.search;
  const params = new URLSearchParams(queryString);
  const id = params.get("id");

  const post = await getPost(id);
  const singlePostContainer = document.querySelector("#");
  renderPostTemplates.renderPostTemplate(post, singlePostContainer);
}
*/

/**
 * The function that gets the searched posts.
 */

/*
export async function getSearchedPosts() {
  const posts = await getPosts();
  const container = document.querySelector("#posts");
  renderPostTemplates.renderSearchedPosts(posts, container);
}
*/

/**
 * The function that get the filtered posts.
 */

/*
export async function getFilteredPosts() {
  const posts = await postFilter();
  const container = document.querySelector("#posts");
  renderPostTemplates.renderFilteredPosts(posts, container);
}
*/
