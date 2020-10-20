//입국심사
// https://programmers.co.kr/learn/courses/30/lessons/43238
function solution(n, times) {
    let start = 1;
    times.sort((a,b)=>a-b);
    let end = n*times[times.length-1];
    let answer = end;
    
    while(start <= end) {
        var middle = Math.floor((end+start)/2);
        var cnt = 0;
        times.forEach(v=>{
            cnt += Math.floor(middle/v);
            if(cnt >= n){
                answer = Math.min(answer, middle);
            }
        });
       if(cnt >= n){
            end = middle-1;
        }
        else {
            start = middle +1;
        }
    }
    return answer;
}