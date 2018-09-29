"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isLeapYear(year) {
    if (year % 100 !== 0) {
        return year % 4 === 0 ? true : false;
    }
    return year % 400 === 0 ? true : false;
}
exports.default = isLeapYear;
//# sourceMappingURL=leap.js.map