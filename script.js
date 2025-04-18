const passInput = document.querySelector(".pass-field input");
const eyeIcon = document.querySelector(".pass-field i");
const reqList = document.querySelectorAll(".requirement-list li");

const requirements = [
    { regex: /.{8,}/, index: 0 }, // 8 characters minimum
    { regex: /[0-9]/, index: 1 }, // one numerical number at least
    { regex: /[a-z]/, index: 2 }, // At least one lowercase letter
    { regex: /[^A-Za-z0-9]/, index: 3 }, // At least one special character
    { regex: /[A-Z]/, index: 4 }, // At least one uppercase letter
]

passInput.addEventListener("keyup", (e) => {
    requirements.forEach(item => {
        // Verify if the password matches the requirement regex
        const isValid = item.regex.test(e.target.value);
        const requirementItem = reqList[item.index];

        // Updating class and icon of requirement item if requirement matched or not
        if (isValid) {
            requirementItem.classList.add("valid");
            requirementItem.firstElementChild.className = "fa-solid fa-check";
        } else {
            requirementItem.classList.remove("valid");
            requirementItem.firstElementChild.className = "fa-solid fa-circle";
        }
    });
});

eyeIcon.addEventListener("click", () => {
    // Toggle the password input type between "password" and "text"
    passInput.type = passInput.type === "password" ? "text" : "password";

    // Update the eye icon class based on the password input type
    eyeIcon.className = `fa-solid fa-eye${passInput.type === "password" ? "" : "-slash"}`;
});