function customPromiseAll(promises) {
    return new Promise((resolve, reject) => {
        if (!isIterable(promises)) 
            return reject(new TypeError(`${typeof promises} ${promises} is not iterable (cannot read property Symbol(Symbol.iterator))`));

        let completedCount = 0;
        const results = [];

        promises.forEach(promise => 
            Promise.resolve(promise).then(
                result => {
                    results.push(result);
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
