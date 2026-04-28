//quais ações meu carrinho pode fazer

//cosos de uso
//dicionar item no carrinnho

async function addItem(userCart) {
  userCart.push(item);
}

//deletar item do carrinho
async function deleteItem(userCart, name){

}

//remover um item do carrinho
async function removerItem(userCart, index){

}

//calcular o total do carrinho
async function calculateTotal(userCart){
return userCart.reduce(total, item) => total + item.subtotal(), 0);
}

export {
    addItem,
    calculateTotal,
    deleItem,
}
  


