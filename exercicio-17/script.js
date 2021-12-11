function tempoTranscorrido() {

  let dataEntrada = document.getElementById('data').value;

  dataEntrada=new Date(dataEntrada)

  let dataAtual = new Date();

  let tempo = dataAtual - dataEntrada;

  let contagemDias = 1000 * 60 * 60 * 24;
  let contagemMeses = contagemDias * 30.41666666666667;
  let contagemAnos = contagemMeses * 12;

  let anos = Math.floor(tempo / contagemAnos);
  tempo = tempo - anos * contagemAnos;
  let meses = Math.floor(tempo / contagemMeses);
  tempo = tempo - meses * contagemMeses;
  let dias = Math.floor(tempo / contagemDias);

  document.getElementById('resultado').innerHTML = `Tempo transcorrido: ${anos} anos ${meses + 1} meses ${dias} dias`
}