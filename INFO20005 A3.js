function addToCart() {
    const addButton = document.getElementById("addButton");
    addButton.textContent = "Added to cart";
    addButton.style.backgroundColor = "#B3E0DC";

    const bagBadge = document.getElementById("bagBadge");
    document.getElementById("bagBadge").style.display = "flex";
}

function checkboxes() {
  document.getElementById("selectAll").addEventListener("change", function() {
    const productCheckboxes = document.querySelectorAll(".productCheckbox");
    productCheckboxes.forEach(function(checkbox) {
      checkbox.checked = this.checked;
    }, this);
  });

  document.querySelectorAll(".productCheckbox").forEach(function(checkbox) {
    checkbox.addEventListener("change", function() {
      const all = document.querySelectorAll(".productCheckbox");
      const allChecked = [...all].every(cb => cb.checked);
      document.getElementById("selectAll").checked = allChecked;
    });
  });
}

window.onload = function() {
  checkboxes();
}