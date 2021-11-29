function calcTime(city, offset) {
    date = new Date();
    utc = date.getTime() + (date.getTimezoneOffset() * 60000);
    newdate = new Date(utc + (3600000 * offset));
    console.log(newdate);
    currentHour = newdate.getHours();
    currentMinute = newdate.getMinutes();
    currentSecond = newdate.getSeconds();
    currentDay = newdate.toDateString();

    currentHour = (currentHour < 10) ? '0' + currentHour : currentHour;
    currentMinute = (currentMinute < 10) ? '0' + currentMinute : currentMinute;
    currentSecond = (currentSecond < 10) ? '0' + currentSecond : currentSecond;
    typeOfDay = (currentHour < 12) ? "AM" : "PM";

    currentTime = + currentHour + ':' + currentMinute + ':' + currentSecond + ' ' + typeOfDay + ' on'+ ' ' + currentDay;
    return currentTime;

}

// here + - entity is GMT offset value google it

list = [];
list.push('int1');
int1 = setInterval(() => {
    console.log(calcTime('Mumbai(Maharashtra)', '+5.5'));
    currentCity = document.getElementById('currentCity');
    currentCity.innerHTML = 'Mumbai(Maharashtra)';

    time = document.getElementById('time');
    time.innerHTML = currentTime;
}, 1000);

myCities = document.getElementsByClassName('city-name');

for (items of myCities) {
    items.addEventListener('click', function (e) {
        buttonTxt = e.target.innerText;
        // console.log(buttonTxt);

        if (buttonTxt == 'New York') {
            for (i = 0; i < list.length; i++) {
                temp = list[i];
                clearInterval(window[temp]);
            }

            
            list.push('int2')
            int2 = setInterval(() => {
                console.log(calcTime('New York', '-4'));
                currentCity = document.getElementById('currentCity');
                currentCity.innerHTML = 'New York(US)';
                time = document.getElementById('time');
                time.innerHTML = currentTime;
            }, 1000);
        }

        if (buttonTxt == 'Los Angeles') {
            for (i = 0; i < list.length; i++) {
                temp = list[i];
                clearInterval(window[temp]);
            }

            list.push('int3')
            int3 = setInterval(() => {
                console.log(calcTime('Los Angeles', '-7'));
                currentCity = document.getElementById('currentCity');
                currentCity.innerHTML = 'Los Angeles';
                time = document.getElementById('time');
                time.innerHTML = currentTime;
            }, 1000);
        }

        if (buttonTxt == 'Tokyo') {
            for (i = 0; i < list.length; i++) {
                temp = list[i];
                clearInterval(window[temp]);
            }

            list.push('int4')
            int4 = setInterval(() => {
                console.log(calcTime('Tokyo', '+9'));
                currentCity = document.getElementById('currentCity');
                currentCity.innerHTML = 'Tokyo(Japan)';
                time = document.getElementById('time');
                time.innerHTML = currentTime;
            }, 1000);
        }

        if (buttonTxt == 'Washington DC') {
            for (i = 0; i < list.length; i++) {
                temp = list[i];
                clearInterval(window[temp]);
            }

            list.push('int5')
            int5 = setInterval(() => {
                console.log(calcTime('Washington DC', '-4'));
                currentCity = document.getElementById('currentCity');
                currentCity.innerHTML = 'Washington DC(US)';
                time = document.getElementById('time');
                time.innerHTML = currentTime;
            }, 1000);
        }


        if (buttonTxt == 'London') {
            for (i = 0; i < list.length; i++) {
                temp = list[i];
                clearInterval(window[temp]);
            }

            list.push('int6')
            int6 = setInterval(() => {
                console.log(calcTime('London', '+1'));
                currentCity = document.getElementById('currentCity');
                currentCity.innerHTML = 'London(England)';
                time = document.getElementById('time');
                time.innerHTML = currentTime;
            }, 1000);
        }

        if (buttonTxt == 'Singapore') {
            for (i = 0; i < list.length; i++) {
                temp = list[i];
                clearInterval(window[temp]);
            }

            list.push('int7')
            int7 = setInterval(() => {
                console.log(calcTime('Singapore', '+8'));
                currentCity = document.getElementById('currentCity');
                currentCity.innerHTML = 'Singapore';
                time = document.getElementById('time');
                time.innerHTML = currentTime;
            }, 1000);
        }

        if (buttonTxt == 'Hong Kong') {
            for (i = 0; i < list.length; i++) {
                temp = list[i];
                clearInterval(window[temp]);
            }

            list.push('int8')
            int8 = setInterval(() => {
                console.log(calcTime('Hong Kong', '+8'));
                currentCity = document.getElementById('currentCity');
                currentCity.innerHTML = 'Hong Kong(China)';
                time = document.getElementById('time');
                time.innerHTML = currentTime;
            }, 1000);
        }

        if (buttonTxt == 'California') {
            for (i = 0; i < list.length; i++) {
                temp = list[i];
                clearInterval(window[temp]);
            }

            list.push('int9')
            int9 = setInterval(() => {
                console.log(calcTime('California', '-7'));
                currentCity = document.getElementById('currentCity');
                currentCity.innerHTML = 'California(US)';
                time = document.getElementById('time');
                time.innerHTML = currentTime;
            }, 1000);
        }

        if (buttonTxt == 'Mumbai') {
            for (i = 0; i < list.length; i++) {
                temp = list[i];
                clearInterval(window[temp]);
            }
            list.push('int10')
            int10 = setInterval(() => {
                console.log(calcTime('Mumbai', '+5.5'));
                currentCity = document.getElementById('currentCity');
                currentCity.innerHTML = 'Mumbai(Maharashtra)';
                time = document.getElementById('time');
                time.innerHTML = currentTime;
            }, 1000);
        }

    })
}


