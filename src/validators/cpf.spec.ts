const example2 = require("./cpfAfter");

test("should validate cpf", function () {
	const isValid = example2.validate("935.411.347-80");
	expect(isValid).toBeTruthy();
});

test("should validate cpf", function () {
	const isValid = example2.validate("357.188.378-05");
	expect(isValid).toBeTruthy();
});

test("Should validate cpf", function () {
	const isValid = example2.validate("987.654.321-00");
	expect(isValid).toBeTruthy();
});

test("Should not validate cpf with all digits equal", function () {
	const isValid = example2.validate("111.111.111-11");
	expect(isValid).toBeFalsy();
});

test("Should not validate cpf with random numbers", function () {
	const isValid = example2.validate("123.456.789-00");
	expect(isValid).toBeFalsy();
});

test("Should not validate cpf with overdigits", function () {
	const isValid = example2.validate("123.456.789-00000000");
	expect(isValid).toBeFalsy();
});

test("should not validate cpf missing digits", function () {
	const isValid = example2.validate("123456789");
	expect(isValid).toBeFalsy();
});

test("Should not validate null", function () {
	const isValid = example2.validate(null);
	expect(isValid).toBeFalsy();
});

test("Should not validate undefined", function () {
	const isValid = example2.validate(undefined);
	expect(isValid).toBeFalsy();
});

test("Should not validate if cpf contains letters", function () {
	const isValid = example2.validate("987a654b321c00");
	expect(isValid).toBeFalsy();
});