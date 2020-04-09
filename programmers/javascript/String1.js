function solution(strings, n) {
    strings.sort(function(a,b){
        var first = a[n];
        var second = b[n];
        if(first === second) {
            return (a>b) - (a<b);
        }else {
            return (first>second) -(first<second);
        }
    })
    return strings;
}

//return strings.sort((s1, s2) => s1[n] === s2[n] ? s1.localeCompare(s2) : s1[n].localeCompare(s2[n]));
