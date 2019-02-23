[{
    id: 'sadasdasdasdsad',
    name: 'Andrew',
    room: 'The office Fans'
}]

class Users {
    constructor() {
        this.users = []
    }

    addUser(id, name, room) {
        var user = {
            id, name, room
        };
        this.users.push(user);
        return user;
    }
    removeUser (id) {
        var userToRemove = this.getUser(id)
        this.users = this.users.filter((user) => user.id !== id)
        return userToRemove
    }

    getUser(id) {
        return this.users.find((user) => user.id === id)
    }

    getUserList(room) {
        var users = this.users.filter((user) => user.room === room);
        var namesArray = users.map((user) => user.name);
        return namesArray;
    }
}



module.exports = {Users};

// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     getUserDescription () {
//         return `${this.name} is ${this.age}(s) old`;
//     }

// }


// var me = new Person('Juan', 24);
// console.log('jeje', me.getUserDescription());
