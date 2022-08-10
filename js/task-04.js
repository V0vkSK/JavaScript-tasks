// Задание 4
// Получить массив только неактивных пользователей (поле isActive).
import users from "./users.js";

const getInactiveUsers = users => {
    const userActive = users.filter(function (user) {
        return user.isActive;
    })
    return userActive;
}

console.table(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]