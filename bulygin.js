function create_newUser() {
    let newUser = {
        'firstName': '',
        'lastName': '',

    };

    newUser.firstName = prompt('Введите имя').substr(0, 1).toLowerCase();
    newUser.lastName = prompt('Введите Фамилию').toLowerCase();
    newUser.login = newUser.firstName + newUser.lastName;
    console.log(newUser.login);
}

create_newUser();