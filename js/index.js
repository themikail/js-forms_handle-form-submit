console.clear();

const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(form);

  const data = {};
  formData.forEach((value, key) => (data[key] = value));

  console.log(data);
});
