// ===================================
// JAVASCRIPT
// Auto-scroll infinito y funcionalidad de navegación
// ===================================

// Función para navegar al proyecto específico en la página Archive
function navigateToProject(projectId) {
  // Aquí redirigirá a la sección específica del proyecto en Archive
  console.log("Navegando a proyecto:", projectId);

  // Cuando tengas la página Archive lista, usarás algo como:
  // window.location.href = `archive.html#${projectId}`;

  alert(
    `Navegando al proyecto: ${projectId}\n(Conectarás esto con Archive más adelante)`
  );
}

// Smooth scroll para los enlaces del navbar
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});
// ===================================
// FUNCIÓN PARA MOSTRAR INFORMACIÓN
// ===================================

// Función para mostrar información del proyecto al hacer click en una imagen
function showInfo(title, text) {
  document.getElementById("infoTitle").textContent = title;
  document.getElementById("infoText").textContent = text;
}
