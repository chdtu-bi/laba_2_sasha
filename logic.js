const users = [
    {username: 'user1', password: 'p@ssword'},
    {username: 'admin', password: 'admin'},
];

document.forms['loginForm'].onsubmit = function () {
    const login = document.getElementById('name').value;
    const pass = document.getElementById('password').value;

    if (isValid(login, pass)) {
        alert('Successfully authenticated.');
    } else {
        alert('Incorrect username or password.\nTry again.');
    }
};

function isValid(login, pass) {
    for (let i = 0; i < users.length; i++) {
        if (users[i].username === login && users[i].password === pass) {
            return true;
        }
    }
    return false;
}