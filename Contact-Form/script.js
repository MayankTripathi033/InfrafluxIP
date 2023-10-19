document.addEventListener("DOMContentLoaded", function() {
  const contactForm = document.getElementById("contactForm");
  const successMessage = document.getElementById("successMessage");
  const errorMessage = document.getElementById("errorMessage");

  contactForm.addEventListener("submit", function(event) {
      event.preventDefault();

      const name = document.getElementById("First").value.trim();
      const name1 = document.getElementById("last").value.trim();
      const email = document.getElementById("email").value.trim();
      const phone = document.getElementById("phone").value.trim();
      const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

      if (name === "" || name1 === "" || email === "" || phone === "" || !emailRegex.test(email)) {
          errorMessage.style.display = "block";
          successMessage.style.display = "none";
      } else {
          errorMessage.style.display = "none";
          successMessage.style.display = "none";
          contactForm.reset();
      }
  });
});

const formElements = document.querySelectorAll('input, button');
formElements.forEach(element => {
  element.addEventListener('mouseover', () => {
    element.style.transform = 'scale(1.1)';
  });

  element.addEventListener('mouseout', () => {
    element.style.transform = 'scale(1)';
  });
});

const submitBtn = document.getElementById('submit');
submitBtn.addEventListener('click', () => {
  const firstName = document.getElementById('First').value;
  const lastName = document.getElementById('last').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;

  const contactData = {
    firstName,
    lastName,
    email,
    phone,
  };
  localStorage.setItem('contactData', JSON.stringify(contactData));

  formElements.forEach(element => {
    if (element.tagName === 'INPUT') {
      element.value = '';
    }
  });

  alert('Form has been submitted');
});