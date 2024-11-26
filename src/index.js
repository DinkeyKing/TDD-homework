"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Greeter = void 0;
var Greeter = /** @class */ (function () {
    function Greeter() {
    }
    Greeter.greet = function (names) {
        var greetMessage = "Hello";
        console.log(greetMessage);
        return greetMessage;
    };
    return Greeter;
}());
exports.Greeter = Greeter;
Greeter.greet(['John Smith']);
