import { sayHello } from "../src/say-hello";
describe("sayHello", function () {
    it("should return hello yanda", function () {
        expect(sayHello("yanda")).toBe("Hello yanda");
    });
});
