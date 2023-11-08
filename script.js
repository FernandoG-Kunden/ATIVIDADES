function Atividade01(){
    const Input  = document.querySelectorAll('#atividade01 input');
    const result = document.querySelector('#atividade01 div textarea');
    if (ValidaCampoVazio(Input, 0) === false || ValidaCampoNegativo(Input, 0) === false){
        result.value = null;
        return;
    }
    if (ValidaCampoVazio(Input, 1) === false || ValidaCampoNegativo(Input, 1) === false){
        result.value = null;
        return;
    }
    if (ValidaCampoVazio(Input, 2) === false || ValidaCampoNegativo(Input, 2) === false){
        result.value = null;
        return;
    }
    result.value = (Input[0].value * 365) + (Input[1].value * 30) + parseInt(Input[2].value)
}
function ValidaCampoVazio(campo, idenx){
    if(campo[idenx].value ===''){
        alert("Campo vazio, verifique!")
        campo[idenx].focus()
        return false;
    }
    else{
        return true;
    }

}
function ValidaCampoNegativo(campo, idenx){
    if(campo[idenx].value < 0){
        alert("Campo negativo, verifique!")
        campo[idenx].focus()
        return false;
    }
    else{
        return true;
    }
}
 
 
 //-------------------------------------------------------------------------------
function Atividade02(){
    const Input    = document.querySelectorAll('#atividade02 input');
    const result   = document.querySelector('#atividade02 div textarea');
    let TotalMedia; 
    
    if(ValidaCampoVazio(Input, 0) === false || ValidaCampoNegativo(Input, 0) === false){
        result.value = null;
        return;
    }
    if(ValidaCampoVazio(Input, 1) === false || ValidaCampoNegativo(Input, 1) === false){
        result.value = null;
        return;
    }
    if(ValidaCampoVazio(Input, 2) === false || ValidaCampoNegativo(Input, 2) === false){
        result.value = null;
        return;
    }
    if(ValidaCampoNegativo(Input, 3) === false){
        result.value = null;
        return;
    }
    if(Input[3].value === ''){
        Input[3].value = 0; 
    }


    if(parseInt(Input[2].value) > parseInt(Input[3].value)){
        TotalMedia = (parseInt(Input[0].value) + parseInt(Input[1].value) + parseInt(Input[2].value)) / 3
        result.value = TotalMedia.toFixed(2)
    }
    else{
        TotalMedia = (parseInt(Input[0].value) + parseInt(Input[1].value) + parseInt(Input[3].value)) / 3
        result.value = TotalMedia.toFixed(2)
    }
}

//-------------------------------------------------------------------------------
function Atividade03(){
    const Input  = document.querySelector('#atividade03 Input')
    const result = document.querySelector('#atividade03 div textarea');
    let NumerosImpares;

    if(Input.value <= 0) {
        alert('Campo deve ser maior que zero!')
        result.value = null;
        Input.focus();
        return;
    }
    for(let Impares = 1; Impares <= Input.value; Impares++){
        if (Impares % 2 === 0){
            continue;
        }
        if(typeof NumerosImpares === 'undefined'){
            NumerosImpares = Impares;
        }
        else{
            NumerosImpares = NumerosImpares + ', ' + Impares;
        }
    }
    result.value = NumerosImpares;  
}
//-------------------------------------------------------------------------------
function Atividade04(){
    const Input  = document.querySelectorAll('#atividade04 Input')
    
    if(ValidaCampoVazio(Input, 0) === false){
        return;
    }
    if(ValidaCampoVazio(Input, 1) === false){
        return;
    }
    
    if(Input[0].value != 'KUNDEN'){
        alert('Usuário incorreto, verifique!')
        Input[0].focus();
        return;
    }
    else if(Input[1].value != 'KUNDENJS2023'){
        alert('Senha incorreto, verifique!')
        Input[1].focus();
        return;
    }
    else{
        alert('Login efetuado com sucesso!')
    }
}
//-------------------------------------------------------------------------------
function Atividade05(){
    const Input  = document.querySelector('#atividade05 Input')
    let   Senha = Input.value;
    
    ValidaSenha(Senha);
}

