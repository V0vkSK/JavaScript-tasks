// Задание 10
// Получить массив всех умений всех пользователей (поле skills), при этом не должно быть повторяющихся умений и они должны быть отсортированы в алфавитном порядке.
import users from "./users.js";


const getSortedUniqueSkills = users => {
    
    const allSkills = users.reduce((accSkills, user) => {
        const accSkills = [];
        if (accSkills.includes(user.skills)) {
            accSkills.push(user.skills);
        }
    })
    return allSkills;
};
    // .sort((Prev, Next) => Prev - Next);

    // const filterOfSkills = arrayOfSkills.filter(skill => !arrayOfSkills.includes(skill))
    // console.log();
    
    


console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]