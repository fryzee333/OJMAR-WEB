/*function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username && password) {
        document.getElementById("login-screen").classList.add("hidden");
        document.getElementById("main-menu").classList.remove("hidden");
    } else {
        alert("Por favor, ingrese usuario y contraseña.");
    }
}

function logout() {
    document.getElementById("main-menu").classList.add("hidden");
    document.getElementById("login-screen").classList.remove("hidden");
}

function showSection(sectionId) {
    let sections = document.querySelectorAll(".container");
    sections.forEach(section => section.classList.add("hidden"));
    document.getElementById(sectionId).classList.remove("hidden");
}
*/
        <script>
        function guardarCambios() {
            let horasInputs = document.querySelectorAll(".horas-editable");
            horasInputs.forEach(input => {
                if (input.value > 8) {
                    input.value = 8;
                    alert("No puedes ingresar más de 8 horas.");
                } else if (input.value < 0) {
                    input.value = 0;
                    alert("Las horas no pueden ser negativas.");
                }
            });
            alert("Cambios guardados correctamente.");
        }
    </script>
