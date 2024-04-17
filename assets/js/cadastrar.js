
document.querySelector("#botao_cadastrar").addEventListener("click", () => {
    
    console.log("Iniciando Cadastro...")
    
    const form = document.querySelector("form")

    const tarefa = {
        titulo: form.titulo.value,
        descricao: form.descricao.value,
        pontos: form.pontos.value
    }


    validar(tarefa)

    console.log(tarefa)

})



function validar(tarefa){
    limparErros()

    if(tarefa.titulo.trim() == ""){
        document.querySelector("#titulo").classList.add("is-error")
        document.querySelector("#titulo_erro").innerText = "O Título é Obrigatório"
        console.log("Titulo é obrigatório")
    }
    
    if(tarefa.descricao.trim() == "" || tarefa.descricao.length < 10){
        document.querySelector("#descricao").classList.add("is-error")
        document.querySelector("#descricao_erro").innerText = "A Descrição deve ter pelo menos 10 caracteres"
        console.log("Descrição obrigatória")
    }

    if(tarefa.pontos <= 0){
        document.querySelector("#pontos").classList.add("is-error")
        document.querySelector("#pontos_erro").innerText = "Os pontos devem ser maior que zero"
        console.log("Pontuação deve ser maior que zero")
    }

}

function limparErros(){
    //TODO percorrer o array
    document.querySelectorAll("input.is-error, textarea.is-error").classList.remove("is-error")
}