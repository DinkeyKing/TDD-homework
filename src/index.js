"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Greeter = void 0;
var Greeter = /** @class */ (function () {
    function Greeter() {
    }
    Greeter.greet = function (names) {
        var greetingMessage = "";
        if (names.length === 0 || !names) {
            greetingMessage = "Hello, my friend.";
            console.log(greetingMessage);
            return greetingMessage;
        }
        names = names.flatMap(function (name) { return name.includes(",") ? name.split(",").map(function (s) { return s.trim(); }) : name; });
        var shoutingNames = names.filter(function (name) { return name === name.toUpperCase(); });
        var normalNames = names.filter(function (name) { return name !== name.toUpperCase(); });
        if (normalNames.length > 0) {
            greetingMessage = "Hello ".concat(Greeter.formatNames(normalNames), ".");
        }
        if (shoutingNames.length > 0) {
            var shoutingGreeting = "HELLO ".concat(Greeter.formatNames(shoutingNames).toUpperCase(), "!");
            greetingMessage = greetingMessage ? "".concat(greetingMessage, " ").concat(shoutingGreeting) : shoutingGreeting;
        }
        console.log(greetingMessage);
        return greetingMessage;
    };
    Greeter.formatNames = function (names) {
        if (names.length === 1) {
            return names[0];
        }
        else if (names.length === 2) {
            return "".concat(names[0], " and ").concat(names[1]);
        }
        else {
            var lastName = names.pop();
            return "".concat(names.join(", "), " and ").concat(lastName);
        }
    };
    return Greeter;
}());
exports.Greeter = Greeter;
Greeter.greet(['John Smith']);
