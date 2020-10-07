//Greedy
var number = "1924"
var k = 2;

function solution(number, k) {
    var answer = [];
    for(var i=0;i<number.length;i++){
        var now = number[i]; //현재 인덱스값
        //이전 인덱스값이 현재 인덱스값보다 작으면 제거
        while(k>0 && answer[answer.length-1] < now) {
            answer.pop();
            k--;
        }
        //현재 인덱스값 추가
        answer.push(now);
    }
    //k개수가 남은 경우 처리
    answer.splice(answer.length-k,k);
    answer = answer.join('');
    // console.log(answer);
    return answer;
}

//리뷰 10.07
function solution(number, k){
    
}