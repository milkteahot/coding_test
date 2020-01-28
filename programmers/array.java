class Solution {
  public int[] solution(long n) {
                String num = String.valueOf(n);
        String[] nums = num.split("");
        int[] answer = new int[nums.length];
        int count = 0;

        for(int i = nums.length-1; i >= 0; i-- ) {
            answer[count] = Integer.parseInt(nums[i]);
            count++;
        }

        return answer;

  }
}