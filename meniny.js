function checkDate() {
    var all_ok = 1;
    date_value = document.getElementById('date').value;
    reg = /[0-9]{1,2}.[0-9]{1,2}$/;

    if (reg.test(date_value) == false) {
        all_ok = 0;
        alert("Datum treba vyplnit vo formate MM.DD!");
    }

    //console.log(date_value);

    if(all_ok == 1) {
        readXMLDate(date_value);
    }

}

/*
function checkName(){
    //change to upperCase
    name_value = document.getElementById('name').value;
    var upper_name = name_value.toUpperCase();
    readXMLName(upper_name);
}*/

/*function readXMLName(upper_name){
    let url = "meniny.xml";
    fetch(url)
        .then(response => response.text())
        .then(data => {
            //console.log(data);
            let parser = new DOMParser();
            let xml = parser.parseFromString(data, 'application/xml');
            document.getElementById('output').textContent = data;
            var meniny = xml.getElementsByTagName("zaznam");
            //var den = meniny[0].getElementsByTagName("den")[0].firstChild.data;
            //var mena = meniny[1].getElementsByTagName("SK")[0].firstChild.data;

            //var variable = "0101";
            var i = 0;
            var meno;
            do {

                meno = meniny[i].getElementsByTagName("SK")[0];//.data;//.firstChild.data;//.toUpperCase();
                i=i+1;
                console.log(meno);

            }while(meno != upper_name);
            //if(den === d){
            //   console.log(mena);
            //}
            console.log(i);
            var den = meniny[i-1].getElementsByTagName("den")[0].firstChild.data;
            console.log(den);

            document.getElementById('output').textContent = den;
});
}*/

function readXMLDate(date_value){
    var d = date_value.split('.').join("");
    //alert(d);

    let url = "meniny.xml";
    fetch(url)
        .then(response => response.text())
        .then(data => {
            //console.log(data);
            let parser = new DOMParser();
            let xml = parser.parseFromString(data, 'application/xml');
            document.getElementById('output').textContent = data;
            var meniny = xml.getElementsByTagName("zaznam");

            var i = 0;
            var den;
            do {
                den = meniny[i].getElementsByTagName("den")[0].firstChild.data;
                i = i + 1;
                console.log(den);

            } while (den != d || i === 366);

            if (den == "0101") {
                document.getElementById('output').textContent = "V tento den nie su k dispozicii ziadne mena";

            } else{

                console.log("i: " + i);
                var mena = meniny[i - 1].getElementsByTagName("SKd")[0].firstChild.data;
                console.log(mena);
                document.getElementById('output').textContent = mena;

            }
        });
}