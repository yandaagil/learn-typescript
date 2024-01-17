"use strict";
describe("Union type", function () {
    it("should support in typescript", function () {
        let sample = "Yanda";
        console.info(sample);
        sample = 100;
        console.info(sample);
        sample = true;
        console.info(sample);
    });
    it("should support typeof operator", function () {
        function process(value) {
            if (typeof value === "string") {
                return value.toUpperCase();
            }
            else if (typeof value === "number") {
                return value + 2;
            }
            else {
                return !value;
            }
        }
        expect(process("Yanda")).toBe("YANDA");
        expect(process(100)).toBe(102);
        expect(process(true)).toBe(false);
    });
});
