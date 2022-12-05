import * as listeners from "./handlers/index.mjs";
import * as templates from "./templates/index.mjs";
import * as postMethods from "./api/posts/index.mjs";

const path = location.pathname;

if (path === "/pages/login/") {
    listeners.setLoginFormListener();
} else if (path === "/pages/register/") {
    listeners.setRegisterFormListener();
} else if (path === "/pages/post/create/") {
    listeners.setCreatePostFormListener;
} else if (path === "/pages/post/edit/") {
    listeners.setUpdatePostFormListener;
}

/* TESTING SINGLE-POST WORKING***

async function testTemplate() {
    const posts = await postMethods.getPosts();
    const post = posts.pop();
    const container = document.querySelector("#single-post");
    renderPostTemplate(post, container);
}

testTemplate();

*/

/* TEST POSTS WORKING***

async function testTemplate() {
    const posts = await postMethods.getPosts();
    const container = document.querySelector("#posts");
    templates.renderPostTemplates(posts, container);
}

testTemplate();

*/
