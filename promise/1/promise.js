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
        setText('Fetching Usser');
        setTimeout(() => {
            resolve({ name: 'fabio' });
        }, 2000)
    });
}

button.addEventListener('click', () => {
    authUser()
        .then(isAuth => {
            if (isAuth) {
                fetchUser()
                    .then(user => {
                        setText(user.name)
                    })
            }
        })
})