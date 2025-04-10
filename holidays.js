document.addEventListener('DOMContentLoaded', function() {
    let today = new Date();
    const options = { timeZone: 'America/Los_Angeles' };
    today = today.toLocaleString('en-US', options);
    today = new Date(today);
    const date = today.getDate()
    const month = today.getMonth() + 1;
    let holiday

    if(date == 1 && month == 1){holiday = "new_years"}
    else if(date == 20 && month == 1){holiday = "mlk"}
    else if(date == 14 && month == 2){holiday = "valentines"}
    else if(date == 17 && month == 2){holiday = "presidents"}
    else if(date == 26 && month == 5){holiday = "memorial"}
    else if(date == 19 && month == 6){holiday = "juneteenth"}
    else if(date == 4 && month == 7){holiday = "independence"}
    else if(date == 1 && month == 9){holiday = "labor"}
    else if(date == 13 && month == 10){holiday = "indigeous"}
    else if(date == 31 && month == 10){holiday = "halloween"}
    else if(date == 11 && month == 11){holiday = "veterans"}
    else if(date == 27 && month == 11){holiday = "thanksgiving"}
    else if(date == 25 && month == 12){holiday = "christmas"}
        
    let img, msg
    if (holiday === "christmas"){
        img = "🎅"
        msg = "Merry Christmas"
    } else if(month == 12 && date < 25){
        img = "🎄"
        msg = "It's almost Christmas!"
    } else if(holiday === "thanksgiving"){
        img = "🦃"
        msg = "Happy Thanksgiving!"
    } else if(month === 11 && date > 11){
        img = "🦃"
        msg = "It's almost Thanksgiving!"
    } else if(holiday === "new_years"){
        img = "🎊"
        msg = "Happy New Year!"
    } else if(month == 12 && date > 25){
        img = "🎊"
        msg = "Almost New Year!"
    } else if(holiday === "mlk"){
        img = "✊"
        msg = "Happy MLK Day!"
    } else if(holiday === "juneteenth"){
        img = "✊"
        msg = "Happy Juneteenth!"  
    } else if(holiday === "memorial"){
        img = "🎖️"
        msg = "Happy Memorial Day!"
    } else if(holiday === "veterans"){
        img = "🎖️"
        msg = "Happy Veterans Day!"
    } else if(holiday === "independence"){
        img = '🗽'
        msg = "Happy 4th of July!"
    } else if(holiday === "labor"){
        img = "👩‍🏭"
        msg = "Happy Labor Day!"
    } else if(holiday === "presidents"){
        img = "🎩"
        msg = "Happy Presidents Day!"
    } else if(holiday === "indigenous"){
        img = "🌎"
        msg = "Happy Indigenous Peoples' Day!"
    } else if(holiday === "halloween"){
        img = "🎃"
        msg = "Happy Halloween!"
    } else if(holiday === "valentines"){
        img = "💘"
        msg = "Happy Valentines Day!"
    }

    document.getElementById("holiday-img").innerHTML = img || ''
    document.getElementById("holiday-message").innerHTML = msg || ''
})