


var hr = document.getElementById("hr");
var min = document.getElementById("min");


var sec = document.getElementById("sec");

var input = document.getElementById("input").value;
var inputt = document.getElementById("inputt");


var inputtt =parseInt(document.getElementById("inputtt")).value

 var btnstop =document.getElementById("stop")

 var btnpasue =document.getElementById("pasue")
 var btnstart =document.getElementById("start")
 var hour = document.getElementById("input").value;
 var mintues= document.getElementById("inputt").value;
 var second= document.getElementById("inputtt").value;
 btnstop.disabled=true
 btnpasue.disabled=true
 var interval = 0;
 function startf(){
    btnpasue.disabled=false
    btnstop.disabled=false
    btnstart.disabled=true    
    document.write(second);
    interval =setInterval(function(){
        second++
      
 
    if( second == 60){
        mintues++

second = 00;


    }
    else if(mintues == 59){
        hour++
       
        mintues= 00

    }
    sec.innerHTML=second;
    min.innerHTML=mintues;
    hr.innerHTML=hour;
},1000);


 }
 function stopf(){
    clearInterval(interval)
 
    btnstop.disabled=false


 }
 function timer(){
    btnstart.disabled=false

 sec.innerHTML=document.getElementById("inputtt").value;
     min.innerHTML= document.getElementById("inputt").value;
     hr.innerHTML=document.getElementById("input").value;

 }


