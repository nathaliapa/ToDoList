const button = document.querySelector('.button-adc')
const input = document.querySelector('.input-task')
const listaCompleta = document.querySelector('.list-task')

let minhaListaDeItens = []

function monstrarTarefes(){

    let novaLi = ''
    minhaListaDeItens.forEach((item, index) => {
        novaLi =novaLi +  `

         <li class="task ${item.concluida && "done"}">
         <img src="./image/checked.png" alt="check-na-tarefa" onClick = "concluirTarefa(${index})">
         <p>${item.tarefa}</p>
         <img src="./image/trash.png" alt="tarefa para o lixo" onClick = "deletarItem(${index})">
         </li>

        `
    })

    listaCompleta.innerHTML = novaLi


    localStorage.setItem('lista', JSON.stringify(minhaListaDeItens))
}

function concluirTarefa(index){
    minhaListaDeItens[index].concluida =  !minhaListaDeItens[index].concluida   
    monstrarTarefes()
}

function deletarItem(index){

    minhaListaDeItens.splice(index,1)
    console.log(index)
    monstrarTarefes()
}

function recarregarTarefas(){
    const tarefasDoLocalStorage = localStorage.getItem('lista')
    
    if(tarefasDoLocalStorage){

        minhaListaDeItens = JSON.parse(tarefasDoLocalStorage)
    }
    

    monstrarTarefes()

   
}


recarregarTarefas()

button.addEventListener('click', ()=>{

    minhaListaDeItens.push({
        
        tarefa: input.value,
        concluida: false

    })
    
    input.value = ''
    monstrarTarefes()
})



