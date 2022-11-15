// Задание 7
// Получить общую сумму баланса (поле balance) всех пользователей.

import users from "./users.js";

const calculateTotalBalance = users => {
    
    const balanceOfUsers = users.reduce(function (sum, user) {
        return sum + user.balance;           
        
    }, 0)
                
        return balanceOfUsers;
};

console.log(calculateTotalBalance(users)); // 20916