const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");
const calculator = document.querySelector(".calculator");
const audio = document.querySelector("#audio");
const themeToggleBtn = document.querySelector("#darkmode-toggle");

let isDark = false;

buttons.forEach((item) => {
  item.onclick = () => {
    if (item.id == "clear") {
      display.innerText = "";
    } else if (item.id == "backspace") {
      let string = display.innerText.toString();
      display.innerText = string.substr(0, string.length - 1);
    } else if (display.innerText != "" && item.id == "equal") {
      if (isDark) {
        // Display fake answer in dark mode
        display.innerText = "I MISS YOU🥺";
        // Play audio only in dark mode
        audio.play();
      } else {
        // Perform actual calculation in light mode
        display.innerText = eval(display.innerText);
      }
    } else if (display.innerText == "" && item.id == "equal") {
      display.innerText = "Empty!";
      setTimeout(() => (display.innerText = ""), 2000);
    } else {
      display.innerText += item.id;
    }
  };
});

themeToggleBtn.addEventListener("change", function() {
    if (this.checked) {
        calculator.classList.add("dark");
        isDark = true;
    } else {
        calculator.classList.remove("dark");
        isDark = false;
    }
});
