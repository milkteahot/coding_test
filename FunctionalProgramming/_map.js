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

function _filter(list, predi) {
    var new_list = [];
    for(var i=0;i<list.length;i++){
        if(predi(list[i])) {
            new_list.push(list[i])
        }
    }
    return new_list;
}

function _map(list, mapper){
    var new_list = [];
    for(var i=0;i<list.length;i++){
        new_list.push(mapper(list[i]));
    }
    return new_list;
}

var over_30 = _filter(users, function(user){ 
    return user.age >= 30 
});
console.log(over_30)

var names = _map(over_30, function(user){ return user.name; })

console.log(names)
