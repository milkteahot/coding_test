import java.util.*;

public class Solution {
	public int[] solution(int []arr) {
        int[] answer = {};
        List<Integer> list = new ArrayList<>();
        int temp = 10;

        for(int num: arr) {
            if(temp!=num) 
                list.add(num);
            temp = num;
        }
        answer = new int[list.size()];
        for(int i=0;i<list.size();i++){
            answer[i] = list.get(i);
        }
        return answer;
	}
}