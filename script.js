const animaCanos = () => {
    const view = document.querySelector(".card-canos.view");
    const hidden = document.querySelector(".card-canos");
    if (view) {
        view.classList.remove("view");
    } else {
        hidden.classList.add("view");
    }
}