// ************** FROM /POSTS/READ.MJS *******************
/**
 * Function that displays single post.
 
export async function singlePost() {
  const queryString = document.location.search;
  const params = new URLSearchParams(queryString);
  const id = params.get("id");

  const post = await getPost(id);
  const singlePostContainer = document.querySelector("#single-post");
  templates.renderPostTemplate(post, singlePostContainer);
}
*/

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

/*
// TESTING SINGLE-POST WORKING***

export async function testTemplate() {
  const posts = await postMethods.getPosts();
  const post = posts.pop();
  const container = document.querySelector("#single-post");
  renderPostTemplate(post, container);
}

testTemplate();

/*
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

// **************** FROM TEMPLATES/POST.MJS **************
/**
 * Creates HTML for a single post on /pages/post/.
 * @param {string} postData
 

export function singlePostTemplate(postData) {
  const { author, id } = postData;
  const { name, avatar } = author;

  const singlePost = document.querySelector(".singlePostName");
  const path = location.pathname;
  if (path === "/pages/post/index.html") {
    singlePost.innerText = name;
  }

  const post = document.createElement("div");
  post.classList = "card mt-3";

  // Post Header

  const postHeader = document.createElement("div");
  postHeader.classList = "d-flex justify-content-between p-2 px-3";
  post.append(postHeader);

  const user = document.createElement("div");
  user.classList = "d-flex flex-column ml-2 p-2";

  const postAuthor = document.createElement("span");
  postAuthor.classList = "font-wigth-bold";
  postAuthor.innerText = name;

  if (avatar) {
    const userAvatar = document.createElement("img");
    userAvatar.classList = "rounded-circle";
    userAvatar.src = avatar;
    userAvatar.alt = `${name}s Avatar`;
    userAvatar.width = "50";
    user.append(userAvatar, postAuthor);
    postHeader.append(user);
  } else {
    const userAvatar = document.createElement("img");
    userAvatar.classList = "rounded-circle";
    userAvatar.src = "https://picsum.photos/seed/picsum/200/300";
    userAvatar.alt = `default Avatar`;
    userAvatar.width = "50";
    user.append(userAvatar, postAuthor);
    postHeader.append(user);
  }

  if (postData.media) {
    const img = document.createElement("img");
    img.src = postData.media;
    img.alt = `Image from ${postData.title}`;
    post.append(img);
  }

  // Post body
  const postBodyContainer = document.createElement("div");
  postBodyContainer.classList = "card-body";
  post.append(postBodyContainer);

  const postTitle = document.createElement("h4");
  postTitle.classList = "card-text";
  postTitle.innerText = postData.title;
  postBodyContainer.append(postTitle);

  const postBody = document.createElement("p");
  postBody.classList = "card-text";
  postBody.innerText = postData.body;
  postBodyContainer.append(postBody);

  return post;
}

*/

// ********************* FROM ROUTER.MJS ***************************

/*
import * as listeners from "./handlers/index.mjs";
import * as templates from "./templates/index.mjs";
import * as postMethods from "./api/posts/index.mjs";

export default function router() {
  const path = location.pathname;

  switch (path) {
    case "/pages/login/":
      listeners.setLoginFormListener();
      break;
    case "/pages/register/":
      listeners.setRegisterFormListener();
      break;
    case "/pages/post/create/":
      listeners.setCreatePostFormListener();
      break;
    case "/pages/post/edit/":
      listeners.setUpdatePostFormListener();
      break;
    /*
    case "/pages/profile/edit/":
            listeners.setUpdateProfileFormListener();
            break;
    
  }
} 
*/
