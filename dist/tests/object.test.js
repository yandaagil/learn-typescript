"use strict";
describe("Object", function () {
    it("should support in typescript", function () {
        const person = {
            id: "1",
            name: "Yanda"
        };
        console.info(person);
        person.id = "2";
        person.name = "Agil";
        // person.description = "tall"
        console.info(person);
    });
});
