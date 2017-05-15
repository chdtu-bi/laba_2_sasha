const users = [{username: 'amd', password: '123'},
    {username: 'ama', password: '123'},
    {username: 'ams', password: '123'}];

document.getElementById('LogIn').onclick = function () {
    let login = document.getElementById('name').value;
    let pass = document.getElementById('password').value;
    check(login, pass);
};

function check(login, pass) {
    let res;
    for (let i = 0; i < users.length; i++) {
        if (users[i].username === login && users[i].password === pass) {
            res = 'success';
            break;
        } else {
            res = 'error'
        }
    }
    alert(res);
}