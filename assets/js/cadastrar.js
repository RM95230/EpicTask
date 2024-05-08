
document.querySelector("#botao_cadastrar").addEventListener("click", () => {
    
    console.log("Iniciando Cadastro...")
    
    const form = document.querySelector("form")

    const tarefa = {
        id: `id_${new Date().getTime()}`,
        titulo: form.titulo.value,
        descricao: form.descricao.value,
        pontos: form.pontos.value
    }


    if(validar(tarefa)){
        salvar(tarefa)
        console.log("salvando tarefa")
        console.log(tarefa)

    }

    console(new Date().getTime())

})



function validar(tarefa){
    limparErros()
    let aux = true
    if(tarefa.titulo.trim() == ""){
        document.querySelector("#titulo").classList.add("is-error")
        document.querySelector("#titulo_erro").innerText = "O Título é Obrigatório"
        console.log("Titulo é obrigatório")
        aux = false
    }
    
    if(tarefa.descricao.trim() == "" || tarefa.descricao.length < 10){
        document.querySelector("#descricao").classList.add("is-error")
        document.querySelector("#descricao_erro").innerText = "A Descrição deve ter pelo menos 10 caracteres"
        console.log("Descrição obrigatória")
        aux = false
    }

    if(tarefa.pontos <= 0){
        document.querySelector("#pontos").classList.add("is-error")
        document.querySelector("#pontos_erro").innerText = "Os pontos devem ser maior que zero"
        console.log("Pontuação deve ser maior que zero")
        aux = false
    }
return aux
}

function limparErros(){
    //TODO percorrer o array
    const campos = document.querySelectorAll("input.is-error, textarea.is-error")
    console.log(campos)

    campos.forEach((input)=>{
        console.log("campo com erro")
        input.classList.remove("is-error")
    })

    document.querySelectorAll(".nes-field span").forEach(span => span.innerText = " ")
    //.classList.remove("is-error")
}


function salvar(tarefa){

    const tarefas = JSON.parse(localStorage.getItem('tarefas')) || []
    //const tarefas = [localStorage.tarefas]
    tarefas.push(tarefa)
    localStorage.setItem("tarefas", JSON.stringify(tarefas))
    window.location.href = "index.html"
}