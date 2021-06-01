const $X = document.querySelector("#x");
const $ACTIVE = document.querySelector("#active");
const $MENU = document.querySelectorAll("#menu li");

$X.addEventListener("click", () => {
    $ACTIVE.classList.toggle("active");
});

// $MENU.addEventListener("click", () => {
//     $ACTIVE.classList.toggle("active");
// });
