var countDown= new Date("Jul 25, 2021 16:34:00").getTime();

var x= setInterval(function(){
    var now= new Date().getTime();
    var distance= countDown-now;

    var days=Math.floor(distance/(1000*60*60*24));
    var hours=Math.floor(distance%(1000*60*60*24)/(1000*60*60));
    var minutes=Math.floor(distance%(1000*60*60)/(1000*60));
    var seconds=Math.floor(distance%(1000*60)/(1000));

    document.querySelector(".counter-time .days").innerHTML=days;
    document.querySelector(".counter-time .hours").innerHTML=hours;
    document.querySelector(".counter-time .minutes").innerHTML=minutes;
    document.querySelector(".counter-time .seconds").innerHTML=seconds;

    if(days==0){
        document.querySelector(".counter-time .days").innerHTML="00";
    }

    if(seconds==0){
        document.querySelector(".counter-time .seconds").innerHTML="00";
    }

    if(hours==0){
        document.querySelector(".counter-time .hours").innerHTML="00";
    }

    if(minutes==0){
        document.querySelector(".counter-time .minutes").innerHTML="00";
    }

    if(distance<0){
        document.querySelector(".counter-time .days").innerHTML="00";
        document.querySelector(".counter-time .hours").innerHTML="00";
        document.querySelector(".counter-time .minutes").innerHTML="00";
        document.querySelector(".counter-time .seconds").innerHTML="00";
        document.querySelector(".header-text").innerHTML="The Store is now OPEN";
    }
    
    colorReverse();
    
},1000);

function colorReverse(){
    setTimeout(function(){
    document.querySelector(".days").classList.add("tInverse");
    document.querySelector(".hours").classList.add("tInverse");
    document.querySelector(".minutes").classList.add("tInverse");
    document.querySelector(".seconds").classList.add("tInverse");
    },2000);

    setTimeout(function(){
        document.querySelector(".days").classList.remove("tInverse");
        document.querySelector(".hours").classList.remove("tInverse");
        document.querySelector(".minutes").classList.remove("tInverse");
        document.querySelector(".seconds").classList.remove("tInverse");
    },1000);
}