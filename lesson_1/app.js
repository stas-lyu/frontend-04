const currentYear = 2021;

function createNewUser() {
    let userName = prompt('Ваше имя');
    let userSurname = prompt('Ваша фамилия');
    let newUser = {
        setFirstName: function () {
            newUser.firstName = userName
        },
        setLastName: function () {
            newUser.lastName = userSurname
        },
        getFullName: function () {
            newUser.setFirstName()
            newUser.setLastName()
            return newUser
        },
        getLogin: function () {
            return console.log(newUser.firstName[0].toLowerCase() + newUser.lastName)
        },
        setBirthday: function () {
            let day = prompt('Укажите дату рождения');
            let mon = prompt('Укажите месяц рождения');
            let year = prompt('укажите год рождения');
            return console.log(newUser.birthday = `${day}.${mon}.${year}`);
        },
        getAge: function () {
            let birthdayYear = newUser.birthday;
            let birthdayArray = birthdayYear.split('.');
            let userYear = birthdayArray[birthdayArray.length - 1];
            newUser.userYear = userYear;
            return newUser;
        },
        getPassword: function () {
            return console.log(`${userName[0].toUpperCase()} ${userSurname.toLowerCase()} ${newUser.userYear}`);
        }
    }
    // newUser.getFullName();
    // newUser.getLogin();
    newUser.setBirthday();
    newUser.getAge();
    newUser.getPassword();
    return newUser
}

console.log(createNewUser());

// let string = 'some text';
// let string2 = 'SOME TEXT';
//
// console.log(string.toUpperCase());
// console.log(string2.toLowerCase());