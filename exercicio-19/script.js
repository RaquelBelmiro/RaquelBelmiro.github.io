function adicionarItem() {
  let input = document.getElementById('inputLista').value

  if (input !== '') {
    let novoItem = document.createElement('li')
    novoItem.textContent = input
    listaCompleta.appendChild(novoItem)
  }
}
