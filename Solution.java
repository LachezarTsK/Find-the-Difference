
public class Solution {

    public char findTheDifference(String original, String shuffled) {
      
        char ch = 0;
        final int size = original.length();
      
        for (int i = 0; i < size; i++) {
            ch ^= original.charAt(i) ^ shuffled.charAt(i);
        }
      
        return (char) (ch ^ shuffled.charAt(size));
    }
}
