let palavra = prompt('Digite uma palavra para verificar se é palindromo: ')

if (palavra == '') {

  alert('Palavra não encontrada')

}
else {

  function verificaPalindromo(palavra) {

    palavra = palavra.toUpperCase()

    for (var i = 0; i < palavra.length / 2; i++) {
      if (palavra[i] != palavra[palavra.length - i - 1]) {
        return false
      }
    }

    return true
  }

  var resultado = verificaPalindromo(palavra)

  if (resultado == true) {

    alert(palavra + ' é palindromo.')

  } else {

    alert(palavra + ' não é palindromo.')
    
  }
}
