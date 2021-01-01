const kelvinEL=document.querySelector("#kelvin");
const celsiusEL=document.querySelector("#celsius");
const farenhiteEL=document.querySelector("#farenhite");

function KelvinConvertor(kelvin){
    celsiusEL.value=(kelvin-273.1).toFixed(1);
    farenhiteEL.value=((kelvin*(9/5))-459.67).toFixed(1);
    transferBackground((kelvin-273.1).toFixed(0));
}

function CelsiusConvertor(celsius){
    kelvinEL.value=(celsius+273.1).toFixed(1);
    farenhiteEL.value=((celsius*1.8)+32).toFixed(1);
    transferBackground(celsius.toFixed(0));
}

function FarenhiteConvertor(farenhite){
    celsiusEL.value=((farenhite-32)*(5/9)).toFixed(1);
    kelvinEL.value=((farenhite+459.67)*5/9).toFixed(1);
    transferBackground((farenhite-32)*(5/9)).toFixed(0);
}

function transferBackground(celsius){
    if(celsius<=0){
        document.body.style.background="#65aef6";
    }
    else if(celsius>0 && celsius<=100){
        document.body.style.background="#bff161";
    }
    else{
        document.body.style.background="#f32b4c";
    }
}