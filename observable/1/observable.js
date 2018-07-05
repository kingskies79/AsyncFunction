const setText = (text) => {
    document.getElementById('myParagraph').innerHTML = text;
}

const authUser = () => {
    return Rx.Observable.create(observer => {
        setText('Auth User...');
        setTimeout(() => {
            observer.next(true);
        }, 2000);
    });
}

const fetchUser = () => {
    return Rx.Observable.create(observer => {
        setText('Fetching User...');
        setTimeout(() => {
            observer.next({ name: 'Fabio' });
        }, 2000);
    });
}

Rx.Observable.fromEvent(button, 'click')
    .switchMap(event => authUser())
    .switchMap(auth => {
        if (auth) {
            return fetchUser()
        }

    })
    .subscribe(user => {
        setText(user.name);
    })