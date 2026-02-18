// Initialize EmailJS
(function () {
  emailjs.init("LVvOL1UFtdGcob6KP"); // 🔥 Replace with your Public Key
})();

const form = document.getElementById("contactForm");
const responseMessage = document.getElementById("responseMessage");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  responseMessage.innerHTML = "Sending...";
  responseMessage.className = "alert-message";
  responseMessage.style.display = "block";

  emailjs.sendForm(
    "service_95lznnr",     // 🔥 Replace with your Service ID
    "template_o44ewee",    // 🔥 Replace with your Template ID
    this
  )
  .then(function () {
    responseMessage.innerHTML = "✅ Message Sent Successfully!";
    responseMessage.className = "alert-message success";
    form.reset();
  })
  .catch(function (error) {
    responseMessage.innerHTML = "❌ Failed to Send Message!";
    responseMessage.className = "alert-message error";
  });
});
