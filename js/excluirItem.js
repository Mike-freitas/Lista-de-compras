import { verificarListaComprados } from "./verificarListaComprados.js";

const listaDeCompras = document.getElementById("lista_de_compras"); // Corrija o ID para o mesmo usado no HTML
const listaComprados = document.getElementById("itens-comprados"); // Corrija o ID para o mesmo usado no HTML

const excluirItem = (elemento) => { // Corrija a sintaxe da função
    let confirmacao = confirm("Tem certeza que deseja excluir esse item?");
   
    if (confirmacao) {
        elemento.remove();
 
        verificarListaVazia(listaDeCompras); // Certifique-se de que esta função está definida em algum lugar
        verificarListaComprados(listaComprados); // Certifique-se de que esta função está definida em algum lugar
    }
};

export { excluirItem };
