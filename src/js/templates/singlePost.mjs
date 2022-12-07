export function singlePost(postData) {
  return `
  <div class="card mt-3">
    <div class="d-flex justify-content-between p-2 px-3">
      <div class="d-flex flex-row align-items-center">
          <img
              src="/images/profile/blank-profile-picture-g975e77de3_1280.png"
              width="50"
              class="rounded-circle"
          />
          <div class="d-flex flex-column ml-2 p-2">
              <span class="font-wigth-bold">Ola Normann</span>
          </div>
      </div>
    </div>
    <img src="${postData.media}" />
  <div class="p-2">
    <h4 class="card-text">${postData.title}</h4>
        <p class="text-justify">
            ${postData.body}
        </p>
  </div>
 </div>`;
}
