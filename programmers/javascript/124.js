function solution(n) {
    var answer = '';
    if(n%3 != 0) {
        answer = n/3+(n%3)
    } else {
        answer = (n/3-1)+4
    }
    
    return answer;
}