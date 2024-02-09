function lifeInWeeks(age) {
    var daysInYear = 365
    var weeksInYear = 52
    var monthsInYear = 12
    var LifeSpan = 90 
    
    var timeLeft = LifeSpan - age 
        
    var daysLeft = daysInYear * timeLeft
    var weeksLeft = weeksInYear * timeLeft
    var monthsLeft = monthsInYear * timeLeft
    
    return 

    alert("You have " + daysLeft + " days left, " + weeksLeft  + " weeks left, and " + monthsLeft + " months left, in your life if we assume you will live to 90 years old.")
}
lifeInWeeks()