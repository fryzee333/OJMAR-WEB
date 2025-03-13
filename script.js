
        // Función para mostrar diferentes secciones de la página
        function goBack(sectionId) {
            showSection(sectionId);
        }

        // Función para mostrar una sección y ocultar las demás
        function showSection(sectionId) {
            console.log("Affichage de la section :", sectionId); // Debugging
            document.querySelectorAll('.container, .containerbis').forEach(el => el.classList.add('hidden'));
            document.getElementById(sectionId).classList.remove('hidden');
        }

                // Al cargar la página, muestra la sección de login
                window.onload = function() {
                    showSection('login');
                }

                 // Función para guardar las horas trabajadas por un usuario
        function guardarHoras() {
            let fase1Horas = document.getElementById('fase1-input').value;
            let detalleHoras = document.getElementById('detalle-input').value;
            let lanzamientoHoras = document.getElementById('lanzamiento-input').value;
            let factibilidadHoras = document.getElementById('factibilidad-input').value;
            let patentesHoras = document.getElementById('patentes-input').value;

            // Validación para asegurar que las horas estén entre 0 y 8
            if (fase1Horas < 0 || fase1Horas > 8) return alert("Las horas deben estar entre 0 y 8");
            if (detalleHoras < 0 || detalleHoras > 8) return alert("Las horas deben estar entre 0 y 8");
            if (lanzamientoHoras < 0 || lanzamientoHoras > 8) return alert("Las horas deben estar entre 0 y 8");
            if (factibilidadHoras < 0 || factibilidadHoras > 8) return alert("Las horas deben estar entre 0 y 8");
            if (patentesHoras < 0 || patentesHoras > 8) return alert("Las horas deben estar entre 0 y 8");

            // Guardar las horas en el almacenamiento local
            const horasData = {
                fase1: fase1Horas,
                detalle: detalleHoras,
                lanzamiento: lanzamientoHoras,
                factibilidad: factibilidadHoras,
                patentes: patentesHoras
            };

            localStorage.setItem('horasTrabajadas', JSON.stringify(horasData));
            alert("Horas guardadas correctamente");
        }

        // Función para guardar las horas modificadas por un administrador
        function guardarHorasAdmin() {
            let fase1Horas = document.getElementById('fase1-admin-input').value;
            let detalleHoras = document.getElementById('detalle-admin-input').value;
            let lanzamientoHoras = document.getElementById('lanzamiento-admin-input').value;
            let factibilidadHoras = document.getElementById('factibilidad-admin-input').value;
            let patentesHoras = document.getElementById('patentes-admin-input').value;

            // Crear un objeto con las horas modificadas
            const horasData = {
                fase1: fase1Horas,
                detalle: detalleHoras,
                lanzamiento: lanzamientoHoras,
                factibilidad: factibilidadHoras,
                patentes: patentesHoras
            };

            // Guardar las horas modificadas en el almacenamiento local
            localStorage.setItem('horasTrabajadas', JSON.stringify(horasData));
            alert("Horas modificadas correctamente");
        }

        function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].classList.remove("active");
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }
    document.getElementById(tabName).classList.add("active");
    evt.currentTarget.classList.add("active");
}
