describe("Function", () => {
  it("should support in typescript", function () {
    function sayHello(name: string): string {
      return `Hello ${name}`;
    }

    expect(sayHello("World")).toBe("Hello World");

    function printHello(name: string): void {
      console.info(`Hello ${name}`);
    }

    printHello("Yanda");
  });

  it("should support default value", function () {
    function sayHello(name: string = "World"): string {
      return `Hello ${name}`;
    }

    expect(sayHello()).toBe("Hello World");
    expect(sayHello("Yanda")).toBe("Hello Yanda");
  });

  it("should support rest parameter", function () {
    function sum(...values: number[]): number {
      let total = 0;
      for (const value of values) {
        total += value;
      }
      return total;
    }

    expect(sum(1, 2, 3, 4, 5)).toBe(15);
  });

  it("should support optional parameter", function () {
    function sayHello(firstName: string, lastName?: string): string {
      if (lastName) {
        return `Hello ${firstName} ${lastName}`;
      } else {
        return `Hello ${firstName}`;
      }
    }

    expect(sayHello("Yanda")).toBe("Hello Yanda");
    expect(sayHello("Yanda", "Agil")).toBe("Hello Yanda Agil");
  });

  it("should supprort function overloading", function () {
    function callMe(value: string): string;
    function callMe(value: number): string;
    function callMe(value: any): any {
      if (typeof value === "string") {
        return value.toUpperCase();
      } else if (typeof value === "number") {
        return value * 10;
      }
    }

    expect(callMe("Yanda")).toBe("YANDA");
    expect(callMe(10)).toBe(100);
  });

  it("should support function as parameter", function () {
    function sayHello(name: string, filter: (name: string) => string) {
      return `Hello ${filter(name)}`;
    }

    function toUpper(name: string): string {
      return name.toUpperCase();
    }

    expect(sayHello("Yanda", toUpper)).toBe("Hello YANDA");

    expect(
      sayHello("Yanda", function (name: string): string {
        return name.toUpperCase();
      })
    ).toBe("Hello YANDA");

    expect(
      sayHello("Yanda", (name: string): string => name.toUpperCase())
    ).toBe("Hello YANDA");
  });
});
