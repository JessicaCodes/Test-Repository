function toTime(seconds) {
    let hours =  (seconds / 60);
    let hoursConv = Math.floor(hours / 60);
    let minutes = hours % 60;
    return hoursConv + "hour(s) and " + minutes + "minute(s)"
    }

    var humanYearsCatYearsDogYears = function(humanYears) {
        let catYears = 0;
        let dogYears = 0;
        if(humanYears == 1){
        catYears = 15;
        dogYears = 15;
        }
        else if(humanYears == 2){
        catYears = 24;
        dogYears = 24;
        } else {
        catYears = 24 + 4 * (humanYears - 2);
        dogYears = 24 + 5 * (humanYears - 2);
        }
        // Your code here!
        return [humanYears, catYears, dogYears];
        }