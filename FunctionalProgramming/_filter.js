var users = [
    {id:1, name: 'ID', age: 36},
    {id:2, name: 'BJ', age: 32},
    {id:3, name: 'JM', age: 32},
    {id:4, name: 'PJ', age: 27},
    {id:5, name: 'HA', age: 25},
    {id:6, name: 'JE', age: 26},
    {id:7, name: 'JI', age: 31},
    {id:8, name: 'MP', age: 23},
]

//2. _filter, _map 으로 리팩토링
function _filter(users, predi) {
    var new_list = [];
    for(var i=0;i<users.length;i++){
        if(predi(users[i])) {
            new_list.push(users[i]);
        }
    }
    return new_list;
}

console.log(
    _filter(users, function(user) {
        return user.age >= 30;
    })
)

console.log(
    _filter(users, function(user) {
        return user.age < 30;
    })
)

