function myFunction() {
    var day = document.getElementById("Enter").value;
    var greeting;

    if (day == 1 ){
        greeting = "thu2"
        document.getElementById("demo").style.color = "red";
    } else if (day == 2){
        greeting = "thu3"
        document.getElementById("demo").style.color = "red";
    } else if (day == 3) {
        greeting = "thu4"
        document.getElementById("demo").style.color = "red";
    } else if (day == 4) {
        greeting = "thu5"
        document.getElementById("demo").style.color = "red";
    } else if (day == 5) {
        greeting = "thu6"
        document.getElementById("demo").style.color = "red";
    } else if (day == 6) {
        greeting = "thu7"
        document.getElementById("demo").style.color = "red";
    } else if (day == 7){
        greeting = "CN"
        document.getElementById("demo").style.color = "red";
    } else {
        greeting = "khong co"
    }
    document.getElementById('demo').innerHTML = greeting;
}