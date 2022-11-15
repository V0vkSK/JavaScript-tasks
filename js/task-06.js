// Задание 6
// Получить массив пользователей попадающих в возрастную категорию от min до max лет (поле age).

import users from "./users.js";


const getUsersWithAge = (users, min, max) => {
    const filterofUsers = users.filter(function (user) {
        return user.age > min && user.age < max;
    })
    return filterofUsers;
}


console.table(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]

console.table(getUsersWithAge(users, 30, 40));
// [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]