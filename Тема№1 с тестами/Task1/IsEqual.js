function MyIsEqual(value, other) {  
    return isDeepEqual(value, other);
}

function isDeepEqual(value, other) {
    if (value === other)
        return true;
    
    const valueType = getType(value);
    const otherType = getType(other);

    if (valueType !== otherType)
        return false;

    switch (valueType) {
        case 'Number':
            return +value === +other || (isNaN(value) && isNaN(other));
        case 'Boolean':
        case 'Date':
            return +value === +other;
        case 'String':
        case 'RegExp':
            return value.toString() === other.toString();
        case 'Function':
        case 'Symbol':
        case 'Undefined':
        case 'Null':
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
