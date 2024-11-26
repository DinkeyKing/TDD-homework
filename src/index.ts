export class Greeter {
    static greet(names : string[]): string {
        let greetingMessage: string = "";

        if (names.length === 0 || !names){
            greetingMessage = "Hello, my friend.";
            console.log(greetingMessage);
            return greetingMessage;
        }

        names = names.flatMap(name => name.includes(",") ? name.split(",").map(s => s.trim()) : name);

        const shoutingNames = names.filter(name => name === name.toUpperCase());
        const normalNames = names.filter(name => name !== name.toUpperCase());

        if (normalNames.length > 0) {
            greetingMessage = `Hello ${Greeter.formatNames(normalNames)}.`;
          }
        
          if (shoutingNames.length > 0) {
            const shoutingGreeting = `HELLO ${Greeter.formatNames(shoutingNames).toUpperCase()}!`;
            greetingMessage = greetingMessage ? `${greetingMessage} ${shoutingGreeting}` : shoutingGreeting;
          }

        console.log(greetingMessage);
        return greetingMessage;
    }

    static formatNames(names: string[]): string {
        if (names.length === 1) {
          return names[0];
        } else if (names.length === 2) {
          return `${names[0]} and ${names[1]}`;
        } else {
          const lastName = names.pop();
          return `${names.join(", ")} and ${lastName}`;
        }
      }
}

Greeter.greet(['John Smith']);
