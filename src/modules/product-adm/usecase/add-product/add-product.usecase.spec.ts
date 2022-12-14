import AddProductUseCase from "./add-product.usecase";

const MockRepository = () => {
    return {
        add: jest.fn(),
        find: jest.fn()
    }
}

describe("Add product use case unit tests", () => {

    it("should add a product", async () => {
        // repositorio...
        const productRepository = MockRepository();
        // use case...
        const addProductUseCase = new AddProductUseCase(productRepository);

        // input...
        const input = {
            name: "Product 1",
            description: "Some Product 1",
            purchasePrice: 39.9,
            stock: 99
        };

        // output...
        const output = await addProductUseCase.execute(input);

        expect(productRepository.add).toHaveBeenCalled();
        expect(output.id).toBeDefined();
        expect(output.name).toBe(input.name);
        expect(output.description).toBe(input.description);
        expect(output.purchasePrice).toBe(input.purchasePrice);
        expect(output.stock).toBe(input.stock);
    });

});