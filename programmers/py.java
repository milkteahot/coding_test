class Solution {
    boolean solution(String s) {
        boolean answer = true;
        String[] t1 = s.split("");
        int p=0;
        int y=0;
        for(int i=0;i<t1.length;i++){
            if(t1[i] == "p" || t1[i] =="P") p++;
            if(t1[i] == "y" || t1[i] =="Y") y++;
        }
        if(p!=y) answer = false;
        else answer = true;

        return answer;
    }
}