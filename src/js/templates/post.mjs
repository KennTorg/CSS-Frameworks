import * as posts from "../api/posts/index.mjs";
import { load } from "../storage/index.mjs";

/**
 * Creates HTML for list of posts on /pages/profile/.
 * @param {string} postData
 */

export function postTemplate(postData) {
  const { author, id } = postData;
  const { name, avatar } = author;

  const post = document.createElement("div");
  post.classList = "card mt-3";

  // Post Header ************ wait till avatar and banner is called using the edit profile! ******

  const postHeader = document.createElement("div");
  postHeader.classList = "d-flex justify-content-between p-2 px-3";
  post.append(postHeader);

  const user = document.createElement("div");
  user.classList = "d-flex flex-row ml-2 p-2";

  const postAuthor = document.createElement("span");
  postAuthor.classList = "font-weight-bold";
  postAuthor.innerText = name;

  if (avatar) {
    const userAvatar = document.createElement("img");
    userAvatar.classList = "rounded-circle";
    userAvatar.src = avatar;
    userAvatar.alt = `${name}s Avatar`;
    userAvatar.width = "50";
    userAvatar.height = "50";
    user.append(userAvatar, postAuthor);
    postHeader.append(user);
  } else {
    const userAvatar = document.createElement("img");
    userAvatar.classList = "rounded-circle";
    userAvatar.src = "https://picsum.photos/seed/picsum/200/300";
    userAvatar.alt = `default Avatar`;
    userAvatar.width = "50";
    userAvatar.height = "50";
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

  const viewPost = document.createElement("a");
  viewPost.classList = "d-flex m-3 me-5";
  viewPost.setAttribute("href", `/pages/post/index.html`);
  viewPost.innerHTML = "View Post";
  postBodyContainer.append(viewPost);

  return post;
}

/**
 * Creates HTML for a single post on /pages/post/.
 * @param {string} postData
 */

export function singlePostTemplate(postData) {
  const { author, id } = postData;
  const { name, avatar } = author;

  const singlePost = document.querySelector(".singlePostName");
  const path = location.pathname;
  if (path === "/pages/post/") {
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

export function renderPostTemplate(postData, parent) {
  parent.append(singlePostTemplate(postData));
}

export function renderPostTemplates(postDataList, parent) {
  parent.append(...postDataList.map(postTemplate));
}
