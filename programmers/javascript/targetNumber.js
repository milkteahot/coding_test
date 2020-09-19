function solution(numbers, target) {
    var answer = 0;
    dfs(0,0);
    return answer;
    
    function dfs(count, sum){
        
    }

    dfs(count+1, sum+numbers[count+1]);
    dfs(count+1, sum-numbers[count+1]);

}

