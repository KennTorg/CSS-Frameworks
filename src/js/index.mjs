import * as listeners from "./handlers/index.mjs";
import * as postMethods from "./api/posts/index.mjs";
import * as templates from "./templates/index.mjs";

const path = location.pathname;

if (path === "/pages/login/") {
  listeners.setLoginFormListener();
} else if (path === "/pages/register/") {
  listeners.setRegisterFormListener();
} else if (path === "/pages/post/edit/") {
  listeners.setUpdatePostFormListener();
} else if (path === "/pages/profile/") {
  listeners.setCreatePostFormListener();
  postMethods.postFeed();
  //postMethods.getSearchedPosts();
  //postMethods.getFilteredPosts();
} else if (path === "/pages/post/") {
  postMethods.getSinglePost();
}
