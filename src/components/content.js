

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

    let markupAside = document.getElementById('aside');
    let relatedlinks = document.createElement('h1');
    relatedlinks.textContent = "Related Links";
    markupAside.appendChild(relatedlinks);

    let Links = currentObj.links;
    Links.forEach(element => {
        let link = document.createElement('a');
        link.textContent = element.title;
        // link.onclick = gotoLink(data, link.id);

        link.addEventListener('click', event => {
            gotoLink(data, element.id);
        })
        markupAside.appendChild(link);

        let breakruler = document.createElement('br');
        markupAside.appendChild(breakruler);
    });

}

const gotoLink = (data, id) => {
    Content(data, id);
}


