
   
        function convertCelsiusToFahrenheit() {
            const celsiusInput = document.getElementById('celsiusInput').value;
            const fahrenheitOutput = document.getElementById('fahrenheitOutput');

            if (celsiusInput !== '') {
                const fahrenheitValue = (celsiusInput * 9/5) + 32;
                fahrenheitOutput.value = fahrenheitValue.toFixed(2);
            } else {
                fahrenheitOutput.value = '';
            }
        }

        function convertFahrenheitToCelsius() {
            const fahrenheitInput = document.getElementById('fahrenheitInput').value;
            const celsiusOutput = document.getElementById('celsiusOutput');

            if (fahrenheitInput !== '') {
                const celsiusValue = (fahrenheitInput - 32) * 5/9;
                celsiusOutput.value = celsiusValue.toFixed(2);
            } else {
                celsiusOutput.value = '';
            }
        }
   
