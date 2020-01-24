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
    sum+=temp;
    
    if(x%sum==0) answer=1;
    else answer = false;
    return answer;
}