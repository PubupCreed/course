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

const create = () => {

}

const read = () => {

}

const readAll = () => {

}
const update = () => {

}
const remove = () => {

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

    const id = create(person);

    alertP.innerHTML = `Сотрудник ${name} успешно добавлен. Идентификатор сотрудника ${id}.`;
}

const searchFormSubmitHandler = (event) => {
    event.preventDefault();
    list.innerHTML = null;

    const formData = new FormData(event.target);
    const uid = formData.get('uid');

    const customer = read(uid);
    const worker = getWorker(customer);

    list.insertAdjacentHTML('afterbegin', worker);
}

const updateFormSubmitHandler = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const uid = formData.get('uid');
    const name = formData.get('name');
    const salary = formData.get('salary');

    update(uid, { name, salary });

    alertP.innerHTML = `Данные сотрудника ${uid} успешно обновлены.`;
}

const removeFormSubmitHandler = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const uid = formData.get('uid');
    const result = remove(uid);

    if (result) {
        alertP.innerHTML = `Сотрудник с идентификатором ${uid} успешно удалён.`;

        return;
    }

    alertP.innerHTML = `При удалении сотрудника с идентификатором '${uid}' произошла ошибка.`;
}

const readAllBtnClickHandler = () => {
    const customers = readAll();
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