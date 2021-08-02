import { Content } from "./content.js";


export const gotoLink = (data, id) => {
    var node = document.getElementById("content");
    node.querySelectorAll('*').forEach(n => n.remove());
    var node = document.getElementById("aside");
    node.querySelectorAll('*').forEach(n => n.remove());
    Content(data, id);
}


