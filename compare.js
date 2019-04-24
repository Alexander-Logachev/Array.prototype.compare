if (!Array.prototype.compare) {
    /**
     * Compare 2 arrays
     * @param array
     * @param strict - [true | false]
     * @returns {boolean}
     */
    Array.prototype.compare = function (array, strict) {
        _this = this;
        if (_this.length != array.length) {
            return false;
        }
        if (strict) {
            for (var i in _this) {
                if (_this.hasOwnProperty(i)) {
                    if (_this[i] !== array[i]) {
                        return false;
                    }
                }
            }
        } else {
            for (var i in _this) {
                if (_this.hasOwnProperty(i)) {
                    if (array.indexOf(_this[i]) < 0) {
                        return false;
                    }
                }
            }
        }
        return true;
    }
}
