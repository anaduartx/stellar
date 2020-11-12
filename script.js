//CADASTRO
const campo = document.getElementsByClassName("campo");
[
    {
        elemento: "",
        peso: "",
        volume: "",
        latitude: "",
        longitude: "",
        id: ""
    },

]

const info = 
[
    {
       
    },
];

function getInfo() {
    for (let i = 0; i < campo.length; i++) {
        info.push(campo[i].value);
    }
    console.log(info);
}


function change() {
    let txt;
    let r = confirm("Cadastrar dados no sistema?");
    if (r == true) {
      txt = "Dados cadastrados com sucesso!";
    } else {
      txt = "Dados não cadastrados.";
    }
    document.getElementById("confirmar").innerHTML = txt;
  }

//CONSULTA - LISTA DINÂMICA
let data = [
    {
        id: "121w1x",
        elemento: "Níquel",
        peso: 98.8,
        volume: 10,
        long: "50N",
        lag: "159W"
    },
    {
        id: "56nb5g",
        elemento: "Cobalto",
        peso: 0.6,
        volume: 0.5,
        long: "120S",
        lag: "12W"
    },
    {
        id: "2k4o6p",
        elemento: "Cobre",
        peso: 52.8,
        volume: 30,
        long: "151S",
        lag: "160E"
    },
    {
        id: "2erghn",
        elemento: "Mercúrio",
        peso: 2552.30,
        volume: 251,
        long: "93S",
        lag: "72W"
    },
    {
        id: "0192r7",
        elemento: "Sódio",
        peso: 895.8,
        volume: 3,
        long: "179N",
        lag: "1E"
    }
];


const lista = document.getElementById("lista");
const inf = document.getElementById("inf");


function search() {
    lista.innerHTML = "";
    for (let i = 0; i < data.length; i++) {
        if(data[i].id === inf.value){
           lista.innerHTML += 
            `
            <li>
                <p> Id: ${data[i].id} </p>
                <p> Elemento: ${data[i].elemento} </p>
                <p> Peso: ${data[i].peso} </p>
                <p> Volume: ${data[i].volume} </p>
                <p> Longitude: ${data[i].long} </p>
                <p> Latitude: ${data[i].lag} </p>
            </li>
            `;
        }
    }
}