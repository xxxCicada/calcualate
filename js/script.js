var models = [      //Масив с данными о моделях
    {
        id: '2d',
        p1: 0.2,
        price: 0
    },
     {
        id: '4dm2',
        p1: 0.25,
        price: 0
    },
     {
        id: '44d',
        p1: 0.35,
        price: 0
    }
];

var ratio = 0;

function chooseEngine(engineId,closeId,){
    document.getElementById(engineId).style.border = "2px solid #8a8dff";      //Замена цвета рамки
    for (var i = closeId.length - 1; i >= 0; i--) {
        document.getElementById(closeId[i]).style.border = "2px solid #eaedf2";
    }

    for (var j = models.length - 1; j >= 0; j--) { //Получение множетеля выбранной модели
        if(models[j].id == engineId){
            ratio = models[j].p1;
        }
    }
    calculate();

}
var priceInput = document.getElementById('price');
var consumptionInput = document.getElementById('consumption');
var timeInput = document.getElementById('time'); 

var idleFuel = document.getElementById('idleFuel');  
var idlePrice = document.getElementById('idlePrice');  
var resFuel = document.getElementById('resFuel');  
var resPrice = document.getElementById('resPrice');  
var result = document.getElementById('result');  

function calculate(){
    let price = document.getElementById('price').value;
    let consumption = document.getElementById('consumption').value;
    let time = document.getElementById('time').value;

    idleFuel.textContent = (consumption * time).toFixed(2) + " Л";
    idlePrice.textContent = (consumption * time * price).toFixed(2) + " Р";

    resFuel.textContent =  (ratio * time).toFixed(2) + " Л";
    resPrice.textContent =  (ratio * time * price).toFixed(2) + " Р";

    result.textContent = ((consumption * time * price) - (ratio * time * price )).toFixed(2) + " Р";

}