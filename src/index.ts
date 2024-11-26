export class Greeter {
    static greet(names : String[]): String {
        let greetMessage: String = "Hello";

        console.log(greetMessage);
        return greetMessage;
    }
}

Greeter.greet(['John Smith']);
