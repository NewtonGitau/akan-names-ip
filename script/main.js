var day=document.getElementById("day")
var month=document.getElementById("month")
var year=document.getElementById("year")
var result=document.getElementById("result")
var male=document.getElementById("male")
var female=document.getElementById("female")


function validateForm() {
    let x = document.forms["myForm"]["fname"].value;
    if(day<0 || day>31)
        alert("Invalid day!")
      return false;
      if(month<0 || month>12)
        alert("Invalid month!")
        return false;
    }
  }

    function calculate()
    {
        var dates=new Date(day.value, month.value, year.value);
        
        if(gender="male") {
            console.log(); switch (maleDays)
        
            {   case 0:result.innerHTML="Kwasi"; break;
                case 1:result.innerHTML="Kwadwo"; break;
                case 2:result.innerHTML="Kwabena"; break;
                case 3:result.innerHTML="Kwaku"; break;
                case 4:result.innerHTML="Yaw"; break;
                case 5:result.innerHTML="Kofi"; break;
                case 6:result.innerHTML="Kwame"; break;
            }
        } else if(gender="female"){
            console.log(); 
            switch (femaleDays)
            {
                case 0:result.innerHTML="Akosua"; break;
                case 1:result.innerHTML="Adwoa"; break;
                case 2:result.innerHTML="Abenaa"; break;
                case 3:result.innerHTML="Akua"; break;
                case 4:result.innerHTML="Yaa"; break;
                case 5:result.innerHTML="Afua"; break;
                case 6:result.innerHTML="Ama"; break;
            }
        }
    }