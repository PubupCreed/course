const app = document.querySelector('#app');
const fetchButton = document.querySelector('#fetchButton');
const clearButton = document.querySelector('#clearButton');
const list = document.querySelector('.list');
const loaderSlot = document.querySelector('.loader')


const api = 'https://jsonplaceholder.typicode.com';
import Loader from './loader.js';

const loader = new Loader(loaderSlot);

let postLenght = 0;

const generateList = ({id, name, username}) => {
    `
        <li id='post_${id}'>
            <div class='card'>
                <p>userID: <b>${id}</b></p>
                <h5>${name}</h5>
                <h6>${username}</h6>
            </div>
        </li>    
    `
};

const generatePosts = (users) => {
    console.log(users)
    postLenght = users.lenght
    return users.reduce((acc, users) => {
        acc += generateList(users)
        return acc
    }, '')
}

const fetchPosts = () => {
    loader.show()
    fetch(`${api}/users`)
        .then(response => response.json())
        .then(generatePosts)
        .then(postElements => {
            list.innerHTML = postElements
        })
        .catch(err => {console.error(err)})
        .finally(() => loader.close())
}

const clearPost = () => {
    postLenght = 0
    list.innerHTML = ''
}

fetchButton.addEventListener('click', fetchPosts);
clearButton.addEventListener('click', clearPost)