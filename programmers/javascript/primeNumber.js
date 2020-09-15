function solution(n) {
    var answer = 0;
    var arr = [];

    for(var i=2;i<=n;i++){
        arr[i]=i;
    }
    for(var i=2;i<=n;i++){
        if(arr[i]==0) continue;
        for(var j=i+i;j<=n;j+=i)
            arr[j]=0;
    }
    for(var i=0;i<arr.length;i++){
        if(arr[i] != 0) answer+=1;
    }
    return answer-2;
}

//set
function solution(n) {
    const s = new Set();
    for(let i=1; i<=n; i+=2){
        s.add(i);
    }
    s.delete(1);
    s.add(2);
    for(let j=3;j<Math.sqrt(n);j++){
        if(s.has(j)){
            for(let k=j*2; k<=n; k+=j){
                s.delete(k);
            }
        }
    }
    return s.size;
}

//review
function solution(n){
    var answer = 0;
    var cnt = 0;
    for(var a=2;a<=n;a++){
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