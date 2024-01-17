"use strict";
describe("Optional parameter", function () {
    it("should support null and undefined", function () {
        function sayHello(name) {
            if (name) {
                console.info(`Hello ${name}`);
            }
            else {
                console.info("Hello");
            }
        }
        sayHello("Yanda");
        const name = undefined;
        sayHello(name);
        sayHello(null);
    });
});
