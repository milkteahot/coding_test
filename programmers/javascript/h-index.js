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