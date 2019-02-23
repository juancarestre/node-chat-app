const expect = require('expect');
const {Users} = require('./users');

describe('Users', () => {

    beforeEach(() => {
        users = new Users();
        users.users = [{
            id: "1",
            name: "Juan",
            room: "calidad"
        },
        {
            id: "2",
            name: "Camilo",
            room: "Titan"
        },
        {
            id: "3",
            name: "Restrepo",
            room: "calidad"
        }]
    });

    it('Should add new user', () => {
        var users = new Users()
        var user ={
            id: '123',
            name: 'Andrew',
            room: 'The Office Fans'
        };

        var resUser = users.addUser(user.id, user.name, user.room)
        expect(users.users).toMatchObject([user]);
    })

    it('should return names for calidad', () => {
        var userList = users.getUserList('calidad');

        expect(userList).toEqual(["Juan", "Restrepo"])
    })

    it('should return names for titan', () => {
        var userList = users.getUserList('Titan');
        expect(userList).toEqual(["Camilo"])
    })

    it('should remove a user', () => {

        var userToRemove = users.users[0]
        var removedUser = users.removeUser(userToRemove.id)

        expect(removedUser).toMatchObject(userToRemove)
        expect(users).not.toContain(removedUser)

    });

    it('should not remove user', () => {

        var userToRemove = {
            id: "4",
            name: "Juan",
            room: "calidad"
        }

        var savedUsers = users
        var removedUser = users.removeUser(userToRemove.id)

        expect(removedUser).toBe(undefined)
        expect(users).toBe(savedUsers)


    });

    it('should find user', () => {
        user = users.getUser("2")
        expect(user).toBe(users.users[1])
    });

    it('should not find user', () => {
        user = users.getUser("4")
        expect(user).toBe(undefined)
    });



})