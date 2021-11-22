var numero = prompt('Para calcular o fatorial, digite um numero inteiro positivo: ')

if (isNaN(numero) || numero < 0){
  alert('Número inteiro positivo não encontrado')
}
else {
  function calculaFatorial(numero) {
    if (numero == 0) return 1
    else return numero * calculaFatorial(numero - 1)
  }

  var fatorial = calculaFatorial(numero)
  alert('fatorial de ' + numero + ' = ' + fatorial)
}
