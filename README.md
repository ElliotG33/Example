# Calculator App

A simple web-based calculator with basic arithmetic operations, built with HTML, CSS, and JavaScript.

## Setup Instructions

1. Clone the repository:
```bash
git clone https://github.com/your-repo/calculator.git
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open `index.html` in your browser.

## Usage Guide

### Basic Operations
- Click number buttons (0-9) to input values
- Click operator buttons (+, -, *, /) to select operation
- Click equals (=) to calculate result
- Click clear (C) to reset calculator

### Examples
1. Addition: `5 + 3 = 8`
2. Subtraction: `5 - 3 = 2`
3. Multiplication: `5 * 3 = 15`
4. Division: `6 / 3 = 2`

## Feature Overview

- Basic arithmetic operations (addition, subtraction, multiplication, division)
- Decimal point support
- Clear functionality
- Responsive design
- Error handling (division by zero)
- State management for current/previous inputs

## Testing Methodology

The calculator includes comprehensive unit tests using Jest:

```bash
npm test
```

Tests cover:
- All arithmetic operations
- Input handling
- Edge cases (division by zero)
- State management

## Future Enhancements

1. Keyboard input support
2. Memory functions (M+, M-, MR, MC)
3. Scientific calculator functions
4. Theme customization
5. History of calculations
6. Percentage operations
7. Responsive mobile layout improvements
