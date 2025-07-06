const formCalc = document.getElementById('form-calculo');
const inputObjeto = document.getElementById('input-objeto');
const input1 = document.getElementById('input-base');
const input2 = document.getElementById('input-altura');
const input3 = document.getElementById('input-extra');
const textoCampoVazio = document.getElementById('texto-campo-vazio');
const textoSelect = document.getElementById('texto-select');
const resultadoCalculo = document.getElementById('resultado-calculo');

// Evento que detectar quando o select é selecionado
inputObjeto.addEventListener('change', () => {
    verificaObjetoSelecionado(inputObjeto, input1, input2, input3);
});

formCalc.addEventListener('submit', (e) => {
    e.preventDefault();

    const objetoSelecionado = inputObjeto.value;
    let valor1 = Number(input1.value);
    let valor2 = Number(input2.value);
    let valor3 = Number(input3.value);

    let validado = true;

    // Verifica se o objeto foi selecionado
    if(objetoSelecionado === ''){
        textoSelect.textContent = 'Selecione um objeto!';
        validado = false;
    }else {
        textoSelect.textContent = '';
    }

    // verifica se os campos foram preenchidos e se o valor é um número
    let verificaValor = verificarValorInserido(objetoSelecionado, valor1, valor2, valor3);

    if(validado && verificaValor) {
        console.log('Tudo ok, até agora');
        formCalc.reset(); // limpa o formulario se estiver tudo certo
    }
});

// Após ser selecionado uma opção do select é mudado os inputs conforme o objeto selecionado
function verificaObjetoSelecionado(objeto, input1, input2, input3){
    const objetoSelecionado = objeto.value;
    console.log(objetoSelecionado);

    if(objetoSelecionado === 'quadrado') {
        input1.placeholder  = 'Lado';
        input2.style.display = 'none';
        input3.style.display = 'none';
        
    } else if(objetoSelecionado === 'retangulo') {
        input1.placeholder = 'Base';
        input2.placeholder = 'Altura';
        input1.style.display = '';
        input2.style.display = '';
        input3.style.display = 'none';
    } else if(objetoSelecionado === 'triangulo') {
        input1.placeholder = 'Base';
        input2.placeholder = 'Altura';
        input1.style.display = '';
        input2.style.display = '';
        input3.style.display = 'none';
    } else if(objetoSelecionado === 'trapezio') {
        input1.placeholder = 'Base maior';
        input2.placeholder = 'Base menor';
        input3.placeholder = 'Altura';
        input1.style.display = '';
        input2.style.display = '';
        input3.style.display = '';
    } else if(objetoSelecionado === 'circulo') {
        input1.placeholder = 'Raio';
        input1.style.display = '';
        input2.style.display = 'none';
        input3.style.display = 'none';
    } else if(objetoSelecionado === 'losango') {
        input1.placeholder = 'Diagonal maior';
        input2.placeholder = 'Diagonal menor';
        input1.style.display = '';
        input2.style.display = '';
        input3.style.display = 'none';
    } else if(objetoSelecionado === 'paralelogramo') {
        input1.placeholder = 'Base';
        input2.placeholder = 'Altura';
        input1.style.display = '';
        input2.style.display = '';
        input3.style.display = 'none';
    } else if(objetoSelecionado === 'pentagono'){
        input1.placeholder = 'Lado';
        input2.placeholder = 'Apótema';
        input1.style.display = '';
        input2.style.display = '';
        input3.style.display = 'none';
    } else if(objetoSelecionado === 'hexagono'){
        input1.placeholder = 'Lado';
        input1.style.display = '';
        input2.style.display = 'none';
        input3.style.display = 'none';
    } else if(objetoSelecionado === 'setorcircular'){
        input1.placeholder = 'Ângulo (em graus)';
        input2.placeholder = 'Raio';
        input1.style.display = '';
        input2.style.display = '';
        input3.style.display = 'none';
    } else {
        input1.style.display = '';
        input2.style.display = '';
        input3.style.display = '';
    }
}

