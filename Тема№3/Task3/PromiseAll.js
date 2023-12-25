function customPromiseAll(promises) {
    return new Promise((resolve, reject) => {
        if (!isIterable(promises)) 
            return reject(new TypeError(`${typeof promises} ${promises} is not iterable (cannot read property Symbol(Symbol.iterator))`));

        let completedCount = 0;
        const results = new Array(promises.length);

        promises.forEach((promise, index) => 
            Promise.resolve(promise).then(
                result => {
                    results[index] = result;
                    completedCount++;

                    if (completedCount === promises.length)
                        resolve(results);
                }, 
                error => {
                    reject(error)
                }
            )
        );
    });
}
