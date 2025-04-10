// Calculator state
let calculator = {
    currentInput: '0',
    previousInput: '',
    operation: null,
    resetInput: false
};

// DOM elements
const display = document.getElementById('display');
const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const equalsButton = document.getElementById('equals');
const clearButton = document.getElementById('clear');
const decimalButton = document.getElementById('decimal');

// Update display
function updateDisplay() {
    if (display) display.textContent = calculator.currentInput;
}

// Handle number input
function handleNumber(number) {
    if (calculator.currentInput === '0' || calculator.resetInput) {
        calculator.currentInput = number;
        calculator.resetInput = false;
    } else {
        calculator.currentInput += number;
    }
    updateDisplay();
}

// Handle decimal point
function handleDecimal() {
    if (calculator.resetInput) {
        calculator.currentInput = '0.';
        calculator.resetInput = false;
    } else if (!calculator.currentInput.includes('.')) {
        calculator.currentInput += '.';
    }
    updateDisplay();
}

// Handle operator selection
function handleOperator(op) {
    if (calculator.operation !== null) calculate();
    calculator.previousInput = calculator.currentInput;
    calculator.operation = op;
    calculator.resetInput = true;
}

// Perform calculation
function calculate() {
    let result;
    const prev = parseFloat(calculator.previousInput);
    const current = parseFloat(calculator.currentInput);

    if (isNaN(prev) || isNaN(current)) return;

    switch (calculator.operation) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            if (current === 0) {
                if (typeof window !== 'undefined') {
                    alert("Error: Division by zero");
                }
                clearAll();
                return;
            }
            result = prev / current;
            break;
        default:
            return;
    }

    calculator.currentInput = result.toString();
    calculator.operation = null;
    updateDisplay();
}

// Clear calculator
function clearAll() {
    calculator.currentInput = '0';
    calculator.previousInput = '';
    calculator.operation = null;
    updateDisplay();
}

// Event listeners
if (numberButtons && numberButtons.length > 0) {
    numberButtons.forEach(button => {
        button.addEventListener('click', () => {
            handleNumber(button.textContent);
        });
    });

    operatorButtons.forEach(button => {
        button.addEventListener('click', () => {
            handleOperator(button.textContent);
        });
    });

    equalsButton.addEventListener('click', calculate);
    clearButton.addEventListener('click', clearAll);
    decimalButton.addEventListener('click', handleDecimal);
}

// Initialize display
updateDisplay();

// Export for testing
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        calculator,
        updateDisplay,
        handleNumber,
        handleDecimal,
        handleOperator,
        calculate,
        clearAll
    };
}