const setText = (text) => {
    document.getElementById('myParagraph').innerHTML = text;
}
const checkAuth = cb => {
    setText('Fetch Auth..');
    setTimeout(() => {
        cb(true);
    }, 2000);
};
const fetchUser = cb => {
    setText("Fetching User..");
    setTimeout(() => {
        cb({ name: 'fabio' });
    }, 2000);

}

button.addEventListener("click", () => {
        checkAuth(auth => {
            if (auth) {
                fetchUser(user => {
                    setText(user.name);
                });
            }
        });
    }

)