// verifica se o valor inserido é válido, se sim, é cálculado a área
function verificarValorInserido(objeto, valor1, valor2, valor3) {
    validado = true;

    if(objeto === 'quadrado') {
        if(input1.value.trim() === '') { // verifica se o campo está vázio
            textoCampoVazio.textContent = 'Insira um número!';
            validado = false;
        } else if(isNaN(valor1)) { // verifica se o valor é um número
            textoCampoVazio.textContent = 'O valor inserido não é um número!';
            validado = false;
        }
        else {
            textoCampoVazio.textContent = '';
        }

        if(validado) {
            let resulAreaQuadrado = areaQuadrado(valor1);
            resultadoCalculo.textContent = resulAreaQuadrado.toFixed(2);
        }

    } else if(objeto === 'retangulo') {
        if(input1.value.trim() === '' || input2.value.trim() === '') { // verifica se o campo está vázio
            textoCampoVazio.textContent = 'Insira os números!';
            validado = false;
        } else if(isNaN(valor1) || isNaN(valor2)) { // verifica se o valor é um número
            textoCampoVazio.textContent = 'Os valores inseridos não são números!';
            validado = false;
        }
        else {
            textoCampoVazio.textContent = '';
        }

        if(validado) {
            let resulAreaRetangulo = areaRetangulo(valor1, valor2);
            resultadoCalculo.textContent = resulAreaRetangulo.toFixed(2);
        }
    } else if(objeto === 'triangulo') {
        if(input1.value.trim() === '' || input2.value.trim() === '') { // verifica se o campo está vázio
            textoCampoVazio.textContent = 'Insira os números!';
            validado = false;
        } else if(isNaN(valor1) || isNaN(valor2)) { // verifica se o valor é um número
            textoCampoVazio.textContent = 'Os valores inseridos não são números!';
            validado = false;
        }
        else {
            textoCampoVazio.textContent = '';
        }

        if(validado) {
            let resulAreaTriangulo = areaTriangulo(valor1, valor2);
            resultadoCalculo.textContent = resulAreaTriangulo.toFixed(2);
        }
    } else if(objeto === 'trapezio') {
        if(input1.value.trim() === '' || input2.value.trim() === '' || input3.value.trim() === '') { // verifica se o campo está vázio
            textoCampoVazio.textContent = 'Insira os números!';
            validado = false;
        } else if(isNaN(valor1) || isNaN(valor2) || isNaN(valor3)) { // verifica se o valor é um número
            textoCampoVazio.textContent = 'Os valores inseridos não são números!';
            validado = false;
        }
        else {
            textoCampoVazio.textContent = '';
        }

        if(validado) {
            let resulAreaTrapezio = areaTrapezio(valor1, valor2, valor3);
            resultadoCalculo.textContent = resulAreaTrapezio.toFixed(2);
        }
    } else if(objeto === 'circulo') {
        if(input1.value.trim() === '') { // verifica se o campo está vázio
            textoCampoVazio.textContent = 'Insira o número!';
            validado = false;
        } else if(isNaN(valor1)) { // verifica se o valor é um número
            textoCampoVazio.textContent = 'O valor inserido não é um número!';
            validado = false;
        }
        else {
            textoCampoVazio.textContent = '';
        }

        if(validado) {
            let resulAreaCirculo = areaCirculo(valor1);
            resultadoCalculo.textContent = resulAreaCirculo.toFixed(2);
        }
    } else if(objeto === 'losango') {
        if(input1.value.trim() === '' || input2.value.trim() === '') { // verifica se o campo está vázio
            textoCampoVazio.textContent = 'Insira os números!';
            validado = false;
        } else if(isNaN(valor1) || isNaN(valor2)) { // verifica se o valor é um número
            textoCampoVazio.textContent = 'Os valores inseridos não são números!';
            validado = false;
        }
        else {
            textoCampoVazio.textContent = '';
        }

        if(validado) {
            let resulAreaLosango = areaLosango(valor1, valor2);
            resultadoCalculo.textContent = resulAreaLosango.toFixed(2);
        }
    } else if(objeto === 'paralelogramo') {
        if(input1.value.trim() === '' || input2.value.trim() === '') { // verifica se o campo está vázio
            textoCampoVazio.textContent = 'Insira os números!';
            validado = false;
        } else if(isNaN(valor1) || isNaN(valor2)) { // verifica se o valor é um número
            textoCampoVazio.textContent = 'Os valores inseridos não são números!';
            validado = false;
        }
        else {
            textoCampoVazio.textContent = '';
        }

        if(validado) {
            let resulAreaParalelogramo = areaParalelogramo(valor1, valor2);
            resultadoCalculo.textContent = resulAreaParalelogramo.toFixed(2);
        }
    } else if(objeto === 'pentagono') {
        if(input1.value.trim() === '' || input2.value.trim() === '') { // verifica se o campo está vázio
            textoCampoVazio.textContent = 'Insira os números!';
            validado = false;
        } else if(isNaN(valor1) || isNaN(valor2)) { // verifica se o valor é um número
            textoCampoVazio.textContent = 'Os valores inseridos não são números!';
            validado = false;
        }
        else {
            textoCampoVazio.textContent = '';
        }

        if(validado) {
            let resulAreaPentagono = areaPentagono(valor1, valor2);
            resultadoCalculo.textContent = resulAreaPentagono.toFixed(2);
        }
    } else if(objeto === 'hexagono') {
        if(input1.value.trim() === '') { // verifica se o campo está vázio
            textoCampoVazio.textContent = 'Insira um número!';
            validado = false;
        } else if(isNaN(valor1)) { // verifica se o valor é um número
            textoCampoVazio.textContent = 'O valor inserido não é um número!';
            validado = false;
        }
        else {
            textoCampoVazio.textContent = '';
        }

        if(validado) {
            let resulAreaHexagono = areaHexagono(valor1);
            resultadoCalculo.textContent = resulAreaHexagono.toFixed(2);
        }
    } else if(objeto === 'setorcircular') {
        if(input1.value.trim() === '' || input2.value.trim() === '') { // verifica se o campo está vázio
            textoCampoVazio.textContent = 'Insira os números!';
            validado = false;
        } else if(isNaN(valor1) || isNaN(valor2)) { // verifica se o valor é um número
            textoCampoVazio.textContent = 'Os valores inseridos não são números!';
            validado = false;
        }
        else {
            textoCampoVazio.textContent = '';
        }

        if(validado) {
            let resulAreaSetorCircula = areaSetorCircula(valor1, valor2);
            resultadoCalculo.textContent = resulAreaSetorCircula.toFixed(2);
        }
    } else {
        validado = false;
    }
 
    return validado;
}

function areaQuadrado(lado) {
    return Math.pow(lado, 2);
}

function areaRetangulo(base, altura) {
    return base * altura;
}

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}

function areaTrapezio(baseMaior, baseMenor, altura) {
    return ((baseMaior + baseMenor) * altura) / 2
}

function areaCirculo(raio) {
    return Math.PI * Math.pow(raio, 2);
}

function areaLosango(diagonalMaior, diagonamMenor) {
    return (diagonalMaior * diagonamMenor) / 2;
}

function areaParalelogramo(base, altura) {
    return base * altura;
}

function areaPentagono(lado, apotema) {
    return (5 * lado * apotema) / 2;
}

function areaHexagono (lado) {
    return (3 * Math.pow(lado, 2) * Math.sqrt(3)) / 2
}

function areaSetorCircula(angulo, raio) {
    return (angulo / 360) * Math.PI * Math.pow(raio, 2);
}