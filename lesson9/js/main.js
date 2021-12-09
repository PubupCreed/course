const app = document.querySelector("#app");
const fetchButton = document.querySelector("#fetchButton");
const clearButton = document.querySelector("#clearButton");
const list = document.querySelector(".list");
const loaderSlot = document.querySelector(".loader");
const createPostButton = document.querySelector("#createPostButton");

const api = "https://jsonplaceholder.typicode.com";
import Loader from "./loader.js";

const loader = new Loader(loaderSlot);

let postLenght = 0;

const generatePosts = post => {
  console.log(post);
  postLenght = post.lenght;
  return post.reduce((acc, post) => {
    acc += generateList(post);
    return acc;
  }, "");
};

const fetchPosts = () => {
  loader.show();
  fetch(`${api}/users`)
    .then(response => response.json())
    .then(generatePosts)
    .then(postElements => {
      list.innerHTML = postElements;
    })
    .catch(err => {
      console.error(err);
    })
    .finally(() => loader.close());
};

const clearPost = () => {
  postLenght = 0;
  list.innerHTML = "";
};

const generateList = ({ id, name, username }) => {
  return `
        <li id='post_${id}'>
            <div class='card'>
                <p>userID: <b>${id}</b></p>
                <h5>${name}</h5>
                <h6>${username}</h6>
            </div>
        </li>    
    `;
};

const createPost = (post) => {
  loader.show()

  fetch(`${api}/users`, {
    method: 'POST',
    body: JSON.stringify(post),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    }
  })
    .then(response => response.json())
    .then(generatePosts)
    .then(element => {
      list.insertAdjacentElement('afterbegin', element)
    })
    .catch(err => {
      console.error(err)
    })
    .finally(() => {
      loader.close()
    })
};

const createPostFormAction = e => {
  e.preventDefault();
  const form = document.forms.createPostForm;
  const formData = new FormData(form);
  const post = ['title', 'body', 'userId'].reduce((acc, fieldName) => ({
    ...acc,
    [fieldName]: formData.get(fieldName)
  }), { id: postLenght + 1 })
  createPost(post)
};

fetchButton.addEventListener("click", fetchPosts);
clearButton.addEventListener("click", clearPost);
createPostButton.addEventListener("click", createPostFormAction);
