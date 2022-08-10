// Задание 1
// Напиши функцию - конструктор Account, которая создает объект со свойствами login и email.
// В prototype функции - конструктора добавь метод getInfo(), который выводит в консоль значения полей login и email объекта который его вызвал.

// console.log(Account.prototype.getInfo); // function

const Account = function (login, email) {
    this.login = login;
    this.email = email;
};

const mango = new Account('Mangozedog','mango@dog.woof');



Account.prototype.getInfo = function () {
console.log(`Login:  ${this.login}, Email: ${this.email}`);
    
}

mango.getInfo(); // Login: Mangozedog, Email: mango@dog.woof

const poly = new Account('Poly', 'poly@mail.com');

poly.getInfo(); // Login: Poly, Email: poly@mail.com


