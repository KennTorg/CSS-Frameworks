// import "./router.mjs"
import * as listeners from "./handlers/index.mjs";
// import * as getProfile from "./api/profile/read.mjs";
import * as postMethods from "./api/posts/index.mjs";

const path = location.pathname;

if (path === "/pages/login/") {
  listeners.setLoginFormListener();
} else if (path === "/pages/register/") {
  listeners.setRegisterFormListener();
} else if (path === "/pages/post/edit/") {
  listeners.setUpdatePostFormListener;
} else if (path === "/pages/profile/") {
  listeners.setCreatePostFormListener;
  postMethods.postFeed();
  // postMethods.getSearchedPosts();
  // postMethods.getFilteredPosts();
} else if (path === "/pages/post/") {
  postMethods.getPost();
  postMethods.singlePost();
}

/* TESTING SINGLE-POST WORKING***

async function testTemplate() {
    const posts = await postMethods.getPosts();
    const post = posts.pop();
    const container = document.querySelector("#single-post");
    renderPostTemplate(post, container);
}

testTemplate();



// TEST POSTS WORKING***

async function testTemplate() {
  const posts = await postMethods.getPosts();
  const container = document.querySelector("#posts");
  templates.renderPostTemplates(posts, container);
}

testTemplate();

*/

/**
 * Displays the posts on the /profile/index.html

async function testTemplate() {
  const posts = await postMethods.getPosts();
  const container = document.querySelector("#posts");
  templates.renderPostTemplates(posts, container);
}

testTemplate();
 */
