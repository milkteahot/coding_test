//정수 n을 입력받아 n의 약수를 모두 더한 값을 리턴하는 함수, solution을 완성해주세요.
#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>

int solution(int n) {
    int answer = 0;
    for(int i=1;i<=n;i++) //약수의 합이므로 n을 포함해야 한다!
    {
        if(n%i==0) answer+=i; //약수는 나눴을 때 나머지가 0이다!
    }
    return answer;
}

