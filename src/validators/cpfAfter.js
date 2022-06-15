const FIRST_FACTOR = 10;
const SECOND_FACTOR = 11;

function validate(unsatinizedCpf) {
    if (!unsatinizedCpf) {
        return false
    }
    const cpf = sanitizeCpf(unsatinizedCpf)
    
    if (!isValidLength(cpf)) {
        return false
    }

    if (isAllDigitsEqual(cpf)) {
        return false
    }

    const firstVerifierDigit = calculateVerifierDigits(cpf, FIRST_FACTOR);
    const secondVerifierDigit = calculateVerifierDigits(cpf, SECOND_FACTOR)
    const verifierDigits = extractVerifierDigits(cpf);  
    const resultVerifier = `${firstVerifierDigit}${secondVerifierDigit}`;

    return verifierDigits == resultVerifier; 
}

const isValidLength = (cpf) => {
    return cpf.length == 11
}

const extractVerifierDigits = (cpf) => {
    return cpf.slice(9);
}

const sanitizeCpf = (cpf) => {
    return cpf.replace(/[\.\-]*/g, '')
}

const isAllDigitsEqual = (cpf) => {
    const [firstDigit] = cpf
    return [...cpf].every(digit => digit === firstDigit)
}

const calculateVerifierDigits = (cpf, factor) => {
    let total = 0;
    for (const digit of cpf) {
        if (factor > 1) {
            total += parseInt(digit) * factor--;
        }
    }
    const remainder = total % 11;
    return (remainder < 2) ? 0 : 11 - remainder;
}

module.exports = {
    validate
}
