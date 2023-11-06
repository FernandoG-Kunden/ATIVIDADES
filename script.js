const inputs      = document.querySelectorAll('#atividade01 input')
const Resultado01 = document.getElementById("result01")
const BtnCalcular = document.getElementById("btn-calcular01")

BtnCalcular.addEventListener('click', (event) => {
    event.preventDefault();

    let TotalDiasAno;
    let TotalDiaMes;
    let TotalDias;

    if(inputs[0].value === ''){
        alert("Deve ser preenchido um ano!")
        return;
    }
    else if(inputs[0].value < 0){
        alert("Campo de ano não pode ser negativo!")
        return;
    } 
    else if (inputs[1].value === ''){
        alert("Deve ser preenchido um mês!")
        return;
    }
    else if(inputs[1].value < 0){
        alert("Campo de mês não pode ser negativo!")
        return;
    }
    else if (inputs[2].value === ''){
        alert("Deve ser preenchido um dia!")
        return;
    }
    else if(inputs[2].value < 0){
        alert("Campo de dia não pode ser negativo!")
        return;
    }

    TotalDiasAno = inputs[0].value * 365;
    TotalDiaMes  = inputs[1].value * 30;
    TotalDias    = inputs[2].value;

    Resultado01.value = parseInt(TotalDiasAno) + parseInt(TotalDiaMes) + parseInt(TotalDias) + " Dias"

}
)
 //-------------------------------------------------------------------------------

const Inputs02    = document.querySelectorAll('#atividade02 input')
const Btn02       = document.getElementById('btn-media')
const Resultado02 = document.getElementById('result02');
let ResultadoNotas;

Btn02.addEventListener("click", (event) =>{
    event.preventDefault();

    if(Inputs02[0].value === ''){
        alert("Nota 01 deve ser preenchida!")
        return;
    }
    else if(Inputs02[0].value < 0){
        alert("Nota 01 não pode ser negativa!")
        return;
    } 
    else if (Inputs02[1].value === ''){
        alert("Nota 02 deve ser preenchida!")
        return;
    }
    else if(Inputs02[1].value < 0){
        alert("Nota 02 não pode ser negativa!")
        return;
    }
    else if (Inputs02[2].value === ''){
        alert("Nota 03 deve ser preenchida!")
        return;
    }
    else if (Inputs02[2].value < 0){
        alert("Nota 03 não pode ser negativa!")
        return;
    }
    else if (Inputs02[3].value === ''){
        alert("Nota 04 deve ser preenchida!")
        return;
    }
    else if(Inputs02[3].value < 0){
        alert("Nota 04 não pode ser negativa!")
        return;
    }

    let Nota1 = Inputs02[0].value;
    let Nota2 = Inputs02[1].value;
    let Nota3 = Inputs02[2].value;
    let Nota4 = Inputs02[3].value;

    if(Nota3 > Nota4){
        ResultadoNotas = (parseInt(Nota1) + parseInt(Nota2) + parseInt (Nota3)) / 3
    }
    else{
        ResultadoNotas = (parseInt(Nota1) + parseInt(Nota2) + parseInt (Nota4)) / 3
    }

    Resultado02.value = ResultadoNotas.toFixed(2)

})
//-------------------------------------------------------------------------------
const input03     = document.getElementById('numero');
const resultado03 = document.getElementById('result03');
const Btn03       = document.getElementById('btn-impares')

Btn03.addEventListener('click', (event) =>{
    event.preventDefault();

    let NumerosImpares;

    if(input03.value <= 0){
        alert("Campo deve ser maior que zero!");
        resultado03.value = null;
        return;
    }
    
    for(let Impares = 1; Impares <= input03.value; Impares++){
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
    resultado03.value = NumerosImpares;  
})

//-------------------------------------------------------------------------------

