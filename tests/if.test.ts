describe("If statement", function () {
  it("should support in typescript", () => {
    const examValue = 90;

    if (examValue > 80) {
      console.info("Good");
    } else if (examValue > 60) {
      console.info("Not Bad");
    } else {
      console.info("Try Again");
    }
  });

  it("should support ternary operator", function () {
    const value = 80;
    const say = value >= 75 ? "Congratulation" : "Try Again";
    console.info(say);
  });

  it("should support switch statment", function () {
    function sayHello(name: string): string {
      switch (name) {
        case "John":
          return "Hello John";
        case "Jane":
          return "Hello Jane";
        default:
          return "Hello";
      }
    }

    console.info(sayHello("John"));
    console.info(sayHello("Jane"));
    console.info(sayHello("Doe"));
  });
});
