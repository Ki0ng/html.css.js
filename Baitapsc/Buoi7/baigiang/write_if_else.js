function myFunction () {
    var number = document.getElementById('nhap').value;
    var greeting;
    if (number == 0) {
        greeting = "bạn được 0 điểm"
    } else if (number > 0) {
        greeting = "Đó là số dương"
    } else {
        greeting = "Đó là số âm"
    }
    document.getElementById('demo').innerHTML= greeting;
}