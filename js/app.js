const etiquetasPrioridade = document.querySelectorAll(".etiqueta_prioridade");

etiquetasPrioridade.forEach(etiqueta => {
const texto = etiqueta.textContent.trim().toLowerCase();
if (texto === "alta") {
etiqueta.classList.add("alta");
} else if (texto === "média") {
etiqueta.classList.add("média");
} else if (texto === "baixa") {
etiqueta.classList.add("baixa");
}
}) 

