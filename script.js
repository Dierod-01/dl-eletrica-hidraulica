const animaCanos = () => {
    const view = document.querySelector(".card-canos.view");
    const hidden = document.querySelector(".card-canos");
    if (view) {
        view.classList.remove("view");
    } else {
        hidden.classList.add("view");
    }
    const nomeBotao = document.querySelector(".btn2");
    if (view) {
        nomeBotao.innerHTML = "Os tipos de canos...";
    } else {
        nomeBotao.innerHTML = "Ocultar";
    }
}
