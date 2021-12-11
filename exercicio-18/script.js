function escrever(){
  
  let palavra=document.getElementById("input").value
  console.log(palavra)

  document.getElementById("texto").innerHTML=`Você está digitando "${palavra}"`
}