const secondHand = document.querySelector('.second-hand')
const minuteHand = document.querySelector('.minute-hand')
const hourHand = document.querySelector('.hour-hand')


let incrementFigureForSecondHandDegree = 0;
let sumFigureOfSecondHandDegree = 0;

let incrementFigureForMin = 0;
let sumOfMinuteDegree = 0;

let incrementFigureForHour = 0;
let sumOfHourDegree = 0;

let trial = setInterval(() => {
    function second(anyNumber) {

        if (anyNumber)
            sumFigureOfSecondHandDegree += incrementFigureForSecondHandDegree + 6
        return sumFigureOfSecondHandDegree
    }

    let secondDegree = second(true)

    // FOR SECOND HAND
    if (secondDegree > 360)
        sumFigureOfSecondHandDegree = 6

        const seconds = `${secondDegree}deg`
    secondHand.style.rotate = seconds
    
    //FOR MINUTE HAND
    
    function minute() {
        if (sumFigureOfSecondHandDegree == 360) {
            sumOfMinuteDegree += incrementFigureForMin + 6
        }
        return sumOfMinuteDegree
    }
    
    let minuteDegree = minute()
    const minutes = `${minuteDegree}deg`
    minuteHand.style.rotate = minutes
    
    //FOR HOUR HAND
    function hour() {
        if (sumOfMinuteDegree == 360) {
            sumOfHourDegree += incrementFigureForHour + 30
            sumOfMinuteDegree = 360.1
        }

        if (sumOfMinuteDegree > 360){
            sumOfMinuteDegree = 0
        }

        if (sumOfHourDegree > 359)
        sumOfHourDegree = 0

        return sumOfHourDegree
    }
    
    let hourDegree = hour()
    
    const hours = `${hourDegree}deg`
    hourHand.style.rotate = hours
    
}, 1000)