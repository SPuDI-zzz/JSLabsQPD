function MySortedUniq(array) {
    const resultArray = [];
    resultArray.push(array[0]);

    for (let index = 1; index < array.length; index++) {
        const currentElement = array[index];
        const previousElement = array[index - 1];

        if (!equal(previousElement, currentElement))
            resultArray.push(currentElement);
    }

    return resultArray;
}

function equal(value, other) {
    return value === other || (value !== value && other !== other);
  }
