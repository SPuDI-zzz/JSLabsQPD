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
            return value.toString() === other.toString();
        case 'Function':
            return false;
        case 'Set':
        case 'Map':
            value = Array.from(value);
            other = Array.from(other);
            break;
    }

    const keysValue = Object.keys(value);
    const keysOther = Object.keys(other);
 
    if (keysValue.length !== keysOther.length) {
        return false;
    }
 
    for (let key of keysValue) {
        if (!keysOther.includes(key) || !MyIsEqual(value[key], other[key])) {
            return false;
        }
    }
 
    return true;
}

function getType(input) {
    return Object.prototype.toString.call(input).slice(8, -1);
}
