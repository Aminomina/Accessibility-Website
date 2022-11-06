function sendMail() {
  var link =
    "mailto:anlu2188@colorado.edu" +
    "?cc=anka4328@colorado.edu, injo6806@colorado.edu, kyan6528@colorado.edu" +
    "&subject=" +
    escape("User Testing Results") +
    "&body=" +
    escape(
      `Button Feedback:\n${
        document.getElementById("button-feedback").value
      }\n\nFont Feedback:\n${
        document.getElementById("font-feedback").value
      }\n\nColor Pallete Feedback:\n${
        document.getElementById("color-feedback").value
      }\n\nOverall Pallete Feedback:\n${
        document.getElementById("overall-feedback").value
      }`
    );
  window.location.href = link;
}
