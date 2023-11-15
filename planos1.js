const unifamiliarButton = document.getElementById("unifamiliarButton");
const multifamiliarButton = document.getElementById("GenerarButton");
const edificacionButton = document.getElementById("edificacionButton");

// para que no aparezaca al inicio de la pagina
    unifamiliarContent.style.display = "none";
    edificacion.style.display = "none";
    multifamiliarContent.style.display="none"
// cuando se elije una opcion
unifamiliarButton.addEventListener("click", () => {
    unifamiliarContent.style.display = "block";
    edificacion.style.display = "none";
    multifamiliarContent.style.display="none"
});

edificacionButton.addEventListener("click", () => {
    edificacion.style.display = "block";
    unifamiliarContent.style.display = "none";
    const generarButton = document.getElementById("GenerarButton");
    const multifamiliarContent = document.getElementById("multifamiliarContent");
        generarButton.addEventListener("click", () => {
            const pisos = document.getElementById("edificio").value;
            const tipoVivienda = document.getElementById("tipo").value;

            // Condiciones para mostrar el contenido multifamiliar
            if (pisos === "1" && tipoVivienda === "tipo_1") {
                multifamiliarContent.style.display = "block";
            } else {
                multifamiliarContent.style.display = "none";
                VersionPremiun();
            }
        });
});
function pasarelaPagos() {
    alert("===>PASARELA DE PAGOS");

}
function VersionPremiun() {
    alert("Esta Opcion aun no esta Disponible en la Version Gratuita");

}
// Obtén los elementos de los select
const anchoSelect2 = document.getElementById("ancho2");
const largoSelect2 = document.getElementById("largo2");
const escaleraSelect2 = document.getElementById("escalera2");
const cuartoSelect2 = document.getElementById("cuartos2");
const banosSelect2 = document.getElementById("banos2");
const terrazaSelect2 = document.getElementById("terraza2");

