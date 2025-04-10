const {
    calculator,
    updateDisplay,
    handleNumber,
    handleDecimal,
    handleOperator,
    calculate,
    clearAll
} = require('./script');

// Calculator unit tests
describe('Calculator Operations', () => {
    beforeEach(() => {
        calculator.currentInput = '0';
        calculator.previousInput = '';
        calculator.operation = null;
        calculator.resetInput = false;
    });

    test('should add two numbers correctly', () => {
        calculator.currentInput = '5';
        calculator.previousInput = '3';
        calculator.operation = '+';
        calculate();
        expect(calculator.currentInput).toBe('8');
    });

    test('should subtract two numbers correctly', () => {
        calculator.currentInput = '5';
        calculator.previousInput = '3';
        calculator.operation = '-';
        calculate();
        expect(calculator.currentInput).toBe('-2');
    });

    test('should multiply two numbers correctly', () => {
        calculator.currentInput = '5';
        calculator.previousInput = '3';
        calculator.operation = '*';
        calculate();
        expect(calculator.currentInput).toBe('15');
    });

    test('should divide two numbers correctly', () => {
        calculator.currentInput = '6';
        calculator.previousInput = '3';
        calculator.operation = '/';
        calculate();
        expect(calculator.currentInput).toBe('0.5');
    });

    test('should handle division by zero', () => {
        const alertMock = jest.spyOn(window, 'alert').mockImplementation();
        calculator.currentInput = '0';
        calculator.previousInput = '5';
        calculator.operation = '/';
        calculate();
        expect(alertMock).toHaveBeenCalledWith("Error: Division by zero");
        expect(calculator.currentInput).toBe('0');
        alertMock.mockRestore();
    });

    test('should clear calculator state', () => {
        calculator.currentInput = '5';
        calculator.previousInput = '3';
        calculator.operation = '+';
        clearAll();
        expect(calculator.currentInput).toBe('0');
        expect(calculator.previousInput).toBe('');
        expect(calculator.operation).toBeNull();
    });
});

describe('Input Handling', () => {
    beforeEach(() => {
        calculator.currentInput = '0';
        calculator.previousInput = '';
        calculator.operation = null;
        calculator.resetInput = false;
    });

    test('should handle number input correctly', () => {
        handleNumber('5');
        expect(calculator.currentInput).toBe('5');
        handleNumber('3');
        expect(calculator.currentInput).toBe('53');
    });

    test('should handle decimal input correctly', () => {
        handleDecimal();
        expect(calculator.currentInput).toBe('0.');
        handleNumber('5');
        expect(calculator.currentInput).toBe('0.5');
    });

    test('should not allow multiple decimals', () => {
        handleNumber('5');
        handleDecimal();
        handleDecimal();
        expect(calculator.currentInput).toBe('5.');
    });
});