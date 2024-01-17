"use strict";
describe("Any", function () {
    it("should support in javascript", function () {
        const person = {
            id: 1,
            name: "Yanda Agil Marfani",
            age: 23
        };
        person.age = 25;
        person.address = "Indonesia";
        console.info(person);
    });
});
