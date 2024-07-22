// script.js
document.addEventListener("DOMContentLoaded", function() {
  // open
  const burger = document.querySelectorAll(".navbar-burger");
  const menu = document.querySelectorAll(".navbar-menu");

  if (burger.length && menu.length) {
    for (var i = 0; i < burger.length; i++) {
      burger[i].addEventListener("click", function () {
        for (var j = 0; j < menu.length; j++) {
          menu[j].classList.toggle("hidden");
        }
      });
    }
  }

  // close
  const close = document.querySelectorAll(".navbar-close");
  const backdrop = document.querySelectorAll(".navbar-backdrop");

  if (close.length) {
    for (var i = 0; i < close.length; i++) {
      close[i].addEventListener("click", function () {
        for (var j = 0; j < menu.length; j++) {
          menu[j].classList.toggle("hidden");
        }
      });
    }
  }

  if (backdrop.length) {
    for (var i = 0; i < backdrop.length; i++) {
      backdrop[i].addEventListener("click", function () {
        for (var j = 0; j < menu.length; j++) {
          menu[j].classList.toggle("hidden");
        }
      });
    }
  }

  const form = document.getElementById("contactForm");

  form.addEventListener("submit", function (event) {
    let isValid = true;

    // Clear previous errors
    document.querySelectorAll(".error").forEach(function (errorSpan) {
      errorSpan.textContent = "";
    });

    // Validate Name
    const name = document.getElementById("name").value;
    if (name.trim() === "") {
      isValid = false;
      document.getElementById("nameError").textContent = "Name is required.";
    }

    // Validate Email
    const email = document.getElementById("email").value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      isValid = false;
      document.getElementById("emailError").textContent =
        "Invalid email format.";
    }

    // Validate Subject
    const subject = document.getElementById("subject").value;
    if (subject.trim() === "") {
      isValid = false;
      document.getElementById("subjectError").textContent =
        "Subject is required.";
    }

    // Validate Message
    const message = document.getElementById("message").value;
    if (message.trim() === "") {
      isValid = false;
      document.getElementById("messageError").textContent =
        "Message is required.";
    }

    if (!isValid) {
      event.preventDefault(); // Prevent form submission if there are validation errors
    }
  });
});
document.addEventListener("DOMContentLoaded", function () {
  // open
  const burger = document.querySelectorAll(".navbar-burger");
  const menu = document.querySelectorAll(".navbar-menu");

  if (burger.length && menu.length) {
    for (var i = 0; i < burger.length; i++) {
      burger[i].addEventListener("click", function () {
        for (var j = 0; j < menu.length; j++) {
          menu[j].classList.toggle("hidden");
        }
      });
    }
  }

  // close
  const close = document.querySelectorAll(".navbar-close");
  const backdrop = document.querySelectorAll(".navbar-backdrop");

  if (close.length) {
    for (var i = 0; i < close.length; i++) {
      close[i].addEventListener("click", function () {
        for (var j = 0; j < menu.length; j++) {
          menu[j].classList.toggle("hidden");
        }
      });
    }
  }

  if (backdrop.length) {
    for (var i = 0; i < backdrop.length; i++) {
      backdrop[i].addEventListener("click", function () {
        for (var j = 0; j < menu.length; j++) {
          menu[j].classList.toggle("hidden");
        }
      });
    }
  }
});



