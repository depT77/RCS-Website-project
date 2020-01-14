let register = [];

const addRegister = (ev)=> {
    ev.preventDefault();
    let regis = {
        username: document.getElementById('username').value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value,
        passwordrepeat: document.getElementById('passwordrepeat').value,
    }

    register.push(regis);
    document.forms[0].reset();

    console.warn('added', {register});
    let pre = document.querySelector('#msg pre');
    //pre.textContent = '\n' + JSON.stringify(register, '\t', 2);

    localStorage.setItem('RegistredPeopleList', JSON.stringify(register));
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('btn').addEventListener('click', addRegister);
});


