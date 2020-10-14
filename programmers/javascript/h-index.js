function solution(citations) {
    var answer = 0;
    var temp = citations.sort((a,b)=>a-b)
    while(true) {
        var temp2 = temp.filter(v=>v>=answer).length
        if(temp2<answer){
            break;
        }
        answer++;
    }
    return answer-1;
}

//10.14리뷰
function solution(citations) {
    var answer = 0;
    //인용횟수배열을 오름차순 정렬. a-b 음수면 a<b,0이면 같다
    var temp = citations.sort((a,b)=>a-b);
    while(true){
        //인덱스값이 answer보다 크거나 같으면 answer+1
        var temp2 = temp.filter(v=>v>=answer).length
        if(temp2<answer){
            break;
        }
        answer++;

    }

    return answer;
}

//10.14리뷰(2)
//예) [1,7,0,1,6,4]
function solution(citations) {
    var answer = 0;
    //인용횟수배열을 내림차순 정렬. a-b 음수면 a<b,0이면 같다
    //[7,6,4,1,1,0]
    citations.sort((a,b)=>b-a);
    while(answer<citations.length){
        //인덱스값이 answer보다 작거나 같으면 answer+1
        if(citations[answer] <= answer)break;
        answer++;
    }
    return answer;
}

/*
0,7
1,6
2,4
3,1 -> 인덱스3에서 값1보다 커졌으므로 3리턴
4,1
5,0
*/