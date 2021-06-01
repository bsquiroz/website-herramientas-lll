const $FORM = document.querySelector("#formRegistro");
const $ERROR = document.querySelector("#error-char");
$FORM.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const pass = e.target.pass.value;
    const replyPass = e.target.Rpass.value;

    if (pass === replyPass) {
        const createUser = async () => {
            try {
                await auth
                    .createUserWithEmailAndPassword(email, pass)
                    .then((userCredential) => {
                        if (userCredential) {
                            alert(
                                "usuario creado, inicie sesion con sus credenciales"
                            );
                            window.location.href = "./login.html";
                        }
                    });
            } catch (error) {
                $ERROR.classList.toggle("show-error");
                $ERROR.textContent = error.message;
                setTimeout(() => {
                    $ERROR.textContent = "";
                    $ERROR.classList.toggle("show-error");
                }, 4000);
            }
        };
        createUser();
    } else {
        alert("las contraseñas no son iguales");
    }
});
