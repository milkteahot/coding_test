function getDayName(a,b) {
    var date = new Date(2016, (a-1), b);
    return date.toString().slice(0,3).toUpperCase();
}

console.log(getDayName(5,24));