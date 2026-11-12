const CLAVE_TEMA = "mi-web-tema";

function aplicarTema(tema) {
    const enlace = document.getElementById("tema-claro");
    enlace.disabled = tema !== "claro";
    document.querySelectorAll(".theme-toggle").forEach((interruptor) => {
        interruptor.setAttribute("aria-checked", String(tema === "claro"));
    });
}

function cambiarTema() {
    const enlace = document.getElementById("tema-claro");
    const tema = enlace.disabled ? "claro" : "oscuro";

    aplicarTema(tema);
    localStorage.setItem(CLAVE_TEMA, tema);
}

aplicarTema(localStorage.getItem(CLAVE_TEMA) || "oscuro");

document.addEventListener("DOMContentLoaded", () => {
    aplicarTema(localStorage.getItem(CLAVE_TEMA) || "oscuro");
});

window.addEventListener("storage", (evento) => {
    if (evento.key === CLAVE_TEMA) {
        aplicarTema(evento.newValue || "oscuro");
    }
});
