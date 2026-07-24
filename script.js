const form = document.getElementById("contactForm");
form.addEventListener("submit", function(event) {
event.preventDefault();
const fullName = document.getElementById("fullname").value;
const email = document.getElementById("email").value;
const country = document.getElementById("country").value;
const comments = document.getElementById("comments").value;
if (
    fullName === "" ||
    email === "" ||
    country === "" ||
    comments === ""
) {
    alert("Please fill in all fields.");
    return;
}
alert("Form submitted successfully!");
    form.reset();

});
