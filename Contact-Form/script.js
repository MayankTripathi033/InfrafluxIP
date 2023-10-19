document.addEventListener("DOMContentLoaded", function() {
  const contactForm = document.getElementById("contactForm");
  const successMessage = document.getElementById("successMessage");
  const errorMessage = document.getElementById("errorMessage");

  contactForm.addEventListener("submit", function(event) {
      event.preventDefault();

      const name = document.getElementById("First-Name").value.trim();
      const name1 = document.getElementById("last-Name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("phone").value.trim();
      const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

      if (name === "" || name1 === "" || email === "" || message === "" || !emailRegex.test(email)) {
          errorMessage.style.display = "block";
          successMessage.style.display = "none";
      } else {
          errorMessage.style.display = "none";
          successMessage.style.display = "block";
          contactForm.reset();
      }
  });
});
