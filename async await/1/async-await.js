const setText = (text) => {
    document.getElementById('myParagraph').innerHTML = text;
}


const authUser = () => {
    return new Promise((resolve, reject) => {
        setText('Auth User...');
        setTimeout(() => {
            resolve(true);
        }, 2000)
    });
}

const fetchUser = () => {
    return new Promise((resolve, reject) => {
        setText('Fetching User...');
        setTimeout(() => {
            resolve({ name: 'Fabio' });
        }, 2000)
    });
}

button.addEventListener('click', async() => {
    const isAuth = await authUser()
    let user = null;
    if (isAuth) {
        user = await fetchUser()
    }
    setText(user.name);
})