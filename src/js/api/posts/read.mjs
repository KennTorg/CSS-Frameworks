import { API_SOCIAL_URL } from "../constants.mjs";
import { authFetch } from "../authFetch.mjs";
import * as templates from "../../templates/index.mjs";
import { renderPostTemplates } from "../../templates/index.mjs";

const action = "/posts";
const author = "?_author=true";

/**
 * Gets defaults numbers of posts
 * @returns 100 posts
 */

export async function getPosts() {
  const getPostsURL = `${API_SOCIAL_URL}${action}${author}`;

  const response = await authFetch(getPostsURL);

  return await response.json();
}

/**
 * Gets the post with ID from the API.
 * @param {number} id of the the post.
 * @returns a single post.
 */

export async function getPost(id) {
  if (!id) {
    throw new Error("Requires postID");
  }
  const getPostURL = `${API_SOCIAL_URL}${action}/${id}${author}`;

  const response = await authFetch(getPostURL);

  const post = await response.json();

  return post;
}

/**
 * Displays the posts on "/profile/ feed
 */
export async function postFeed() {
  const posts = await getPosts();
  const container = document.querySelector("#posts");
  templates.renderPostTemplates(posts, container);
}

/**
 * displays singlePost
 */

export const getSinglePost = async () => {
  const queryString = document.location.search;
  const params = new URLSearchParams(queryString);
  const id = params.get("id");

  const post = await getPost(id);
  const singlePostContainer = document.querySelector("#single-post");
  renderPostTemplates.renderPostTemplate(post, singlePostContainer);
};

/**
 * Gets searched posts
 */

/* export async function getSearchedPosts() {
  const posts = await getPosts();
  const container = document.querySelector("#posts");
  searchFilter.renderSearchedPosts(posts, container);
} */

/**
 * Gets filtered posts
 */

/* export async function getFilteredPosts() {
  const posts = await getPosts();
  const container = document.querySelector("#posts");
  searchFilter.renderFilteredPosts(posts, container);
} */
