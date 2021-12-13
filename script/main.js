var day=document.getElementById("day")
var month=document.getElementById("month")
var year=document.getElementById("year")
var result=document.getElementById("result")

function calculate()
{
    var dates=new Date(day.value, month.value, year.value);
    var days=dates.getDay();
    switch (days)
    {
        case 0:result.innerHTML="Kwasi"; break;
        case 1:result.innerHTML="Kwadwo"; break;
        case 2:result.innerHTML="Kwabena"; break;
        case 3:result.innerHTML="Kwaku"; break;
        case 4:result.innerHTML="Yaw"; break;
        case 5:result.innerHTML="Kofi"; break;
        case 6:result.innerHTML="Kwame"; break;
    }
}
