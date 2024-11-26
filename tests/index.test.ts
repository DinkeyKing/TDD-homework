import { Greeter } from "../src";

describe("Greeting", () => {
    it("No names given", () => {
        expect(Greeter.greet([])).toBe('Hello, my friend.');
    });
    
    it("Single input", () => {
        expect(Greeter.greet(['Bob'])).toBe('Hello Bob.');
    });
    
    it("Multiple input", () => {
        expect(Greeter.greet(['Alice', 'Bob', 'Jerry'] )).toBe('Hello Alice, Bob and Jerry.');
    });

    it("Only shouting input", () => {
        expect(Greeter.greet(['BARRY'])).toBe('HELLO BARRY!');
    });

    it("Mixed input", () => {
        expect(Greeter.greet(['JAY', 'Maya', 'Alice', 'BOB', 'Charlotte'])).toBe('Hello Maya, Alice and Charlotte. HELLO JAY AND BOB!');
    });

    it("Entry contains comma", () => {
        expect(Greeter.greet(['Jerry', 'Alice, Bob'])).toBe('Hello Jerry, Alice and Bob.');
    });
});
