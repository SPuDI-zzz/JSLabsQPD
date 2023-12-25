function customPromiseRace(promises) {
    return new Promise((resolve, reject) => {
        if (!isIterable(promises))
            return reject(new TypeError(`${typeof promises} ${promises} is not iterable (cannot read property Symbol(Symbol.iterator))`));

        promises.forEach(promise =>
            Promise.resolve(promise)
                .then(result => resolve(result), error => reject(error)) 
        );
    });
}
