#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>

double solution(int arr[], size_t arr_len) {
    double answer = 0;
    scanf("%d", &arr);
    for(int i=0;i<arr_len;i++){
        answer += arr[i];
    } answer = answer/arr_len;
    return answer;
}