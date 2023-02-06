/**
 * Search posts
 */

/* export function renderSearchedPosts(postDataList, parent) {
  const searchInput = document.querySelector(".search");

  searchInput.addEventListener("keyup", async (event) => {
    event.preventDefault();
    const container = document.querySelector("#posts");
    container.innerHTML = "";

    postDataList.forEach((posts) => {
      if (
        posts.title.toLowerCase().startsWith(searchInput.value) ||
        posts.author.name.toLowerCase().startsWith(searchInput.value)
      ) {
        parent.append(postTemplate(posts));
      }
    });
  });
} */

/**
 * Filters posts
 */

/* export function renderFilteredPosts(postDataList, searchInput) {
  if(postDataList.searchInput) {
    if (
      postDataList.body.toLowerCase().includes(searchValue.toLowerCase()) ||
      postDataList.title.toLowerCase().includes(searchInput.toLowerCase)) ||
      postDataList.author.toLowerCase().includes(searchInput.toLowerCase());
      
      return postDataList;
    }
  } */
