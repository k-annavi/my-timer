document.getElementById("timerForm").addEventListener("submit",(e)=>{
    e.preventDefault()

    let min = parseInt(document.getElementById("min").value) //parse int convert string in t0 seconds 
    let sec = parseInt(document.getElementById("sec").value)
    // convert it in a seconds

    let totalTime = (min*60)+sec

    // after each seconds time--
     let interval = setInterval(() =>{
        totalTime--

    // convert time to min and sec
    let minutes = parseInt(totalTime/60)
    let seconds = parseInt(totalTime%60)

    // display min and sec 
    document.getElementById("minutes").innerText= minutes
    document.getElementById("seconds").innerText = seconds

    if(totalTime === 0){
        clearInterval(interval)
    }

},1000)


})