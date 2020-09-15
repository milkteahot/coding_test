//filter
function solution(arr, divisor) {
    var answer = arr.filter(v=>v%divisor == 0);
    return answer.length == 0 ? [-1] : answer.sort((a,b)=>a-b);
    
}

//map
function solution(arr, divisor) {
    var answer = [];
    arr.map((v)=> {
        v%divisor === 0 && answer.push(v);
    })
    return answer.length ? answer.sort((a,b)=>a-b) : [-1];
}

//before
function solution(arr, divisor) {
    var answer = [];

    for(var i=0; i<arr.length; i++){
        if(arr[i]%divisor == 0){
            answer.push(arr[i]);
        }
    }
    if(answer.length == 0) answer.push(-1);
    answer.sort(function(a,b){return a-b});

    return answer;
}