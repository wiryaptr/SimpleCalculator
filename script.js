let expression = "";

const operators = ["+", "-", "*", "/"];

const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const value = button.textContent;

        if (value === "C"){
            expression = "";
            display.value = "";
        }
        else if (value === "⌫"){
            expression = expression.slice(0, -1);
            display.value = expression;
        }
        else if (value === "="){
            if (expression === "") return;
            try {
                expression = eval(expression);
                display.value = expression;
            } catch {
                display.value = "Error";
                expression = "";
            }
        }
        else {
            const lastChar = expression.slice(-1);

            if (operators.includes(lastChar) && operators.includes(value)) {
                return;
            }

            if (value === "."){
                const lastNumber = expression.split(/[+\-*/]/).pop();
                if (lastNumber.includes(".")) {
                    return;
                }
            }
            else if (value === "%"){
                expression = String(Number(expression)/100);
                display.value = expression;
                return;
            }
            expression += value;
            display.value = expression;
        }
    });
});

document.addEventListener("keydown", (event) => {
    const key = event.key;

    if ("0123456789+-*/.".includes(key)) {
        const btn =
            [...buttons].find(
                button => button.textContent === key
            );
        if (btn) btn.click();
    }

    if (key === "Enter"){
        const equalBtn = document.querySelector(".equal");
        equalBtn.click();
    }

    if (key === "Backspace"){
        const deleteBtn = [...buttons].find(button => button.textContent === "⌫");
        deleteBtn.click();
    }

    if (key === "Escape"){
        const clearBtn = document.querySelector(".clear");
        clearBtn.click();
    }
});