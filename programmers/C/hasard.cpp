#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>

bool solution(int x) {
    bool answer = true;
    int temp=x;
    int sum=0;
    while(temp/10 !=0){
        sum += temp%10;
        temp/=10;
    }
    sum+=temp; //이걸 추가해야 한다! 안그러면 floating error 발생
    
    if(x%sum==0) answer=true;
    else answer = false;
    return answer;
}