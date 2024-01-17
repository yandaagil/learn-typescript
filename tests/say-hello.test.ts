import { sayHello } from "../src/say-hello";

describe("sayHello", function(): void {
  it("should return hello yanda", function(): void {
    expect(sayHello("yanda")).toBe("Hello yanda")
  })
})