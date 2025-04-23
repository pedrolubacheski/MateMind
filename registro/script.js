document.getElementById("registrar-btn").addEventListener("click", function () {
  const inputs = document.querySelectorAll(
    'input[type="text"], input[type="password"], input[type="email"], input[type="tel"]'
  );
  let allFilled = true;

  inputs.forEach((input) => {
    if (input.value.trim() === "") {
      allFilled = false;
    }
  });

  if (!allFilled) {
    alert("Por favor, preencha todos os campos.");
  } else {
    alert("Registro enviado com sucesso!");
  }
});
