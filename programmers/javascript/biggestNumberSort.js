//review
function solution(numbers) {
    var answer = numbers.map(v=>v+'')
                    .sort((a,b)=>(b+a)-(a+b))
                    .join('');
    
    return answer[0]==='0' ? '0' : answer;
}

//
function solution(numbers) {
    var answer = [];
    var overTen = _filter(numbers, function(number){
        return number >= 10
    })
    var underTen = _filter(numbers, function(number){
        return number < 10
    })
    var under = underTen.sort((a,b)=>b-a);
    var over = overTen.sort((a,b)=>b-a);
    var temp1 = under.join("");
    var temp2 = over.join("");
    return answer=String(temp1)+String(temp2);
}

function _filter(list, predi) {
    var new_list = [];
    for(var i=0;i<list.length;i++){
        if(predi(list[i])) {
            new_list.push(list[i]);
        }
    }
    return new_list;
}