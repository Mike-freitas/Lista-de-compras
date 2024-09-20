import { verificarListaComprados } from "./verificarListaComprados.js";

const listaDeCompras = document.getElementById("lista_de_compras"); 
const listaComprados = document.getElementById("itens-comprados");

const excluirItem = (elemento) => { 
    let confirmacao = confirm("Tem certeza que deseja excluir esse item?");
   
    if (confirmacao) {
        elemento.remove();
 
        verificarListaVazia(listaDeCompras); 
        verificarListaComprados(listaComprados); 
    }
};

export { excluirItem };
