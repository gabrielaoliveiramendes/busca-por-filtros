const botaoFiltrar = document.querySelector(".btn-filtrar");

botaoFiltrar.addEventListener("click", () => {
   const categoriaSelecionada = document.querySelector("#categoria").value; //categoria selecionada
   const precoMaximoSelecionado = document.querySelector("#preco").value; // preco inserido
   
   const cartas = document.querySelectorAll(".carta");

   cartas.forEach((carta) => {
    const categoriaCarta = carta.dataset.categoria;
    const precoCarta = carta.dataset.preco;

    let mostrarCarta = true;

    const temFiltroSelecionado = categoriaSelecionada !== "";
    const cartaComFiltroDiferente = categoriaSelecionada.toLowerCase() !== categoriaCarta.toLowerCase();

    if (temFiltroSelecionado && cartaComFiltroDiferente) { //condição para mostrarCarta se tornar false
        mostrarCarta = false;
    }

    const temPrecoInserido = precoMaximoSelecionado !== "";
    const precoCartaSuperior = parseFloat(precoCarta) > parseFloat(precoMaximoSelecionado); // preço da carta for maior do que o inserido

    if (temPrecoInserido && precoCartaSuperior){
        mostrarCarta = false;
    }

    if (mostrarCarta){ //mostrarCarta = true
        carta.classList.add("mostrar");
        carta.classList.remove("esconder");
    } else { //mostrarCarta = false
        carta.classList.remove("mostrar");
        carta.classList.add("esconder");
    }
   });
})