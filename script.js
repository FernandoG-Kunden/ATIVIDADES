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

 //-------------------------------------------

const input02 = document.querySelectorAll(".input02");
const result02 = document.querySelector("#resultado02");
const btn02 = document.querySelector("#btn02")

btn02.addEventListener("click", (event) => {
    event.preventDefault()

    if (input02[0].value < 0) {
        alert("Nota 01 não pode ser negativa!");
        return;
    }  
    else if(input02[1].value < 0){
        alert("Nota 02 não pode ser negativa!");
        return;
    }
    else if(input02[2].value < 0){
        alert("Nota 03 não pode ser negativa!");
        return;
    }
    else if(input02[3].value < 0){
        alert("Nota 04 não pode ser negativa!");
        return;
    }
    MediaNotas();
})

function MediaNotas() {
    let Nota01 = input02[0].value;
    let Nota02 = input02[1].value;
    let Nota03 = input02[2].value;
    let Nota04 = input02[3].value;
    let MaiorNota;
    let Media;


    if(Nota01 === ""){
        alert("Nota 01 em branco, verifique!")
        return;
    }
    else if(Nota02 === ""){
        alert("Nota 02 em branco, verifique!")
        return;
    }
    else if(Nota03 === ""){
        alert("Nota 03 em branco, verifique!")
        return;
        
    }
    else if(Nota04 === ""){
        alert("Nota 04 em branco, verifique!")
        return;     
    }

    if(Nota03 > Nota04){
        MaiorNota = Nota03;
    }
    else{
        MaiorNota = Nota04; 
    }

    Media = (parseInt(Nota01) + parseInt(Nota02) + parseInt(MaiorNota)) / 3

    result02.value = Media.toFixed(2)
}
