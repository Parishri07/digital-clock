function change() {
    var hours = new Date().getHours();
    var minutes = new Date().getMinutes();
    var seconds = new Date().getSeconds();
    
    var secondsString = seconds.toString().padStart(2, '0');
    
    var time = hours + ":" + minutes + ":" + secondsString;
    document.getElementsByClassName("container")[0].innerHTML = time;
}

setInterval(change, 1000);
