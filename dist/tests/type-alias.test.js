describe("Type alias", function () {
    it("should support in typescript", function () {
        const category = {
            id: 1,
            name: "Handphone",
            // description: "Contoh"
        };
        const product = {
            id: "1",
            name: "iPhone 14",
            price: 15000000,
            category: category
        };
        console.info(category);
        console.info(product);
    });
});
export {};
