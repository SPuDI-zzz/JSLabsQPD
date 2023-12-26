Array.prototype.first = function() {
    return this[0];
}

Array.prototype.last = function() {
    return this[this.length - 1];
}

Array.prototype.random = function() {
    const randomIndex = Math.floor(Math.random() * this.length);
    return this[randomIndex];
}
