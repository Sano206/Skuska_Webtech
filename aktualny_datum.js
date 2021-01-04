function curDate(){
    let today = new Date();
    let month = addZero(today.getMonth() + 1); //The getMonth() method returns the month (from 0 to 11)
    let year = today.getFullYear();
    let date = addZero(today.getDate());


    let current_date = date + "/" + month + "/" + year;
    var myCurDate = document.getElementById("currentDate");
    myCurDate.innerText = current_date;
}

function addZero(num){
    return num<10 ? "0" + num : num;
}

curDate();
