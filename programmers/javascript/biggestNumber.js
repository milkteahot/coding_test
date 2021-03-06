//Greedy
// var number = "1924"
// var k = 2;

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
    var answer = [];
    //포문으로 number길이만큼 반복하면서 현재값과 이전값 비교
    for(var i=0;i<number.length;i++){
        var now = number[i];
        //k횟수가 남아있고, 이전값이 현재값보다 작으면 => 이전값을 answer스택에서 제거
        while(k>0 && answer[answer.length-1] < now) {
            answer.pop()
            k--;
        }
        //answer스택에 현재 인덱스값 넣기
        answer.push(now);
    }
    //k횟수가 남은 경우 예)9999,2 -> answer길이-k 인덱스부터 k수만큼 제거
    answer.splice(answer.length - k, k);
    return answer = answer.join('');
}