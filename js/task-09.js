// Задание 9
// Массив имен (поле name) людей, отсортированных в зависимости от количества их друзей (поле friends)

import users from "./users.js";
    

const getNamesSortedByFriendsCount = users => {   
    const sortByCountOfFriends = users.sort((PrevFriend, NextFriend) => PrevFriend.friends.length - NextFriend.friends.length).map(user => user.name);
    
return sortByCountOfFriends;
};

console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]