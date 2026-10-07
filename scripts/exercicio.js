function calcular() {
    // Recolhe os valores usando os IDs e converte para número
    let num1 = Number(document.getElementById('valor1').value);
    let num2 = Number(document.getElementById('valor2').value);
    
    // Calcula as 4 operações matemáticas
    let soma = num1 + num2;
    let subtracao = num1 - num2;
    let multiplicacao = num1 * num2;
    let divisao = num1 / num2;

    // Seleciona a div de resultado
    let caixaResultado = document.getElementById('resultado');

    // Mostra os resultados
    caixaResultado.style.display = 'block';
    caixaResultado.innerHTML = 
        "<strong>Soma:</strong> " + soma + "<br>" +
        "<strong>Subtração:</strong> " + subtracao + "<br>" +
        "<strong>Multiplicação:</strong> " + multiplicacao + "<br>" +
        "<strong>Divisão:</strong> " + divisao;
}