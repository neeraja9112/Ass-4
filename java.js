function generateRandomNumber() {
    const minValue = parseInt(document.getElementById('minValue').value);
    const maxValue = parseInt(document.getElementById('maxValue').value);
    const resultElement = document.getElementById('result');

    if (isNaN(minValue) || isNaN(maxValue)) {
        resultElement.textContent = 'Please enter valid numbers.';
        return;
    }

    if (minValue > maxValue) {
        resultElement.textContent = 'Minimum value should be less than or equal to maximum value.';
        return;
    }

    const randomNumber = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
    resultElement.textContent = `Random number: ${randomNumber}`;
}
