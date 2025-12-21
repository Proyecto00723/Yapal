/* =========================
   PAGOS.JS
   Control de capítulos pagados
========================= */

// Guardar pago de un capítulo
function guardarPago(curso, capitulo) {
    const usuario = localStorage.getItem("usuario");
    if (!usuario) return;

    const clave = `pagos_${usuario}`;
    let pagos = JSON.parse(localStorage.getItem(clave)) || [];

    const registro = `${curso}_${capitulo}`;

    if (!pagos.includes(registro)) {
        pagos.push(registro);
        localStorage.setItem(clave, JSON.stringify(pagos));
    }
}

// Verificar si un capítulo está pagado
function capituloPagado(curso, capitulo) {
    const usuario = localStorage.getItem("usuario");
    if (!usuario) return false;

    const clave = `pagos_${usuario}`;
    const pagos = JSON.parse(localStorage.getItem(clave)) || [];

    return pagos.includes(`${curso}_${capitulo}`);
}

// Mostrar botón o video según pago
function verificarAcceso(curso, capitulo, urlVideo) {
    const contenedor = document.getElementById("contenido");

    if (capituloPagado(curso, capitulo)) {
        contenedor.innerHTML = `
            <div class="video">
                <iframe width="100%" height="400"
                    src="${urlVideo}"
                    frameborder="0"
                    allowfullscreen>
                </iframe>
            </div>
        `;
    } else {
        contenedor.innerHTML = `
            <div class="pago">
                <h3>🔒 Contenido bloqueado</h3>
                <p>Debes pagar para acceder a este capítulo.</p>
                <button onclick="simularPago('${curso}', '${capitulo}', '${urlVideo}')">
                    Pagar y desbloquear
                </button>
            </div>
        `;
    }
}

// Simulación de pago (luego se reemplaza por PayPal real)
function simularPago(curso, capitulo, urlVideo) {
    alert("💳 Pago simulado con éxito");
    guardarPago(curso, capitulo);
    verificarAcceso(curso, capitulo, urlVideo);
}