// Agrega un evento de cambio al select de "Ancho"
anchoSelect2.addEventListener("change", actualizarOpciones);
largoSelect2.addEventListener("change", actualizarOpciones);
function actualizarOpciones() {
    // Borra todas las opciones actuales en "Largo", "Escalera", "Cuartos", "Baños" y "Terraza"
    while (largoSelect2.options.length > 0) {
        largoSelect2.remove(0);
    }
    while (escaleraSelect2.options.length > 0) {
        escaleraSelect2.remove(0);
    }
    while (cuartoSelect2.options.length > 0) {
        cuartoSelect2.remove(0);
    }
    
    while (banosSelect2.options.length > 0) {
        banosSelect2.remove(0);
    }
    while (terrazaSelect2.options.length > 0) {
        terrazaSelect2.remove(0);
    }

    // Obtiene el valor seleccionado en "Ancho" y "Largo"
    const selectedAncho2 = anchoSelect2.value;
   
    // console.log("que error",escaleraSelect2)
    // Agrega las opciones correspondientes a "Largo" según la selección de "Ancho"
    if (selectedAncho2 === "6") {
        largoSelect2.add(new Option("17 metros", "17"));
        // 
        escaleraSelect2.add(new Option("Fondo","3"));
        cuartoSelect2.add(new Option("2"));
        banosSelect2.add(new Option("1"));
        terrazaSelect2.add(new Option("si","Si"));
        
        
        
    } else if (selectedAncho2 === "7") {
        largoSelect2.add(new Option("18 metros", "18"));
        // 
        escaleraSelect2.add(new Option("Medio","2"));
        cuartoSelect2.add(new Option("4"));
        terrazaSelect2.add(new Option("si","Si"));
        banosSelect2.add(new Option("2"));
    } else if (selectedAncho2 === "8") {
        largoSelect2.add(new Option("15 metros", "15"));
        //
        escaleraSelect2.add(new Option("Medio","2"));
        cuartoSelect2.add(new Option("3"));
        terrazaSelect2.add(new Option("no","No"));
        banosSelect2.add(new Option("2"));
        
    }

    // Agregar más condiciones aquí para otras combinaciones de "Ancho" y "Largo" si es necesario.
}
function mostrarImagen2() {
    const ancho2 = anchoSelect2.value;
    const largo2 = largoSelect2.value;
    const escalera2 = escaleraSelect2.value;
    const cuartos2 = cuartoSelect2.value;
    const Terraza2 = terrazaSelect2.value;
    const banos2 = banosSelect2.value;
    const sala2 = document.getElementById("sala2").value;
    const comedor2 = document.getElementById("comedor2").value;
    const cocina2 = document.getElementById("cocina2").value;
    const lavanderia2 = document.getElementById("lavanderia2").value;
    
    // Obtener la ruta de la imagen correspondiente a las condiciones
    let imagenSrc2 = "";
        //PLANO 1
    if (
        ancho2 === "6" &&
        largo2 === "17" &&
        escalera2 === "2" &&
        cuartos2 === "4" &&
        Terraza2 === "Si" &&
        banos2 === "2" &&
        sala2 === "si" &&
        comedor2 === "si" &&
        cocina2 === "si" &&
        lavanderia2 === "si"
    ) {
        
        imagenSrc2 = "plano1.webp"; // URL de la primera imagen
    }
    // PLANO 2
    else if (
        ancho2 === "6" &&
        largo2 === "17" &&
        escalera2 === "3" &&
        cuartos2 === "2" &&
        Terraza2 ==="Si"&&
        banos2 === "1" &&
        sala2 === "si" &&
        comedor2 === "si" &&
        cocina2 === "si" &&
        lavanderia2 === "si"
    ) {
        imagenSrc2 = "plano2.webp"; // Reemplaza con la URL de la segunda imagen
     }
    //plano 3
    else if (
        ancho2 === "8" &&
        largo2 === "15" &&
        escalera2 === "2" &&
        cuartos2 === "3" &&
        Terraza2 === "No" &&
        banos2 === "2" &&
        sala2 === "si" &&
        comedor2 === "si" &&
        cocina2 === "si" &&
        lavanderia2 === "si"
    ) {
        imagenSrc2 = "plano3.webp"; // URL de la tercera imagen
    }
    //PLANO 4
    else if (
        ancho2 === "7" &&
        largo2 === "18" &&
        escalera2 === "2" &&
        cuartos2 === "4" &&
        Terraza2 === "Si" &&
        banos2 === "2" &&
        sala2 === "si" &&
        comedor2 === "si" &&
        cocina2 === "si" &&
        lavanderia2 === "si"
    ) {
        imagenSrc2 = "plano4.webp"; // Reemplaza con la URL de la cuarta imagen
    }
    

    const imagen2 = document.getElementById("imagen2")
    if (imagenSrc2 === "") {
        imagen2.style.display = "none"; // Ocultar la imagen si no se encontró una correspondencia
    } else {
        const imagen = document.getElementById("imagen");
        const formulario = document.getElementById("formulario");
        imagen2.src = imagenSrc2;
        imagen2.style.display = "block"; // Mostrar la imagen
        document.getElementById("descargarButton").style.display = "block";
    }
    document.getElementById("descargarButton2").style.display = "block";
}


function descargarPDF2() {
    const ancho2 = document.getElementById("ancho2").value;
    const largo2 = document.getElementById("largo2").value;
    const escalera2 = document.getElementById("escalera2").value;
    const cuartos2 = document.getElementById("cuartos2").value;
    const Terraza2 = document.getElementById("Terraza2").value;
    const banos2 = document.getElementById("banos2").value;
    const sala2 = document.getElementById("sala2").value;
    const comedor2 = document.getElementById("comedor2").value;
    const cocina2 = document.getElementById("cocina2").value;
    const lavanderia2 = document.getElementById("lavanderia2").value;

    if (imagenSrc2 === "") {
        alert("Proceso interrumpido por falta de datos");
        return;
    }

    // Generar la URL del archivo generarPDF.php con los parámetros y la URL de la imagen
    const pdfURL = `../sistema/pdf.php?ancho2=${ancho2}&largo2=${largo2}&escalera2=${escalera2}&cuartos2=${cuartos2}&terraza2=${Terraza2}&banos2=${banos2}&sala2=${sala2}&comedor2=${comedor2}&cocina2=${cocina2}&lavanderia2=${lavanderia2}&imagen2=${imagenSrc2}`;

    // Abrir una nueva pestaña hacia la URL
    window.open(pdfURL, "_blank");
}
// --------------------------------------------------
// functions
// --------------------------------------------------
