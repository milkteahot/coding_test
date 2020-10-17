//10.14
function solution(n, computers) {
    var answer = 0;
    //방문한 경우 담을 배열을 생성 
    var visited = new Array(n);
    //컴퓨터의 개수만큼 포문 돌면서
    for(var i=0;i<n;i++){
        //방문했다면 스킵
        if(visited[i]){
            continue;
            //처음 방문이라면 answer+1;
        } else {
            visit(i);
            answer++;
        }
    }
    
    function visit(i){
        //방문하지 않은 컴퓨터라면
        if(!visited[i]){
            //방문처리
            visited[i] = true;
            //연결정보가 담긴 2차원배열을 포문으로 돌면서 
            for(var j=0;j<computers[i].length;j++){
                //[i][i]는 항상 1이므로 제외, [i][j]==1연결된 경우 방문 visit 재귀호출
                if(i!==j && computers[i][j] === 1){
                    visit(j);
                }
            }
        }
        else{
            return;
        }
    }
    return answer;
}

//10.14 리뷰
function solution(n, computers){
    var answer = 0;
    var visited = new Array(n);
    for(var i=0;i<n.length;i++){
        
    }

    
    return answer;
}


//
function solution(n, computers) {
    var answer = 0;

    const visited = [];
    for(const computers of computers){
        visited.push(false);
    }
    function visit(index){
        visited[index] = true;
        for(let i=0;i<computers.length;i++){
            if(computers[index][i] === 1 && !visited[i]){
                visit(i);
            }
        }
    }
    for(let i=0;i<computers.length;i++){
        if(!visited[i]){
            visit(i);
            answer++;
        }
    }

    return answer;
}