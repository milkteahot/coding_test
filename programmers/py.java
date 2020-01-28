import java.util.*;
import java.io.*;
class Solution {
    boolean solution(String a) {
        boolean answer = true;
        char[] t1 = a.toCharArray();
        int p=0;
        int y=0;
        for(int i=0;i<t1.length;i++){
            if(t1[i] == 'p' || t1[i] =='P') 
                p++;
            else if(t1[i] == 'y' || t1[i] =='Y') 
                y++;
        }
        if(p == y) 
            answer = true;
        else answer = false;
        return answer;
    }
}