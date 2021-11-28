/*
# Lesson7
Доработать доработать функции сreate, read,readAll, update и remove, которые будет имплементировать `CRUD` модель.
В качестве структуры данных использовать `Map`.
Функция `create`:
    - возвращает `id` при создании пользователя генерирует уникальный `id`, который является ключом для объекта пользователя в структуре `Map`
Функция `read`:
    - принимает идентификатор пользователь
    - если такого пользователя нет возвращать `null`
    - если есть — возвращать объект пользователя с полем `id` внутри объекта.
Функция `readAll`:
    - возвращает массив пользователей
Функция `update`:
    - обновляет пользователя
    - принимает 2 обязательных параметра
Функция `remove`:
    - удаляет пользователя
    - возвращает true, если пользователь успешно удален
Обратите внимание!
    - Вам может потребоваться дописать код в событиях onsubmit и onclick для того что бы обрабатывать и выводить сообщения об ошибках
*/

// Решение задачи
let arrKeys = []

// возвращает уникальный короткий ID в заданном числовом диапазоне
function getRandomID(min, max) {
    var int = Math.floor(Math.random() * (max - min + 1)) + min;

    return int;
}

const create = (database, obj) => {
    let id = getRandomID(0, 1679615);
    database.set(id, obj)
    arrKeys.push(id)

    return id;
}

const read = (database, id) => {
    if(database.get(id)){
        return database.get(id);
    }
    else return null;
}

const readAll = (database) => {
    let arr = []
    let j=0

    for(let i=0;i<arrKeys.length;i++){
        arr.push(database.get(arrKeys[j]))
        j++
    }

    return arr;
}
const update = (arr, database) => {
    obj = database.get(arr[0])
    console.log(obj)
    obj.name = arr[1]
    obj.salary = arr[2]
}
const remove = (id, database) => {
    database.delete(id)

    return true;
}
// Примеры

// const person = {
//   name: "Pitter",
//   age: 21,
//   country: "ua",
//   salary: 500
// };

// const id = create(person);
// const customer = database.get(id);
// const customers = readAll(); // возвращает массив пользователей
// update(id, { age: 22 }); // обновление данных сотрудника, возвращает id
// remove(id); // удаление сотрудника, возвращает true

// ПРОВЕРКА
const database = new Map();

const regForm = document.getElementById('regForm');
const updateForm = document.getElementById('updateForm');
const searchForm = document.getElementById('searchForm');
const removeForm = document.getElementById('removeForm');
const alertP = document.getElementById('alert');
const readAllBtn = document.getElementById('readAll');
const list = document.getElementById('list');

const regFormSubmitHandler = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const name = formData.get('name');
    const age = formData.get('age');
    const country = formData.get('country');
    const salary = formData.get('salary');

    const person = {
        name,
        age,
        country,
        salary
    };

    const id = create(database, person);

    alertP.innerHTML = `Сотрудник ${name} успешно добавлен. Идентификатор сотрудника ${id}.`;
}

const searchFormSubmitHandler = (event) => {
    event.preventDefault();
    list.innerHTML = null;

    const formData = new FormData(event.target);
    const uid = formData.get('uid');

    const customer = read(database, parseInt(uid));
    console.log(customer)
    const worker = getWorker(customer);

    list.insertAdjacentHTML('afterbegin', worker);
}

const updateFormSubmitHandler = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const uid = formData.get('uid');
    const name = formData.get('name');
    const salary = formData.get('salary');
    arr = [parseInt(uid), name, salary]

    update(arr, database);
    console.log(database.get(uid))

    alertP.innerHTML = `Данные сотрудника ${uid} успешно обновлены.`;
}

const removeFormSubmitHandler = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const uid = formData.get('uid');
    const result = remove(parseInt(uid), database);

    if (result) {
        alertP.innerHTML = `Сотрудник с идентификатором ${uid} успешно удалён.`;

        return;
    }

    alertP.innerHTML = `При удалении сотрудника с идентификатором '${uid}' произошла ошибка.`;
}

const readAllBtnClickHandler = () => {
    const customers = readAll(database);
    list.innerHTML = null;
    let customersHTML = '';

    customers.forEach((customer) => {
        customersHTML += getWorker(customer);
    });

    list.insertAdjacentHTML('afterbegin', customersHTML);
}

regForm.addEventListener('submit', regFormSubmitHandler)
searchForm.addEventListener('submit', searchFormSubmitHandler)
updateForm.addEventListener('submit', updateFormSubmitHandler)
removeForm.addEventListener('submit', removeFormSubmitHandler)
readAllBtn.addEventListener('click', readAllBtnClickHandler)