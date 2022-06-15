import CpfValidator from "../src/validators/cpfValidator";

const makeSut = () => {
    const cpfValidator = new CpfValidator()

    return {
        cpfValidator
    }
}

describe('CpfValidator tests', () => {

    test("should validate cpf", function () {
        const { cpfValidator } = makeSut()
        const isValid = cpfValidator.validate("935.411.347-80");
        expect(isValid).toBeTruthy();
    });

    test("should validate cpf", function () {
        const { cpfValidator } = makeSut()
        const isValid = cpfValidator.validate("357.188.378-05");
        expect(isValid).toBeTruthy();
    });

    test("Should validate cpf", function () {
        const { cpfValidator } = makeSut()
        const isValid = cpfValidator.validate("987.654.321-00");
        expect(isValid).toBeTruthy();
    });

    test("Should not validate cpf with all digits equal", function () {
        const { cpfValidator } = makeSut()
        const isValid = cpfValidator.validate("111.111.111-11");
        expect(isValid).toBeFalsy();
    });

    test("Should not validate cpf with random numbers", function () {
        const { cpfValidator } = makeSut()
        const isValid = cpfValidator.validate("123.456.789-00");
        expect(isValid).toBeFalsy();
    });

    test("Should not validate cpf with overdigits", function () {
        const { cpfValidator } = makeSut()
        const isValid = cpfValidator.validate("123.456.789-00000000");
        expect(isValid).toBeFalsy();
    });

    test("should not validate cpf missing digits", function () {
        const { cpfValidator } = makeSut()
        const isValid = cpfValidator.validate("123456789");
        expect(isValid).toBeFalsy();
    });

    test("Should not validate empty cpf", function () {
        const { cpfValidator } = makeSut()
        const isValid = cpfValidator.validate('');
        expect(isValid).toBeFalsy();
    });

    test("Should not validate if cpf contains letters", function () {
        const { cpfValidator } = makeSut()
        const isValid = cpfValidator.validate("987a654b321c00");
        expect(isValid).toBeFalsy();
    });
})