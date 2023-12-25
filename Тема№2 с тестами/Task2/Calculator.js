function Calculator(value) {
    if (!(this instanceof Calculator)) 
        throw new Error('Калькулятор вызван без ключевого слова \'new\'!');
    
    const values = [];
    values.push(value);
    
    Calculator.prototype._getLastValue = function() {
        return values[values.length - 1];
    }

    Calculator.prototype._setLastValue = function(value) {
        values[values.length - 1] = value;
    }

    Calculator.prototype.multiply = function(value) {
        this._setLastValue(this._getLastValue() * value)
        return this;
    }

    Calculator.prototype.divide = function(value) {
        const roundedResult = +(this._getLastValue() / value).toFixed(2);
        this._setLastValue(roundedResult);
        return this;
    }

    Calculator.prototype.plus = function(value) {
        values.push(value);
        return this;
    }

    Calculator.prototype.minus = function(value) {
        values.push(-value);
        return this;
    }

    Calculator.prototype.calculate = function() {
        const result = values.reduce((res, cur) => res + cur, 0);
        return result;
    }

    return this;
}
