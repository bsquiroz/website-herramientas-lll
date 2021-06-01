const $FORM = document.querySelector("#formLogin");
$FORM.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const pass = e.target.pass.value;
    const $CARGANDO = document.querySelector("#cargandoLogin");
    const $ERRORLOGIN = document.querySelector("#errorlogin");

    const authCredencial = async () => {
        try {
            await auth
                .signInWithEmailAndPassword(email, pass)
                .then((userCredential) => {
                    if (userCredential) {
                        $CARGANDO.classList.toggle("cargando-show");
                        setTimeout(() => {
                            $CARGANDO.classList.toggle("cargando-show");
                            window.location.href = "../registered/index.html";
                        }, 3000);
                    }
                });
        } catch (error) {
            $ERRORLOGIN.classList.toggle("error-show");
            $ERRORLOGIN.textContent = error.message;
            setTimeout(() => {
                $ERRORLOGIN.classList.toggle("error-show");
            }, 3000);
            console.log(error);
        }
    };

    authCredencial();
});
