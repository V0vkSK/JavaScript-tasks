// Задание 2
// Получить массив объектов пользователей по цвету глаз (поле eyeColor).
import users from "./users.js";


const getUsersWithEyeColor = (users, color) => {
    const filterByColorOfEyes = users.filter(function (user) {
        return user.eyeColor === color;
    })
    return filterByColorOfEyes;
};

console.table(getUsersWithEyeColor(users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]