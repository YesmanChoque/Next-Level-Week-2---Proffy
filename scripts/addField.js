// Procurar o botão
document.querySelector("#add-time")
// Quando clicar no botao
.addEventListener('click', cloneField);
// Executar uma ação
function cloneField(){
    // Duplicar os campos. Que campo?
    const newFieldContainer = document.querySelector(".schedule-item").cloneNode(true); //boolean: true or false


    //limpar os campor. Que campos?
    const fields = newFieldContainer.querySelectorAll("input")

    //para cada campo, limpar.

    // for(var c = 0; c < fields.length; c++){
    //     fields[c].value = ""
    // }


    fields.forEach(fields => {
        fields.value = ""
    });



    // Colocar na página. Onde?
    document.querySelector("#schedule-items").appendChild(newFieldContainer);

};
