let clock = document.getElementById('clock')


const currentTime = () =>{
    let currentTime = new Date().toLocaleTimeString()   
    clock.innerText= currentTime
}

setInterval(currentTime , 1000)