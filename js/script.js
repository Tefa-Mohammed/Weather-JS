// ======== variables for Api ========
var myHttp = new XMLHttpRequest();
var searchBox = document.getElementById('search');

// ======== variables To view the day name========
var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var day = new Date();
var dayName = days[day.getDay()];
// ======== variables To view the next day name========
var nextDay = new Date();
var nextDayName = days[nextDay.getDay()+1];
if (nextDay.getDay() == 6) {
    nextDayName = 'Sunday';
}
// ======== variables To view the third day name========
var thirdDay = new Date();
var thirdDayName = days[thirdDay.getDay()+2];
if (thirdDay.getDay() == 5) {
    thirdDayName = 'Sunday';
}else if (thirdDay.getDay() == 6){
    thirdDayName = 'Monday';
}
// ======== variables To view the month ========
var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var month = new Date();
var monthName = monthNames[month.getMonth()];
// ======== variables To view the day number========
var dayN = new Date();
var dayNum = dayN.getDate();


function searchLocation () {
    if (validation() == true){
        getWeather(searchBox.value);
    }
}

// function getWeather(city) {

//     myHttp.open("GET", `http://api.weatherapi.com/v1/forecast.json?key=35ad5f1819154542a6620725211105&q=${city}&days=3`);
//     myHttp.send();
//         myHttp.addEventListener("readystatechange", function(){
//             if (myHttp.readyState == 4 && myHttp.status == 200) {
//                     myLocation = JSON.parse(myHttp.response).location.name ;
//                     myDayTemp = JSON.parse(myHttp.response).current.temp_c ;
//                     myDayTempText = JSON.parse(myHttp.response).current.condition.text ;
//                     myDayTempIcon = JSON.parse(myHttp.response).current.condition.icon ;
        
//                     nextDayMaxTemp = JSON.parse(myHttp.response).forecast.forecastday[1].day.maxtemp_c ;
//                     nextDayMinTemp = JSON.parse(myHttp.response).forecast.forecastday[1].day.mintemp_c ;
//                     nextDayTempText = JSON.parse(myHttp.response).forecast.forecastday[1].day.condition.text ;
//                     nextDayTempIcon = JSON.parse(myHttp.response).forecast.forecastday[1].day.condition.icon ;
        
//                     thirdDayMaxTemp = JSON.parse(myHttp.response).forecast.forecastday[2].day.maxtemp_c ;
//                     thirdDayMinTemp = JSON.parse(myHttp.response).forecast.forecastday[2].day.mintemp_c ;
//                     thirdDayTempText = JSON.parse(myHttp.response).forecast.forecastday[2].day.condition.text ;
//                     thirdDayTempIcon = JSON.parse(myHttp.response).forecast.forecastday[2].day.condition.icon ;
//                 displayTemp ();
//             }
//         })
// }

