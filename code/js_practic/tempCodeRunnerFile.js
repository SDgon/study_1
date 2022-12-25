let time = 180

setInterval(function(){

    if (time >= 0) {
        let min = Math.floor(time / 60)
        let sec = time % 60
        console.log(min + ":" + sec);
        time = time - 1
    }

},1000)