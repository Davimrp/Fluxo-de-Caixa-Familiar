const inputRenda = document.querySelector('#renda');
const inputDespesa = document.querySelector('#despesa');
const btnComputarDespesa = document.querySelector('#computar-despesa')
const btnComputarRenda = document.querySelector('#computar-renda');
const btnCalcularFluxo = document.querySelector('#calcular')
const btnRefazer = document.querySelector("#resetar")

let familia = {
    renda: [],
    despesas: []
}

btnRefazer.addEventListener("click", e=>{
    familia = {
        renda: [],
        despesas: []
    }
    document.querySelector('#pre-renda').innerHTML = ''
    document.querySelector('#pre-despesa').innerHTML = ''
    document.querySelector('#resultado-final').style.display = 'none';
})

function exibirFluxo(renda, despesas, saldo){
    const resultadoText = document.querySelector('#resultado-text');
    resultadoText.textContent = `As despesas do mês totalizam R$${despesas} e sua renda mensal totaliza R$${renda}, portanto o dinheiro que sobra após pagarem as contas é R$${saldo}`;
    document.querySelector('#resultado-final').style.display = 'block';
    
}

function soma(array){
    let total = 0;
    array.forEach(e => {
        total += e
    });
    return total
}

function calcularFluxo(){
    const rendaTotal = soma(familia.renda);
    const despesasTotais = soma(familia.despesas);
    const saldo = rendaTotal - despesasTotais
    if (rendaTotal == 0 || despesasTotais == 0) {
        alert('Por favor, Digite todos os dados corretamente.');
        return
    }
    exibirFluxo(rendaTotal, despesasTotais, saldo)
}

btnCalcularFluxo.addEventListener('click', e=> {
    e.preventDefault();
    calcularFluxo();
})

function verificaRenda(){
    if(inputRenda.value == 0 || '') alert('Por favor digite um numero válido');
    const valor = Number(inputRenda.value) ;
    if(!valor){
        alert("Por favor digite um numero válido");
        return
    }
    familia.renda.push(valor);
    inputRenda.value = '';
    inputRenda.focus();

    document.querySelector('#pre-renda').innerHTML = soma(familia.renda)
}
btnComputarRenda.addEventListener('click', e => {
    e.preventDefault();
    verificaRenda()
})

function verificaDespesa(){
    if(inputDespesa.value == 0 || '') alert('Por favor digite um numero válido');
    const valor = Number(inputDespesa.value) ;
    if(!valor){
        alert("Por favor digite um numero válido");
        return
    }
    familia.despesas.push(valor);
    inputDespesa.value = '';
    inputDespesa.focus();

    document.querySelector('#pre-despesa').innerHTML = soma(familia.despesas)
}
btnComputarDespesa.addEventListener('click', e => {
    e.preventDefault();
    verificaDespesa()
})


document.querySelector('#duvidas').addEventListener('click', (e) =>{
    document.querySelector('#instruction').classList.remove('some')
})


document.querySelector('#sair-duvidas').addEventListener('click', e => document.querySelector('#instruction').classList.add('some'))




