function solution(n) {
    var answer = 0;
    for(var i=0;i<=n;i++){
        if(n%i == 0){
            answer += i;
        }
    }
    return answer;
}

//
function solution(n, a=0, b=0) {
    return n<=a/2 ? b : solution(n, a+1, b+=n%a?0 : a);
}