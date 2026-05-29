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

function validatePayment() {
    let valid = true;

    const name = document.getElementById("inputName");
    const nameError = document.getElementById("nameError");
    if (name.value.trim() === "") {
        nameError.textContent = "Please enter your name.";
        name.style.borderColor = "red";
        valid = false;
    } else {
        nameError.textContent = "";
        name.style.borderColor = "#03396C";
    }

    const email = document.getElementById("inputEmail");
    const emailError = document.getElementById("emailError");
    if (!email.checkValidity() || email.value.trim() === "") {
        emailError.textContent = "Please enter a valid email.";
        email.style.borderColor = "red";
        valid = false;
    } else {
        emailError.textContent = "";
        email.style.borderColor = "#03396C";
    }

    const phone = document.getElementById("inputPhone");
    const phoneError = document.getElementById("phoneError");
    if (phone.value.length < 10) {
        phoneError.textContent = "Please enter a valid phone number.";
        phone.style.borderColor = "red";
        valid = false;
    } else {
        phoneError.textContent = "";
        phone.style.borderColor = "#03396C";
    }

    const address = document.getElementById("inputAddress");
    const addressError = document.getElementById("addressError");
    if (address.value.trim() === "") {
        addressError.textContent = "Please enter your address.";
        address.style.borderColor = "red";
        valid = false;
    } else {
        addressError.textContent = "";
        address.style.borderColor = "#03396C";
    }

    const cardNumber = document.getElementById("inputCardNumber");
    const cardNumberError = document.getElementById("cardNumberError");
    if (cardNumber.value.length !== 16) {
        cardNumberError.textContent = "Card number must be 16 digits.";
        cardNumber.style.borderColor = "red";
        valid = false;
    } else {
        cardNumberError.textContent = "";
        cardNumber.style.borderColor = "#03396C";
    }

    const expiry = document.getElementById("inputExpiry");
    const expiryError = document.getElementById("expiryError");
    if (expiry.value === "") {
        expiryError.textContent = "Please enter an expiry date.";
        expiry.style.borderColor = "red";
        valid = false;
    } else {
        expiryError.textContent = "";
        expiry.style.borderColor = "#03396C";
    }

    const cvv = document.getElementById("inputCvv");
    const cvvError = document.getElementById("cvvError");
    if (cvv.value.length !== 3) {
        cvvError.textContent = "CVV must be 3 digits.";
        cvv.style.borderColor = "red";
        valid = false;
    } else {
        cvvError.textContent = "";
        cvv.style.borderColor = "#03396C";
    }

    if (valid) {
        window.location.href = "Confirmation of Payment.html";
    }
}

window.onload = function() {
  checkboxes();

  const placeOrder = document.getElementById("placeOrder");
  if (placeOrder) {
    placeOrder.addEventListener("click", validatePayment);
  }
}