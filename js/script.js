const tip = document.getElementById("disclaimer-tip");
const colors = ["color-blue", "color-red", "color-green"];
let current = 0;

// Function to change color automatically every 2 seconds (2000 milliseconds)
setInterval(() => {
  // Remove the current color class
  tip.classList.remove(colors[current]);

  // Update to the next color
  current = (current + 1) % colors.length;

  // Add the new color class
  tip.classList.add(colors[current]);
}, 1000); 