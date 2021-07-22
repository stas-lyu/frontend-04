function createNewUser() {
    let userName = prompt('Ваше имя');
    let userSurname = prompt('Ваша фамилия');
    // let object = {};
    // let object2 = new Object();
    let newUser = {
        setFirstName: function () {
            newUser.firstName = userName
        },
        setLastName: function () {
            newUser.lastName = userSurname
        },
        getLogin: function () {
            newUser.setFirstName()
            newUser.setLastName()
            return newUser
        },
    }
    newUser.getLogin()
    return newUser
}

console.log(createNewUser());

// let string = 'some text';
// let string2 = 'SOME TEXT';
//
// console.log(string.toUpperCase());
// console.log(string2.toLowerCase());