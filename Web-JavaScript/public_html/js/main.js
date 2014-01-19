function loadTikTik(){
    //setTimeout(myTime1());
    setInterval('myTime1()',1000); 
}

function myTime1() {
    var myDate = new Date();
    document.getElementById("clock").innerHTML = myDate.getHours() + " : " + myDate.getMinutes() + " : " + myDate.getSeconds();
}