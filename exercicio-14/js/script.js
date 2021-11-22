var numero = prompt('Digite um número inteiro para verificar se é par ou ímpar')

if (numero == '' || isNaN(numero)) {
  alert('Número não encontrado')
} 
else {
  function paridade(numero) {

    if(numero%2==0){
      return true
    } 
    else{
      return false
    } 

  }

  var resultado=paridade(numero)

  if (resultado==true) {
    alert(numero + ' é par')
  } else {
    alert(numero + ' é impar')
  }
}
