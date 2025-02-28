const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');
function updateDisplay(value) {
    display.value += value;
}
function clearDisplay() {
    display.value = '';
}
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculateResult() {
    try {
        function calculateResult() {
            try {
                if (/[^0-9+\-*/.]/.test(display.value)) throw "Invalid input";
                display.value = eval(display.value);
            } catch (error) {
                display.value = 'Error';
            }
        }
            }
        }
    } catch {
        display.value = 'Error';
    }
}
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const action = button.dataset.action;
        const value = button.dataset.value;

        if (action === 'clear') {
            clearDisplay();
        } else if (action === 'delete') {
            deleteLast();
        } else if (action === 'calculate') {
            calculateResult();
        } else if (value !== undefined) {
            updateDisplay(value);
        }
    });
});

