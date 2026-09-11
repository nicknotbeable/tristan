function toggleMenu() {
  const menu = document.getElementById("mainMenu");
  if (menu.style.width === "250px") {
    menu.style.width = "0";
  } else {
    menu.style.width = "250px";
  }
}


function exitMenu() {
  const menu = document.getElementById("mainMenu");
  menu.style.width = "0";
}

document.getElementById("orderForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const clientName = document.getElementById("clientName").value;
    const branch = document.getElementById("branch").value;
    const quantity = document.getElementById("quantity").value;

    const tableBody = document.querySelector("#logTable tbody");
    const newRow = document.createElement("tr");

    newRow.innerHTML = `
      <td>${clientName}</td>
      <td>${branch}</td>
      <td>${quantity}</td>
      <td>Dispatched</td>
      <td><button class="delete-btn">Delete</button></td>
    `;

    tableBody.appendChild(newRow);
    document.getElementById("quantity").value = "";
  });
  document.getElementById("orderForm").reset();



document.querySelector("#logTable").addEventListener("click", function(e) {
  if (e.target.classList.contains("delete-btn")) {
    e.target.closest("tr").remove();
  }
});
