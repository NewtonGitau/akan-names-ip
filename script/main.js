
let maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]
let femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]



function calculate(){
    document.getElementById("form").onsubmit();
       

    var day=document.getElementById("day").value;
    var month=document.getElementById("month").value;
    var year=document.getElementById("year").value;
    
    var male = document.getElementById("male").addEventListener("check");
    var female = document.getElementById("female").addEventListener("check");

    year[0] = firstDigit;
    year[1] = secondDigit;
    year[2] = thirdDigit;
    year[3] = fourthDigit;

    let CC = parseInt(firstDigit + secondDigit);
    let YY = parseInt(thirdDigit + secondDigit);

    let newDay = parseInt(day);
    let newMonth = parseInt(month);


    if (day < 0 || day  > 31) {
        function wrongDay(){
            alert("This is a wrong day!");
        }
        wrongDay();
    }  else if (month < 0 || month  > 12) {
        function wrongMonth(){
            alert("This is a wrong month!");
        }
        wrongMonth();
    } else {
        male.checked = true;
        let dayWeek = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(newMonth+1)/10)) + newDay ) % 7
        let displayMale = maleNames [dayWeek];
        document.getElementById("result").innerHTML = displayMale + " is your Akan name."
    }
        // declare if female is true

        female.checked = true;
        let dayWeek = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(newMonth+1)/10)) + newDay ) % 7
        let displayFemale = maleNames [dayWeek];
        document.getElementById("result").innerHTML = displayFemale + " is your Akan name."
       

}
