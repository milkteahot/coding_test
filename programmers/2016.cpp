#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>

char* solution(int a, int b) {
    char* answer = (char*)malloc(sizeof(char));
    int days = 0;
    int month;
    for(int i=1;i<a;i++){
        if(i==1 || i==3 || i==5|| i==7 || i==8 || i==10|| i==12) month=31;
        else if(i==2) month = 29;
        else month = 30;
        days += month;
    }
    days+=b;
    int final = days%7;
    switch(final) {
        case 1: answer = "FRI"; break;
        case 2: answer = "SAT"; break;
        case 3: answer = "SUN"; break;
        case 4: answer = "MON"; break;
        case 5: answer = "TUE"; break;
        case 6: answer = "WED"; break;
        default: answer = "THU"; break;
    }
    return answer;
}