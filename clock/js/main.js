let hr= document.querySelector('.hr-hand')
let min= document.querySelector('.min-hand')
let sec= document.querySelector('.sec-hand')

function setClock(){
    let data = new Date()
    //要再加上每一分一秒的度數，最後將指針調整為指向12點鐘方向
    let hrDeg= data.getHours() * 30 + data.getMinutes() /60 *30 - 90
    let minDeg= data.getMinutes() * 6 + data.getSeconds() /60 *6 + 180
    let secDeg= data.getSeconds() * 6 + 180

    hr.style.transform = `rotate(${hrDeg}deg)` //記得加單位
    min.style.transform = `rotate(${minDeg}deg)`
    sec.style.transform = `rotate(${secDeg}deg)`
}

function animation(){
    setClock()
    window.requestAnimationFrame(animation);
}

window.requestAnimationFrame(animation);