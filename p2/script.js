function locacao()
{
    const nome = document.getElementById("nome");

    let telefone = document.getElementById("telefone");

    const cidadeRetirada = document.getElementById("cidadeRetirada").value;

    const cidadeEntrega = document.getElementById("cidadeEntrega").value;

    const carro = document.getElementById("carro");

    let dataRetirada = document.getElementById("dataRetirada");

    console.log(dataRetirada)
    let dataDevolucao = document.getElementById("dataDevolucao");

    let tempo = datas(dataRetirada,dataDevolucao);
    let conversao = new Date(tempo);
    let dia = conversao.getDay() - 3;

    let valorTotal;

    if(nome.value === "" || telefone.value === "" || cidadeRetirada.value === "" || cidadeEntrega.value === "")
    {
        alert("Preencha os campos obrigatorios!");
    }
    else
    {
        if(carro.value === 'Básico'){

            if(cidadeEntrega.value!==cidadeRetirada.value)
            {
                valorTotal = (119*dia)+300;
                
                return alert("Valor total: R$" + valorTotal);
            }
            else
            {
                return alert("Valor Total: R$119");
            }        
        }

        if(carro.value === 'Básico com ar'){

          if(cidadeEntrega.value!=cidadeRetirada.value)
          {
              valorTotal = (199*dia)+300;
              
              return alert("Valor total: R$" + valorTotal);
          }
          else
          {
              return alert("Valor Total: R$199");
          }        
       }

       if(carro.value === 'Executivo'){

        if(cidadeEntrega.value!=cidadeRetirada.value)
        {
            valorTotal = (299*dia)+300;
            
            return alert("Valor total: R$" + valorTotal);
        }
        else
        {
            return alert("Valor Total: R$299");
        }        
     }
    
    }
    
}

function datas(dataRetirada,dataDevolucao)
{
    let dtRetirada = new Date(dataRetirada);
    let dtDevolucao = new Date(dataDevolucao);
    let tempo = dtDevolucao.getTime()- dtRetirada.getTime();  

    return tempo;
}