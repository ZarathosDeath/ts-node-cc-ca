import Cpf from "../src/Cpf";

describe('CpfValidator tests', () => {

    test("should create cpf with valid value", function () {
        const cpf = new Cpf("935.411.347-80")
        expect(cpf).toBeTruthy();
        expect(cpf.value).toBe("935.411.347-80")
    });

    test("should not create cpf with all digits equal", function () {
        expect(() => new Cpf("111.111.111-11")).toThrowError(new Error('Invalid CPF'));
    });


    test("Should not create cpf with random numbers", function () {
        expect(() => new Cpf("123.456.789-00")).toThrowError(new Error('Invalid CPF'));

    });

    test("Should not validate cpf with overdigits", function () {
        expect(() => new Cpf("123.456.789-00000000")).toThrowError(new Error('Invalid CPF'));
    });

    test("should not validate cpf missing digits", function () {
        expect(() => new Cpf("123456789")).toThrowError(new Error('Invalid CPF'));

    });

    test("Should not validate empty cpf", function () {
        expect(() => new Cpf("")).toThrowError(new Error('Invalid CPF'));
    });

    test("Should not validate if cpf contains letters", function () {
        expect(() => new Cpf("987a654b321c00")).toThrowError(new Error('Invalid CPF'));
    });
})