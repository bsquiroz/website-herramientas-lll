const $FORM = document.querySelector("#formRegistro");
$FORM.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const pass = e.target.pass.value;
    const replyPass = e.target.Rpass.value;

    if (pass === replyPass) {
        auth.createUserWithEmailAndPassword(email, pass).then(
            (userCredential) => {
                if (userCredential) {
                    alert("usuario creado, inicie sesion con sus credenciales");
                    window.location.href = "./login.html";
                }
            }
        );
    } else {
        alert("las contraseñas no son iguales");
    }
});
