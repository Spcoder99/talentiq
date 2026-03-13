

export const hintsStarterCodeData = {
    "two-sum": [
        {
            problemId: "two-sum",
            language: "javascript",
            hintLevel: 1,
            hintText: "Use an object to map numbers to indices. Check if the complement (target - current number) exists in it.",
            starterCode: `function twoSum(nums, target) {
  const map = {}; // TODO: store number -> index
  for (let i = 0; i < nums.length; i++) {
    // TODO: check if complement exists
  }
  return [];
}

// Example usage
console.log(twoSum([2,7,11,15], 9)); // [0,1]
console.log(twoSum([3,2,4], 6));     // [1,2]
console.log(twoSum([3,3], 6));       // [0,1]`,
            constraints: "2 ≤ nums.length ≤ 10⁴, -10⁹ ≤ nums[i] ≤ 10⁹, -10⁹ ≤ target ≤ 10⁹, Only one valid answer exists",
            createdAt: new Date()
        },
        {
            problemId: "two-sum",
            language: "javascript",
            hintLevel: 2,
            hintText: "For a one-pass solution, check for complement first, then store the current number in the map.",
            starterCode: `function twoSum(nums, target) {
  const map = {}; // TODO: store number -> index
  for (let i = 0; i < nums.length; i++) {
    // TODO: check if complement exists
  }
  return [];
}

// Example usage
console.log(twoSum([2,7,11,15], 9)); // [0,1]
console.log(twoSum([3,2,4], 6));     // [1,2]
console.log(twoSum([3,3], 6));       // [0,1]`,
            constraints: "2 ≤ nums.length ≤ 10⁴, -10⁹ ≤ nums[i] ≤ 10⁹, -10⁹ ≤ target ≤ 10⁹, Only one valid answer exists",
            createdAt: new Date()
        },

        // -----------------------
        // Python Hints
        // -----------------------
        {
            problemId: "two-sum",
            language: "python",
            hintLevel: 1,
            hintText: "Use a dictionary to map numbers to indices. Check if target - num exists in it.",
            starterCode: `def twoSum(nums, target):
    num_map = {}  # TODO: store number -> index
    for i, num in enumerate(nums):
        # TODO: check if complement exists
        pass
    return []

# Example usage
print(twoSum([2,7,11,15], 9))  # [0,1]
print(twoSum([3,2,4], 6))      # [1,2]
print(twoSum([3,3], 6))        # [0,1]`,
            constraints: "2 ≤ nums.length ≤ 10⁴, -10⁹ ≤ nums[i] ≤ 10⁹, -10⁹ ≤ target ≤ 10⁹, Only one valid answer exists",
            createdAt: new Date()
        },
        {
            problemId: "two-sum",
            language: "python",
            hintLevel: 2,
            hintText: "For a one-pass solution, check for complement first, then store the current number in the dictionary.",
            starterCode: `def twoSum(nums, target):
    num_map = {}  # TODO: store number -> index
    for i, num in enumerate(nums):
        # TODO: check if complement exists
        pass
    return []

# Example usage
print(twoSum([2,7,11,15], 9))  # [0,1]
print(twoSum([3,2,4], 6))      # [1,2]
print(twoSum([3,3], 6))        # [0,1]`,
            constraints: "2 ≤ nums.length ≤ 10⁴, -10⁹ ≤ nums[i] ≤ 10⁹, -10⁹ ≤ target ≤ 10⁹, Only one valid answer exists",
            createdAt: new Date()
        },

        // -----------------------
        // Java Hints
        // -----------------------
        {
            problemId: "two-sum",
            language: "java",
            hintLevel: 1,
            hintText: "Use a HashMap to map numbers to indices. Check if target - num exists in it.",
            starterCode: `import java.util.*;

class Solution {
    public static int[] twoSum(int[] nums, int target) {
        Map<Integer, Integer> map = new HashMap<>(); // TODO: store number -> index
        for (int i = 0; i < nums.length; i++) {
            // TODO: check for complement
        }
        return new int[0];
    }

    public static void main(String[] args) {
        System.out.println(Arrays.toString(twoSum(new int[]{2,7,11,15}, 9)));
        System.out.println(Arrays.toString(twoSum(new int[]{3,2,4}, 6)));
        System.out.println(Arrays.toString(twoSum(new int[]{3,3}, 6)));
    }
}`,
            constraints: "2 ≤ nums.length ≤ 10⁴, -10⁹ ≤ nums[i] ≤ 10⁹, -10⁹ ≤ target ≤ 10⁹, Only one valid answer exists",
            createdAt: new Date()
        },
        {
            problemId: "two-sum",
            language: "java",
            hintLevel: 2,
            hintText: "For a one-pass solution, check for complement first, then store the current number in the map.",
            starterCode: `import java.util.*;

class Solution {
    public static int[] twoSum(int[] nums, int target) {
        Map<Integer, Integer> map = new HashMap<>(); // TODO: store number -> index
        for (int i = 0; i < nums.length; i++) {
            // TODO: check for complement
        }
        return new int[0];
    }

    public static void main(String[] args) {
        System.out.println(Arrays.toString(twoSum(new int[]{2,7,11,15}, 9)));
        System.out.println(Arrays.toString(twoSum(new int[]{3,2,4}, 6)));
        System.out.println(Arrays.toString(twoSum(new int[]{3,3}, 6)));
    }
}`,
            constraints: "2 ≤ nums.length ≤ 10⁴, -10⁹ ≤ nums[i] ≤ 10⁹, -10⁹ ≤ target ≤ 10⁹, Only one valid answer exists",
            createdAt: new Date()
        }
    ],

    "reverse-string": [

        {
            problemId: "reverse-string",
            language: "javascript",
            hintLevel: 1,
            hintText: "Use two pointers: one at the start and one at the end of the array, and swap elements until they meet.",
            starterCode: `function reverseString(s) {
  // TODO: Initialize two pointers at start and end
  // TODO: Swap elements until pointers meet
}

// Test cases
let test1 = ["h","e","l","l","o"];
reverseString(test1);
console.log(test1); // Expected: ["o","l","l","e","h"]

let test2 = ["H","a","n","n","a","h"];
reverseString(test2);
console.log(test2); // Expected: ["h","a","n","n","a","H"]`
            ,
            constraints: "1 ≤ s.length ≤ 10⁵, s[i] is a printable ascii character",
            createdAt: new Date()
        },
        {
            problemId: "reverse-string",
            language: "javascript",
            hintLevel: 2,
            hintText: "Perform swaps in-place without using extra memory; move pointers toward the center until the array is reversed.",
            starterCode: `function reverseString(s) {
  // TODO: Initialize two pointers at start and end
  // TODO: Swap elements until pointers meet
}

// Test cases
let test1 = ["h","e","l","l","o"];
reverseString(test1);
console.log(test1); // Expected: ["o","l","l","e","h"]

let test2 = ["H","a","n","n","a","h"];
reverseString(test2);
console.log(test2); // Expected: ["h","a","n","n","a","H"]`
            ,
            constraints: "1 ≤ s.length ≤ 10⁵, s[i] is a printable ascii character",
            createdAt: new Date()
        },

        // -----------------------
        // Python Hints
        // -----------------------
        {
            problemId: "reverse-string",
            language: "python",
            hintLevel: 1,
            hintText: "Use two pointers: left at 0 and right at len(s)-1, swap s[left] and s[right] until they meet.",
            starterCode: `def reverseString(s):
    # TODO: Initialize two pointers
    # TODO: Swap elements in-place until pointers meet
    pass

# Test cases
test1 = ["h","e","l","l","o"]
reverseString(test1)
print(test1)  # Expected: ["o","l","l","e","h"]

test2 = ["H","a","n","n","a","h"]
reverseString(test2)
print(test2)  # Expected: ["h","a","n","n","a","H"]`
            ,
            constraints: "1 ≤ s.length ≤ 10⁵, s[i] is a printable ascii character",
            createdAt: new Date()
        },
        {
            problemId: "reverse-string",
            language: "python",
            hintLevel: 2,
            hintText: "Move the pointers toward the center and swap elements in-place to reverse the array without extra memory.",
            starterCode: `def reverseString(s):
    # TODO: Initialize two pointers
    # TODO: Swap elements in-place until pointers meet
    pass

# Test cases
test1 = ["h","e","l","l","o"]
reverseString(test1)
print(test1)  # Expected: ["o","l","l","e","h"]

test2 = ["H","a","n","n","a","h"]
reverseString(test2)
print(test2)  # Expected: ["h","a","n","n","a","H"]`
            ,
            constraints: "1 ≤ s.length ≤ 10⁵, s[i] is a printable ascii character",
            createdAt: new Date()
        },

        // -----------------------
        // Java Hints
        // -----------------------
        {
            problemId: "reverse-string",
            language: "java",
            hintLevel: 1,
            hintText: "Use two pointers: start at 0 and end at s.length-1, swap elements until pointers meet.",
            starterCode: `import java.util.*;

class Solution {
    public static void reverseString(char[] s) {
        // TODO: Initialize two pointers
        // TODO: Swap elements in-place until pointers meet
    }
    
    public static void main(String[] args) {
        char[] test1 = {'h','e','l','l','o'};
        reverseString(test1);
        System.out.println(Arrays.toString(test1)); // Expected: [o, l, l, e, h]
        
        char[] test2 = {'H','a','n','n','a','h'};
        reverseString(test2);
        System.out.println(Arrays.toString(test2)); // Expected: [h, a, n, n, a, H]
    }
}`
            ,
            constraints: "1 ≤ s.length ≤ 10⁵, s[i] is a printable ascii character",
            createdAt: new Date()
        },
        {
            problemId: "reverse-string",
            language: "java",
            hintLevel: 2,
            hintText: "Perform swaps in-place moving pointers toward the center; do not use extra memory.",
            starterCode: `import java.util.*;

class Solution {
    public static void reverseString(char[] s) {
        // TODO: Initialize two pointers
        // TODO: Swap elements in-place until pointers meet
    }
    
    public static void main(String[] args) {
        char[] test1 = {'h','e','l','l','o'};
        reverseString(test1);
        System.out.println(Arrays.toString(test1)); // Expected: [o, l, l, e, h]
        
        char[] test2 = {'H','a','n','n','a','h'};
        reverseString(test2);
        System.out.println(Arrays.toString(test2)); // Expected: [h, a, n, n, a, H]
    }
}`
            ,
            constraints: "1 ≤ s.length ≤ 10⁵, s[i] is a printable ascii character",
            createdAt: new Date()
        }

    ],

    "valid-palindrome": [
        {
            problemId: "valid-palindrome",
            language: "javascript",
            hintLevel: 1,
            hintText: "Normalize the string by converting to lowercase and removing non-alphanumeric characters, then check if it reads the same forward and backward.",
            starterCode: `function isPalindrome(s) {
  // TODO: Convert to lowercase and remove non-alphanumeric chars
  // TODO: Use two pointers to check palindrome
}

// Test cases
console.log(isPalindrome("A man, a plan, a canal: Panama")); // Expected: true
console.log(isPalindrome("race a car")); // Expected: false
console.log(isPalindrome(" ")); // Expected: true`,
            constraints: "1 ≤ s.length ≤ 2 * 10⁵, s consists only of printable ASCII characters",
            createdAt: new Date()
        },
        {
            problemId: "valid-palindrome",
            language: "javascript",
            hintLevel: 2,
            hintText: "Use two pointers: start at beginning and end of normalized string, move inward, comparing characters until mismatch or pointers cross.",
            starterCode: `function isPalindrome(s) {
  // TODO: Convert to lowercase and remove non-alphanumeric chars
  // TODO: Use two pointers to check palindrome
}

// Test cases
console.log(isPalindrome("A man, a plan, a canal: Panama")); // Expected: true
console.log(isPalindrome("race a car")); // Expected: false
console.log(isPalindrome(" ")); // Expected: true`,
            constraints: "1 ≤ s.length ≤ 2 * 10⁵, s consists only of printable ASCII characters",
            createdAt: new Date()
        },

        // -----------------------
        // Python Hints
        // -----------------------
        {
            problemId: "valid-palindrome",
            language: "python",
            hintLevel: 1,
            hintText: "Normalize the string by converting to lowercase and keeping only alphanumeric characters, then compare with its reverse.",
            starterCode: `def isPalindrome(s):
    # TODO: Convert to lowercase and remove non-alphanumeric chars
    # TODO: Use two pointers to check palindrome
    pass

# Test cases
print(isPalindrome("A man, a plan, a canal: Panama"))  # Expected: True
print(isPalindrome("race a car"))  # Expected: False
print(isPalindrome(" "))  # Expected: True`,
            constraints: "1 ≤ s.length ≤ 2 * 10⁵, s consists only of printable ASCII characters",
            createdAt: new Date()
        },
        {
            problemId: "valid-palindrome",
            language: "python",
            hintLevel: 2,
            hintText: "Use two pointers from start and end of the normalized string, compare each character moving inward.",
            starterCode: `def isPalindrome(s):
    # TODO: Convert to lowercase and remove non-alphanumeric chars
    # TODO: Use two pointers to check palindrome
    pass

# Test cases
print(isPalindrome("A man, a plan, a canal: Panama"))  # Expected: True
print(isPalindrome("race a car"))  # Expected: False
print(isPalindrome(" "))  # Expected: True`,
            constraints: "1 ≤ s.length ≤ 2 * 10⁵, s consists only of printable ASCII characters",
            createdAt: new Date()
        },

        // -----------------------
        // Java Hints
        // -----------------------
        {
            problemId: "valid-palindrome",
            language: "java",
            hintLevel: 1,
            hintText: "Normalize the string: lowercase and remove non-alphanumeric characters, then check if it reads the same forward and backward.",
            starterCode: `class Solution {
    public static boolean isPalindrome(String s) {
        // TODO: Convert to lowercase and remove non-alphanumeric chars
        // TODO: Use two pointers to check palindrome
        return false;
    }
    
    public static void main(String[] args) {
        System.out.println(isPalindrome("A man, a plan, a canal: Panama")); // Expected: true
        System.out.println(isPalindrome("race a car")); // Expected: false
        System.out.println(isPalindrome(" ")); // Expected: true
    }
}`,
            constraints: "1 ≤ s.length ≤ 2 * 10⁵, s consists only of printable ASCII characters",
            createdAt: new Date()
        },
        {
            problemId: "valid-palindrome",
            language: "java",
            hintLevel: 2,
            hintText: "Use two pointers at start and end of the normalized string; move inward comparing characters until mismatch or pointers cross.",
            starterCode: `class Solution {
    public static boolean isPalindrome(String s) {
        // TODO: Convert to lowercase and remove non-alphanumeric chars
        // TODO: Use two pointers to check palindrome
        return false;
    }
    
    public static void main(String[] args) {
        System.out.println(isPalindrome("A man, a plan, a canal: Panama")); // Expected: true
        System.out.println(isPalindrome("race a car")); // Expected: false
        System.out.println(isPalindrome(" ")); // Expected: true
    }
}`,
            constraints: "1 ≤ s.length ≤ 2 * 10⁵, s consists only of printable ASCII characters",
            createdAt: new Date()
        }

    ],



    "maximum-subarray": [
        {
            problemId: "maximum-subarray",
            language: "javascript",
            hintLevel: 1,
            hintText: "Use a variable to keep track of the current subarray sum. If it becomes negative, reset it to zero and continue.",
            starterCode: `function maxSubArray(nums) {
  // TODO: Initialize currentSum and maxSum
  // TODO: Iterate over nums and update sums
}

// Test cases
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])); // Expected: 6
console.log(maxSubArray([1])); // Expected: 1
console.log(maxSubArray([5,4,-1,7,8])); // Expected: 23`,
            constraints: "1 ≤ nums.length ≤ 10⁵, -10⁴ ≤ nums[i] ≤ 10⁴",
            createdAt: new Date()
        },
        {
            problemId: "maximum-subarray",
            language: "javascript",
            hintLevel: 2,
            hintText: "Use Kadane's algorithm: iterate through the array, updating the maximum sum at each step by taking the max of currentSum + num or num itself.",
            starterCode: `function maxSubArray(nums) {
  // TODO: Initialize currentSum and maxSum
  // TODO: Iterate over nums and update sums
}

// Test cases
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])); // Expected: 6
console.log(maxSubArray([1])); // Expected: 1
console.log(maxSubArray([5,4,-1,7,8])); // Expected: 23`,
            constraints: "1 ≤ nums.length ≤ 10⁵, -10⁴ ≤ nums[i] ≤ 10⁴",
            createdAt: new Date()
        },

        // -----------------------
        // Python Hints
        // -----------------------
        {
            problemId: "maximum-subarray",
            language: "python",
            hintLevel: 1,
            hintText: "Keep track of current subarray sum; reset to zero if negative, and update max sum along the way.",
            starterCode: `def maxSubArray(nums):
    # TODO: Initialize current_sum and max_sum
    # TODO: Iterate over nums and update sums
    pass

# Test cases
print(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))  # Expected: 6
print(maxSubArray([1]))  # Expected: 1
print(maxSubArray([5,4,-1,7,8]))  # Expected: 23`,
            constraints: "1 ≤ nums.length ≤ 10⁵, -10⁴ ≤ nums[i] ≤ 10⁴",
            createdAt: new Date()
        },
        {
            problemId: "maximum-subarray",
            language: "python",
            hintLevel: 2,
            hintText: "Use Kadane's algorithm: at each index, update current_sum = max(num, current_sum + num) and track max_sum.",
            starterCode: `def maxSubArray(nums):
    # TODO: Initialize current_sum and max_sum
    # TODO: Iterate over nums and update sums
    pass

# Test cases
print(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))  # Expected: 6
print(maxSubArray([1]))  # Expected: 1
print(maxSubArray([5,4,-1,7,8]))  # Expected: 23`,
            constraints: "1 ≤ nums.length ≤ 10⁵, -10⁴ ≤ nums[i] ≤ 10⁴",
            createdAt: new Date()
        },

        // -----------------------
        // Java Hints
        // -----------------------
        {
            problemId: "maximum-subarray",
            language: "java",
            hintLevel: 1,
            hintText: "Keep track of current subarray sum; reset to zero if negative, and update maximum sum along the way.",
            starterCode: `class Solution {
    public static int maxSubArray(int[] nums) {
        // TODO: Initialize currentSum and maxSum
        // TODO: Iterate through nums and update sums
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(maxSubArray(new int[]{-2,1,-3,4,-1,2,1,-5,4})); // Expected: 6
        System.out.println(maxSubArray(new int[]{1})); // Expected: 1
        System.out.println(maxSubArray(new int[]{5,4,-1,7,8})); // Expected: 23
    }
}`,
            constraints: "1 ≤ nums.length ≤ 10⁵, -10⁴ ≤ nums[i] ≤ 10⁴",
            createdAt: new Date()
        },
        {
            problemId: "maximum-subarray",
            language: "java",
            hintLevel: 2,
            hintText: "Use Kadane's algorithm: update currentSum = max(num, currentSum + num) at each step and keep track of maxSum.",
            starterCode: `class Solution {
    public static int maxSubArray(int[] nums) {
        // TODO: Initialize currentSum and maxSum
        // TODO: Iterate through nums and update sums
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(maxSubArray(new int[]{-2,1,-3,4,-1,2,1,-5,4})); // Expected: 6
        System.out.println(maxSubArray(new int[]{1})); // Expected: 1
        System.out.println(maxSubArray(new int[]{5,4,-1,7,8})); // Expected: 23
    }
}`,
            constraints: "1 ≤ nums.length ≤ 10⁵, -10⁴ ≤ nums[i] ≤ 10⁴",
            createdAt: new Date()
        }
    ],

    "container-with-most-water": [
        {
            problemId: "container-with-most-water",
            language: "javascript",
            hintLevel: 1,
            hintText: "Use two pointers, one at the start and one at the end of the array. Compute area using min height * width, then move the pointer with smaller height.",
            starterCode: `function maxArea(height) {
  // TODO: Initialize two pointers at start and end
  // TODO: Compute area and move smaller height pointer
}

// Test cases
console.log(maxArea([1,8,6,2,5,4,8,3,7])); // Expected: 49
console.log(maxArea([1,1])); // Expected: 1`,
            constraints: "n == height.length, 2 ≤ n ≤ 10⁵, 0 ≤ height[i] ≤ 10⁴",
            createdAt: new Date()
        },
        {
            problemId: "container-with-most-water",
            language: "javascript",
            hintLevel: 2,
            hintText: "Use the two-pointer approach to check all possible container widths in one pass for O(n) time complexity.",
            starterCode: `function maxArea(height) {
  // TODO: Initialize two pointers at start and end
  // TODO: Compute area and move smaller height pointer
}

// Test cases
console.log(maxArea([1,8,6,2,5,4,8,3,7])); // Expected: 49
console.log(maxArea([1,1])); // Expected: 1`,
            constraints: "n == height.length, 2 ≤ n ≤ 10⁵, 0 ≤ height[i] ≤ 10⁴",
            createdAt: new Date()
        },

        // -----------------------
        // Python Hints
        // -----------------------
        {
            problemId: "container-with-most-water",
            language: "python",
            hintLevel: 1,
            hintText: "Use two pointers at the start and end of the array, calculate area using min(height[left], height[right]) * width, then move the smaller height pointer.",
            starterCode: `def maxArea(height):
    # TODO: Initialize two pointers at start and end
    # TODO: Compute area and move smaller height pointer
    pass

# Test cases
print(maxArea([1,8,6,2,5,4,8,3,7]))  # Expected: 49
print(maxArea([1,1]))  # Expected: 1`,
            constraints: "n == height.length, 2 ≤ n ≤ 10⁵, 0 ≤ height[i] ≤ 10⁴",
            createdAt: new Date()
        },
        {
            problemId: "container-with-most-water",
            language: "python",
            hintLevel: 2,
            hintText: "Two-pointer technique allows checking all possible container areas in one pass with O(n) complexity.",
            starterCode: `def maxArea(height):
    # TODO: Initialize two pointers at start and end
    # TODO: Compute area and move smaller height pointer
    pass

# Test cases
print(maxArea([1,8,6,2,5,4,8,3,7]))  # Expected: 49
print(maxArea([1,1]))  # Expected: 1`,
            constraints: "n == height.length, 2 ≤ n ≤ 10⁵, 0 ≤ height[i] ≤ 10⁴",
            createdAt: new Date()
        },

        // -----------------------
        // Java Hints
        // -----------------------
        {
            problemId: "container-with-most-water",
            language: "java",
            hintLevel: 1,
            hintText: "Use two pointers: start and end of array. Compute area = min(height[left], height[right]) * width, then move the pointer with smaller height.",
            starterCode: `class Solution {
    public static int maxArea(int[] height) {
        // TODO: Initialize two pointers at start and end
        // TODO: Compute area and move smaller height pointer
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(maxArea(new int[]{1,8,6,2,5,4,8,3,7})); // Expected: 49
        System.out.println(maxArea(new int[]{1,1})); // Expected: 1
    }
}`,
            constraints: "n == height.length, 2 ≤ n ≤ 10⁵, 0 ≤ height[i] ≤ 10⁴",
            createdAt: new Date()
        },
        {
            problemId: "container-with-most-water",
            language: "java",
            hintLevel: 2,
            hintText: "Use two-pointer technique to efficiently compute maximum area in one pass (O(n) time).",
            starterCode: `class Solution {
    public static int maxArea(int[] height) {
        // TODO: Initialize two pointers at start and end
        // TODO: Compute area and move smaller height pointer
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(maxArea(new int[]{1,8,6,2,5,4,8,3,7})); // Expected: 49
        System.out.println(System.out.println(maxArea(new int[]{1,1}))); // Expected: 1
    }
}`,
            constraints: "n == height.length, 2 ≤ n ≤ 10⁵, 0 ≤ height[i] ≤ 10⁴",
            createdAt: new Date()
        }
    ],
    "product-of-array-except-self": [

        {
            problemId: "product-of-array-except-self",
            language: "javascript",
            hintLevel: 1,
            hintText: "Compute prefix products from the left and suffix products from the right. Each index result is prefix * suffix.",
            starterCode: `function productExceptSelf(nums) {
  // TODO: Create result array
  // TODO: Compute prefix products
  // TODO: Compute suffix products and multiply
}

// Test cases
console.log(productExceptSelf([1,2,3,4])); // Expected: [24,12,8,6]
console.log(productExceptSelf([-1,1,0,-3,3])); // Expected: [0,0,9,0,0]
console.log(productExceptSelf([2,3,4])); // Expected: [12,8,6]`,
            constraints: "2 ≤ nums.length ≤ 10⁵, -30 ≤ nums[i] ≤ 30, Product of any prefix or suffix fits in 32-bit integer",
            createdAt: new Date()
        },

        {
            problemId: "product-of-array-except-self",
            language: "javascript",
            hintLevel: 2,
            hintText: "Avoid division by computing prefix products in one pass and suffix products in another pass, multiplying them into the result.",
            starterCode: `function productExceptSelf(nums) {
  // TODO: Create result array
  // TODO: Compute prefix products
  // TODO: Compute suffix products and multiply
}

// Test cases
console.log(productExceptSelf([1,2,3,4])); // Expected: [24,12,8,6]
console.log(productExceptSelf([-1,1,0,-3,3])); // Expected: [0,0,9,0,0]
console.log(productExceptSelf([2,3,4])); // Expected: [12,8,6]`,
            constraints: "2 ≤ nums.length ≤ 10⁵, -30 ≤ nums[i] ≤ 30, Product of any prefix or suffix fits in 32-bit integer",
            createdAt: new Date()
        },

        {
            problemId: "product-of-array-except-self",
            language: "python",
            hintLevel: 1,
            hintText: "Compute prefix products from the left and suffix products from the right. Multiply them for each index.",
            starterCode: `def productExceptSelf(nums):
    # TODO: Create result array
    # TODO: Compute prefix products
    # TODO: Compute suffix products and multiply
    pass

# Test cases
print(productExceptSelf([1,2,3,4]))  # Expected: [24,12,8,6]
print(productExceptSelf([-1,1,0,-3,3]))  # Expected: [0,0,9,0,0]
print(productExceptSelf([2,3,4]))  # Expected: [12,8,6]`,
            constraints: "2 ≤ nums.length ≤ 10⁵, -30 ≤ nums[i] ≤ 30, Product of any prefix or suffix fits in 32-bit integer",
            createdAt: new Date()
        },

        {
            problemId: "product-of-array-except-self",
            language: "python",
            hintLevel: 2,
            hintText: "Use two passes: first build prefix products, then multiply suffix products while iterating backward.",
            starterCode: `def productExceptSelf(nums):
    # TODO: Create result array
    # TODO: Compute prefix products
    # TODO: Compute suffix products and multiply
    pass

# Test cases
print(productExceptSelf([1,2,3,4]))  # Expected: [24,12,8,6]
print(productExceptSelf([-1,1,0,-3,3]))  # Expected: [0,0,9,0,0]
print(productExceptSelf([2,3,4]))  # Expected: [12,8,6]`,
            constraints: "2 ≤ nums.length ≤ 10⁵, -30 ≤ nums[i] ≤ 30, Product of any prefix or suffix fits in 32-bit integer",
            createdAt: new Date()
        },

        {
            problemId: "product-of-array-except-self",
            language: "java",
            hintLevel: 1,
            hintText: "Compute prefix products from the left and suffix products from the right. Multiply them for each index.",
            starterCode: `import java.util.*;

class Solution {
    public static int[] productExceptSelf(int[] nums) {
        // TODO: Create result array
        // TODO: Compute prefix products
        // TODO: Compute suffix products and multiply
        return new int[0];
    }

    public static void main(String[] args) {
        System.out.println(Arrays.toString(productExceptSelf(new int[]{1,2,3,4}))); // Expected: [24,12,8,6]
        System.out.println(Arrays.toString(productExceptSelf(new int[]{-1,1,0,-3,3}))); // Expected: [0,0,9,0,0]
        System.out.println(Arrays.toString(productExceptSelf(new int[]{2,3,4}))); // Expected: [12,8,6]
    }
}`,
            constraints: "2 ≤ nums.length ≤ 10⁵, -30 ≤ nums[i] ≤ 30, Product of any prefix or suffix fits in 32-bit integer",
            createdAt: new Date()
        },

        {
            problemId: "product-of-array-except-self",
            language: "java",
            hintLevel: 2,
            hintText: "Use two passes: first compute prefix products, then multiply suffix products while iterating from the end.",
            starterCode: `import java.util.*;

class Solution {
    public static int[] productExceptSelf(int[] nums) {
        // TODO: Create result array
        // TODO: Compute prefix products
        // TODO: Compute suffix products and multiply
        return new int[0];
    }

    public static void main(String[] args) {
        System.out.println(Arrays.toString(productExceptSelf(new int[]{1,2,3,4}))); // Expected: [24,12,8,6]
        System.out.println(Arrays.toString(productExceptSelf(new int[]{-1,1,0,-3,3}))); // Expected: [0,0,9,0,0]
        System.out.println(Arrays.toString(productExceptSelf(new int[]{2,3,4}))); // Expected: [12,8,6]
    }
}`,
            constraints: "2 ≤ nums.length ≤ 10⁵, -30 ≤ nums[i] ≤ 30, Product of any prefix or suffix fits in 32-bit integer",
            createdAt: new Date()
        }

    ],

    "valid-parentheses": [

  {
    problemId: "valid-parentheses",
    language: "javascript",
    hintLevel: 1,
    hintText: "Use a stack to keep track of opening brackets. Push opening brackets and check matches when encountering closing ones.",
    starterCode: `function isValid(s) {
  // TODO: Use a stack to track opening brackets
  // TODO: Check matching bracket when encountering closing bracket
}

// Test cases
console.log(isValid("()[]")); // Expected: true
console.log(isValid("(]")); // Expected: false
console.log(isValid("{[]}")); // Expected: true`,
    constraints: "1 ≤ s.length ≤ 10⁴, s consists of parentheses only, Valid characters are ()[]{}",
    createdAt: new Date()
  },

  {
    problemId: "valid-parentheses",
    language: "javascript",
    hintLevel: 2,
    hintText: "Map closing brackets to their corresponding opening brackets and verify using a stack while iterating through the string.",
    starterCode: `function isValid(s) {
  // TODO: Use a stack to track opening brackets
  // TODO: Check matching bracket when encountering closing bracket
}

// Test cases
console.log(isValid("()[]")); // Expected: true
console.log(isValid("(]")); // Expected: false
console.log(isValid("{[]}")); // Expected: true`,
    constraints: "1 ≤ s.length ≤ 10⁴, s consists of parentheses only, Valid characters are ()[]{}",
    createdAt: new Date()
  },

  {
    problemId: "valid-parentheses",
    language: "python",
    hintLevel: 1,
    hintText: "Use a stack to store opening brackets. When a closing bracket appears, check if it matches the last opening bracket.",
    starterCode: `def isValid(s):
    # TODO: Use a stack to track opening brackets
    # TODO: Check matching bracket when encountering closing bracket
    pass

print(isValid("()[]"))  # Expected: True
print(isValid("(]"))  # Expected: False
print(isValid("{[]}"))  # Expected: True`,
    constraints: "1 ≤ s.length ≤ 10⁴, s consists of parentheses only, Valid characters are ()[]{}",
    createdAt: new Date()
  },

  {
    problemId: "valid-parentheses",
    language: "python",
    hintLevel: 2,
    hintText: "Create a mapping of closing to opening brackets and verify each closing bracket against the stack top.",
    starterCode: `def isValid(s):
    # TODO: Use a stack to track opening brackets
    # TODO: Check matching bracket when encountering closing bracket
    pass

print(isValid("()[]"))  # Expected: True
print(isValid("(]"))  # Expected: False
print(isValid("{[]}"))  # Expected: True`,
    constraints: "1 ≤ s.length ≤ 10⁴, s consists of parentheses only, Valid characters are ()[]{}",
    createdAt: new Date()
  },

  {
    problemId: "valid-parentheses",
    language: "java",
    hintLevel: 1,
    hintText: "Use a stack to push opening brackets. When encountering a closing bracket, check if it matches the top of the stack.",
    starterCode: `class Solution {
    public static boolean isValid(String s) {
        // TODO: Use a stack to track opening brackets
        // TODO: Check matching bracket when encountering closing bracket
        return false;
    }

    public static void main(String[] args) {
        System.out.println(isValid("()[]")); // Expected: true
        System.out.println(isValid("(]")); // Expected: false
        System.out.println(isValid("{[]}")); // Expected: true
    }
}`,
    constraints: "1 ≤ s.length ≤ 10⁴, s consists of parentheses only, Valid characters are ()[]{}",
    createdAt: new Date()
  },

  {
    problemId: "valid-parentheses",
    language: "java",
    hintLevel: 2,
    hintText: "Use a HashMap to map closing brackets to opening brackets and verify them using a stack.",
    starterCode: `class Solution {
    public static boolean isValid(String s) {
        // TODO: Use a stack to track opening brackets
        // TODO: Check matching bracket when encountering closing bracket
        return false;
    }

    public static void main(String[] args) {
        System.out.println(isValid("()[]")); // Expected: true
        System.out.println(isValid("(]")); // Expected: false
        System.out.println(isValid("{[]}")); // Expected: true
    }
}`,
    constraints: "1 ≤ s.length ≤ 10⁴, s consists of parentheses only, Valid characters are ()[]{}",
    createdAt: new Date()
  }

],

"binary-search": [

{
    problemId: "binary-search",
    language: "javascript",
    hintLevel: 1,
    hintText: "Use two pointers left and right to represent the search range. Check the middle element each iteration.",
    starterCode: `function search(nums, target) {
  // TODO: Initialize left and right pointers
  // TODO: Compute middle index and compare with target
}

console.log(search([-1,0,3,5,9,12],9)); // Expected: 4
console.log(search([-1,0,3,5,9,12],2)); // Expected: -1
console.log(search([1,2,3,4,5],4)); // Expected: 3`,
    constraints: "1 ≤ nums.length ≤ 10⁴, -10⁴ < nums[i], target < 10⁴, All integers in nums are unique",
    createdAt: new Date()
},

{
    problemId: "binary-search",
    language: "javascript",
    hintLevel: 2,
    hintText: "Calculate mid = Math.floor((left + right) / 2). If nums[mid] equals target return index, otherwise adjust search range.",
    starterCode: `function search(nums, target) {
  // TODO: Initialize left and right pointers
  // TODO: Compute middle index and compare with target
}

console.log(search([-1,0,3,5,9,12],9)); // Expected: 4
console.log(search([-1,0,3,5,9,12],2)); // Expected: -1
console.log(search([1,2,3,4,5],4)); // Expected: 3`,
    constraints: "1 ≤ nums.length ≤ 10⁴, -10⁴ < nums[i], target < 10⁴, All integers in nums are unique",
    createdAt: new Date()
},

{
    problemId: "binary-search",
    language: "python",
    hintLevel: 1,
    hintText: "Use two pointers left and right to define the search range. Check the middle element in each step.",
    starterCode: `def search(nums, target):
    # TODO: Initialize left and right pointers
    # TODO: Compute middle index and compare with target
    pass

print(search([-1,0,3,5,9,12],9)) # Expected: 4
print(search([-1,0,3,5,9,12],2)) # Expected: -1
print(search([1,2,3,4,5],4)) # Expected: 3`,
    constraints: "1 ≤ nums.length ≤ 10⁴, -10⁴ < nums[i], target < 10⁴, All integers in nums are unique",
    createdAt: new Date()
},

{
    problemId: "binary-search",
    language: "python",
    hintLevel: 2,
    hintText: "Find mid = (left + right) // 2 and compare nums[mid] with target to decide which half to search next.",
    starterCode: `def search(nums, target):
    # TODO: Initialize left and right pointers
    # TODO: Compute middle index and compare with target
    pass

print(search([-1,0,3,5,9,12],9)) # Expected: 4
print(search([-1,0,3,5,9,12],2)) # Expected: -1
print(search([1,2,3,4,5],4)) # Expected: 3`,
    constraints: "1 ≤ nums.length ≤ 10⁴, -10⁴ < nums[i], target < 10⁴, All integers in nums are unique",
    createdAt: new Date()
},

{
    problemId: "binary-search",
    language: "java",
    hintLevel: 1,
    hintText: "Use two pointers left and right representing the search range. Check the middle element each iteration.",
    starterCode: `class Solution {
    public static int search(int[] nums, int target) {
        // TODO: Initialize left and right pointers
        // TODO: Compute middle index and compare with target
        return -1;
    }

    public static void main(String[] args) {
        System.out.println(search(new int[]{-1,0,3,5,9,12},9)); // Expected: 4
        System.out.println(search(new int[]{-1,0,3,5,9,12},2)); // Expected: -1
        System.out.println(search(new int[]{1,2,3,4,5},4)); // Expected: 3
    }
}`,
    constraints: "1 ≤ nums.length ≤ 10⁴, -10⁴ < nums[i], target < 10⁴, All integers in nums are unique",
    createdAt: new Date()
},

{
    problemId: "binary-search",
    language: "java",
    hintLevel: 2,
    hintText: "Calculate mid index and compare nums[mid] with target. Adjust left or right pointer depending on comparison.",
    starterCode: `class Solution {
    public static int search(int[] nums, int target) {
        // TODO: Initialize left and right pointers
        // TODO: Compute middle index and compare with target
        return -1;
    }

    public static void main(String[] args) {
        System.out.println(search(new int[]{-1,0,3,5,9,12},9)); // Expected: 4
        System.out.println(search(new int[]{-1,0,3,5,9,12},2)); // Expected: -1
        System.out.println(search(new int[]{1,2,3,4,5},4)); // Expected: 3
    }
}`,
    constraints: "1 ≤ nums.length ≤ 10⁴, -10⁴ < nums[i], target < 10⁴, All integers in nums are unique",
    createdAt: new Date()
}

],
"longest-substring-without-repeating": [

{
    problemId: "longest-substring-without-repeating",
    language: "javascript",
    hintLevel: 1,
    hintText: "Use a sliding window with two pointers. Expand the window with the right pointer and track characters using a set.",
    starterCode: `function lengthOfLongestSubstring(s) {
  // TODO: Use sliding window with two pointers
  // TODO: Track characters inside the window
}

// Test cases
console.log(lengthOfLongestSubstring("abcabcbb")); // Expected: 3
console.log(lengthOfLongestSubstring("bbbbb")); // Expected: 1
console.log(lengthOfLongestSubstring("pwwkew")); // Expected: 3`,
    constraints: "0 ≤ s.length ≤ 5 * 10⁴, s consists of English letters, digits, symbols and spaces, Substring must contain unique characters",
    createdAt: new Date()
},

{
    problemId: "longest-substring-without-repeating",
    language: "javascript",
    hintLevel: 2,
    hintText: "When a duplicate character appears, move the left pointer until the substring contains only unique characters again.",
    starterCode: `function lengthOfLongestSubstring(s) {
  // TODO: Use sliding window with two pointers
  // TODO: Track characters inside the window
}

// Test cases
console.log(lengthOfLongestSubstring("abcabcbb")); // Expected: 3
console.log(lengthOfLongestSubstring("bbbbb")); // Expected: 1
console.log(lengthOfLongestSubstring("pwwkew")); // Expected: 3`,
    constraints: "0 ≤ s.length ≤ 5 * 10⁴, s consists of English letters, digits, symbols and spaces, Substring must contain unique characters",
    createdAt: new Date()
},

{
    problemId: "longest-substring-without-repeating",
    language: "python",
    hintLevel: 1,
    hintText: "Use a sliding window with two pointers and a set to keep track of characters in the current substring.",
    starterCode: `def lengthOfLongestSubstring(s):
    # TODO: Use sliding window with two pointers
    # TODO: Track characters inside the window
    pass

print(lengthOfLongestSubstring("abcabcbb")) # Expected: 3
print(lengthOfLongestSubstring("bbbbb")) # Expected: 1
print(lengthOfLongestSubstring("pwwkew")) # Expected: 3`,
    constraints: "0 ≤ s.length ≤ 5 * 10⁴, s consists of English letters, digits, symbols and spaces, Substring must contain unique characters",
    createdAt: new Date()
},

{
    problemId: "longest-substring-without-repeating",
    language: "python",
    hintLevel: 2,
    hintText: "If a character repeats, move the left pointer until the duplicate is removed from the current window.",
    starterCode: `def lengthOfLongestSubstring(s):
    # TODO: Use sliding window with two pointers
    # TODO: Track characters inside the window
    pass

print(lengthOfLongestSubstring("abcabcbb")) # Expected: 3
print(lengthOfLongestSubstring("bbbbb")) # Expected: 1
print(lengthOfLongestSubstring("pwwkew")) # Expected: 3`,
    constraints: "0 ≤ s.length ≤ 5 * 10⁴, s consists of English letters, digits, symbols and spaces, Substring must contain unique characters",
    createdAt: new Date()
},

{
    problemId: "longest-substring-without-repeating",
    language: "java",
    hintLevel: 1,
    hintText: "Use a sliding window approach with two pointers and a HashSet to track characters currently in the substring.",
    starterCode: `class Solution {
    public static int lengthOfLongestSubstring(String s) {
        // TODO: Use sliding window with two pointers
        // TODO: Track characters inside the window
        return 0;
    }

    public static void main(String[] args) {
        System.out.println(lengthOfLongestSubstring("abcabcbb")); // Expected: 3
        System.out.println(lengthOfLongestSubstring("bbbbb")); // Expected: 1
        System.out.println(lengthOfLongestSubstring("pwwkew")); // Expected: 3
    }
}`,
    constraints: "0 ≤ s.length ≤ 5 * 10⁴, s consists of English letters, digits, symbols and spaces, Substring must contain unique characters",
    createdAt: new Date()
},

{
    problemId: "longest-substring-without-repeating",
    language: "java",
    hintLevel: 2,
    hintText: "When encountering a duplicate character, move the left pointer forward until the window again contains unique characters.",
    starterCode: `class Solution {
    public static int lengthOfLongestSubstring(String s) {
        // TODO: Use sliding window with two pointers
        // TODO: Track characters inside the window
        return 0;
    }

    public static void main(String[] args) {
        System.out.println(lengthOfLongestSubstring("abcabcbb")); // Expected: 3
        System.out.println(lengthOfLongestSubstring("bbbbb")); // Expected: 1
        System.out.println(lengthOfLongestSubstring("pwwkew")); // Expected: 3
    }
}`,
    constraints: "0 ≤ s.length ≤ 5 * 10⁴, s consists of English letters, digits, symbols and spaces, Substring must contain unique characters",
    createdAt: new Date()
}

],
"three-sum": [

{
    problemId: "three-sum",
    language: "javascript",
    hintLevel: 1,
    hintText: "Sort the array first. Then fix one number and use two pointers to find the other two numbers whose sum equals zero.",
    starterCode: `function threeSum(nums) {
  // TODO: Sort the array
  // TODO: Fix one element and use two pointers to find pairs
}

console.log(threeSum([-1,0,1,2,-1,-4])); // Expected: [[-1,-1,2],[-1,0,1]]
console.log(threeSum([0,1,1])); // Expected: []
console.log(threeSum([0,0,0])); // Expected: [[0,0,0]]`,
    constraints: "3 ≤ nums.length ≤ 3000, -10⁵ ≤ nums[i] ≤ 10⁵, Result must not contain duplicate triplets",
    createdAt: new Date()
},

{
    problemId: "three-sum",
    language: "javascript",
    hintLevel: 2,
    hintText: "After sorting, skip duplicate numbers and move the left and right pointers based on the current sum.",
    starterCode: `function threeSum(nums) {
  // TODO: Sort the array
  // TODO: Fix one element and use two pointers to find pairs
}

console.log(threeSum([-1,0,1,2,-1,-4])); // Expected: [[-1,-1,2],[-1,0,1]]
console.log(threeSum([0,1,1])); // Expected: []
console.log(threeSum([0,0,0])); // Expected: [[0,0,0]]`,
    constraints: "3 ≤ nums.length ≤ 3000, -10⁵ ≤ nums[i] ≤ 10⁵, Result must not contain duplicate triplets",
    createdAt: new Date()
},

{
    problemId: "three-sum",
    language: "python",
    hintLevel: 1,
    hintText: "Sort the array and iterate through each number. For each element, use two pointers to find the remaining pair.",
    starterCode: `def threeSum(nums):
    # TODO: Sort the array
    # TODO: Fix one element and use two pointers
    pass

print(threeSum([-1,0,1,2,-1,-4])) # Expected: [[-1,-1,2],[-1,0,1]]
print(threeSum([0,1,1])) # Expected: []
print(threeSum([0,0,0])) # Expected: [[0,0,0]]`,
    constraints: "3 ≤ nums.length ≤ 3000, -10⁵ ≤ nums[i] ≤ 10⁵, Result must not contain duplicate triplets",
    createdAt: new Date()
},

{
    problemId: "three-sum",
    language: "python",
    hintLevel: 2,
    hintText: "Skip duplicate elements after sorting and adjust left/right pointers depending on the current sum.",
    starterCode: `def threeSum(nums):
    # TODO: Sort the array
    # TODO: Fix one element and use two pointers
    pass

print(threeSum([-1,0,1,2,-1,-4])) # Expected: [[-1,-1,2],[-1,0,1]]
print(threeSum([0,1,1])) # Expected: []
print(threeSum([0,0,0])) # Expected: [[0,0,0]]`,
    constraints: "3 ≤ nums.length ≤ 3000, -10⁵ ≤ nums[i] ≤ 10⁵, Result must not contain duplicate triplets",
    createdAt: new Date()
},

{
    problemId: "three-sum",
    language: "java",
    hintLevel: 1,
    hintText: "Sort the array and iterate through each index. Use two pointers to find two numbers that sum with the current number to zero.",
    starterCode: `import java.util.*;

class Solution {
    public static List<List<Integer>> threeSum(int[] nums) {
        // TODO: Sort the array
        // TODO: Fix one element and use two pointers
        return new ArrayList<>();
    }

    public static void main(String[] args) {
        System.out.println(threeSum(new int[]{-1,0,1,2,-1,-4}));
        System.out.println(threeSum(new int[]{0,1,1}));
        System.out.println(threeSum(new int[]{0,0,0}));
    }
}`,
    constraints: "3 ≤ nums.length ≤ 3000, -10⁵ ≤ nums[i] ≤ 10⁵, Result must not contain duplicate triplets",
    createdAt: new Date()
},

{
    problemId: "three-sum",
    language: "java",
    hintLevel: 2,
    hintText: "After sorting, skip duplicate numbers and move pointers based on whether the sum is less than or greater than zero.",
    starterCode: `import java.util.*;

class Solution {
    public static List<List<Integer>> threeSum(int[] nums) {
        // TODO: Sort the array
        // TODO: Fix one element and use two pointers
        return new ArrayList<>();
    }

    public static void main(String[] args) {
        System.out.println(threeSum(new int[]{-1,0,1,2,-1,-4}));
        System.out.println(threeSum(new int[]{0,1,1}));
        System.out.println(threeSum(new int[]{0,0,0}));
    }
}`,
    constraints: "3 ≤ nums.length ≤ 3000, -10⁵ ≤ nums[i] ≤ 10⁵, Result must not contain duplicate triplets",
    createdAt: new Date()
}

],

"group-anagrams": [

{
    problemId: "group-anagrams",
    language: "javascript",
    hintLevel: 1,
    hintText: "Use a HashMap where the key represents a normalized version of the word (like sorted characters).",
    starterCode: `function groupAnagrams(strs) {
  // TODO: Create a map to store grouped anagrams
  // TODO: Use sorted string as key
}

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));
console.log(groupAnagrams([""]));
console.log(groupAnagrams(["a"]));`,
    constraints: "1 ≤ strs.length ≤ 10⁴, 0 ≤ strs[i].length ≤ 100, strs[i] consists of lowercase English letters",
    createdAt: new Date()
},

{
    problemId: "group-anagrams",
    language: "javascript",
    hintLevel: 2,
    hintText: "Sort each string to create a key, store words with the same key in the same array inside the map.",
    starterCode: `function groupAnagrams(strs) {
  // TODO: Create a map to store grouped anagrams
  // TODO: Use sorted string as key
}

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));
console.log(groupAnagrams([""]));
console.log(groupAnagrams(["a"]));`,
    constraints: "1 ≤ strs.length ≤ 10⁴, 0 ≤ strs[i].length ≤ 100, strs[i] consists of lowercase English letters",
    createdAt: new Date()
},

{
    problemId: "group-anagrams",
    language: "python",
    hintLevel: 1,
    hintText: "Use a dictionary where the key is the sorted version of each string.",
    starterCode: `def groupAnagrams(strs):
    # TODO: Create dictionary for grouped anagrams
    # TODO: Use sorted string as key
    pass

print(groupAnagrams(["eat","tea","tan","ate","nat","bat"]))
print(groupAnagrams([""]))
print(groupAnagrams(["a"]))`,
    constraints: "1 ≤ strs.length ≤ 10⁴, 0 ≤ strs[i].length ≤ 100, strs[i] consists of lowercase English letters",
    createdAt: new Date()
},

{
    problemId: "group-anagrams",
    language: "python",
    hintLevel: 2,
    hintText: "For each word, sort its characters and append the original word into the corresponding list in the dictionary.",
    starterCode: `def groupAnagrams(strs):
    # TODO: Create dictionary for grouped anagrams
    # TODO: Use sorted string as key
    pass

print(groupAnagrams(["eat","tea","tan","ate","nat","bat"]))
print(groupAnagrams([""]))
print(groupAnagrams(["a"]))`,
    constraints: "1 ≤ strs.length ≤ 10⁴, 0 ≤ strs[i].length ≤ 100, strs[i] consists of lowercase English letters",
    createdAt: new Date()
},

{
    problemId: "group-anagrams",
    language: "java",
    hintLevel: 1,
    hintText: "Use a HashMap where the key is the sorted version of each string and the value is a list of anagrams.",
    starterCode: `import java.util.*;

class Solution {
    public static List<List<String>> groupAnagrams(String[] strs) {
        // TODO: Create HashMap for grouping anagrams
        // TODO: Use sorted string as key
        return new ArrayList<>();
    }

    public static void main(String[] args) {
        System.out.println(groupAnagrams(new String[]{"eat","tea","tan","ate","nat","bat"}));
        System.out.println(groupAnagrams(new String[]{""}));
        System.out.println(groupAnagrams(new String[]{"a"}));
    }
}`,
    constraints: "1 ≤ strs.length ≤ 10⁴, 0 ≤ strs[i].length ≤ 100, strs[i] consists of lowercase English letters",
    createdAt: new Date()
},

{
    problemId: "group-anagrams",
    language: "java",
    hintLevel: 2,
    hintText: "Sort characters of each word to form a key, then store the word in the list mapped to that key.",
    starterCode: `import java.util.*;

class Solution {
    public static List<List<String>> groupAnagrams(String[] strs) {
        // TODO: Create HashMap for grouping anagrams
        // TODO: Use sorted string as key
        return new ArrayList<>();
    }

    public static void main(String[] args) {
        System.out.println(groupAnagrams(new String[]{"eat","tea","tan","ate","nat","bat"}));
        System.out.println(groupAnagrams(new String[]{""}));
        System.out.println(groupAnagrams(new String[]{"a"}));
    }
}`,
    constraints: "1 ≤ strs.length ≤ 10⁴, 0 ≤ strs[i].length ≤ 100, strs[i] consists of lowercase English letters",
    createdAt: new Date()
}

],

"subarray-sum-equals-k": [

{
    problemId: "subarray-sum-equals-k",
    language: "javascript",
    hintLevel: 1,
    hintText: "Use a running prefix sum while iterating through the array. Track previous sums using a hashmap.",
    starterCode: `function subarraySum(nums, k) {
  // TODO: Maintain prefix sum
  // TODO: Use a hashmap to track frequency of sums
}

// Test cases
console.log(subarraySum([1,1,1],2)); // Expected: 2
console.log(subarraySum([1,2,3],3)); // Expected: 2
console.log(subarraySum([1,-1,0],0)); // Expected: 3`,
    constraints: "1 ≤ nums.length ≤ 2 * 10⁴, -1000 ≤ nums[i] ≤ 1000, -10⁷ ≤ k ≤ 10⁷",
    createdAt: new Date()
},

{
    problemId: "subarray-sum-equals-k",
    language: "javascript",
    hintLevel: 2,
    hintText: "If currentPrefixSum - k exists in the hashmap, it means a subarray ending at current index sums to k.",
    starterCode: `function subarraySum(nums, k) {
  // TODO: Maintain prefix sum
  // TODO: Use a hashmap to track frequency of sums
}

// Test cases
console.log(subarraySum([1,1,1],2)); // Expected: 2
console.log(subarraySum([1,2,3],3)); // Expected: 2
console.log(subarraySum([1,-1,0],0)); // Expected: 3`,
    constraints: "1 ≤ nums.length ≤ 2 * 10⁴, -1000 ≤ nums[i] ≤ 1000, -10⁷ ≤ k ≤ 10⁷",
    createdAt: new Date()
},

{
    problemId: "subarray-sum-equals-k",
    language: "python",
    hintLevel: 1,
    hintText: "Use a running prefix sum and store frequencies of sums in a dictionary.",
    starterCode: `def subarraySum(nums, k):
    # TODO: Maintain prefix sum
    # TODO: Use dictionary to track frequency of sums
    pass

print(subarraySum([1,1,1],2))  # Expected: 2
print(subarraySum([1,2,3],3))  # Expected: 2
print(subarraySum([1,-1,0],0))  # Expected: 3`,
    constraints: "1 ≤ nums.length ≤ 2 * 10⁴, -1000 ≤ nums[i] ≤ 1000, -10⁷ ≤ k ≤ 10⁷",
    createdAt: new Date()
},

{
    problemId: "subarray-sum-equals-k",
    language: "python",
    hintLevel: 2,
    hintText: "Check if (currentPrefixSum - k) exists in the dictionary to count valid subarrays ending at current index.",
    starterCode: `def subarraySum(nums, k):
    # TODO: Maintain prefix sum
    # TODO: Use dictionary to track frequency of sums
    pass

print(subarraySum([1,1,1],2))  # Expected: 2
print(subarraySum([1,2,3],3))  # Expected: 2
print(subarraySum([1,-1,0],0))  # Expected: 3`,
    constraints: "1 ≤ nums.length ≤ 2 * 10⁴, -1000 ≤ nums[i] ≤ 1000, -10⁷ ≤ k ≤ 10⁷",
    createdAt: new Date()
},

{
    problemId: "subarray-sum-equals-k",
    language: "java",
    hintLevel: 1,
    hintText: "Use a running prefix sum and store frequencies of previous sums in a HashMap.",
    starterCode: `class Solution {
    public static int subarraySum(int[] nums, int k) {
        // TODO: Maintain prefix sum
        // TODO: Use HashMap to track frequency of sums
        return 0;
    }

    public static void main(String[] args) {
        System.out.println(subarraySum(new int[]{1,1,1},2)); // Expected: 2
        System.out.println(subarraySum(new int[]{1,2,3},3)); // Expected: 2
        System.out.println(subarraySum(new int[]{1,-1,0},0)); // Expected: 3
    }
}`,
    constraints: "1 ≤ nums.length ≤ 2 * 10⁴, -1000 ≤ nums[i] ≤ 1000, -10⁷ ≤ k ≤ 10⁷",
    createdAt: new Date()
},

{
    problemId: "subarray-sum-equals-k",
    language: "java",
    hintLevel: 2,
    hintText: "If prefixSum - k already exists in the HashMap, add its frequency to the result count.",
    starterCode: `class Solution {
    public static int subarraySum(int[] nums, int k) {
        // TODO: Maintain prefix sum
        // TODO: Use HashMap to track frequency of sums
        return 0;
    }

    public static void main(String[] args) {
        System.out.println(subarraySum(new int[]{1,1,1},2)); // Expected: 2
        System.out.println(subarraySum(new int[]{1,2,3},3)); // Expected: 2
        System.out.println(subarraySum(new int[]{1,-1,0},0)); // Expected: 3
    }
}`,
    constraints: "1 ≤ nums.length ≤ 2 * 10⁴, -1000 ≤ nums[i] ≤ 1000, -10⁷ ≤ k ≤ 10⁷",
    createdAt: new Date()
}

],

"jump-game": [

{
    problemId: "jump-game",
    language: "javascript",
    hintLevel: 1,
    hintText: "Track the farthest index you can reach while iterating through the array.",
    starterCode: `function canJump(nums) {
  // TODO: Track the farthest reachable index
  // TODO: Check if current index exceeds reachable range
}

// Test cases
console.log(canJump([2,3,1,1,4])); // Expected: true
console.log(canJump([3,2,1,0,4])); // Expected: false
console.log(canJump([2,0,0])); // Expected: true`,
    constraints: "1 ≤ nums.length ≤ 10⁴, 0 ≤ nums[i] ≤ 10⁵, You start at index 0",
    createdAt: new Date()
},

{
    problemId: "jump-game",
    language: "javascript",
    hintLevel: 2,
    hintText: "Update the farthest reachable index using Math.max(currentReach, i + nums[i]). If i becomes greater than reachable index, return false.",
    starterCode: `function canJump(nums) {
  // TODO: Track the farthest reachable index
  // TODO: Check if current index exceeds reachable range
}

// Test cases
console.log(canJump([2,3,1,1,4])); // Expected: true
console.log(canJump([3,2,1,0,4])); // Expected: false
console.log(canJump([2,0,0])); // Expected: true`,
    constraints: "1 ≤ nums.length ≤ 10⁴, 0 ≤ nums[i] ≤ 10⁵, You start at index 0",
    createdAt: new Date()
},

{
    problemId: "jump-game",
    language: "python",
    hintLevel: 1,
    hintText: "Keep track of the farthest reachable index while traversing the array.",
    starterCode: `def canJump(nums):
    # TODO: Track farthest reachable index
    # TODO: Check if current index exceeds reachable range
    pass

print(canJump([2,3,1,1,4]))  # Expected: True
print(canJump([3,2,1,0,4]))  # Expected: False
print(canJump([2,0,0]))  # Expected: True`,
    constraints: "1 ≤ nums.length ≤ 10⁴, 0 ≤ nums[i] ≤ 10⁵, You start at index 0",
    createdAt: new Date()
},

{
    problemId: "jump-game",
    language: "python",
    hintLevel: 2,
    hintText: "Update reachable index as max(reachable, i + nums[i]). If the current index exceeds reachable, the end cannot be reached.",
    starterCode: `def canJump(nums):
    # TODO: Track farthest reachable index
    # TODO: Check if current index exceeds reachable range
    pass

print(canJump([2,3,1,1,4]))  # Expected: True
print(canJump([3,2,1,0,4]))  # Expected: False
print(canJump([2,0,0]))  # Expected: True`,
    constraints: "1 ≤ nums.length ≤ 10⁴, 0 ≤ nums[i] ≤ 10⁵, You start at index 0",
    createdAt: new Date()
},

{
    problemId: "jump-game",
    language: "java",
    hintLevel: 1,
    hintText: "Keep track of the farthest index you can reach while iterating through the array.",
    starterCode: `class Solution {
    public static boolean canJump(int[] nums) {
        // TODO: Track the farthest reachable index
        // TODO: Check if current index exceeds reachable range
        return false;
    }

    public static void main(String[] args) {
        System.out.println(canJump(new int[]{2,3,1,1,4})); // Expected: true
        System.out.println(canJump(new int[]{3,2,1,0,4})); // Expected: false
        System.out.println(canJump(new int[]{2,0,0})); // Expected: true
    }
}`,
    constraints: "1 ≤ nums.length ≤ 10⁴, 0 ≤ nums[i] ≤ 10⁵, You start at index 0",
    createdAt: new Date()
},

{
    problemId: "jump-game",
    language: "java",
    hintLevel: 2,
    hintText: "Update reachable index using Math.max(reachable, i + nums[i]). If i exceeds reachable index, return false.",
    starterCode: `class Solution {
    public static boolean canJump(int[] nums) {
        // TODO: Track the farthest reachable index
        // TODO: Check if current index exceeds reachable range
        return false;
    }

    public static void main(String[] args) {
        System.out.println(canJump(new int[]{2,3,1,1,4})); // Expected: true
        System.out.println(canJump(new int[]{3,2,1,0,4})); // Expected: false
        System.out.println(canJump(new int[]{2,0,0})); // Expected: true
    }
}`,
    constraints: "1 ≤ nums.length ≤ 10⁴, 0 ≤ nums[i] ≤ 10⁵, You start at index 0",
    createdAt: new Date()
}

],
"search-insert-position": [

{
    problemId: "search-insert-position",
    language: "javascript",
    hintLevel: 1,
    hintText: "Use binary search with two pointers left and right to narrow down the search range.",
    starterCode: `function searchInsert(nums, target) {
  // TODO: Initialize left and right pointers
  // TODO: Use binary search to find target or insert position
}

// Test cases
console.log(searchInsert([1,3,5,6],5)); // Expected: 2
console.log(searchInsert([1,3,5,6],2)); // Expected: 1
console.log(searchInsert([1,3,5,6],7)); // Expected: 4`,
    constraints: "1 ≤ nums.length ≤ 10⁴, -10⁴ ≤ nums[i], target ≤ 10⁴, nums contains distinct integers sorted in ascending order",
    createdAt: new Date()
},

{
    problemId: "search-insert-position",
    language: "javascript",
    hintLevel: 2,
    hintText: "When the search ends, the left pointer will indicate the correct position where the target should be inserted.",
    starterCode: `function searchInsert(nums, target) {
  // TODO: Initialize left and right pointers
  // TODO: Use binary search to find target or insert position
}

// Test cases
console.log(searchInsert([1,3,5,6],5)); // Expected: 2
console.log(searchInsert([1,3,5,6],2)); // Expected: 1
console.log(searchInsert([1,3,5,6],7)); // Expected: 4`,
    constraints: "1 ≤ nums.length ≤ 10⁴, -10⁴ ≤ nums[i], target ≤ 10⁴, nums contains distinct integers sorted in ascending order",
    createdAt: new Date()
},

{
    problemId: "search-insert-position",
    language: "python",
    hintLevel: 1,
    hintText: "Use two pointers left and right to perform binary search on the sorted array.",
    starterCode: `def searchInsert(nums, target):
    # TODO: Initialize left and right pointers
    # TODO: Use binary search to find target or insert position
    pass

print(searchInsert([1,3,5,6],5))  # Expected: 2
print(searchInsert([1,3,5,6],2))  # Expected: 1
print(searchInsert([1,3,5,6],7))  # Expected: 4`,
    constraints: "1 ≤ nums.length ≤ 10⁴, -10⁴ ≤ nums[i], target ≤ 10⁴, nums contains distinct integers sorted in ascending order",
    createdAt: new Date()
},

{
    problemId: "search-insert-position",
    language: "python",
    hintLevel: 2,
    hintText: "Calculate mid each step and adjust left or right depending on comparison with target.",
    starterCode: `def searchInsert(nums, target):
    # TODO: Initialize left and right pointers
    # TODO: Use binary search to find target or insert position
    pass

print(searchInsert([1,3,5,6],5))  # Expected: 2
print(searchInsert([1,3,5,6],2))  # Expected: 1
print(searchInsert([1,3,5,6],7))  # Expected: 4`,
    constraints: "1 ≤ nums.length ≤ 10⁴, -10⁴ ≤ nums[i], target ≤ 10⁴, nums contains distinct integers sorted in ascending order",
    createdAt: new Date()
},

{
    problemId: "search-insert-position",
    language: "java",
    hintLevel: 1,
    hintText: "Use binary search with left and right pointers to find the correct index for the target.",
    starterCode: `class Solution {
    public static int searchInsert(int[] nums, int target) {
        // TODO: Initialize left and right pointers
        // TODO: Use binary search to find target or insert position
        return -1;
    }

    public static void main(String[] args) {
        System.out.println(searchInsert(new int[]{1,3,5,6},5)); // Expected: 2
        System.out.println(searchInsert(new int[]{1,3,5,6},2)); // Expected: 1
        System.out.println(searchInsert(new int[]{1,3,5,6},7)); // Expected: 4
    }
}`,
    constraints: "1 ≤ nums.length ≤ 10⁴, -10⁴ ≤ nums[i], target ≤ 10⁴, nums contains distinct integers sorted in ascending order",
    createdAt: new Date()
},

{
    problemId: "search-insert-position",
    language: "java",
    hintLevel: 2,
    hintText: "After binary search ends, the left pointer indicates the correct insert position for the target.",
    starterCode: `class Solution {
    public static int searchInsert(int[] nums, int target) {
        // TODO: Initialize left and right pointers
        // TODO: Use binary search to find target or insert position
        return -1;
    }

    public static void main(String[] args) {
        System.out.println(searchInsert(new int[]{1,3,5,6},5)); // Expected: 2
        System.out.println(searchInsert(new int[]{1,3,5,6},2)); // Expected: 1
        System.out.println(searchInsert(new int[]{1,3,5,6},7)); // Expected: 4
    }
}`,
    constraints: "1 ≤ nums.length ≤ 10⁴, -10⁴ ≤ nums[i], target ≤ 10⁴, nums contains distinct integers sorted in ascending order",
    createdAt: new Date()
}

],

"merge-intervals": [

{
    problemId: "merge-intervals",
    language: "javascript",
    hintLevel: 1,
    hintText: "Sort the intervals based on their starting value before processing them.",
    starterCode: `function merge(intervals) {
  // TODO: Sort intervals by start time
  // TODO: Merge overlapping intervals
}

// Test cases
console.log(merge([[1,3],[2,6],[8,10],[15,18]])); // Expected: [[1,6],[8,10],[15,18]]
console.log(merge([[1,4],[4,5]])); // Expected: [[1,5]]
console.log(merge([[1,4],[0,4]])); // Expected: [[0,4]]`,
    constraints: "1 ≤ intervals.length ≤ 10⁴, intervals[i].length == 2, 0 ≤ start ≤ end ≤ 10⁴",
    createdAt: new Date()
},

{
    problemId: "merge-intervals",
    language: "javascript",
    hintLevel: 2,
    hintText: "After sorting, compare the current interval with the last merged interval. If they overlap, update the end value.",
    starterCode: `function merge(intervals) {
  // TODO: Sort intervals by start time
  // TODO: Merge overlapping intervals
}

// Test cases
console.log(merge([[1,3],[2,6],[8,10],[15,18]])); // Expected: [[1,6],[8,10],[15,18]]
console.log(merge([[1,4],[4,5]])); // Expected: [[1,5]]
console.log(merge([[1,4],[0,4]])); // Expected: [[0,4]]`,
    constraints: "1 ≤ intervals.length ≤ 10⁴, intervals[i].length == 2, 0 ≤ start ≤ end ≤ 10⁴",
    createdAt: new Date()
},

{
    problemId: "merge-intervals",
    language: "python",
    hintLevel: 1,
    hintText: "First sort the intervals based on the start value so overlapping intervals become adjacent.",
    starterCode: `def merge(intervals):
    # TODO: Sort intervals by start value
    # TODO: Merge overlapping intervals
    pass

print(merge([[1,3],[2,6],[8,10],[15,18]])) # Expected: [[1,6],[8,10],[15,18]]
print(merge([[1,4],[4,5]])) # Expected: [[1,5]]
print(merge([[1,4],[0,4]])) # Expected: [[0,4]]`,
    constraints: "1 ≤ intervals.length ≤ 10⁴, intervals[i].length == 2, 0 ≤ start ≤ end ≤ 10⁴",
    createdAt: new Date()
},

{
    problemId: "merge-intervals",
    language: "python",
    hintLevel: 2,
    hintText: "Maintain a result list. If the current interval overlaps with the last one, update the end using max().",
    starterCode: `def merge(intervals):
    # TODO: Sort intervals by start value
    # TODO: Merge overlapping intervals
    pass

print(merge([[1,3],[2,6],[8,10],[15,18]])) # Expected: [[1,6],[8,10],[15,18]]
print(merge([[1,4],[4,5]])) # Expected: [[1,5]]
print(merge([[1,4],[0,4]])) # Expected: [[0,4]]`,
    constraints: "1 ≤ intervals.length ≤ 10⁴, intervals[i].length == 2, 0 ≤ start ≤ end ≤ 10⁴",
    createdAt: new Date()
},

{
    problemId: "merge-intervals",
    language: "java",
    hintLevel: 1,
    hintText: "Sort the intervals based on the start value before merging them.",
    starterCode: `import java.util.*;

class Solution {
    public static int[][] merge(int[][] intervals) {
        // TODO: Sort intervals based on start value
        // TODO: Merge overlapping intervals
        
        return new int[0][0];
    }

    public static void main(String[] args) {
        System.out.println(Arrays.deepToString(merge(new int[][]{{1,3},{2,6},{8,10},{15,18}})));
        System.out.println(Arrays.deepToString(merge(new int[][]{{1,4},{4,5}})));
        System.out.println(Arrays.deepToString(merge(new int[][]{{1,4},{0,4}})));
    }
}`,
    constraints: "1 ≤ intervals.length ≤ 10⁴, intervals[i].length == 2, 0 ≤ start ≤ end ≤ 10⁴",
    createdAt: new Date()
},

{
    problemId: "merge-intervals",
    language: "java",
    hintLevel: 2,
    hintText: "Compare each interval with the last merged interval. If they overlap, update the end value using Math.max().",
    starterCode: `import java.util.*;

class Solution {
    public static int[][] merge(int[][] intervals) {
        // TODO: Sort intervals based on start value
        // TODO: Merge overlapping intervals
        
        return new int[0][0];
    }

    public static void main(String[] args) {
        System.out.println(Arrays.deepToString(merge(new int[][]{{1,3},{2,6},{8,10},{15,18}})));
        System.out.println(Arrays.deepToString(merge(new int[][]{{1,4},{4,5}})));
        System.out.println(Arrays.deepToString(merge(new int[][]{{1,4},{0,4}})));
    }
}`,
    constraints: "1 ≤ intervals.length ≤ 10⁴, intervals[i].length == 2, 0 ≤ start ≤ end ≤ 10⁴",
    createdAt: new Date()
}

],
"kth-largest-element": [

{
    problemId: "kth-largest-element",
    language: "javascript",
    hintLevel: 1,
    hintText: "Sorting the array or using a heap can help identify the kth largest element.",
    starterCode: `function findKthLargest(nums, k) {
  // TODO: Use sorting or a heap to find the kth largest element
  
}

// Test cases
console.log(findKthLargest([3,2,1,5,6,4],2)); // Expected: 5
console.log(findKthLargest([3,2,3,1,2,4,5,5,6],4)); // Expected: 4
console.log(findKthLargest([1],1)); // Expected: 1`,
    constraints: "1 ≤ k ≤ nums.length ≤ 10⁵, -10⁴ ≤ nums[i] ≤ 10⁴, Array may contain duplicates",
    createdAt: new Date()
},

{
    problemId: "kth-largest-element",
    language: "javascript",
    hintLevel: 2,
    hintText: "A min heap of size k works well: keep only the k largest elements seen so far.",
    starterCode: `function findKthLargest(nums, k) {
  // TODO: Use sorting or a heap to find the kth largest element
  
}

// Test cases
console.log(findKthLargest([3,2,1,5,6,4],2)); // Expected: 5
console.log(findKthLargest([3,2,3,1,2,4,5,5,6],4)); // Expected: 4
console.log(findKthLargest([1],1)); // Expected: 1`,
    constraints: "1 ≤ k ≤ nums.length ≤ 10⁵, -10⁴ ≤ nums[i] ≤ 10⁴, Array may contain duplicates",
    createdAt: new Date()
},

{
    problemId: "kth-largest-element",
    language: "python",
    hintLevel: 1,
    hintText: "You can sort the array in descending order or use a heap to find the kth largest element.",
    starterCode: `def findKthLargest(nums, k):
    # TODO: Use sorting or heap to find kth largest
    pass

print(findKthLargest([3,2,1,5,6,4],2)) # Expected: 5
print(findKthLargest([3,2,3,1,2,4,5,5,6],4)) # Expected: 4
print(findKthLargest([1],1)) # Expected: 1`,
    constraints: "1 ≤ k ≤ nums.length ≤ 10⁵, -10⁴ ≤ nums[i] ≤ 10⁴, Array may contain duplicates",
    createdAt: new Date()
},

{
    problemId: "kth-largest-element",
    language: "python",
    hintLevel: 2,
    hintText: "Maintain a min heap of size k so the smallest element in the heap is the kth largest overall.",
    starterCode: `def findKthLargest(nums, k):
    # TODO: Use sorting or heap to find kth largest
    pass

print(findKthLargest([3,2,1,5,6,4],2)) # Expected: 5
print(findKthLargest([3,2,3,1,2,4,5,5,6],4)) # Expected: 4
print(findKthLargest([1],1)) # Expected: 1`,
    constraints: "1 ≤ k ≤ nums.length ≤ 10⁵, -10⁴ ≤ nums[i] ≤ 10⁴, Array may contain duplicates",
    createdAt: new Date()
},

{
    problemId: "kth-largest-element",
    language: "java",
    hintLevel: 1,
    hintText: "Sorting the array or using a priority queue (heap) can help determine the kth largest element.",
    starterCode: `class Solution {
    public static int findKthLargest(int[] nums, int k) {
        // TODO: Use sorting or a heap to find the kth largest element
        
        return 0;
    }

    public static void main(String[] args) {
        System.out.println(findKthLargest(new int[]{3,2,1,5,6,4},2));
        System.out.println(findKthLargest(new int[]{3,2,3,1,2,4,5,5,6},4));
        System.out.println(findKthLargest(new int[]{1},1));
    }
}`,
    constraints: "1 ≤ k ≤ nums.length ≤ 10⁵, -10⁴ ≤ nums[i] ≤ 10⁴, Array may contain duplicates",
    createdAt: new Date()
},

{
    problemId: "kth-largest-element",
    language: "java",
    hintLevel: 2,
    hintText: "Use a PriorityQueue (min heap) of size k. Remove the smallest element when size exceeds k.",
    starterCode: `class Solution {
    public static int findKthLargest(int[] nums, int k) {
        // TODO: Use sorting or a heap to find the kth largest element
        
        return 0;
    }

    public static void main(String[] args) {
        System.out.println(findKthLargest(new int[]{3,2,1,5,6,4},2));
        System.out.println(findKthLargest(new int[]{3,2,3,1,2,4,5,5,6},4));
        System.out.println(findKthLargest(new int[]{1},1));
    }
}`,
    constraints: "1 ≤ k ≤ nums.length ≤ 10⁵, -10⁴ ≤ nums[i] ≤ 10⁴, Array may contain duplicates",
    createdAt: new Date()
}

],
"move-zeroes": [

{
    problemId: "move-zeroes",
    language: "javascript",
    hintLevel: 1,
    hintText: "Use two pointers: one to scan the array and another to track where the next non-zero element should be placed.",
    starterCode: `function moveZeroes(nums) {
  // TODO: Use two pointers to move non-zero elements forward
  // TODO: Place zeroes at the end
}

// Test cases
let a=[0,1,0,3,12]; moveZeroes(a); console.log(a); // Expected: [1,3,12,0,0]
let b=[0]; moveZeroes(b); console.log(b); // Expected: [0]
let c=[1,0,1]; moveZeroes(c); console.log(c); // Expected: [1,1,0]`,
    constraints: "1 ≤ nums.length ≤ 10⁴, -2³¹ ≤ nums[i] ≤ 2³¹ - 1, Must modify array in-place",
    createdAt: new Date()
},

{
    problemId: "move-zeroes",
    language: "javascript",
    hintLevel: 2,
    hintText: "When you encounter a non-zero element, swap it with the position tracked by the second pointer and move that pointer forward.",
    starterCode: `function moveZeroes(nums) {
  // TODO: Use two pointers to move non-zero elements forward
  // TODO: Place zeroes at the end
}

// Test cases
let a=[0,1,0,3,12]; moveZeroes(a); console.log(a); // Expected: [1,3,12,0,0]
let b=[0]; moveZeroes(b); console.log(b); // Expected: [0]
let c=[1,0,1]; moveZeroes(c); console.log(c); // Expected: [1,1,0]`,
    constraints: "1 ≤ nums.length ≤ 10⁴, -2³¹ ≤ nums[i] ≤ 2³¹ - 1, Must modify array in-place",
    createdAt: new Date()
},

{
    problemId: "move-zeroes",
    language: "python",
    hintLevel: 1,
    hintText: "Use two pointers: one iterates through the array and the other keeps track of where the next non-zero value should go.",
    starterCode: `def moveZeroes(nums):
    # TODO: Use two pointers to move non-zero elements forward
    # TODO: Place zeroes at the end
    pass

a=[0,1,0,3,12]; moveZeroes(a); print(a)
b=[0]; moveZeroes(b); print(b)
c=[1,0,1]; moveZeroes(c); print(c)`,
    constraints: "1 ≤ nums.length ≤ 10⁴, -2³¹ ≤ nums[i] ≤ 2³¹ - 1, Must modify array in-place",
    createdAt: new Date()
},

{
    problemId: "move-zeroes",
    language: "python",
    hintLevel: 2,
    hintText: "Whenever you find a non-zero value, swap it with the element at the position tracked by the second pointer.",
    starterCode: `def moveZeroes(nums):
    # TODO: Use two pointers to move non-zero elements forward
    # TODO: Place zeroes at the end
    pass

a=[0,1,0,3,12]; moveZeroes(a); print(a)
b=[0]; moveZeroes(b); print(b)
c=[1,0,1]; moveZeroes(c); print(c)`,
    constraints: "1 ≤ nums.length ≤ 10⁴, -2³¹ ≤ nums[i] ≤ 2³¹ - 1, Must modify array in-place",
    createdAt: new Date()
},

{
    problemId: "move-zeroes",
    language: "java",
    hintLevel: 1,
    hintText: "Use two pointers: one to iterate through the array and another to track the position of the next non-zero element.",
    starterCode: `import java.util.*;

class Solution {
    public static void moveZeroes(int[] nums) {
        // TODO: Use two pointers to move non-zero elements forward
        
    }

    public static void main(String[] args) {
        int[] a={0,1,0,3,12};
        moveZeroes(a);
        System.out.println(Arrays.toString(a));
    }
}`,
    constraints: "1 ≤ nums.length ≤ 10⁴, -2³¹ ≤ nums[i] ≤ 2³¹ - 1, Must modify array in-place",
    createdAt: new Date()
},

{
    problemId: "move-zeroes",
    language: "java",
    hintLevel: 2,
    hintText: "Whenever a non-zero element appears, swap it with the element at the current non-zero position pointer.",
    starterCode: `import java.util.*;

class Solution {
    public static void moveZeroes(int[] nums) {
        // TODO: Use two pointers to move non-zero elements forward
        
    }

    public static void main(String[] args) {
        int[] a={0,1,0,3,12};
        moveZeroes(a);
        System.out.println(Arrays.toString(a));
    }
}`,
    constraints: "1 ≤ nums.length ≤ 10⁴, -2³¹ ≤ nums[i] ≤ 2³¹ - 1, Must modify array in-place",
    createdAt: new Date()
}

],

"reverse-linked-list": [

{
    problemId: "reverse-linked-list",
    language: "javascript",
    hintLevel: 1,
    hintText: "Traverse the list and reverse the order by swapping elements from the beginning and end moving inward.",
    starterCode: `function reverseList(arr) {
  // TODO: Use two pointers or iteration to reverse the array
}

// Test cases
console.log(reverseList([1,2,3,4,5])); // Expected: [5,4,3,2,1]
console.log(reverseList([1,2])); // Expected: [2,1]
console.log(reverseList([])); // Expected: []`,
    constraints: "0 ≤ number of nodes ≤ 5000, -5000 ≤ Node.val ≤ 5000, Follow-up: reverse using O(1) extra space",
    createdAt: new Date()
},

{
    problemId: "reverse-linked-list",
    language: "javascript",
    hintLevel: 2,
    hintText: "Use two pointers (left and right) or iterate from the end to build the reversed order.",
    starterCode: `function reverseList(arr) {
  // TODO: Use two pointers or iteration to reverse the array
}

// Test cases
console.log(reverseList([1,2,3,4,5])); // Expected: [5,4,3,2,1]
console.log(reverseList([1,2])); // Expected: [2,1]
console.log(reverseList([])); // Expected: []`,
    constraints: "0 ≤ number of nodes ≤ 5000, -5000 ≤ Node.val ≤ 5000, Follow-up: reverse using O(1) extra space",
    createdAt: new Date()
},

{
    problemId: "reverse-linked-list",
    language: "python",
    hintLevel: 1,
    hintText: "Iterate through the list and swap elements from both ends until you reach the center.",
    starterCode: `def reverseList(arr):
    # TODO: Reverse the array using iteration
    pass

print(reverseList([1,2,3,4,5])) # Expected: [5,4,3,2,1]
print(reverseList([1,2])) # Expected: [2,1]
print(reverseList([])) # Expected: []`,
    constraints: "0 ≤ number of nodes ≤ 5000, -5000 ≤ Node.val ≤ 5000, Follow-up: reverse using O(1) extra space",
    createdAt: new Date()
},

{
    problemId: "reverse-linked-list",
    language: "python",
    hintLevel: 2,
    hintText: "Use two pointers or iterate backwards while building the reversed list.",
    starterCode: `def reverseList(arr):
    # TODO: Reverse the array using iteration
    pass

print(reverseList([1,2,3,4,5])) # Expected: [5,4,3,2,1]
print(reverseList([1,2])) # Expected: [2,1]
print(reverseList([])) # Expected: []`,
    constraints: "0 ≤ number of nodes ≤ 5000, -5000 ≤ Node.val ≤ 5000, Follow-up: reverse using O(1) extra space",
    createdAt: new Date()
},

{
    problemId: "reverse-linked-list",
    language: "java",
    hintLevel: 1,
    hintText: "Traverse the array and swap elements from the start and end until the middle is reached.",
    starterCode: `import java.util.*;

class Solution {
    public static int[] reverseList(int[] arr) {
        // TODO: Reverse the array using iteration
        
        return arr;
    }

    public static void main(String[] args) {
        System.out.println(Arrays.toString(reverseList(new int[]{1,2,3,4,5})));
        System.out.println(Arrays.toString(reverseList(new int[]{1,2})));
        System.out.println(Arrays.toString(reverseList(new int[]{})));
    }
}`,
    constraints: "0 ≤ number of nodes ≤ 5000, -5000 ≤ Node.val ≤ 5000, Follow-up: reverse using O(1) extra space",
    createdAt: new Date()
},

{
    problemId: "reverse-linked-list",
    language: "java",
    hintLevel: 2,
    hintText: "Use two pointers: one at the start and one at the end, swapping elements until they meet.",
    starterCode: `import java.util.*;

class Solution {
    public static int[] reverseList(int[] arr) {
        // TODO: Reverse the array using iteration
        
        return arr;
    }

    public static void main(String[] args) {
        System.out.println(Arrays.toString(reverseList(new int[]{1,2,3,4,5})));
        System.out.println(Arrays.toString(reverseList(new int[]{1,2})));
        System.out.println(Arrays.toString(reverseList(new int[]{})));
    }
}`,
    constraints: "0 ≤ number of nodes ≤ 5000, -5000 ≤ Node.val ≤ 5000, Follow-up: reverse using O(1) extra space",
    createdAt: new Date()
}

],

"maximum-depth-binary-tree": [

{
    problemId: "maximum-depth-binary-tree",
    language: "javascript",
    hintLevel: 1,
    hintText: "Think of the tree level by level. The depth increases as you move down from the root to the leaves.",
    starterCode: `function maxDepth(root) {
  // TODO: Use recursion or traversal to calculate tree depth
}

// Test cases
console.log(maxDepth([3,9,20,null,null,15,7])); // Expected: 3
console.log(maxDepth([1,null,2])); // Expected: 2
console.log(maxDepth([])); // Expected: 0`,
    constraints: "The number of nodes is in the range [0, 10⁴], -100 ≤ Node.val ≤ 100, Tree depth will not exceed 1000",
    createdAt: new Date()
},

{
    problemId: "maximum-depth-binary-tree",
    language: "javascript",
    hintLevel: 2,
    hintText: "Use DFS recursion: the depth of a node equals 1 + the maximum depth of its left and right subtrees.",
    starterCode: `function maxDepth(root) {
  // TODO: Use recursion or traversal to calculate tree depth
}

// Test cases
console.log(maxDepth([3,9,20,null,null,15,7])); // Expected: 3
console.log(maxDepth([1,null,2])); // Expected: 2
console.log(maxDepth([])); // Expected: 0`,
    constraints: "The number of nodes is in the range [0, 10⁴], -100 ≤ Node.val ≤ 100, Tree depth will not exceed 1000",
    createdAt: new Date()
},

{
    problemId: "maximum-depth-binary-tree",
    language: "python",
    hintLevel: 1,
    hintText: "The depth of a tree increases when moving from parent to child nodes.",
    starterCode: `def maxDepth(root):
    # TODO: Use recursion or traversal to calculate tree depth
    pass

print(maxDepth([3,9,20,None,None,15,7])) # Expected: 3
print(maxDepth([1,None,2])) # Expected: 2
print(maxDepth([])) # Expected: 0`,
    constraints: "The number of nodes is in the range [0, 10⁴], -100 ≤ Node.val ≤ 100, Tree depth will not exceed 1000",
    createdAt: new Date()
},

{
    problemId: "maximum-depth-binary-tree",
    language: "python",
    hintLevel: 2,
    hintText: "Use recursion: depth = 1 + max(depth(left subtree), depth(right subtree)).",
    starterCode: `def maxDepth(root):
    # TODO: Use recursion or traversal to calculate tree depth
    pass

print(maxDepth([3,9,20,None,None,15,7])) # Expected: 3
print(maxDepth([1,None,2])) # Expected: 2
print(maxDepth([])) # Expected: 0`,
    constraints: "The number of nodes is in the range [0, 10⁴], -100 ≤ Node.val ≤ 100, Tree depth will not exceed 1000",
    createdAt: new Date()
},

{
    problemId: "maximum-depth-binary-tree",
    language: "java",
    hintLevel: 1,
    hintText: "Think recursively: the depth increases when moving from a node to its children.",
    starterCode: `class Solution {
    public static int maxDepth(int[] root) {
        // TODO: Use recursion or traversal to calculate tree depth
        
        return 0;
    }

    public static void main(String[] args) {
        System.out.println(maxDepth(new int[]{3,9,20,0,0,15,7}));
        System.out.println(maxDepth(new int[]{1,0,2}));
        System.out.println(maxDepth(new int[]{}));
    }
}`,
    constraints: "The number of nodes is in the range [0, 10⁴], -100 ≤ Node.val ≤ 100, Tree depth will not exceed 1000",
    createdAt: new Date()
},

{
    problemId: "maximum-depth-binary-tree",
    language: "java",
    hintLevel: 2,
    hintText: "Depth of a node equals 1 plus the maximum depth of its left and right children.",
    starterCode: `class Solution {
    public static int maxDepth(int[] root) {
        // TODO: Use recursion or traversal to calculate tree depth
        
        return 0;
    }

    public static void main(String[] args) {
        System.out.println(maxDepth(new int[]{3,9,20,0,0,15,7}));
        System.out.println(maxDepth(new int[]{1,0,2}));
        System.out.println(maxDepth(new int[]{}));
    }
}`,
    constraints: "The number of nodes is in the range [0, 10⁴], -100 ≤ Node.val ≤ 100, Tree depth will not exceed 1000",
    createdAt: new Date()
}

],

"invert-binary-tree": [

{
    problemId: "invert-binary-tree",
    language: "javascript",
    hintLevel: 1,
    hintText: "To invert a tree, each node must swap its left and right children.",
    starterCode: `function invertTree(root) {
  // TODO: Swap left and right children for every node
}

// Test cases
console.log(invertTree([4,2,7,1,3,6,9])); // Expected: [4,7,2,9,6,3,1]
console.log(invertTree([2,1,3])); // Expected: [2,3,1]
console.log(invertTree([])); // Expected: []`,
    constraints: "The number of nodes in the tree is in the range [0, 100], -100 ≤ Node.val ≤ 100, Each node has at most two children",
    createdAt: new Date()
},

{
    problemId: "invert-binary-tree",
    language: "javascript",
    hintLevel: 2,
    hintText: "Traverse the tree (DFS or BFS). At each node, swap the left and right children.",
    starterCode: `function invertTree(root) {
  // TODO: Swap left and right children for every node
}

// Test cases
console.log(invertTree([4,2,7,1,3,6,9])); // Expected: [4,7,2,9,6,3,1]
console.log(invertTree([2,1,3])); // Expected: [2,3,1]
console.log(invertTree([])); // Expected: []`,
    constraints: "The number of nodes in the tree is in the range [0, 100], -100 ≤ Node.val ≤ 100, Each node has at most two children",
    createdAt: new Date()
},

{
    problemId: "invert-binary-tree",
    language: "python",
    hintLevel: 1,
    hintText: "For each node in the tree, swap its left and right child nodes.",
    starterCode: `def invertTree(root):
    # TODO: Swap left and right children for each node
    pass

print(invertTree([4,2,7,1,3,6,9]))
print(invertTree([2,1,3]))
print(invertTree([]))`,
    constraints: "The number of nodes in the tree is in the range [0, 100], -100 ≤ Node.val ≤ 100, Each node has at most two children",
    createdAt: new Date()
},

{
    problemId: "invert-binary-tree",
    language: "python",
    hintLevel: 2,
    hintText: "Use recursion: swap children and recursively invert the left and right subtrees.",
    starterCode: `def invertTree(root):
    # TODO: Swap left and right children for each node
    pass

print(invertTree([4,2,7,1,3,6,9]))
print(invertTree([2,1,3]))
print(invertTree([]))`,
    constraints: "The number of nodes in the tree is in the range [0, 100], -100 ≤ Node.val ≤ 100, Each node has at most two children",
    createdAt: new Date()
},

{
    problemId: "invert-binary-tree",
    language: "java",
    hintLevel: 1,
    hintText: "Traverse the tree and swap the left and right child nodes at each step.",
    starterCode: `class Solution {
    public static int[] invertTree(int[] root) {
        // TODO: Swap left and right children for every node
        
        return root;
    }

    public static void main(String[] args) {
        System.out.println(java.util.Arrays.toString(invertTree(new int[]{4,2,7,1,3,6,9})));
    }
}`,
    constraints: "The number of nodes in the tree is in the range [0, 100], -100 ≤ Node.val ≤ 100, Each node has at most two children",
    createdAt: new Date()
},

{
    problemId: "invert-binary-tree",
    language: "java",
    hintLevel: 2,
    hintText: "Use recursion: invert the left subtree, invert the right subtree, then swap them.",
    starterCode: `class Solution {
    public static int[] invertTree(int[] root) {
        // TODO: Swap left and right children for every node
        
        return root;
    }

    public static void main(String[] args) {
        System.out.println(java.util.Arrays.toString(invertTree(new int[]{4,2,7,1,3,6,9})));
    }
}`,
    constraints: "The number of nodes in the tree is in the range [0, 100], -100 ≤ Node.val ≤ 100, Each node has at most two children",
    createdAt: new Date()
}

],
"best-time-stock": [

{
    problemId: "best-time-stock",
    language: "javascript",
    hintLevel: 1,
    hintText: "Track the lowest price seen so far while scanning the array.",
    starterCode: `function maxProfit(prices){
 // Write your solution here
}

console.log(maxProfit([7,1,5,3,6,4])); // Expected: 5
console.log(maxProfit([7,6,4,3,1])); // Expected: 0
console.log(maxProfit([2,4,1])); // Expected: 2`,
    constraints: "1 ≤ prices.length ≤ 10⁵, 0 ≤ prices[i] ≤ 10⁴, Only one transaction allowed",
    createdAt: new Date()
},

{
    problemId: "best-time-stock",
    language: "javascript",
    hintLevel: 2,
    hintText: "For each price, compute profit = currentPrice - minPriceSoFar and update the maximum profit.",
    starterCode: `function maxProfit(prices){
 // Write your solution here
}

console.log(maxProfit([7,1,5,3,6,4])); // Expected: 5
console.log(maxProfit([7,6,4,3,1])); // Expected: 0
console.log(maxProfit([2,4,1])); // Expected: 2`,
    constraints: "1 ≤ prices.length ≤ 10⁵, 0 ≤ prices[i] ≤ 10⁴, Only one transaction allowed",
    createdAt: new Date()
},

{
    problemId: "best-time-stock",
    language: "python",
    hintLevel: 1,
    hintText: "Keep track of the minimum price encountered while iterating through the list.",
    starterCode: `def maxProfit(prices):
 pass

print(maxProfit([7,1,5,3,6,4]))
print(maxProfit([7,6,4,3,1]))
print(maxProfit([2,4,1]))`,
    constraints: "1 ≤ prices.length ≤ 10⁵, 0 ≤ prices[i] ≤ 10⁴, Only one transaction allowed",
    createdAt: new Date()
},

{
    problemId: "best-time-stock",
    language: "python",
    hintLevel: 2,
    hintText: "At each step calculate current profit using the smallest price so far and update the maximum profit.",
    starterCode: `def maxProfit(prices):
 pass

print(maxProfit([7,1,5,3,6,4]))
print(maxProfit([7,6,4,3,1]))
print(maxProfit([2,4,1]))`,
    constraints: "1 ≤ prices.length ≤ 10⁵, 0 ≤ prices[i] ≤ 10⁴, Only one transaction allowed",
    createdAt: new Date()
},

{
    problemId: "best-time-stock",
    language: "java",
    hintLevel: 1,
    hintText: "Iterate through the array while maintaining the minimum stock price seen so far.",
    starterCode: `class Solution{
 public static int maxProfit(int[] prices){
  return 0;
 }

 public static void main(String[] args){
  System.out.println(maxProfit(new int[]{7,1,5,3,6,4}));
  System.out.println(maxProfit(new int[]{7,6,4,3,1}));
  System.out.println(maxProfit(new int[]{2,4,1}));
 }
}`,
    constraints: "1 ≤ prices.length ≤ 10⁵, 0 ≤ prices[i] ≤ 10⁴, Only one transaction allowed",
    createdAt: new Date()
},

{
    problemId: "best-time-stock",
    language: "java",
    hintLevel: 2,
    hintText: "For each day, calculate potential profit using (currentPrice - minPriceSoFar) and update the maximum.",
    starterCode: `class Solution{
 public static int maxProfit(int[] prices){
  return 0;
 }

 public static void main(String[] args){
  System.out.println(maxProfit(new int[]{7,1,5,3,6,4}));
  System.out.println(maxProfit(new int[]{7,6,4,3,1}));
  System.out.println(maxProfit(new int[]{2,4,1}));
 }
}`,
    constraints: "1 ≤ prices.length ≤ 10⁵, 0 ≤ prices[i] ≤ 10⁴, Only one transaction allowed",
    createdAt: new Date()
}

],

"top-k-frequent-elements": [
  {
    problemId: "top-k-frequent-elements",
    language: "javascript",
    hintLevel: 1,
    hintText: "Count the frequency of each element using a hashmap or object, then sort or select the k most frequent.",
    starterCode: `function topKFrequent(nums,k){
 // Write your solution here
}`,
    constraints: "1 ≤ nums.length ≤ 10⁵, 1 ≤ k ≤ number of unique elements",
    createdAt: new Date()
  },
  {
    problemId: "top-k-frequent-elements",
    language: "javascript",
    hintLevel: 2,
    hintText: "Use a heap (priority queue) or bucket sort to efficiently find the top k elements without sorting the whole array.",
    starterCode: `function topKFrequent(nums,k){
 // Write your solution here
}`,
    constraints: "1 ≤ nums.length ≤ 10⁵, 1 ≤ k ≤ number of unique elements",
    createdAt: new Date()
  },
  {
    problemId: "top-k-frequent-elements",
    language: "python",
    hintLevel: 1,
    hintText: "Count element frequencies using collections.Counter or a dictionary, then select the k largest frequencies.",
    starterCode: `def topKFrequent(nums,k):
    pass`,
    constraints: "1 ≤ nums.length ≤ 10⁵, 1 ≤ k ≤ number of unique elements",
    createdAt: new Date()
  },
  {
    problemId: "top-k-frequent-elements",
    language: "python",
    hintLevel: 2,
    hintText: "Use a heapq (min-heap) to keep track of top k frequent elements, or use bucket sort based on frequencies for O(n) time.",
    starterCode: `def topKFrequent(nums,k):
    pass`,
    constraints: "1 ≤ nums.length ≤ 10⁵, 1 ≤ k ≤ number of unique elements",
    createdAt: new Date()
  },
  {
    problemId: "top-k-frequent-elements",
    language: "java",
    hintLevel: 1,
    hintText: "Use a HashMap to count element frequencies, then sort or select top k entries based on frequency.",
    starterCode: `class Solution{
 public static int[] topKFrequent(int[] nums,int k){
  return new int[0];
 }
}`,
    constraints: "1 ≤ nums.length ≤ 10⁵, 1 ≤ k ≤ number of unique elements",
    createdAt: new Date()
  },
  {
    problemId: "top-k-frequent-elements",
    language: "java",
    hintLevel: 2,
    hintText: "Use a PriorityQueue (min-heap) to maintain the top k frequent elements efficiently, or bucket sort by frequency.",
    starterCode: `class Solution{
 public static int[] topKFrequent(int[] nums,int k){
  return new int[0];
 }
}`,
    constraints: "1 ≤ nums.length ≤ 10⁵, 1 ≤ k ≤ number of unique elements",
    createdAt: new Date()
  }
],
"daily-temperatures": [

{
  problemId: "daily-temperatures",
  language: "javascript",
  hintLevel: 1,
  hintText: "You need to find the next warmer temperature for each day. A stack can help track unresolved days.",
  starterCode: `function dailyTemperatures(temperatures){
 // Write your solution here
}

console.log(dailyTemperatures([73,74,75,71,69,72,76,73]));
console.log(dailyTemperatures([30,40,50,60]));
console.log(dailyTemperatures([30,60,90]));`,
  constraints: "1 ≤ temperatures.length ≤ 10⁵, 30 ≤ temperatures[i] ≤ 100, Return array length equal to input length",
  createdAt: new Date()
},

{
  problemId: "daily-temperatures",
  language: "javascript",
  hintLevel: 2,
  hintText: "Use a monotonic decreasing stack storing indices. When a warmer temperature appears, resolve previous indices.",
  starterCode: `function dailyTemperatures(temperatures){
 // Write your solution here
}

console.log(dailyTemperatures([73,74,75,71,69,72,76,73]));
console.log(dailyTemperatures([30,40,50,60]));
console.log(dailyTemperatures([30,60,90]));`,
  constraints: "1 ≤ temperatures.length ≤ 10⁵, 30 ≤ temperatures[i] ≤ 100, Return array length equal to input length",
  createdAt: new Date()
},

{
  problemId: "daily-temperatures",
  language: "python",
  hintLevel: 1,
  hintText: "Think about how to remember previous days that are still waiting for a warmer temperature.",
  starterCode: `def dailyTemperatures(temperatures):
    pass

print(dailyTemperatures([73,74,75,71,69,72,76,73]))
print(dailyTemperatures([30,40,50,60]))
print(dailyTemperatures([30,60,90]))`,
  constraints: "1 ≤ temperatures.length ≤ 10⁵, 30 ≤ temperatures[i] ≤ 100, Return array length equal to input length",
  createdAt: new Date()
},

{
  problemId: "daily-temperatures",
  language: "python",
  hintLevel: 2,
  hintText: "Use a stack storing indices of decreasing temperatures. When current temperature is higher, pop and compute the waiting days.",
  starterCode: `def dailyTemperatures(temperatures):
    pass

print(dailyTemperatures([73,74,75,71,69,72,76,73]))
print(dailyTemperatures([30,40,50,60]))
print(dailyTemperatures([30,60,90]))`,
  constraints: "1 ≤ temperatures.length ≤ 10⁵, 30 ≤ temperatures[i] ≤ 100, Return array length equal to input length",
  createdAt: new Date()
},

{
  problemId: "daily-temperatures",
  language: "java",
  hintLevel: 1,
  hintText: "Some days must wait for a warmer temperature. Keep track of these indices using a stack.",
  starterCode: `class Solution{
 public static int[] dailyTemperatures(int[] temperatures){
  return new int[0];
 }

 public static void main(String[] args){
  System.out.println(java.util.Arrays.toString(dailyTemperatures(new int[]{73,74,75,71,69,72,76,73})));
 }
}`,
  constraints: "1 ≤ temperatures.length ≤ 10⁵, 30 ≤ temperatures[i] ≤ 100, Return array length equal to input length",
  createdAt: new Date()
},

{
  problemId: "daily-temperatures",
  language: "java",
  hintLevel: 2,
  hintText: "Maintain a stack of indices with decreasing temperatures. When a warmer day appears, calculate the difference in indices.",
  starterCode: `class Solution{
 public static int[] dailyTemperatures(int[] temperatures){
  return new int[0];
 }

 public static void main(String[] args){
  System.out.println(java.util.Arrays.toString(dailyTemperatures(new int[]{73,74,75,71,69,72,76,73})));
 }
}`,
  constraints: "1 ≤ temperatures.length ≤ 10⁵, 30 ≤ temperatures[i] ≤ 100, Return array length equal to input length",
  createdAt: new Date()
}

],
"house-robber": [

{
  problemId: "house-robber",
  language: "javascript",
  hintLevel: 1,
  hintText: "At each house you have two choices: rob it or skip it.",
  starterCode: `function rob(nums){
 // Write your solution here
}

console.log(rob([1,2,3,1]));
console.log(rob([2,7,9,3,1]));
console.log(rob([2,1,1,2]));`,
  constraints: "1 ≤ nums.length ≤ 100, 0 ≤ nums[i] ≤ 400, Cannot rob adjacent houses",
  createdAt: new Date()
},

{
  problemId: "house-robber",
  language: "javascript",
  hintLevel: 2,
  hintText: "Use dynamic programming: at each index compute max(current house + value two steps back, previous house result).",
  starterCode: `function rob(nums){
 // Write your solution here
}

console.log(rob([1,2,3,1]));
console.log(rob([2,7,9,3,1]));
console.log(rob([2,1,1,2]));`,
  constraints: "1 ≤ nums.length ≤ 100, 0 ≤ nums[i] ≤ 400, Cannot rob adjacent houses",
  createdAt: new Date()
},

{
  problemId: "house-robber",
  language: "python",
  hintLevel: 1,
  hintText: "For every house decide whether robbing it gives more money than skipping it.",
  starterCode: `def rob(nums):
 pass

print(rob([1,2,3,1]))
print(rob([2,7,9,3,1]))
print(rob([2,1,1,2]))`,
  constraints: "1 ≤ nums.length ≤ 100, 0 ≤ nums[i] ≤ 400, Cannot rob adjacent houses",
  createdAt: new Date()
},

{
  problemId: "house-robber",
  language: "python",
  hintLevel: 2,
  hintText: "Use DP relation: dp[i] = max(dp[i-1], nums[i] + dp[i-2]).",
  starterCode: `def rob(nums):
 pass

print(rob([1,2,3,1]))
print(rob([2,7,9,3,1]))
print(rob([2,1,1,2]))`,
  constraints: "1 ≤ nums.length ≤ 100, 0 ≤ nums[i] ≤ 400, Cannot rob adjacent houses",
  createdAt: new Date()
},

{
  problemId: "house-robber",
  language: "java",
  hintLevel: 1,
  hintText: "For each house choose between robbing it or skipping it based on which gives higher profit.",
  starterCode: `class Solution{
 public static int rob(int[] nums){
  return 0;
 }

 public static void main(String[] args){
  System.out.println(rob(new int[]{1,2,3,1}));
  System.out.println(rob(new int[]{2,7,9,3,1}));
  System.out.println(rob(new int[]{2,1,1,2}));
 }
}`,
  constraints: "1 ≤ nums.length ≤ 100, 0 ≤ nums[i] ≤ 400, Cannot rob adjacent houses",
  createdAt: new Date()
},

{
  problemId: "house-robber",
  language: "java",
  hintLevel: 2,
  hintText: "Use dynamic programming: keep track of the best profit including or excluding the current house.",
  starterCode: `class Solution{
 public static int rob(int[] nums){
  return 0;
 }

 public static void main(String[] args){
  System.out.println(rob(new int[]{1,2,3,1}));
  System.out.println(rob(new int[]{2,7,9,3,1}));
  System.out.println(rob(new int[]{2,1,1,2}));
 }
}`,
  constraints: "1 ≤ nums.length ≤ 100, 0 ≤ nums[i] ≤ 400, Cannot rob adjacent houses",
  createdAt: new Date()
}

],

"coin-change": [

{
  problemId: "coin-change",
  language: "javascript",
  hintLevel: 1,
  hintText: "Try to build the solution for smaller amounts first and reuse those results.",
  starterCode: `function coinChange(coins,amount){
 // Write your solution here
}

console.log(coinChange([1,2,5],11));
console.log(coinChange([2],3));
console.log(coinChange([1],0));`,
  constraints: "1 ≤ coins.length ≤ 12, 1 ≤ coins[i] ≤ 2³¹ − 1, 0 ≤ amount ≤ 10⁴",
  createdAt: new Date()
},

{
  problemId: "coin-change",
  language: "javascript",
  hintLevel: 2,
  hintText: "Use dynamic programming: dp[i] = minimum coins needed for amount i. For each coin update dp[i] = min(dp[i], dp[i-coin] + 1).",
  starterCode: `function coinChange(coins,amount){
 // Write your solution here
}

console.log(coinChange([1,2,5],11));
console.log(coinChange([2],3));
console.log(coinChange([1],0));`,
  constraints: "1 ≤ coins.length ≤ 12, 1 ≤ coins[i] ≤ 2³¹ − 1, 0 ≤ amount ≤ 10⁴",
  createdAt: new Date()
},

{
  problemId: "coin-change",
  language: "python",
  hintLevel: 1,
  hintText: "Think about solving the problem for smaller amounts and building up to the target amount.",
  starterCode: `def coinChange(coins,amount):
 pass

print(coinChange([1,2,5],11))
print(coinChange([2],3))
print(coinChange([1],0))`,
  constraints: "1 ≤ coins.length ≤ 12, 1 ≤ coins[i] ≤ 2³¹ − 1, 0 ≤ amount ≤ 10⁴",
  createdAt: new Date()
},

{
  problemId: "coin-change",
  language: "python",
  hintLevel: 2,
  hintText: "Use DP array where dp[i] stores the minimum coins needed for amount i. Update using previous results.",
  starterCode: `def coinChange(coins,amount):
 pass

print(coinChange([1,2,5],11))
print(coinChange([2],3))
print(coinChange([1],0))`,
  constraints: "1 ≤ coins.length ≤ 12, 1 ≤ coins[i] ≤ 2³¹ − 1, 0 ≤ amount ≤ 10⁴",
  createdAt: new Date()
},

{
  problemId: "coin-change",
  language: "java",
  hintLevel: 1,
  hintText: "Solve the problem for smaller amounts first and store results to avoid recomputation.",
  starterCode: `class Solution{
 public static int coinChange(int[] coins,int amount){
  return -1;
 }

 public static void main(String[] args){
  System.out.println(coinChange(new int[]{1,2,5},11));
 }
}`,
  constraints: "1 ≤ coins.length ≤ 12, 1 ≤ coins[i] ≤ 2³¹ − 1, 0 ≤ amount ≤ 10⁴",
  createdAt: new Date()
},

{
  problemId: "coin-change",
  language: "java",
  hintLevel: 2,
  hintText: "Create a DP array where dp[i] represents the minimum coins needed for amount i and update using previous states.",
  starterCode: `class Solution{
 public static int coinChange(int[] coins,int amount){
  return -1;
 }

 public static void main(String[] args){
  System.out.println(coinChange(new int[]{1,2,5},11));
 }
}`,
  constraints: "1 ≤ coins.length ≤ 12, 1 ≤ coins[i] ≤ 2³¹ − 1, 0 ≤ amount ≤ 10⁴",
  createdAt: new Date()
}

],
"contains-duplicate": [

{
  problemId: "contains-duplicate",
  language: "javascript",
  hintLevel: 1,
  hintText: "Try using a HashSet to keep track of seen numbers while iterating through the array.",
  starterCode: `function containsDuplicate(nums) {
  // Write your solution here
}

console.log(containsDuplicate([1,2,3,1])); 
console.log(containsDuplicate([1,2,3,4])); 
console.log(containsDuplicate([1,1,1,3,3,4]));`,
  constraints: "1 ≤ nums.length ≤ 10⁵, -10⁹ ≤ nums[i] ≤ 10⁹, Return true if duplicate exists",
  createdAt: new Date()
},

{
  problemId: "contains-duplicate",
  language: "javascript",
  hintLevel: 2,
  hintText: "While iterating, check if the number already exists in the set. If it does, return true immediately; otherwise add it to the set.",
  starterCode: `function containsDuplicate(nums) {
  // Write your solution here
}

console.log(containsDuplicate([1,2,3,1])); 
console.log(containsDuplicate([1,2,3,4])); 
console.log(containsDuplicate([1,1,1,3,3,4]));`,
  constraints: "1 ≤ nums.length ≤ 10⁵, -10⁹ ≤ nums[i] ≤ 10⁹, Return true if duplicate exists",
  createdAt: new Date()
},

{
  problemId: "contains-duplicate",
  language: "python",
  hintLevel: 1,
  hintText: "Use a set to store numbers you have seen so far while iterating.",
  starterCode: `def containsDuplicate(nums):
    pass

print(containsDuplicate([1,2,3,1]))
print(containsDuplicate([1,2,3,4]))
print(containsDuplicate([1,1,1,3,3,4]))`,
  constraints: "1 ≤ nums.length ≤ 10⁵, -10⁹ ≤ nums[i] ≤ 10⁹, Return true if duplicate exists",
  createdAt: new Date()
},

{
  problemId: "contains-duplicate",
  language: "python",
  hintLevel: 2,
  hintText: "Check for each number: if it's already in the set return True; else, add it to the set. Return False at the end.",
  starterCode: `def containsDuplicate(nums):
    pass

print(containsDuplicate([1,2,3,1]))
print(containsDuplicate([1,2,3,4]))
print(containsDuplicate([1,1,1,3,3,4]))`,
  constraints: "1 ≤ nums.length ≤ 10⁵, -10⁹ ≤ nums[i] ≤ 10⁹, Return true if duplicate exists",
  createdAt: new Date()
},

{
  problemId: "contains-duplicate",
  language: "java",
  hintLevel: 1,
  hintText: "Use a HashSet to keep track of numbers as you iterate through the array.",
  starterCode: `class Solution {
    public static boolean containsDuplicate(int[] nums) {
        return false;
    }

    public static void main(String[] args) {
        System.out.println(containsDuplicate(new int[]{1,2,3,1}));
        System.out.println(containsDuplicate(new int[]{1,2,3,4}));
        System.out.println(containsDuplicate(new int[]{1,1,1,3,3,4}));
    }
}`,
  constraints: "1 ≤ nums.length ≤ 10⁵, -10⁹ ≤ nums[i] ≤ 10⁹, Return true if duplicate exists",
  createdAt: new Date()
},

{
  problemId: "contains-duplicate",
  language: "java",
  hintLevel: 2,
  hintText: "While iterating, if the HashSet already contains the current number, return true immediately. Otherwise, add it to the set. Return false if no duplicates are found.",
  starterCode: `class Solution {
    public static boolean containsDuplicate(int[] nums) {
        return false;
    }

    public static void main(String[] args) {
        System.out.println(containsDuplicate(new int[]{1,2,3,1}));
        System.out.println(containsDuplicate(new int[]{1,2,3,4}));
        System.out.println(containsDuplicate(new int[]{1,1,1,3,3,4}));
    }
}`,
  constraints: "1 ≤ nums.length ≤ 10⁵, -10⁹ ≤ nums[i] ≤ 10⁹, Return true if duplicate exists",
  createdAt: new Date()
}

],

"gas-station": [

{
  problemId: "gas-station",
  language: "javascript",
  hintLevel: 1,
  hintText: "Calculate the net gain at each station as gas[i] - cost[i]. If the total sum of net gains is negative, completing the circuit is impossible.",
  starterCode: `function canCompleteCircuit(gas, cost) {
  // Write your solution here
}

console.log(canCompleteCircuit([1,2,3,4,5],[3,4,5,1,2]));
console.log(canCompleteCircuit([2,3,4],[3,4,3]));
console.log(canCompleteCircuit([5],[4]));`,
  constraints: "1 ≤ n ≤ 10⁵, 0 ≤ gas[i], cost[i] ≤ 10⁴, solution unique if exists",
  createdAt: new Date()
},

{
  problemId: "gas-station",
  language: "javascript",
  hintLevel: 2,
  hintText: "Use a greedy approach: iterate through stations, track current tank. If tank becomes negative, reset starting index to next station and tank to 0.",
  starterCode: `function canCompleteCircuit(gas, cost) {
  // Write your solution here
}

console.log(canCompleteCircuit([1,2,3,4,5],[3,4,5,1,2]));
console.log(canCompleteCircuit([2,3,4],[3,4,3]));
console.log(canCompleteCircuit([5],[4]));`,
  constraints: "1 ≤ n ≤ 10⁵, 0 ≤ gas[i], cost[i] ≤ 10⁴, solution unique if exists",
  createdAt: new Date()
},

{
  problemId: "gas-station",
  language: "python",
  hintLevel: 1,
  hintText: "Compute net gain for each station: gas[i] - cost[i]. If total sum < 0, return -1 immediately.",
  starterCode: `def canCompleteCircuit(gas, cost):
    pass

print(canCompleteCircuit([1,2,3,4,5],[3,4,5,1,2]))
print(canCompleteCircuit([2,3,4],[3,4,3]))
print(canCompleteCircuit([5],[4]))`,
  constraints: "1 ≤ n ≤ 10⁵, 0 ≤ gas[i], cost[i] ≤ 10⁴, solution unique if exists",
  createdAt: new Date()
},

{
  problemId: "gas-station",
  language: "python",
  hintLevel: 2,
  hintText: "Iterate stations with a current tank. If it drops below 0, reset start index to next station and current tank to 0. Return start index at the end.",
  starterCode: `def canCompleteCircuit(gas, cost):
    pass

print(canCompleteCircuit([1,2,3,4,5],[3,4,5,1,2]))
print(canCompleteCircuit([2,3,4],[3,4,3]))
print(canCompleteCircuit([5],[4]))`,
  constraints: "1 ≤ n ≤ 10⁵, 0 ≤ gas[i], cost[i] ≤ 10⁴, solution unique if exists",
  createdAt: new Date()
},

{
  problemId: "gas-station",
  language: "java",
  hintLevel: 1,
  hintText: "Compute net gas for each station: gas[i] - cost[i]. If total net < 0, return -1 as it's impossible.",
  starterCode: `class Solution {
    public static int canCompleteCircuit(int[] gas, int[] cost) {
        return -1;
    }

    public static void main(String[] args) {
        System.out.println(canCompleteCircuit(new int[]{1,2,3,4,5}, new int[]{3,4,5,1,2}));
        System.out.println(canCompleteCircuit(new int[]{2,3,4}, new int[]{3,4,3}));
    }
}`,
  constraints: "1 ≤ n ≤ 10⁵, 0 ≤ gas[i], cost[i] ≤ 10⁴, solution unique if exists",
  createdAt: new Date()
},

{
  problemId: "gas-station",
  language: "java",
  hintLevel: 2,
  hintText: "Iterate stations, maintain a tank. If tank < 0, move start index to next station and reset tank. Return start index at the end.",
  starterCode: `class Solution {
    public static int canCompleteCircuit(int[] gas, int[] cost) {
        return -1;
    }

    public static void main(String[] args) {
        System.out.println(canCompleteCircuit(new int[]{1,2,3,4,5}, new int[]{3,4,5,1,2}));
        System.out.println(canCompleteCircuit(new int[]{2,3,4}, new int[]{3,4,3}));
    }
}`,
  constraints: "1 ≤ n ≤ 10⁵, 0 ≤ gas[i], cost[i] ≤ 10⁴, solution unique if exists",
  createdAt: new Date()
}

],
"longest-palindromic-substring": [

{
  problemId: "longest-palindromic-substring",
  language: "javascript",
  hintLevel: 1,
  hintText: "Check every substring by expanding around each center. A palindrome has symmetry: left and right characters must match.",
  starterCode: `function longestPalindrome(s) {
  // Write your solution here
}

console.log(longestPalindrome("babad"));
console.log(longestPalindrome("cbbd"));
console.log(longestPalindrome("a"));`,
  constraints: "1 ≤ s.length ≤ 1000, s consists of letters and digits",
  createdAt: new Date()
},

{
  problemId: "longest-palindromic-substring",
  language: "javascript",
  hintLevel: 2,
  hintText: "Iterate over each character as the center. Expand for both odd and even length palindromes. Track the longest substring found.",
  starterCode: `function longestPalindrome(s) {
  // Write your solution here
}

console.log(longestPalindrome("babad"));
console.log(longestPalindrome("cbbd"));
console.log(longestPalindrome("a"));`,
  constraints: "1 ≤ s.length ≤ 1000, s consists of letters and digits",
  createdAt: new Date()
},

{
  problemId: "longest-palindromic-substring",
  language: "python",
  hintLevel: 1,
  hintText: "Expand around each index as a potential palindrome center. Compare left and right characters until they differ.",
  starterCode: `def longestPalindrome(s):
    pass

print(longestPalindrome("babad"))
print(longestPalindrome("cbbd"))
print(longestPalindrome("a"))`,
  constraints: "1 ≤ s.length ≤ 1000, s consists of letters and digits",
  createdAt: new Date()
},

{
  problemId: "longest-palindromic-substring",
  language: "python",
  hintLevel: 2,
  hintText: "Check both odd-length and even-length palindromes at each index. Keep track of the start and end indices of the longest palindrome.",
  starterCode: `def longestPalindrome(s):
    pass

print(longestPalindrome("babad"))
print(longestPalindrome("cbbd"))
print(longestPalindrome("a"))`,
  constraints: "1 ≤ s.length ≤ 1000, s consists of letters and digits",
  createdAt: new Date()
},

{
  problemId: "longest-palindromic-substring",
  language: "java",
  hintLevel: 1,
  hintText: "Consider each character as the center. Expand outward to check if characters on both sides match.",
  starterCode: `class Solution {
    public static String longestPalindrome(String s) {
        return "";
    }

    public static void main(String[] args) {
        System.out.println(longestPalindrome("babad"));
        System.out.println(longestPalindrome("cbbd"));
    }
}`,
  constraints: "1 ≤ s.length ≤ 1000, s consists of letters and digits",
  createdAt: new Date()
},

{
  problemId: "longest-palindromic-substring",
  language: "java",
  hintLevel: 2,
  hintText: "Expand around centers for odd and even lengths. Track longest start and end indices, then return s.substring(start, end+1).",
  starterCode: `class Solution {
    public static String longestPalindrome(String s) {
        return "";
    }

    public static void main(String[] args) {
        System.out.println(longestPalindrome("babad"));
        System.out.println(longestPalindrome("cbbd"));
    }
}`,
  constraints: "1 ≤ s.length ≤ 1000, s consists of letters and digits",
  createdAt: new Date()
}

]
,
"number-of-islands": [

{
  problemId: "number-of-islands",
  language: "javascript",
  hintLevel: 1,
  hintText: "Traverse the grid. When you find a '1', start exploring connected land (up, down, left, right) and mark visited cells.",
  starterCode: `function numIslands(grid){
 // Write your solution here
}`,
  constraints: "1 ≤ m, n ≤ 300, grid consists of '1' and '0'",
  createdAt: new Date()
},

{
  problemId: "number-of-islands",
  language: "javascript",
  hintLevel: 2,
  hintText: "Use DFS (recursive) or BFS (queue) to mark all connected '1's as visited, then increment island count.",
  starterCode: `function numIslands(grid){
 // Write your solution here
}`,
  constraints: "1 ≤ m, n ≤ 300, grid consists of '1' and '0'",
  createdAt: new Date()
},

{
  problemId: "number-of-islands",
  language: "python",
  hintLevel: 1,
  hintText: "Scan the grid. When a '1' is found, explore all connected '1's recursively or using a queue.",
  starterCode: `def numIslands(grid):
 pass`,
  constraints: "1 ≤ m, n ≤ 300, grid consists of '1' and '0'",
  createdAt: new Date()
},

{
  problemId: "number-of-islands",
  language: "python",
  hintLevel: 2,
  hintText: "Mark each visited land cell to avoid counting it again. Increment count for each new DFS/BFS start.",
  starterCode: `def numIslands(grid):
 pass`,
  constraints: "1 ≤ m, n ≤ 300, grid consists of '1' and '0'",
  createdAt: new Date()
},

{
  problemId: "number-of-islands",
  language: "java",
  hintLevel: 1,
  hintText: "Iterate through the grid. On finding '1', start DFS to explore and mark connected lands.",
  starterCode: `class Solution{
 public static int numIslands(char[][] grid){
  return 0;
 }
}`,
  constraints: "1 ≤ m, n ≤ 300, grid consists of '1' and '0'",
  createdAt: new Date()
},

{
  problemId: "number-of-islands",
  language: "java",
  hintLevel: 2,
  hintText: "Use DFS or BFS to traverse all connected '1's from a starting cell and mark them visited. Increase island count for each DFS/BFS initiation.",
  starterCode: `class Solution{
 public static int numIslands(char[][] grid){
  return 0;
 }
}`,
  constraints: "1 ≤ m, n ≤ 300, grid consists of '1' and '0'",
  createdAt: new Date()
}

],
"longest-consecutive-sequence": [

{
  problemId: "longest-consecutive-sequence",
  language: "javascript",
  hintLevel: 1,
  hintText: "Store all numbers in a Set. Then, for each number, check if it is the start of a sequence (num-1 not in set).",
  starterCode: `function longestConsecutive(nums) {
  // Write your solution here
}`,
  constraints: "0 ≤ nums.length ≤ 10⁵, -10⁹ ≤ nums[i] ≤ 10⁹",
  createdAt: new Date()
},

{
  problemId: "longest-consecutive-sequence",
  language: "javascript",
  hintLevel: 2,
  hintText: "From each sequence start, count consecutive numbers (num+1, num+2...) in the set to determine max length.",
  starterCode: `function longestConsecutive(nums) {
  // Write your solution here
}`,
  constraints: "0 ≤ nums.length ≤ 10⁵, -10⁹ ≤ nums[i] ≤ 10⁹",
  createdAt: new Date()
},

{
  problemId: "longest-consecutive-sequence",
  language: "python",
  hintLevel: 1,
  hintText: "Use a set to store all numbers. Only start counting from numbers where num-1 is not in the set.",
  starterCode: `def longestConsecutive(nums):
    pass`,
  constraints: "0 ≤ nums.length ≤ 10⁵, -10⁹ ≤ nums[i] ≤ 10⁹",
  createdAt: new Date()
},

{
  problemId: "longest-consecutive-sequence",
  language: "python",
  hintLevel: 2,
  hintText: "Iterate from sequence starts and count consecutive numbers in the set. Track the maximum length.",
  starterCode: `def longestConsecutive(nums):
    pass`,
  constraints: "0 ≤ nums.length ≤ 10⁵, -10⁹ ≤ nums[i] ≤ 10⁹",
  createdAt: new Date()
},

{
  problemId: "longest-consecutive-sequence",
  language: "java",
  hintLevel: 1,
  hintText: "Put all numbers in a HashSet. For each number, only consider it a sequence start if num-1 is not in the set.",
  starterCode: `class Solution{
 public static int longestConsecutive(int[] nums){
  return 0;
 }
}`,
  constraints: "0 ≤ nums.length ≤ 10⁵, -10⁹ ≤ nums[i] ≤ 10⁹",
  createdAt: new Date()
},

{
  problemId: "longest-consecutive-sequence",
  language: "java",
  hintLevel: 2,
  hintText: "From each sequence start, count consecutive numbers (num+1, num+2...) in the HashSet to find max length.",
  starterCode: `class Solution{
 public static int longestConsecutive(int[] nums){
  return 0;
 }
}`,
  constraints: "0 ≤ nums.length ≤ 10⁵, -10⁹ ≤ nums[i] ≤ 10⁹",
  createdAt: new Date()
}

],
"set-matrix-zeroes": [

{
  problemId: "set-matrix-zeroes",
  language: "javascript",
  hintLevel: 1,
  hintText: "Use the first row and first column of the matrix to mark which rows and columns should be zeroed.",
  starterCode: `function setZeroes(matrix) {
  // Write your solution here
}`,
  constraints: "1 ≤ m, n ≤ 200",
  createdAt: new Date()
},

{
  problemId: "set-matrix-zeroes",
  language: "javascript",
  hintLevel: 2,
  hintText: "First pass: mark zeros in first row/column. Second pass: iterate through matrix (excluding first row/column) and set zeros based on markers. Finally, handle first row and first column separately.",
  starterCode: `function setZeroes(matrix) {
  // Write your solution here
}`,
  constraints: "1 ≤ m, n ≤ 200",
  createdAt: new Date()
},

{
  problemId: "set-matrix-zeroes",
  language: "python",
  hintLevel: 1,
  hintText: "Use the first row and column as markers to indicate which rows and columns should be zeroed.",
  starterCode: `def setZeroes(matrix):
    pass`,
  constraints: "1 ≤ m, n ≤ 200",
  createdAt: new Date()
},

{
  problemId: "set-matrix-zeroes",
  language: "python",
  hintLevel: 2,
  hintText: "Mark zeros in first row/column, then zero out the rest of the matrix using these markers. Finally, update the first row and first column.",
  starterCode: `def setZeroes(matrix):
    pass`,
  constraints: "1 ≤ m, n ≤ 200",
  createdAt: new Date()
},

{
  problemId: "set-matrix-zeroes",
  language: "java",
  hintLevel: 1,
  hintText: "Use the first row and column of the matrix as markers to track which rows and columns should be set to zero.",
  starterCode: `class Solution{
 public static void setZeroes(int[][] matrix){
 }
}`,
  constraints: "1 ≤ m, n ≤ 200",
  createdAt: new Date()
},

{
  problemId: "set-matrix-zeroes",
  language: "java",
  hintLevel: 2,
  hintText: "First, mark zeros in the first row and column. Then, iterate through the rest of the matrix to set zeros according to markers. Finally, update the first row and column separately.",
  starterCode: `class Solution{
 public static void setZeroes(int[][] matrix){
 }
}`,
  constraints: "1 ≤ m, n ≤ 200",
  createdAt: new Date()
}

],
"permutations": [

{
  problemId: "permutations",
  language: "javascript",
  hintLevel: 1,
  hintText: "Use backtracking to build permutations: pick each number, explore remaining numbers recursively, then backtrack.",
  starterCode: `function permute(nums) {
  // Write your solution here
}`,
  constraints: "1 ≤ nums.length ≤ 6, all unique",
  createdAt: new Date()
},

{
  problemId: "permutations",
  language: "javascript",
  hintLevel: 2,
  hintText: "Maintain a path array for current permutation and a boolean array or set to track used elements. Recurse until path length equals nums.length, then add to results.",
  starterCode: `function permute(nums) {
  // Write your solution here
}`,
  constraints: "1 ≤ nums.length ≤ 6, all unique",
  createdAt: new Date()
},

{
  problemId: "permutations",
  language: "python",
  hintLevel: 1,
  hintText: "Use backtracking: choose a number, recurse with remaining numbers, then backtrack to explore other options.",
  starterCode: `def permute(nums):
    pass`,
  constraints: "1 ≤ nums.length ≤ 6, all unique",
  createdAt: new Date()
},

{
  problemId: "permutations",
  language: "python",
  hintLevel: 2,
  hintText: "Maintain a current path and a used set. Recurse until path length equals nums length, append copy of path to results, then backtrack.",
  starterCode: `def permute(nums):
    pass`,
  constraints: "1 ≤ nums.length ≤ 6, all unique",
  createdAt: new Date()
},

{
  problemId: "permutations",
  language: "java",
  hintLevel: 1,
  hintText: "Use backtracking: choose each number, recurse to build permutation, then backtrack to explore remaining numbers.",
  starterCode: `class Solution{
 public static java.util.List<java.util.List<Integer>> permute(int[] nums){
  return new java.util.ArrayList<>();
 }
}`,
  constraints: "1 ≤ nums.length ≤ 6, all unique",
  createdAt: new Date()
},

{
  problemId: "permutations",
  language: "java",
  hintLevel: 2,
  hintText: "Maintain a current path list and a boolean array to track used numbers. Recurse until path length equals nums.length, add a copy to results, then backtrack.",
  starterCode: `class Solution{
 public static java.util.List<java.util.List<Integer>> permute(int[] nums){
  return new java.util.ArrayList<>();
 }
}`,
  constraints: "1 ≤ nums.length ≤ 6, all unique",
  createdAt: new Date()
}

],
"search-2d-matrix": [

{
  problemId: "search-2d-matrix",
  language: "javascript",
  hintLevel: 1,
  hintText: "Treat the 2D matrix as a flattened sorted array and use binary search.",
  starterCode: `function searchMatrix(matrix, target) {
  // Write your solution here
}`,
  constraints: "1 ≤ m, n ≤ 100",
  createdAt: new Date()
},

{
  problemId: "search-2d-matrix",
  language: "javascript",
  hintLevel: 2,
  hintText: "Map 1D index to 2D: row = Math.floor(index / n), col = index % n. Perform standard binary search using these indices.",
  starterCode: `function searchMatrix(matrix, target) {
  // Write your solution here
}`,
  constraints: "1 ≤ m, n ≤ 100",
  createdAt: new Date()
},

{
  problemId: "search-2d-matrix",
  language: "python",
  hintLevel: 1,
  hintText: "Consider the 2D matrix as a single sorted list and apply binary search.",
  starterCode: `def searchMatrix(matrix,target):
    pass`,
  constraints: "1 ≤ m, n ≤ 100",
  createdAt: new Date()
},

{
  problemId: "search-2d-matrix",
  language: "python",
  hintLevel: 2,
  hintText: "Use row = index // n and col = index % n to map 1D index to 2D coordinates during binary search.",
  starterCode: `def searchMatrix(matrix,target):
    pass`,
  constraints: "1 ≤ m, n ≤ 100",
  createdAt: new Date()
},

{
  problemId: "search-2d-matrix",
  language: "java",
  hintLevel: 1,
  hintText: "Think of the matrix as a 1D sorted array and perform binary search.",
  starterCode: `class Solution{
 public static boolean searchMatrix(int[][] matrix,int target){
  return false;
 }
}`,
  constraints: "1 ≤ m, n ≤ 100",
  createdAt: new Date()
},

{
  problemId: "search-2d-matrix",
  language: "java",
  hintLevel: 2,
  hintText: "Map 1D index to 2D: row = index / n, col = index % n, then apply binary search on the flattened indices.",
  starterCode: `class Solution{
 public static boolean searchMatrix(int[][] matrix,int target){
  return false;
 }
}`,
  constraints: "1 ≤ m, n ≤ 100",
  createdAt: new Date()
}

],
"merge-two-sorted-lists": [

{
  problemId: "merge-two-sorted-lists",
  language: "javascript",
  hintLevel: 1,
  hintText: "Compare the heads of both lists and attach the smaller node to the merged list. Continue until one list is exhausted.",
  starterCode: `function mergeTwoLists(list1, list2) {
  // Write your solution here
}`,
  constraints: "Both lists are sorted, length 0-50",
  createdAt: new Date()
},

{
  problemId: "merge-two-sorted-lists",
  language: "javascript",
  hintLevel: 2,
  hintText: "Use a dummy node to simplify handling the head. Iteratively attach nodes or use recursion for a concise solution.",
  starterCode: `function mergeTwoLists(list1, list2) {
  // Write your solution here
}`,
  constraints: "Both lists are sorted, length 0-50",
  createdAt: new Date()
},

{
  problemId: "merge-two-sorted-lists",
  language: "python",
  hintLevel: 1,
  hintText: "Compare the first elements of both lists and attach the smaller one. Continue until one list is empty.",
  starterCode: `def mergeTwoLists(list1,list2):
    pass`,
  constraints: "Both lists are sorted, length 0-50",
  createdAt: new Date()
},

{
  problemId: "merge-two-sorted-lists",
  language: "python",
  hintLevel: 2,
  hintText: "Use a dummy head node to simplify the merge. Recursion or iteration both work efficiently.",
  starterCode: `def mergeTwoLists(list1,list2):
    pass`,
  constraints: "Both lists are sorted, length 0-50",
  createdAt: new Date()
},

{
  problemId: "merge-two-sorted-lists",
  language: "java",
  hintLevel: 1,
  hintText: "Compare the current nodes of both lists and attach the smaller to the merged list. Move pointers accordingly.",
  starterCode: `class Solution{
 public static int[] mergeTwoLists(int[] list1,int[] list2){
  return new int[0];
 }
}`,
  constraints: "Both lists are sorted, length 0-50",
  createdAt: new Date()
},

{
  problemId: "merge-two-sorted-lists",
  language: "java",
  hintLevel: 2,
  hintText: "Use a dummy node to handle the head. Iteratively or recursively merge remaining nodes until all nodes are attached.",
  starterCode: `class Solution{
 public static int[] mergeTwoLists(int[] list1,int[] list2){
  return new int[0];
 }
}`,
  constraints: "Both lists are sorted, length 0-50",
  createdAt: new Date()
}

]

};






