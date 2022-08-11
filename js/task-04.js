// Задание 4
// Напиши класс StringBuilder. На вход он получает один параметр - строку, которую записывает в свойство newValue.

// Добавь классу следующий функционал:

// Геттер value - возвращает текущее значение поля newValue
// Метод append(str) - получает парметр str (строку) и добавляет ее в конец newValue
// Метод prepend(str) - получает парметр str (строку) и добавляет ее в начало value
// Метод pad(str) - получает парметр str (строку) и добавляет ее в начало и в конец newValue

class StringBuilder{
    constructor(value) {
        this.newValue = value;
    }

    // ! Обязательно писать геттер????
    get value(){
        return this.newValue
    }
    append(str) {       
        
        this.newValue = this.newValue + str;
        
    }
    prepend(str) {
        this.newValue = str + this.newValue;
    }
    pad(str) {
        this.newValue = str + this.newValue +str;
    }
}

const builder = new StringBuilder('.');

builder.append('^');
console.log(builder.value); // '.^'

builder.prepend('^');
console.log(builder.value); // '^.^'

builder.pad('=');
console.log(builder.value); // '=^.^=