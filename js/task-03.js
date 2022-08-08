// ---------------------------------------------------------------------------------------------------------------------------------------------------------------
// Задание 3
// Напиши функцию findBestEmployee(employees), которая принимает объект сотрудников и возвращает имя самого продуктивного (который выполнил больше всех задач). 
// Сотрудники и кол - во выполненых задач содержатся как свойства объекта в формате "имя": "кол-во задач".

const findBestEmployee = function(employees) {
    const value = Object.values(employees);
    const keys = Object.keys(employees);
    let maxTask = 0;
    let maxName = '';
    

    for (const key in value) {
        // console.log(key);
        // console.log(value[key]);
        if (maxTask < value[key]) {
            maxTask = value[key];
            maxName = keys[key];
        }
    }

    const message= `Имя: ${maxName}, кол-во задач: ${maxTask}`
    // console.log(Math.max(...items)); 
    return message;
    
    }
    


/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  }),
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  }),
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  }),
); // lux