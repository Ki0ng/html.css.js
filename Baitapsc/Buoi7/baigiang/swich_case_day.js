function myFunction() {
    var day = parseInt(document.getElementById('nhap').value);
    var today;
    switch (day) {
        case 0:
            today = 'monday'
            break;
        case 1:
            today = '3'
            break;
        default:
            break;
    }
    document.getElementById('demo').innerHTML= 'this is' + today;
    // innerHTML = "đây là chuỗi" + biến 
}