export const singlePost = (title, date, author, body, media) => {
  const postTemplate = `
    <div class="card mt-3">
    <div class="d-flex justify-content-between p-2 px-3">
        <div class="d-flex flex-row align-items-center">
                <img src="https://picsum.photos/200/300
                "
                />
                <div class="d-flex flex-column ml-2 p-2">
                    <span class="font-wigth-bold"></span>
                </div>
            </div>
        </div>
        <img src="${media}" class="img-fluid" />
        <div class="p-2">
            <h4 class="card-text">${title}</h4>
            <p class="text-justify">${body}
        </p>
        <p>${author}</p>
        <p>${date}</p>
    </div>
</div>`;

  return postTemplate;
};
