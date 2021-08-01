import { Content } from "./components/content.js";


let content = document.getElementById('content');
let aside = document.getElementById('aside');


let url = "https://jui1710.github.io/json-data-server/blogs/blogs.json";

const getBlog = (data) => {
    return data[Math.floor(Math.random() * data.length)].id;
}


const createBlogPage = async () => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        Content(data, getBlog(data));
    }
    catch (err) { err => console.log(err) }
}

createBlogPage();

// fetch(url)
//     .then(response => response.json())
//     .then((data) => {
//         Content(data, getBlog(data));
//     })
//     .catch(err => console.log(err));

