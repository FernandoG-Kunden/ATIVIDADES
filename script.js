const form = document.querySelector('#form');
const input = document.querySelectorAll('.input')
const ResultInput = document.querySelector('#resultado-input')
const btn = document.querySelector('#btn-calcular')

btn.addEventListener("click", (event) => {
    event.preventDefault();

        if (input[0].value < 0) {
            alert("Ano não pode ser negativo!");
            return;
        }  
        else if(input[1].value < 0){
            alert("Mês não pode ser negativo!");
            return;
        }
        else if(input[2].value < 0){
            alert("Dia não pode ser negativo!");
            return;
        }
        SumDays();
     
    }
)

function SumDays(){
    let TotalDaysYear = input[0].value; 
    let TotalDaysMonth = input[1].value;
    let TotalDay = input[2].value;

    if (TotalDaysYear === ""){
        alert("Informe um ano!")
        return;
    }
    else if (TotalDaysMonth === ""){
        alert("Informe um mês!")
        return;
    }
    else if (TotalDay === ""){
        alert("Informe um dia!")
        return;
    }
    TotalDaysYear  = TotalDaysYear * 365;
    TotalDaysMonth = TotalDaysMonth * 30;

    ResultInput.value = parseInt(TotalDaysYear) + parseInt(TotalDaysMonth) + parseInt(TotalDay) + " Dias";

 }