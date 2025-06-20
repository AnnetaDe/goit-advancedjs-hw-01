import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{S as l}from"./assets/vendor-g6-w1428.js";const r=[{preview:"gallery/1.png",original:"gallery/1@2x.png",description:"description 1"},{preview:"gallery/1-1.png",original:"gallery/1@2x-1.png",description:"description 2"},{preview:"gallery/2-1.png",original:"/gallery/2@2x-1.png",description:"description 3"},{preview:"gallery/2.png",original:"gallery/2@2x.png",description:"description 4"},{preview:"gallery/3-1.png",original:"gallery/3@2x-1.png",description:"description 5"},{preview:"gallery/3.png",original:"gallery/3@2x.png",description:"description 6"}];document.createElement("div");const i=document.querySelector(".gallery");if(!i){const e=document.createElement("ul");e.classList.add("gallery"),document.body.appendChild(e)}const n=r.map(e=>`<li class="gallery-item">
    <a class="gallery-link" href="${e.original}">
      <img class="gallery-image" src="${e.preview}" alt="${e.description}" />
    </a>
  </li>`);i.insertAdjacentHTML("beforeend",n.join(""));new l(".gallery a",{captionsData:"alt",captionDelay:250});
//# sourceMappingURL=page-3.js.map
