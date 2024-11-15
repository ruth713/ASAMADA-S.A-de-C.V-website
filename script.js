document.addEventListener("DOMContentLoaded", () => {
  // Simula un contador de visitas
  const contadorElement = document.getElementById("contador");
  let visitas = parseInt(localStorage.getItem("visitas")) || 0;
  visitas++;
  contadorElement.textContent = visitas;
  localStorage.setItem("visitas", visitas);
});
