document.querySelector('.form button[type=submit]')
    .addEventListener('click', login);

async function login(ev) {
    ev.preventDefault();
    await fetch('login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify({
            username: document.querySelector('.form input[id=username]').value,
            phone: document.querySelector('.form input[id=phone]').value,
            email: document.querySelector('.form input[id=email]').value
        })
    });
    document.querySelector('.form').reset();
}