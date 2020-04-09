import java.util.*;
class Solution {
  public long solution(long n) {
      String[] arr = (String.valueOf(n)).split(""); //valueOf 는 null 값으로 처리함
      Arrays.sort(arr, Collections.reverseOrder());
      String s = String.join("", arr);
      long answer = Long.parseLong(s); //long 을 사용해야 한다
      return answer;
  }
}

// String res = "";
// public int reverseInt(int n){
//     res = "";
//     Integer.toString(n).chars().sorted().forEach(c -> res = Character.valueOf((char)c) + res);
//     return Integer.parseInt(res);
// }