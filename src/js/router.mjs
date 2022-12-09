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
    */
  }
}

/**
 * Displays the posts on the /profile/index.html
 */
async function testTemplate() {
  const posts = await postMethods.getPosts();
  const container = document.querySelector("#posts");
  templates.renderPostTemplates(posts, container);
}

testTemplate();
