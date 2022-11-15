// Задание 8
// Массив имен всех пользователей у которых есть друг с указанным именем.
import users from "./users.js";

const getUsersWithFriend = (users, friendName) => {
    
    const allFriends = users.reduce(function (accFriends, user) {

        if (user.friends.includes(friendName)) {
                accFriends.push(user.name);
            }  
        return accFriends;
    }, [])
        console.log( 
           'allFriends     ', allFriends);
        
      
    

    // return filterFriends;
};


    getUsersWithFriend(users, 'Briana Decker'); // [ 'Sharlene Bush', 'Sheree Anthony' ]
 
    getUsersWithFriend(users, 'Goldie Gentry'); // [ 'Elma Head', 'Sheree Anthony' ]