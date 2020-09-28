function solution(numbers) {
    var answer  = '';
    var n = numbers.split('').sort((a,b)=>b-a)
    var cnt = 0;
    for(var a=2;a<=n.length;a++){
         cnt=0;
        for(var b=1;b<=a;b++){
            if(a%b==0)
            cnt++;
        }
        if(cnt==2)
        answer++;
    }
    return answer;
}