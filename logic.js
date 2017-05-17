const users = [
    {login: 'user1', password: 'p@ssword'},
    {login: 'admin', password: 'admin'},
];

document.forms['loginForm'].onsubmit = function (e) {
    e.preventDefault();
    const login = document.getElementById('name').value;
    const password = document.getElementById('password').value;

    if (isValid(login, password)) {
        alert('Successfully authenticated.');
    } else {
        alert('Incorrect username or password.\nTry again.');
        this.reset();
    }
};

function isValid(login, password) {
    return users.some(user => user.login === login && user.password === password);
}