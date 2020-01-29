class Solution {
    boolean solution(String s) {
        boolean answer = true;
        char[] t1 = s.toCharArray();
        int p=0, y=0;
        for(int i=0;i<t1.length;i++){
            if(t1[i] == 'p' || t1[i] =='P') p++;
            else if (t1[i] == 'y' || t1[i] =='Y') y++;
        }
        if(p == y) answer = true;
        else answer = false;
        return answer;
    }
}