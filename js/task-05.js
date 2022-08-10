// Задание 5
// Получить пользоваля (не массив) по email (поле email, он уникальный).
import users from "./users.js";

const getUserWithEmail = (users, email) => {
    const emailOfUsers = users.find(function (user) {
        if (user.email === email) {
         return user;             
        };
    })
    return emailOfUsers;
};

console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}