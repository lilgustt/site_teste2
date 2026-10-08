let botoes = document.querySelectorAll(".filtro");
let bicicletas = document.querySelectorAll(".bicicleta");

let categoriaSelecionada = "todas";
let pesquisa = document.querySelector("#pesquisa");


// FILTROS

botoes.forEach(function(botao) {

    botao.addEventListener("click", function() {

        botoes.forEach(function(botao) {
            botao.classList.remove("btn-dark");
            botao.classList.add("btn-outline-dark");
        });

        botao.classList.remove("btn-outline-dark");
        botao.classList.add("btn-dark");

        categoriaSelecionada = botao.getAttribute("data-categoria");

        filtrarBicicletas();

    });

});


// PESQUISA

if (pesquisa) {

    pesquisa.addEventListener("input", function() {

        filtrarBicicletas();

    });

}


// FUNÇÃO PARA FILTRAR

function filtrarBicicletas() {

    let texto = pesquisa.value.toLowerCase();

    bicicletas.forEach(function(bicicleta) {

        let categoriaBike = bicicleta.getAttribute("data-categoria");
        let nome = bicicleta.querySelector(".card-title").textContent.toLowerCase();

        let categoriaOk = 
            categoriaSelecionada == "todas" || 
            categoriaSelecionada == categoriaBike;

        let pesquisaOk = nome.includes(texto);

        if (categoriaOk && pesquisaOk) {

            bicicleta.style.display = "";

        } else {

            bicicleta.style.display = "none";

        }

    });

}


// FORMULÁRIO

let formulario = document.querySelector("#formulario");

if (formulario) {

    formulario.addEventListener("submit", function(event) {

        event.preventDefault();

        let nome = document.querySelector("#nome").value;
        let email = document.querySelector("#email").value;
        let telefone = document.querySelector("#telefone").value;
        let mensagem = document.querySelector("#mensagem").value;

        let assunto = "Contato - NDE Bicicletas";

        let corpo = 
            "Nome: " + nome + "\n" +
            "E-mail: " + email + "\n" +
            "Telefone: " + telefone + "\n\n" +
            "Mensagem:\n" + mensagem;

        let link = "https://mail.google.com/mail/?view=cm&fs=1&to=gustavo.ribas2023@gmail.com&su="
            + encodeURIComponent(assunto)
            + "&body="
            + encodeURIComponent(corpo);

        window.open(link, "_blank");

    });

}