async function getWeather(city) {
    let myHttp = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=35ad5f1819154542a6620725211105&q=${city}&days=3`);
    let myHttpData = await myHttp.json();
    myLocation = myHttpData.location.name ;
    myDayTemp = myHttpData.current.temp_c ;
    myDayTempText = myHttpData.current.condition.text ;
    myDayTempIcon = myHttpData.current.condition.icon ;

    nextDayMaxTemp = myHttpData.forecast.forecastday[1].day.maxtemp_c ;
    nextDayMinTemp = myHttpData.forecast.forecastday[1].day.mintemp_c ;
    nextDayTempText = myHttpData.forecast.forecastday[1].day.condition.text ;
    nextDayTempIcon = myHttpData.forecast.forecastday[1].day.condition.icon ;

    thirdDayMaxTemp = myHttpData.forecast.forecastday[2].day.maxtemp_c ;
    thirdDayMinTemp = myHttpData.forecast.forecastday[2].day.mintemp_c ;
    thirdDayTempText = myHttpData.forecast.forecastday[2].day.condition.text ;
    thirdDayTempIcon = myHttpData.forecast.forecastday[2].day.condition.icon ;
    displayTemp ();
}

function displayTemp (){
    displayMyDay();
    displayNextDay();
    displayThirdDay();
}

function displayMyDay(){
    var cartoona = ``;
        cartoona += `
                <div class="card mb-3 border-0">
                    <div class="card-header border-0">
                    ${dayName}<span class="float-right">${dayNum} ${monthName}</span></div>
                    <div class="card-body  text-center">
                        <h1 class="card-title location text-left">${myLocation}</h1>
                        <h3 class="card-title temp font-weight-bold my-2">${myDayTemp}<sup>o</sup>C</h3>
                        <img src="https://${myDayTempIcon}" alt="Weather" class="img-fluid w-25 my-2">
                        <p class="card-text mt-2 text-center">${myDayTempText}.</p>
                    </div>
                    <div class=" card-footer d-flex w-100 justify-content-around">
                        <span><img src="imgs/umbrella.png" alt="" class="img-fluid w-25"> 20%</span>
                        <span><img src="imgs/w.png" alt="" class="img-fluid w-25"> 18km/h</span>
                        <span><img src="imgs/compass.png" alt="" class="img-fluid w-25"> East</span>
                    </div>
                </div>

        `
    document.getElementById('index').innerHTML = cartoona;
}

function displayNextDay(){
    var cartoona = ``;
        cartoona += `
                <div class="card mb-3 border-0">
                            <div class="card-header border-0">${nextDayName}</div>
                            <div class="card-body">
                                <img src="https://${nextDayTempIcon}" alt="Weather" class="img-fluid my-3">
                                <h3 class="card-title max-temp font-weight-bold my-2 text-white">${nextDayMaxTemp}<sup>o</sup>C</h3>
                                <h5 class="card-title min-temp text-info">${nextDayMinTemp}<sup>o</sup>C
                                </h5>
                                <p class="card-text mt-2 text-center">${nextDayTempText}</p>
                            </div>
                            <div class=" card-footer d-flex w-100 justify-content-around">
                                <span><img src="imgs/umbrella.png" alt="" class="img-fluid w-25"> 20%</span>
                                <span><img src="imgs/w.png" alt="" class="img-fluid w-25"> 18km/h</span>
                                <span><img src="imgs/compass.png" alt="" class="img-fluid w-25"> East</span>
                            </div>
                        </div>
        `
    document.getElementById('nextIndex').innerHTML = cartoona;
}

function displayThirdDay(){
    var cartoona = ``;
        cartoona += `
        <div class="card mb-3 border-0">
        <div class="card-header border-0">${thirdDayName}</div>
        <div class="card-body">
            <img src="https://${thirdDayTempIcon}" alt="Weather" class="img-fluid my-3">
            <h3 class="card-title max-temp font-weight-bold my-2 text-white">${thirdDayMaxTemp}<sup>o</sup>C</h3>
            <h5 class="card-title min-temp text-info">${thirdDayMinTemp}<sup>o</sup>C
            </h5>
            <p class="card-text mt-2 text-center">${thirdDayTempText}</p>
        </div>
        <div class=" card-footer d-flex w-100 justify-content-around">
            <span><img src="imgs/umbrella.png" alt="" class="img-fluid w-25"> 20%</span>
            <span><img src="imgs/w.png" alt="" class="img-fluid w-25"> 18km/h</span>
            <span><img src="imgs/compass.png" alt="" class="img-fluid w-25"> East</span>
        </div>
    </div>

        `
    document.getElementById('thirdIndex').innerHTML = cartoona;
}

// ========= Regular Expression ==========
function validation() {
    let regex = /^[a-z ]{3,}$/i ;

    if(regex.test(searchBox.value) == true) {
        return true
    } else {
        return false
    }
}

// ===== the Clock Code =====
function realTime() {
    var clock = document.getElementById('clock');
    var text =document.getElementById('text');

    var time = new Date();

    var hours = time.getHours();
    var minutes = time.getMinutes();
    var seconds = time.getSeconds();

    var amPM = ( hours < 12 ) ? "AM" : "PM" ;

    
    hours = ( hours > 12 ) ? hours - 12 : hours ;
    
    hours = ("0" + hours).slice(-2);
    minutes = ("0" + minutes).slice(-2);
    seconds = ("0" + seconds).slice(-2);
    
    clock.innerHTML = hours + " : " + minutes + " : " + seconds + " " + amPM ;
    
    var t = setTimeout(realTime, 500);
    
    var good = ( amPM == "AM" ) ? "Good Morning" : "Good Evening" ;
    text.innerHTML = good ;

    // code to view weather of cairo when reload page 
    if(searchBox.value == "") {
        myHttp.open("GET", `https://api.weatherapi.com/v1/forecast.json?key=35ad5f1819154542a6620725211105&q=cairo&days=3`);
        myHttp.send();
        myHttp.addEventListener("readystatechange", function(){
            if (myHttp.readyState == 4 && myHttp.status == 200) {
                    myLocation = JSON.parse(myHttp.response).location.name ;
                    myDayTemp = JSON.parse(myHttp.response).current.temp_c ;
                    myDayTempText = JSON.parse(myHttp.response).current.condition.text ;
                    myDayTempIcon = JSON.parse(myHttp.response).current.condition.icon ;
        
                    nextDayMaxTemp = JSON.parse(myHttp.response).forecast.forecastday[1].day.maxtemp_c ;
                    nextDayMinTemp = JSON.parse(myHttp.response).forecast.forecastday[1].day.mintemp_c ;
                    nextDayTempText = JSON.parse(myHttp.response).forecast.forecastday[1].day.condition.text ;
                    nextDayTempIcon = JSON.parse(myHttp.response).forecast.forecastday[1].day.condition.icon ;
        
                    thirdDayMaxTemp = JSON.parse(myHttp.response).forecast.forecastday[2].day.maxtemp_c ;
                    thirdDayMinTemp = JSON.parse(myHttp.response).forecast.forecastday[2].day.mintemp_c ;
                    thirdDayTempText = JSON.parse(myHttp.response).forecast.forecastday[2].day.condition.text ;
                    thirdDayTempIcon = JSON.parse(myHttp.response).forecast.forecastday[2].day.condition.icon ;
                displayTemp ();
            }
        })
    }

}