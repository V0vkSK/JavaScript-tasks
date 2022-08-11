// Задание 8
// Массив имен всех пользователей у которых есть друг с указанным именем.
import users from "./users.js";

const getUsersWithFriend = (users, friendName) => {
    let equiFriend = [];
    const allFriends = users.reduce(function (accFriends, user) {
        accFriends.push(...user.friends);
        
        
        equiFriend.push(user.name);   
    console.log( 
            equiFriend);
        
        return accFriends, equiFriend;
    }, [])
        console.log( 
           'allFriends     ', allFriends);
        
      
    

    // return filterFriends;
};


    getUsersWithFriend(users, 'Briana Decker'); // [ 'Sharlene Bush', 'Sheree Anthony' ]
 
    getUsersWithFriend(users, 'Goldie Gentry'); // [ 'Elma Head', 'Sheree Anthony' ]