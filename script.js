const form = document.getElementById("form");
const list = document.getElementById("list");
const totalDisplay = document.getElementById("total");
const dateDisplay = document.getElementById("date");

let total = 0;

// Show current date
dateDisplay.textContent = new Date().toDateString();

// Handle form submission
form.addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const category = document.getElementById("category").value;
  const hours = parseFloat(document.getElementById("hours").value);

  if (!name || isNaN(hours)) {
    alert("Please fill all fields correctly");
    return;
  }

  // Create card
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <strong>${name}</strong>
    <p>Category: ${category}</p>
    <p>Hours: ${hours}</p>
  `;

  list.appendChild(card);

  // Update total
  total += hours;
  totalDisplay.textContent = total;


  // Reset form
  form.reset();
});