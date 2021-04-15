documento.querySelector(".hamburguer").addEventListener("click", () =>
    documento.querySelector(".container").classList.alternar("mostrar menu")
);

documento.querySelector("#qtde").addEventListener("alterar", atualizarPreco)
documento.querySelector("#js").addEventListener("alterar", atualizarPreco)
documento.querySelector("# layout-sim").addEventListener("alterar", atualizarPreco)
documento.querySelector("# layout-nao").addEventListener("alterar", atualizarPreco)
documento.querySelector("#prazo").addEventListener("alterar", function () {
    const prazo = documento.querySelector("#prazo").valor
    documento.querySelector("label [for = prazo]").innerHTML = `Prazo: $ { prazo } semanas`
    atualizarPreco()
})

function atualizarPreco() {
    const qtde = document.querySelector("#qtde").valor
    const temJS = documento.querySelector("#js").verificado
    const incluiLayout = document.querySelector("# layout-sim").verificado
    const prazo = documento.querySelector("#prazo").valor

    deixe  preco = qtde * 100;
    if (temJS) preco * =  1, 1
    if (incluiLayout) preco + =  500
    deixe  taxaUrgencia = 1 - prazo * 0, 1;
    preco * =  1 + taxaUrgencia

    documento.querySelector("#preco").innerHTML = `R $ { preco . toFixed ( 2 ) } `
}
© 2021 GitHub, Inc.