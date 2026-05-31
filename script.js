let expression = "";

const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const value = button.textContent;
        expression += value;
        display.value = expression;
    });
});