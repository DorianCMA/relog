
const Time = () =>{

    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let session = "AM";

    // El objeto new Date es formato 24 hora con el siguiente if programo el formato 12 horas
    
    if (hours == 0)
    {
        hours = 12
    }
    
    if (hours > 12)
    {
       hours  -= 12
       session = "PM"
    }
    
    // agregar el 0 antes de un digito

   hours = hours < 10 ?  "0" +  hours : hours
    minutes = minutes < 10 ?  "0" +  minutes : minutes
   seconds= seconds < 10 ?  "0" + seconds : seconds
    
   
    
    // la variable con el formato visual que se quiere
    
    let timeClock = hours + " : " + minutes + " : " + seconds +" "+ session;
    
    document.getElementById("clock").innerHTML = timeClock;
    
    
    
    // NOTA el objeto new Date es un objeto estatico por lo que se debe utilizar el metodo setTimeout para actualizarlo  
    
    let T = setTimeout(function(){Time()},1000);
}


Time()