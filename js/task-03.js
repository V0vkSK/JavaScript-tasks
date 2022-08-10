// Задание 3
// Получить массив имен пользователей по полу (поле gender).

import users from "./users.js";


const getUsersWithGender = (users, gender) => {
    const userGender = users.filter(function (user) {
        return user.gender === gender;
    })
    return userGender;
};

console.table(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

