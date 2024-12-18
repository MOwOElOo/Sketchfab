// Create the <html> structure dynamically
document.body.style.margin = "0"; // Reset default margins
document.body.style.fontFamily = "Arial, sans-serif";

// Create and style a container div
const container = document.createElement("div");
container.style.display = "flex";
container.style.flexDirection = "column";
container.style.alignItems = "center";
container.style.justifyContent = "center";
container.style.height = "100vh";
container.style.backgroundColor = "#f5f5f5";

// Add a heading
const heading = document.createElement("h1");
heading.innerText = "Welcome to My JavaScript-Created Website";
heading.style.color = "#333";
container.appendChild(heading);

// Add a paragraph
const paragraph = document.createElement("p");
paragraph.innerText = "This page was built entirely using JavaScript and CSS!";
paragraph.style.color = "#666";
container.appendChild(paragraph);

// Add a button with an event listener
const button = document.createElement("button");
button.innerText = "Click Me";
button.style.padding = "10px 20px";
button.style.backgroundColor = "#007bff";
button.style.color = "white";
button.style.border = "none";
button.style.borderRadius = "5px";
button.style.cursor = "pointer";
button.style.fontSize = "16px";

// Add hover effect for the button
button.addEventListener("mouseenter", () => {
  button.style.backgroundColor = "#0056b3";
});
button.addEventListener("mouseleave", () => {
  button.style.backgroundColor = "#007bff";
});

// Add a click event
button.addEventListener("click", () => {
  alert("Hello! This is your JavaScript-generated website.");
});
container.appendChild(button);

// Append the container to the body
document.body.appendChild(container);
