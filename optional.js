const secondHand = document.querySelector('.second-hand')
const minuteHand = document.querySelector('.minute-hand')
const hourHand = document.querySelector('.hour-hand')

setInterval(function (){
    let time = new Date()
    let sec = time.getSeconds()
    let min = time.getMinutes()
    let hr = time.getHours()

    sec = 6 * sec
    min = 6 * min
    if (hr > 12)
        hr = hr - 12
    
    hr = 30 * hr
    
    const seconds = `${sec}deg`;
    const mints = `${min}deg`;
    const hour = `${hr}deg`;

        secondHand.style.rotate = seconds
        minuteHand.style.rotate = mints
        hourHand.style.rotate = hour
},1000)