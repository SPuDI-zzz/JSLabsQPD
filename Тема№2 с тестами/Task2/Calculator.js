
function Calculator(value) {
    if (!new.target) 
        throw new Error('Калькулятор вызван без ключевого слова \'new\'!');
    
    const values = [];
    values.push(value);
    
    function getLastValue() {
        return values[values.length - 1];
    }

    function setLastValue(value) {
        values[values.length - 1] = value;
    }

    this.multiply = function(value) {
        setLastValue(getLastValue() * value)
        return this;
    }

    this.divide = function(value) {
        const roundedResult = +(getLastValue() / value).toFixed(2);
        setLastValue(roundedResult);
        return this;
    }

    this.plus = function(value) {
        values.push(value);
        return this;
    }

    this.minus = function(value) {
        values.push(-value);
        return this;
    }

    this.calculate = function() {
        const result = values.reduce((res, cur) => res + cur, 0);
        return result;
    }

    return this;
}
