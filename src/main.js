const form = document.getElementById('form');
const email = document.getElementById('email');

function validateEmail(email) {
  const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  return re.test(String(email).toLowerCase());
}

form.addEventListener('submit', e => {
  e.preventDefault();
  const emailValue = email.value;

  if (!validateEmail(emailValue)) {
    form.classList.add('error');
  } else {
    form.classList.remove('error');
  }
});