let countValue = document.getElementById('watch-value');
let showText = document.querySelector('.show-text')
let count = 0;
let interval
const startTime = () =>{
   interval = setInterval(()=>{
        count ++;
        countValue.innerText = count;
    },1000)
}

const stopTime = () =>{
    clearInterval(interval)
    showText.textContent = `Time stop : ${count}` 
}

const resetTime = () =>{
   count = 0;
   clearInterval(interval)
   countValue.innerText = count;
   showText.textContent = `Time reset : ${count}`
}

const getTime = () =>{
    let p = document.createElement("p");
    p.innerText = ` The time stop : ${count}`;
    showText.append(p)
}

const clearTime = () =>{
   showText.innerText = "";
}


document.getElementById('start').addEventListener('click' , () =>{
    startTime();
})
document.getElementById('reset').addEventListener('click' , () =>{
    resetTime();
})
document.getElementById('stop').addEventListener('click' , () =>{
    stopTime();
})
document.getElementById('getTime').addEventListener('click' , () =>{
    getTime();
})
document.getElementById('clear').addEventListener('click' , () =>{
    clearTime();
})
