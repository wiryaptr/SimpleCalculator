let expression = "";

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
            try {
                expression = eval(expression);
                display.value = expression;
            } catch {
                display.value = "Error";
                expression = "";
            }
        }
        else {
            expression += value;
            display.value = expression;
        }
    });
});