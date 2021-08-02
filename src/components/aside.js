import { Content } from "./content.js";
import { gotoLink } from "./gotolink.js";

export const Aside = (data, links) => {

    let markupAside = document.getElementById('aside');
    let relatedlinks = document.createElement('h1');
    relatedlinks.textContent = "Related Links";
    markupAside.appendChild(relatedlinks);

    let Links = links;
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


