
using namespace std;

class Solution {
    
public:

    char findTheDifference(string original, string shuffled) {

        char ch = 0;
        const size_t size = original.length();

        for (int i = 0; i < size; i++) {
            ch ^= original[i] ^ shuffled[i];
        }

        return ch ^ shuffled[size];
    }
};