function ValidaSenha(senha){
    var letrasMaiusculas = /[A-Z]/;
    var letrasMinusculas = /[a-z]/; 
    var numeros = /[0-9]/;
    var QuantidadeLetras = 0;
    var auxNumero = 0;

    if(senha.length < 8 || senha.length > 10){
        alert('Senha deve ter entre 8 a 10 caracteres!')
        return;
    }
    else if(senha.includes(' ')){
        alert('Senha não pode conter espaços!')
        return;
    }
    for(let i = 0; i < senha.length; i++){
        if (letrasMaiusculas.test(senha[i]) || letrasMinusculas.test(senha[i])){
            QuantidadeLetras++;
        }
        if (numeros.test(senha[i])){
            auxNumero++;
        }
    }
    if(auxNumero <= 0){
        alert('Senha deve conter pelo menos um número!')
        return;
    }
    else if(QuantidadeLetras <= 0){
        alert('Senha deve conter pelo menos uma letra!') 
        return;   
    }
    else{
        alert('Login efetuado com sucesso!')
    };
}
//-------------------------------------------------------------------------------
function Atividade06(){
    const Input       = document.querySelector('#atividade06 Input')
    const Resultado06 = document.querySelector('#atividade06 textarea')
    let ValorCelsius;

    if(Input.value === ''){
        alert('Campo não pode ser vazio, verifique!')
        Input.focus;
        Resultado06.value = null;
        return;
    }
    else{
        ValorCelsius =  ConversorFahrenheitCelsius(Input.value);
        Resultado06.value = ValorCelsius.toFixed(2); 
    }
}

function ConversorFahrenheitCelsius(valor){
    let resultado;

    resultado = (valor - 32) / 1.8;
    return resultado;
}
//-------------------------------------------------------------------------------
function Atividade07(){
    const Input    = document.querySelectorAll('#atividade07 Input')
    const result07 = document.querySelector('#atividade07 textarea')
    
    if(ValidaCampoVazio(Input, 0) === false){
        result07.value = null;
        return;
    }
    else if(ValidaCampoVazio(Input, 1) === false){
        result07.value = null;
        return;
    }
    else if(ValidaCampoVazio(Input, 2) === false){
        result07.value = null;
        return;   
    }
    CalculaEquacaoSegundaGrau(Input[0].value, Input[1].value, Input[2].value, result07)
    
}

function CalculaEquacaoSegundaGrau(A,B,C, campo){
    let delta;
    let raiz;
    let Divisor;
    let X1;
    let X2;
    let resultado;

    delta = B ** 2 - (4*(A * C))
    raiz = Math.sqrt(delta);
    Divisor = 2 / A;

    X1 = (-(B) + raiz) /  Divisor

    X2 = (-(B) - raiz) /  Divisor
    
    campo.value  = "x' = " + X1 + " e x'\' = " + X2
}
//-------------------------------------------------------------------------------
function Atividade08(){
    const input    = document.querySelector('#atividade08 input');
    const result08 = document.querySelector('#atividade08 textarea')
    const string   = input.value;
    let QuantidadeVogais  = ValidaVogais(string);
    let QuantidadeEspacos = ValidaEspacos(string);
    let VogalSingular;
    let EspacoSingular;

    if(input.value === ''){
        input.focus;
        result08.value = null;
        alert('Campo não pode ser vazio!')
        return;
    }

    if(QuantidadeVogais === 1){
        VogalSingular = ' vogal e '
    }
    else{
        VogalSingular = ' vogais e '
    }
    if(QuantidadeEspacos === 1){
        EspacoSingular = ' espaço'
    }
    else{
        EspacoSingular = ' espaços'
    }

    result08.value = 'Essa frase contem ' + QuantidadeVogais + VogalSingular + QuantidadeEspacos + EspacoSingular;

}

function ValidaVogais(string){
    let QuantidadeCaracteres = string.length
    let ContVogal = 0;

    for(let i = 0; i < QuantidadeCaracteres; i++){
        if(string[i] === 'a' || string[i] === 'e' || string[i] === 'i' || string[i] ==='o' || string[i] === 'u'){
            ContVogal++;
        }
    }
    return ContVogal;
}

function ValidaEspacos(string){
    let QuantidadeCaracteres = string.length
    let ContEspacos = 0;

    for(let i = 0; i < QuantidadeCaracteres; i++){
        if(string[i] === ' '){
            ContEspacos++;
        }
    }
    return ContEspacos;
}
//-------------------------------------------------------------------------------