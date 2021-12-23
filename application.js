document.addEventListener("DOMContentLoaded", () => {
  const emailField = document.getElementById("page__email");

  document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    e.stopPropagation();

    const email = emailField.value;

    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      emailField.classList.add("invalid");
    }
  });

  emailField.addEventListener("input", () => {
    emailField.classList.remove("invalid");
  });
});
