function MyIsEqual(value, other) {
    if (value === other)
        return true;
    
    if (!isObject(value) && !isObject(other))
        return value !== value && other !== other;

    return isDeepEqual(value, other);
}

function isObject(value) {
    return value != null && typeof value === 'object';
}

function isDeepEqual(value, other) {
    const valueType = getType(value);
    const otherType = getType(other);

    if (valueType !== otherType)
        return false;

    switch (valueType) {
        case 'Boolean':
        case 'Number':
        case 'Date':
            return +value === +other;
        case 'String':
        case 'RegExp':
        case 'Function':
            return value.toString() === other.toString();
        case 'Set':
            return MyIsEqual(setToArray(value), setToArray(other));
        case 'Map':
            return MyIsEqual(mapToArray(value), mapToArray(other));
    }

    const keys1 = Object.keys(value);
    const keys2 = Object.keys(other);
 
    if (keys1.length != keys2.length) {
        return false;
    }
 
    for (let key of keys1) {
        if (!keys2.includes(key) || !MyIsEqual(value[key], other[key])) {
            return false;
        }
    }
 
    return true;
}

function setToArray(set) {
    let index = -1;
    const result = Array(set.size);

    set.forEach(value => result[++index] = value);

    return result;
}

function mapToArray(map) {
    let index = -1;
    const result = Array(map.size);

    map.forEach((value, key) => result[++index] = [key, value]);

    return result;
}

function getType(input) {
    return Object.prototype.toString.call(input).slice(8, -1);
}
