const emailInput = document.querySelector(".newsletter-form__email-input");
const buttonSubmit = document.querySelector(".newsletter-form__button");
const emailErrorElement = document.querySelector(
  ".newsletter-form__email-error"
);
const newsletterElement = document.querySelector(".newsletter");
const successMessageElement = document.querySelector(".success-message");
const successMessageEmailStrong = document.querySelector(
  ".success-message__email-strong"
);

const successMessageDismissButton = document.querySelector(
  ".success-message__dismiss-button"
);

const emailRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

buttonSubmit.addEventListener("click", (event) => {
  event.preventDefault();
  const valueEmailInput = emailInput.value.trim();

  const validateEmail = emailRegex.test(valueEmailInput);

  if (valueEmailInput === "") {
    emailErrorElement.textContent = "Valid email required";
    emailInput.classList.add("newsletter-form__email-input--error");
  } else if (!validateEmail) {
    emailErrorElement.textContent = "Valid email error";
    emailInput.classList.add("newsletter-form__email-input--error");
  } else {
    successMessageEmailStrong.textContent = valueEmailInput;
    emailInput.classList.remove("newsletter-form__email-input--error");
    newsletterElement.style.display = "none";
    successMessageElement.style.display = "flex";
    emailErrorElement.textContent = "";
    emailInput.value = "";
  }
});

successMessageDismissButton.addEventListener("click", () => {
  newsletterElement.style.display = "flex";
  successMessageElement.style.display = "none";
});
