describe("Interface", function () {
    it("should support in typescript", function () {
        const seller = {
            id: 1,
            name: "Toko ABC",
            nib: "3123423",
            npwp: "2423"
        };
        seller.name = "Toko Budi";
        // seller.nib = "3242334"
        console.info(seller);
    });
    it("should support function interface", function () {
        const add = (value1, value2) => {
            return value1 + value2;
        };
        expect(add(2, 2)).toBe(4);
    });
    it("should support indexable interface", function () {
        const names = ["Yanda", "Agil", "Marfani"];
        console.info(names);
    });
    it("should support indexable interface for non number index", function () {
        const dictionary = {
            "name": "Yanda",
            "address": "Indonesia"
        };
        expect(dictionary["name"]).toBe("Yanda");
        expect(dictionary["address"]).toBe("Indonesia");
    });
    it("should support extends interface", function () {
        const employee = {
            id: "1",
            name: "Yanda",
            division: "IT"
        };
        console.info(employee);
        const manager = {
            id: "2",
            name: "Agil",
            division: "IT",
            numberOfEmployees: 10
        };
        console.info(manager);
    });
    it("should support function in interface", function () {
        const person = {
            name: "Yanda",
            sayHello: function (name) {
                return `Hello ${name}, my name is ${this.name}`;
            }
        };
        console.info(person.sayHello("Agil"));
    });
    it("should support intersection types", function () {
        const domain = {
            id: "1",
            name: "Yanda"
        };
        console.info(domain);
    });
    it("should support type assertions", function () {
        const person = {
            name: "Yanda",
            age: 23
        };
        const person2 = person;
        console.info(person2);
    });
});
export {};
