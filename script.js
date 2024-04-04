  // Get the input element
  const inputBox = document.getElementById("inputbox");

  // Function to handle button clicks
  function handleButtonClick(value) {
    if (value === "=") {
      // Handle the calculation here
      inputBox.value = eval(inputBox.value);
    } else if (value === "AC") {
      // Clear the input
      inputBox.value = "";
    } else if (value === "DEL") {
      // Delete the last character
      inputBox.value = inputBox.value.slice(0, -1);
    } else {
      // Append the clicked button value to the input
      inputBox.value += value;
    }
  }

  // Add event listeners to all buttons
  const buttons = document.querySelectorAll("button");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      handleButtonClick(button.textContent);
    });
  });