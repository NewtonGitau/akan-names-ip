var day=document.getElementById("day")
var month=document.getElementById("month")
var year=document.getElementById("year")
var result=document.getElementById("result")
var sex=document.getElementById("sex")

function calculate()
{
    var dates=new Date(day.value, month.value, year.value);
    var femaleDays=dates.getDay()
    var maleDays=dates.getDay();

    if(value="male") {
        console.log(); switch (maleDays)
    
        {   case 0:result.innerHTML="Kwasi"; break;
            case 1:result.innerHTML="Kwadwo"; break;
            case 2:result.innerHTML="Kwabena"; break;
            case 3:result.innerHTML="Kwaku"; break;
            case 4:result.innerHTML="Yaw"; break;
            case 5:result.innerHTML="Kofi"; break;
            case 6:result.innerHTML="Kwame"; break;
        }
    } else if(value="female"){
        console.log(); switch (femaleDays)
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
