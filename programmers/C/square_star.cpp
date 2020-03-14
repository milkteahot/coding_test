#include <stdio.h>

int main(void) {
    int a;
    int b;
    scanf("%d %d", &a, &b);
    for(int i=0;i<a*b;i++){ //a*b 개수만큼 * 을 찍는다.
        printf("*");
        if((i+1)%a==0) //(i+1)%a 를 한 나머지가 0이면 -> 줄을 바꿔준다. (i+1)로 괄호 감싸주기!
            printf("\n");
    }
    return 0;
}