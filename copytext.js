let copyText = document.querySelector(".copy-text");
copyText.querySelector("button").addEventListener("click", function () {
  let copytext = copyText.querySelector("#textarea");
  textarea.select();
  document.execCommand("copy");
  textarea.classList.add("active");
  window.getSelection().removeAllRanges();
  setTimeout(function () {
    textarea.classList.remove("active");
  }, 2500);
});