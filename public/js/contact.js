// EmailJS Init
(function () {
  emailjs.init("LVv0L1UFTdGcoB6KP"); // ✅ Public Key
})();

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs.sendForm(
    "service_95lznnr",          // ✅ Service ID (dashboard se)
    "d_sea_marine_contact",    // ✅ Template ID (dashboard se)
    this
  )
  .then(function (response) {
    document.getElementById("formStatus").innerHTML =
      "<span style='color:green'>Message sent successfully.</span>";
    document.getElementById("contactForm").reset();
    console.log("SUCCESS!", response.status, response.text);
  })
  .catch(function (error) {
    document.getElementById("formStatus").innerHTML =
      "<span style='color:red'>Error sending message. Please try again.</span>";
    console.error("FAILED...", error);
  });
});
