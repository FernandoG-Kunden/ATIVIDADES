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

