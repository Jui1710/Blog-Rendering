import { Aside } from "./aside.js";


export const Content = (data, id) => {
    let currentObj = data.find(obj => obj.id === id);
    let markup = document.getElementById('content');
    let Title = document.createElement('h1');
    Title.textContent = currentObj.title;
    markup.appendChild(Title);

    let BlogImageContainer = document.createElement('div');
    BlogImageContainer.classList.add('image-container');
    let ImageContainer = document.createElement('img');
    ImageContainer.src = currentObj.imageUrl;
    BlogImageContainer.appendChild(ImageContainer);
    markup.appendChild(BlogImageContainer);

    let BlogContent = document.createElement('p');
    BlogContent.textContent = currentObj.content;
    markup.appendChild(BlogContent);

    Aside(data, currentObj.links);
}


