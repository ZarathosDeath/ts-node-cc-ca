import { Validator } from "./validator";

export default class CpfValidator implements Validator {
    private static FIRST_FACTOR: number = 10;
    private static SECOND_FACTOR: number = 11;

    validate(unsatinizedCpf: string): boolean {
        if (!unsatinizedCpf) {
            return false
        }
        const cpf = this.sanitizeCpf(unsatinizedCpf)

        if (!this.isValidLength(cpf)) {
            return false
        }

        if (this.isAllDigitsEqual(cpf)) {
            return false
        }

        const firstVerifierDigit = this.calculateVerifierDigits(cpf, CpfValidator.FIRST_FACTOR);
        const secondVerifierDigit = this.calculateVerifierDigits(cpf, CpfValidator.SECOND_FACTOR)
        const verifierDigits = this.extractVerifierDigits(cpf);
        const resultVerifier = `${firstVerifierDigit}${secondVerifierDigit}`;

        return verifierDigits == resultVerifier;
    }

     isValidLength = (cpf: string): boolean => {
        return cpf.length == 11
    }

     extractVerifierDigits = (cpf: string): string => {
        return cpf.slice(9);
    }

    sanitizeCpf = (cpf: string): string => {
        return cpf.replace(/[\.\-]*/g, '')
    }

     isAllDigitsEqual = (cpf: string): boolean => {
        const [firstDigit] = cpf
        return [...cpf].every(digit => digit === firstDigit)
    }

    calculateVerifierDigits = (cpf: string, factor: number): number => {
        let total = 0;
        for (const digit of cpf) {
            if (factor > 1) {
                total += parseInt(digit) * factor--;
            }
        }
        const remainder = total % 11;
        return (remainder < 2) ? 0 : 11 - remainder;
    }

}