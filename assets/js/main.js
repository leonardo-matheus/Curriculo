const btn_printer = document.getElementById("printer");

btn_printer.addEventListener("click", (evt) => {
    alert("Você será redirecionado!!")
  setTimeout(() => {
    window.open(
      "https://drive.google.com/file/d/1Fdl99bScIGgJiiRQknL8lzRk9BNanUhu/view?usp=sharing",
      "_blank"
    );
  }, 3000);
});