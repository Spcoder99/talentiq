export const PROBLEMS = {
    "two-sum": {
        id: "two-sum",
        title: "Two Sum",
        difficulty: "Easy",
        category: "Array • Hash Table",
        description: {
            text: "Given an array of integers nums and an integer target, return indices of the two numbers in the array such that they add up to target.",
            notes: [
                "You may assume that each input would have exactly one solution, and you may not use the same element twice.",
                "You can return the answer in any order.",
            ],
        },
        examples: [
            {
                input: "nums = [2,7,11,15], target = 9",
                output: "[0,1]",
                explanation: "Because nums[0] + nums[1] == 9, we return [0, 1].",
            },
            {
                input: "nums = [3,2,4], target = 6",
                output: "[1,2]",
            },
            {
                input: "nums = [3,3], target = 6",
                output: "[0,1]",
            },
        ],
        constraints: [
            "2 ≤ nums.length ≤ 10⁴",
            "-10⁹ ≤ nums[i] ≤ 10⁹",
            "-10⁹ ≤ target ≤ 10⁹",
            "Only one valid answer exists",
        ],
        starterCode: {
            javascript: `function twoSum(nums, target) {
  // Write your solution here
  
}

// Test cases
console.log(twoSum([2, 7, 11, 15], 9)); // Expected: [0, 1]
console.log(twoSum([3, 2, 4], 6)); // Expected: [1, 2]
console.log(twoSum([3, 3], 6)); // Expected: [0, 1]`,
            python: `def twoSum(nums, target):
    # Write your solution here
    pass

# Test cases
print(twoSum([2, 7, 11, 15], 9))  # Expected: [0, 1]
print(twoSum([3, 2, 4], 6))  # Expected: [1, 2]
print(twoSum([3, 3], 6))  # Expected: [0, 1]`,
            java: `import java.util.*;

class Solution {
    public static int[] twoSum(int[] nums, int target) {
        // Write your solution here
        
        return new int[0];
    }
    
    public static void main(String[] args) {
        System.out.println(Arrays.toString(twoSum(new int[]{2, 7, 11, 15}, 9))); // Expected: [0, 1]
        System.out.println(Arrays.toString(twoSum(new int[]{3, 2, 4}, 6))); // Expected: [1, 2]
        System.out.println(Arrays.toString(twoSum(new int[]{3, 3}, 6))); // Expected: [0, 1]
    }
}`,
        },
        expectedOutput: {
            javascript: "[0,1]\n[1,2]\n[0,1]",
            python: "[0, 1]\n[1, 2]\n[0, 1]",
            java: "[0, 1]\n[1, 2]\n[0, 1]",
        },
    },

    "reverse-string": {
        id: "reverse-string",
        title: "Reverse String",
        difficulty: "Easy",
        category: "String • Two Pointers",
        description: {
            text: "Write a function that reverses a string. The input string is given as an array of characters s.",
            notes: ["You must do this by modifying the input array in-place with O(1) extra memory."],
        },
        examples: [
            {
                input: 's = ["h","e","l","l","o"]',
                output: '["o","l","l","e","h"]',
            },
            {
                input: 's = ["H","a","n","n","a","h"]',
                output: '["h","a","n","n","a","H"]',
            },
        ],
        constraints: ["1 ≤ s.length ≤ 10⁵", "s[i] is a printable ascii character"],
        starterCode: {
            javascript: `function reverseString(s) {
  // Write your solution here
  
}

// Test cases
let test1 = ["h","e","l","l","o"];
reverseString(test1);
console.log(test1); // Expected: ["o","l","l","e","h"]

let test2 = ["H","a","n","n","a","h"];
reverseString(test2);
console.log(test2); // Expected: ["h","a","n","n","a","H"]`,
            python: `def reverseString(s):
    # Write your solution here
    pass

# Test cases
test1 = ["h","e","l","l","o"]
reverseString(test1)
print(test1)  # Expected: ["o","l","l","e","h"]

test2 = ["H","a","n","n","a","h"]
reverseString(test2)
print(test2)  # Expected: ["h","a","n","n","a","H"]`,
            java: `import java.util.*;

class Solution {
    public static void reverseString(char[] s) {
        // Write your solution here
        
    }
    
    public static void main(String[] args) {
        char[] test1 = {'h','e','l','l','o'};
        reverseString(test1);
        System.out.println(Arrays.toString(test1)); // Expected: [o, l, l, e, h]
        
        char[] test2 = {'H','a','n','n','a','h'};
        reverseString(test2);
        System.out.println(Arrays.toString(test2)); // Expected: [h, a, n, n, a, H]
    }
}`,
        },
        expectedOutput: {
            javascript: '["o","l","l","e","h"]\n["h","a","n","n","a","H"]',
            python: "['o', 'l', 'l', 'e', 'h']\n['h', 'a', 'n', 'n', 'a', 'H']",
            java: "[o, l, l, e, h]\n[h, a, n, n, a, H]",
        },
    },

    "valid-palindrome": {
        id: "valid-palindrome",
        title: "Valid Palindrome",
        difficulty: "Easy",
        category: "String • Two Pointers",
        description: {
            text: "A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.",
            notes: ["Given a string s, return true if it is a palindrome, or false otherwise."],
        },
        examples: [
            {
                input: 's = "A man, a plan, a canal: Panama"',
                output: "true",
                explanation: '"amanaplanacanalpanama" is a palindrome.',
            },
            {
                input: 's = "race a car"',
                output: "false",
                explanation: '"raceacar" is not a palindrome.',
            },
            {
                input: 's = " "',
                output: "true",
                explanation:
                    's is an empty string "" after removing non-alphanumeric characters. Since an empty string reads the same forward and backward, it is a palindrome.',
            },
        ],
        constraints: ["1 ≤ s.length ≤ 2 * 10⁵", "s consists only of printable ASCII characters"],
        starterCode: {
            javascript: `function isPalindrome(s) {
  // Write your solution here
  
}

// Test cases
console.log(isPalindrome("A man, a plan, a canal: Panama")); // Expected: true
console.log(isPalindrome("race a car")); // Expected: false
console.log(isPalindrome(" ")); // Expected: true`,
            python: `def isPalindrome(s):
    # Write your solution here
    pass

# Test cases
print(isPalindrome("A man, a plan, a canal: Panama"))  # Expected: True
print(isPalindrome("race a car"))  # Expected: False
print(isPalindrome(" "))  # Expected: True`,
            java: `class Solution {
    public static boolean isPalindrome(String s) {
        // Write your solution here
        
        return false;
    }
    
    public static void main(String[] args) {
        System.out.println(isPalindrome("A man, a plan, a canal: Panama")); // Expected: true
        System.out.println(isPalindrome("race a car")); // Expected: false
        System.out.println(isPalindrome(" ")); // Expected: true
    }
}`,
        },
        expectedOutput: {
            javascript: "true\nfalse\ntrue",
            python: "True\nFalse\nTrue",
            java: "true\nfalse\ntrue",
        },
    },

    "maximum-subarray": {
        id: "maximum-subarray",
        title: "Maximum Subarray",
        difficulty: "Medium",
        category: "Array • Dynamic Programming",
        description: {
            text: "Given an integer array nums, find the subarray with the largest sum, and return its sum.",
            notes: [],
        },
        examples: [
            {
                input: "nums = [-2,1,-3,4,-1,2,1,-5,4]",
                output: "6",
                explanation: "The subarray [4,-1,2,1] has the largest sum 6.",
            },
            {
                input: "nums = [1]",
                output: "1",
                explanation: "The subarray [1] has the largest sum 1.",
            },
            {
                input: "nums = [5,4,-1,7,8]",
                output: "23",
                explanation: "The subarray [5,4,-1,7,8] has the largest sum 23.",
            },
        ],
        constraints: ["1 ≤ nums.length ≤ 10⁵", "-10⁴ ≤ nums[i] ≤ 10⁴"],
        starterCode: {
            javascript: `function maxSubArray(nums) {
  // Write your solution here
  
}

// Test cases
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])); // Expected: 6
console.log(maxSubArray([1])); // Expected: 1
console.log(maxSubArray([5,4,-1,7,8])); // Expected: 23`,
            python: `def maxSubArray(nums):
    # Write your solution here
    pass

# Test cases
print(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))  # Expected: 6
print(maxSubArray([1]))  # Expected: 1
print(maxSubArray([5,4,-1,7,8]))  # Expected: 23`,
            java: `class Solution {
    public static int maxSubArray(int[] nums) {
        // Write your solution here
        
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(maxSubArray(new int[]{-2,1,-3,4,-1,2,1,-5,4})); // Expected: 6
        System.out.println(maxSubArray(new int[]{1})); // Expected: 1
        System.out.println(maxSubArray(new int[]{5,4,-1,7,8})); // Expected: 23
    }
}`,
        },
        expectedOutput: {
            javascript: "6\n1\n23",
            python: "6\n1\n23",
            java: "6\n1\n23",
        },
    },

    "container-with-most-water": {
        id: "container-with-most-water",
        title: "Container With Most Water",
        difficulty: "Medium",
        category: "Array • Two Pointers",
        description: {
            text: "You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).",
            notes: [
                "Find two lines that together with the x-axis form a container, such that the container contains the most water.",
                "Return the maximum amount of water a container can store.",
                "Notice that you may not slant the container.",
            ],
        },
        examples: [
            {
                input: "height = [1,8,6,2,5,4,8,3,7]",
                output: "49",
                explanation:
                    "The vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water the container can contain is 49.",
            },
            {
                input: "height = [1,1]",
                output: "1",
            },
        ],
        constraints: ["n == height.length", "2 ≤ n ≤ 10⁵", "0 ≤ height[i] ≤ 10⁴"],
        starterCode: {
            javascript: `function maxArea(height) {
  // Write your solution here
  
}

// Test cases
console.log(maxArea([1,8,6,2,5,4,8,3,7])); // Expected: 49
console.log(maxArea([1,1])); // Expected: 1`,
            python: `def maxArea(height):
    # Write your solution here
    pass

# Test cases
print(maxArea([1,8,6,2,5,4,8,3,7]))  # Expected: 49
print(maxArea([1,1]))  # Expected: 1`,
            java: `class Solution {
    public static int maxArea(int[] height) {
        // Write your solution here
        
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(maxArea(new int[]{1,8,6,2,5,4,8,3,7})); // Expected: 49
        System.out.println(maxArea(new int[]{1,1})); // Expected: 1
    }
}`,
        },
        expectedOutput: {
            javascript: "49\n1",
            python: "49\n1",
            java: "49\n1",
        },
    },

    "contains-duplicate": {
        id: "contains-duplicate",
        title: "Contains Duplicate",
        difficulty: "Easy",
        category: "Array • Hash Table",
        description: {
            text: "Given an integer array nums, return true if any value appears at least twice in the array.",
            notes: ["Return false if every element is distinct."]
        },
        examples: [
            { input: "nums = [1,2,3,1]", output: "true" },
            { input: "nums = [1,2,3,4]", output: "false" }
        ],
        constraints: [
            "1 ≤ nums.length ≤ 10⁵",
            "-10⁹ ≤ nums[i] ≤ 10⁹"
        ],
        starterCode: {
            javascript: `function containsDuplicate(nums) {

}

// Test cases
console.log(containsDuplicate([1,2,3,1])); // Expected: true
console.log(containsDuplicate([1,2,3,4])); // Expected: false`,
            python: `def containsDuplicate(nums):
    pass

# Test cases
print(containsDuplicate([1,2,3,1]))  # Expected: True
print(containsDuplicate([1,2,3,4]))  # Expected: False`,
            java: `class Solution {
public static boolean containsDuplicate(int[] nums) {

return false;
}

public static void main(String[] args) {
System.out.println(containsDuplicate(new int[]{1,2,3,1}));
System.out.println(containsDuplicate(new int[]{1,2,3,4}));
}
}`
        },
        expectedOutput: {
            javascript: "true\nfalse",
            python: "True\nFalse",
            java: "true\nfalse"
        }
    },

    "valid-anagram": {
        id: "valid-anagram",
        title: "Valid Anagram",
        difficulty: "Easy",
        category: "String • Hash Table",
        description: {
            text: "Given two strings s and t, return true if t is an anagram of s.",
            notes: []
        },
        examples: [
            { input: 's = "anagram", t = "nagaram"', output: "true" },
            { input: 's = "rat", t = "car"', output: "false" }
        ],
        constraints: [
            "1 ≤ s.length, t.length ≤ 5 * 10⁴"
        ],
        starterCode: {
            javascript: `function isAnagram(s, t) {

}

// Test cases
console.log(isAnagram("anagram","nagaram")); // true
console.log(isAnagram("rat","car")); // false`,
            python: `def isAnagram(s,t):
    pass

print(isAnagram("anagram","nagaram"))  # Expected: True
print(isAnagram("rat","car"))  # Expected: False`,
            java: `class Solution {
public static boolean isAnagram(String s, String t) {

return false;
}

public static void main(String[] args) {
System.out.println(isAnagram("anagram","nagaram"));
System.out.println(isAnagram("rat","car"));
}
}`
        },
        expectedOutput: {
            javascript: "true\nfalse",
            python: "True\nFalse",
            java: "true\nfalse"
        }
    },

    "best-time-to-buy-sell-stock": {
        id: "best-time-to-buy-sell-stock",
        title: "Best Time to Buy and Sell Stock",
        difficulty: "Easy",
        category: "Array • Greedy",
        description: {
            text: "Return the maximum profit you can achieve.",
            notes: []
        },
        examples: [
            { input: "prices = [7,1,5,3,6,4]", output: "5" },
            { input: "prices = [7,6,4,3,1]", output: "0" }
        ],
        constraints: [
            "1 ≤ prices.length ≤ 10⁵"
        ],
        starterCode: {
            javascript: `function maxProfit(prices) {

}

// Test cases
console.log(maxProfit([7,1,5,3,6,4])); // 5
console.log(maxProfit([7,6,4,3,1])); // 0`,
            python: `def maxProfit(prices):
    pass

print(maxProfit([7,1,5,3,6,4]))  # Expected: 5
print(maxProfit([7,6,4,3,1]))  # Expected: 0`,
            java: `class Solution {
public static int maxProfit(int[] prices) {

return 0;
}

public static void main(String[] args) {
System.out.println(maxProfit(new int[]{7,1,5,3,6,4}));
System.out.println(maxProfit(new int[]{7,6,4,3,1}));
}
}`
        },
        expectedOutput: {
            javascript: "5\n0",
            python: "5\n0",
            java: "5\n0"
        }
    },

    "climbing-stairs": {
        id: "climbing-stairs",
        title: "Climbing Stairs",
        difficulty: "Easy",
        category: "Dynamic Programming",
        description: {
            text: "You are climbing a staircase. Each time you can climb either 1 or 2 steps. Return the number of distinct ways to reach the top.",
            notes: []
        },
        examples: [
            { input: "n = 2", output: "2" },
            { input: "n = 3", output: "3" }
        ],
        constraints: [
            "1 ≤ n ≤ 45"
        ],
        starterCode: {
            javascript: `function climbStairs(n) {

}

// Test cases
console.log(climbStairs(2)); // Expected: 2
console.log(climbStairs(3)); // Expected: 3`,
            python: `def climbStairs(n):
    pass

# Test cases
print(climbStairs(2))  # Expected: 2
print(climbStairs(3))  # Expected: 3`,
            java: `class Solution {
public static int climbStairs(int n) {

return 0;
}

public static void main(String[] args) {
System.out.println(climbStairs(2));
System.out.println(climbStairs(3));
}
}`
        },
        expectedOutput: {
            javascript: "2\n3",
            python: "2\n3",
            java: "2\n3"
        }
    },

    "missing-number": {
        id: "missing-number",
        title: "Missing Number",
        difficulty: "Easy",
        category: "Array • Math",
        description: {
            text: "Given an array nums containing n distinct numbers in the range [0, n], return the only number missing from the array.",
            notes: []
        },
        examples: [
            { input: "nums = [3,0,1]", output: "2" },
            { input: "nums = [0,1]", output: "2" }
        ],
        constraints: [
            "1 ≤ nums.length ≤ 10⁴"
        ],
        starterCode: {
            javascript: `function missingNumber(nums) {

}

// Test cases
console.log(missingNumber([3,0,1])); // Expected: 2
console.log(missingNumber([0,1])); // Expected: 2`,
            python: `def missingNumber(nums):
    pass

print(missingNumber([3,0,1]))  # Expected: 2
print(missingNumber([0,1]))  # Expected: 2`,
            java: `class Solution {
public static int missingNumber(int[] nums) {

return 0;
}

public static void main(String[] args) {
System.out.println(missingNumber(new int[]{3,0,1}));
System.out.println(missingNumber(new int[]{0,1}));
}
}`
        },
        expectedOutput: {
            javascript: "2\n2",
            python: "2\n2",
            java: "2\n2"
        }
    },

    "plus-one": {
        id: "plus-one",
        title: "Plus One",
        difficulty: "Easy",
        category: "Array • Math",
        description: {
            text: "You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. Increment the large integer by one.",
            notes: []
        },
        examples: [
            { input: "digits = [1,2,3]", output: "[1,2,4]" },
            { input: "digits = [9]", output: "[1,0]" }
        ],
        constraints: [
            "1 ≤ digits.length ≤ 100"
        ],
        starterCode: {
            javascript: `function plusOne(digits) {

}

// Test cases
console.log(plusOne([1,2,3])); // Expected: [1,2,4]
console.log(plusOne([9])); // Expected: [1,0]`,
            python: `def plusOne(digits):
    pass

print(plusOne([1,2,3]))  # Expected: [1,2,4]
print(plusOne([9]))  # Expected: [1,0]`,
            java: `import java.util.*;

class Solution {
public static int[] plusOne(int[] digits) {

return digits;
}

public static void main(String[] args) {
System.out.println(Arrays.toString(plusOne(new int[]{1,2,3})));
System.out.println(Arrays.toString(plusOne(new int[]{9})));
}
}`
        },
        expectedOutput: {
            javascript: "[1,2,4]\n[1,0]",
            python: "[1, 2, 4]\n[1, 0]",
            java: "[1, 2, 4]\n[1, 0]"
        }
    },

    "move-zeroes": {
        id: "move-zeroes",
        title: "Move Zeroes",
        difficulty: "Easy",
        category: "Array • Two Pointers",
        description: {
            text: "Move all 0's to the end of the array while maintaining the relative order of the non-zero elements.",
            notes: []
        },
        examples: [
            { input: "nums = [0,1,0,3,12]", output: "[1,3,12,0,0]" }
        ],
        constraints: [
            "1 ≤ nums.length ≤ 10⁴"
        ],
        starterCode: {
            javascript: `function moveZeroes(nums) {

}

// Test cases
let arr=[0,1,0,3,12];
moveZeroes(arr);
console.log(arr); // Expected: [1,3,12,0,0]`,
            python: `def moveZeroes(nums):
    pass

arr=[0,1,0,3,12]
moveZeroes(arr)
print(arr)  # Expected: [1,3,12,0,0]`,
            java: `import java.util.*;

class Solution {
public static void moveZeroes(int[] nums) {

}

public static void main(String[] args) {
int[] arr={0,1,0,3,12};
moveZeroes(arr);
System.out.println(Arrays.toString(arr));
}
}`
        },
        expectedOutput: {
            javascript: "[1,3,12,0,0]",
            python: "[1, 3, 12, 0, 0]",
            java: "[1, 3, 12, 0, 0]"
        }
    },

    "merge-sorted-array": {
        id: "merge-sorted-array",
        title: "Merge Sorted Array",
        difficulty: "Easy",
        category: "Array • Two Pointers",
        description: {
            text: "Merge nums2 into nums1 as one sorted array.",
            notes: []
        },
        examples: [
            { input: "nums1=[1,2,3], nums2=[2,5,6]", output: "[1,2,2,3,5,6]" }
        ],
        constraints: [
            "1 ≤ m,n ≤ 200"
        ],
        starterCode: {
            javascript: `function merge(nums1,m,nums2,n){

}

// Test
let nums1=[1,2,3,0,0,0];
let nums2=[2,5,6];
merge(nums1,3,nums2,3);
console.log(nums1); // Expected: [1,2,2,3,5,6]`,
            python: `def merge(nums1,m,nums2,n):
    pass

nums1=[1,2,3,0,0,0]
nums2=[2,5,6]
merge(nums1,3,nums2,3)
print(nums1)  # Expected: [1,2,2,3,5,6]`,
            java: `import java.util.*;

class Solution {
public static void merge(int[] nums1,int m,int[] nums2,int n){

}

public static void main(String[] args){
int[] nums1={1,2,3,0,0,0};
int[] nums2={2,5,6};
merge(nums1,3,nums2,3);
System.out.println(Arrays.toString(nums1));
}
}`
        },
        expectedOutput: {
            javascript: "[1,2,2,3,5,6]",
            python: "[1, 2, 2, 3, 5, 6]",
            java: "[1, 2, 2, 3, 5, 6]"
        }
    },

    "majority-element": {
        id: "majority-element",
        title: "Majority Element",
        difficulty: "Easy",
        category: "Array • Hash Table",
        description: {
            text: "Return the element that appears more than ⌊n/2⌋ times.",
            notes: []
        },
        examples: [
            { input: "nums=[3,2,3]", output: "3" }
        ],
        constraints: [
            "1 ≤ nums.length ≤ 5*10⁴"
        ],
        starterCode: {
            javascript: `function majorityElement(nums){

}

// Test
console.log(majorityElement([3,2,3])); // Expected: 3`,
            python: `def majorityElement(nums):
    pass

print(majorityElement([3,2,3]))  # Expected: 3`,
            java: `class Solution {
public static int majorityElement(int[] nums){

return 0;
}

public static void main(String[] args){
System.out.println(majorityElement(new int[]{3,2,3}));
}
}`
        },
        expectedOutput: {
            javascript: "3",
            python: "3",
            java: "3"
        }
    },

    "longest-substring-without-repeating": {
        id: "longest-substring-without-repeating",
        title: "Longest Substring Without Repeating Characters",
        difficulty: "Medium",
        category: "String • Sliding Window",
        description: {
            text: "Find the length of the longest substring without repeating characters.",
            notes: []
        },
        examples: [
            { input: 's="abcabcbb"', output: "3" },
            { input: 's="bbbbb"', output: "1" }
        ],
        constraints: [
            "0 ≤ s.length ≤ 5*10⁴"
        ],
        starterCode: {
            javascript: `function lengthOfLongestSubstring(s){

}

// Test
console.log(lengthOfLongestSubstring("abcabcbb")); // 3
console.log(lengthOfLongestSubstring("bbbbb")); // 1`,
            python: `def lengthOfLongestSubstring(s):
    pass

print(lengthOfLongestSubstring("abcabcbb"))  # Expected: 3
print(lengthOfLongestSubstring("bbbbb"))  # Expected: 1`,
            java: `class Solution {
public static int lengthOfLongestSubstring(String s){

return 0;
}

public static void main(String[] args){
System.out.println(lengthOfLongestSubstring("abcabcbb"));
System.out.println(lengthOfLongestSubstring("bbbbb"));
}
}`
        },
        expectedOutput: {
            javascript: "3\n1",
            python: "3\n1",
            java: "3\n1"
        }
    },

    "search-in-rotated-array": {
        id: "search-in-rotated-array",
        title: "Search in Rotated Sorted Array",
        difficulty: "Medium",
        category: "Binary Search",
        description: {
            text: "Search target in rotated sorted array.",
            notes: []
        },
        examples: [
            { input: "nums=[4,5,6,7,0,1,2], target=0", output: "4" }
        ],
        constraints: [
            "1 ≤ nums.length ≤ 5000"
        ],
        starterCode: {
            javascript: `function search(nums,target){

}

// Test
console.log(search([4,5,6,7,0,1,2],0)); // Expected: 4`,
            python: `def search(nums,target):
    pass

print(search([4,5,6,7,0,1,2],0))  # Expected: 4`,
            java: `class Solution {
public static int search(int[] nums,int target){

return -1;
}

public static void main(String[] args){
System.out.println(search(new int[]{4,5,6,7,0,1,2},0));
}
}`
        },
        expectedOutput: {
            javascript: "4",
            python: "4",
            java: "4"
        }
    },

    "three-sum": {
        id: "three-sum",
        title: "3Sum",
        difficulty: "Medium",
        category: "Array • Two Pointers",
        description: {
            text: "Return all unique triplets such that their sum is zero.",
            notes: []
        },
        examples: [
            { input: "nums=[-1,0,1,2,-1,-4]", output: "[[-1,-1,2],[-1,0,1]]" }
        ],
        constraints: [
            "3 ≤ nums.length ≤ 3000"
        ],
        starterCode: {
            javascript: `function threeSum(nums){

}

// Test
console.log(threeSum([-1,0,1,2,-1,-4]));`,
            python: `def threeSum(nums):
    pass

print(threeSum([-1,0,1,2,-1,-4]))`,
            java: `import java.util.*;

class Solution {
public static List<List<Integer>> threeSum(int[] nums){

return new ArrayList<>();
}
}`
        },
        expectedOutput: {
            javascript: "[[-1,-1,2],[-1,0,1]]",
            python: "[[-1, -1, 2], [-1, 0, 1]]",
            java: "[[-1,-1,2],[-1,0,1]]"
        }
    },

    "longest-palindromic-substring": {
        id: "longest-palindromic-substring",
        title: "Longest Palindromic Substring",
        difficulty: "Medium",
        category: "String • Dynamic Programming",
        description: {
            text: "Given a string s, return the longest palindromic substring in s.",
            notes: []
        },
        examples: [
            { input: 's = "babad"', output: '"bab"' },
            { input: 's = "cbbd"', output: '"bb"' }
        ],
        constraints: [
            "1 ≤ s.length ≤ 1000"
        ],
        starterCode: {
            javascript: `function longestPalindrome(s) {

}

// Test cases
console.log(longestPalindrome("babad")); // Expected: "bab"
console.log(longestPalindrome("cbbd")); // Expected: "bb"`,
            python: `def longestPalindrome(s):
    pass

print(longestPalindrome("babad"))  # Expected: "bab"
print(longestPalindrome("cbbd"))  # Expected: "bb"`,
            java: `class Solution {
public static String longestPalindrome(String s) {

return "";
}

public static void main(String[] args) {
System.out.println(longestPalindrome("babad"));
System.out.println(longestPalindrome("cbbd"));
}
}`
        },
        expectedOutput: {
            javascript: "bab\nbb",
            python: "bab\nbb",
            java: "bab\nbb"
        }
    },

    "coin-change": {
        id: "coin-change",
        title: "Coin Change",
        difficulty: "Medium",
        category: "Dynamic Programming",
        description: {
            text: "You are given coins of different denominations and an amount. Return the fewest number of coins needed to make that amount.",
            notes: ["Return -1 if it is not possible."]
        },
        examples: [
            { input: "coins=[1,2,5], amount=11", output: "3" },
            { input: "coins=[2], amount=3", output: "-1" }
        ],
        constraints: [
            "1 ≤ coins.length ≤ 12",
            "0 ≤ amount ≤ 10⁴"
        ],
        starterCode: {
            javascript: `function coinChange(coins, amount) {

}

// Test cases
console.log(coinChange([1,2,5],11)); // Expected: 3
console.log(coinChange([2],3)); // Expected: -1`,
            python: `def coinChange(coins, amount):
    pass

print(coinChange([1,2,5],11))  # Expected: 3
print(coinChange([2],3))  # Expected: -1`,
            java: `class Solution {
public static int coinChange(int[] coins, int amount) {

return 0;
}

public static void main(String[] args) {
System.out.println(coinChange(new int[]{1,2,5},11));
System.out.println(coinChange(new int[]{2},3));
}
}`
        },
        expectedOutput: {
            javascript: "3\n-1",
            python: "3\n-1",
            java: "3\n-1"
        }
    },

    "number-of-islands": {
        id: "number-of-islands",
        title: "Number of Islands",
        difficulty: "Medium",
        category: "Graph • DFS",
        description: {
            text: "Given a 2D grid of '1's (land) and '0's (water), return the number of islands.",
            notes: []
        },
        examples: [
            { input: "grid = [[1,1,0,0],[1,1,0,0],[0,0,1,0],[0,0,0,1]]", output: "3" }
        ],
        constraints: [
            "1 ≤ grid.length ≤ 300"
        ],
        starterCode: {
            javascript: `function numIslands(grid) {

}

// Test
console.log(numIslands([
["1","1","0","0"],
["1","1","0","0"],
["0","0","1","0"],
["0","0","0","1"]
])); // Expected: 3`,
            python: `def numIslands(grid):
    pass

print(numIslands([
["1","1","0","0"],
["1","1","0","0"],
["0","0","1","0"],
["0","0","0","1"]
]))  # Expected: 3`,
            java: `class Solution {
public static int numIslands(char[][] grid) {

return 0;
}
}`
        },
        expectedOutput: {
            javascript: "3",
            python: "3",
            java: "3"
        }
    },

    "course-schedule": {
        id: "course-schedule",
        title: "Course Schedule",
        difficulty: "Medium",
        category: "Graph • Topological Sort",
        description: {
            text: "Determine if it is possible to finish all courses given prerequisites.",
            notes: []
        },
        examples: [
            { input: "numCourses=2, prerequisites=[[1,0]]", output: "true" },
            { input: "numCourses=2, prerequisites=[[1,0],[0,1]]", output: "false" }
        ],
        constraints: [
            "1 ≤ numCourses ≤ 2000"
        ],
        starterCode: {
            javascript: `function canFinish(numCourses, prerequisites) {

}

// Test
console.log(canFinish(2,[[1,0]])); // true
console.log(canFinish(2,[[1,0],[0,1]])); // false`,
            python: `def canFinish(numCourses, prerequisites):
    pass

print(canFinish(2,[[1,0]]))  # Expected: True
print(canFinish(2,[[1,0],[0,1]]))  # Expected: False`,
            java: `class Solution {
public static boolean canFinish(int numCourses, int[][] prerequisites) {

return true;
}
}`
        },
        expectedOutput: {
            javascript: "true\nfalse",
            python: "True\nFalse",
            java: "true\nfalse"
        }
    },

    "lru-cache": {
        id: "lru-cache",
        title: "LRU Cache",
        difficulty: "Hard",
        category: "Design • HashMap",
        description: {
            text: "Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.",
            notes: ["Implement get and put operations."]
        },
        examples: [
            { input: "LRUCache(2)", output: "cache operations" }
        ],
        constraints: [
            "1 ≤ capacity ≤ 3000"
        ],
        starterCode: {
            javascript: `class LRUCache {
constructor(capacity) {

}

get(key) {

}

put(key,value) {

}
}`,
            python: `class LRUCache:

    def __init__(self, capacity):
        pass

    def get(self, key):
        pass

    def put(self, key, value):
        pass`,
            java: `class LRUCache {

public LRUCache(int capacity) {

}

public int get(int key) {
return 0;
}

public void put(int key, int value) {

}
}`
        },
        expectedOutput: {
            javascript: "LRU operations executed",
            python: "LRU operations executed",
            java: "LRU operations executed"
        }
    },

    "merge-intervals": {
        id: "merge-intervals",
        title: "Merge Intervals",
        difficulty: "Medium",
        category: "Array • Sorting",
        description: {
            text: "Given an array of intervals where intervals[i] = [start, end], merge all overlapping intervals.",
            notes: []
        },
        examples: [
            { input: "intervals = [[1,3],[2,6],[8,10],[15,18]]", output: "[[1,6],[8,10],[15,18]]" }
        ],
        constraints: [
            "1 ≤ intervals.length ≤ 10⁴"
        ],
        starterCode: {
            javascript: `function merge(intervals) {

}

// Test
console.log(merge([[1,3],[2,6],[8,10],[15,18]]));`,
            python: `def merge(intervals):
    pass

print(merge([[1,3],[2,6],[8,10],[15,18]]))`,
            java: `import java.util.*;

class Solution {
public static int[][] merge(int[][] intervals) {

return new int[0][0];
}
}`
        },
        expectedOutput: {
            javascript: "[[1,6],[8,10],[15,18]]",
            python: "[[1, 6], [8, 10], [15, 18]]",
            java: "[[1,6],[8,10],[15,18]]"
        }
    },

    "product-of-array-except-self": {
        id: "product-of-array-except-self",
        title: "Product of Array Except Self",
        difficulty: "Medium",
        category: "Array • Prefix",
        description: {
            text: "Return an array answer such that answer[i] is equal to the product of all elements except nums[i].",
            notes: ["Solve without division."]
        },
        examples: [
            { input: "nums=[1,2,3,4]", output: "[24,12,8,6]" }
        ],
        constraints: [
            "2 ≤ nums.length ≤ 10⁵"
        ],
        starterCode: {
            javascript: `function productExceptSelf(nums) {

}

// Test
console.log(productExceptSelf([1,2,3,4]));`,
            python: `def productExceptSelf(nums):
    pass

print(productExceptSelf([1,2,3,4]))`,
            java: `class Solution {
public static int[] productExceptSelf(int[] nums) {

return nums;
}
}`
        },
        expectedOutput: {
            javascript: "[24,12,8,6]",
            python: "[24, 12, 8, 6]",
            java: "[24,12,8,6]"
        }
    },

    "top-k-frequent-elements": {
        id: "top-k-frequent-elements",
        title: "Top K Frequent Elements",
        difficulty: "Medium",
        category: "Heap • Hash Table",
        description: {
            text: "Return the k most frequent elements.",
            notes: []
        },
        examples: [
            { input: "nums=[1,1,1,2,2,3], k=2", output: "[1,2]" }
        ],
        constraints: [
            "1 ≤ nums.length ≤ 10⁵"
        ],
        starterCode: {
            javascript: `function topKFrequent(nums,k){

}

// Test
console.log(topKFrequent([1,1,1,2,2,3],2));`,
            python: `def topKFrequent(nums,k):
    pass

print(topKFrequent([1,1,1,2,2,3],2))`,
            java: `class Solution {
public static int[] topKFrequent(int[] nums,int k){

return new int[0];
}
}`
        },
        expectedOutput: {
            javascript: "[1,2]",
            python: "[1, 2]",
            java: "[1,2]"
        }
    },

    "longest-consecutive-sequence": {
        id: "longest-consecutive-sequence",
        title: "Longest Consecutive Sequence",
        difficulty: "Medium",
        category: "Array • HashSet",
        description: {
            text: "Return the length of the longest consecutive elements sequence.",
            notes: []
        },
        examples: [
            { input: "nums=[100,4,200,1,3,2]", output: "4" }
        ],
        constraints: [
            "0 ≤ nums.length ≤ 10⁵"
        ],
        starterCode: {
            javascript: `function longestConsecutive(nums){

}

// Test
console.log(longestConsecutive([100,4,200,1,3,2]));`,
            python: `def longestConsecutive(nums):
    pass

print(longestConsecutive([100,4,200,1,3,2]))`,
            java: `class Solution {
public static int longestConsecutive(int[] nums){

return 0;
}
}`
        },
        expectedOutput: {
            javascript: "4",
            python: "4",
            java: "4"
        }
    },

    "kth-largest-element": {
        id: "kth-largest-element",
        title: "Kth Largest Element in an Array",
        difficulty: "Medium",
        category: "Heap",
        description: {
            text: "Find the kth largest element in the array.",
            notes: []
        },
        examples: [
            { input: "nums=[3,2,1,5,6,4], k=2", output: "5" }
        ],
        constraints: [
            "1 ≤ k ≤ nums.length ≤ 10⁵"
        ],
        starterCode: {
            javascript: `function findKthLargest(nums,k){

}

// Test
console.log(findKthLargest([3,2,1,5,6,4],2));`,
            python: `def findKthLargest(nums,k):
    pass

print(findKthLargest([3,2,1,5,6,4],2))`,
            java: `class Solution {
public static int findKthLargest(int[] nums,int k){

return 0;
}
}`
        },
        expectedOutput: {
            javascript: "5",
            python: "5",
            java: "5"
        }
    },

    "word-break": {
        id: "word-break",
        title: "Word Break",
        difficulty: "Medium",
        category: "Dynamic Programming",
        description: {
            text: "Return true if the string can be segmented into words from the dictionary.",
            notes: []
        },
        examples: [
            { input: 's="leetcode", wordDict=["leet","code"]', output: "true" }
        ],
        constraints: [
            "1 ≤ s.length ≤ 300"
        ],
        starterCode: {
            javascript: `function wordBreak(s,wordDict){

}

// Test
console.log(wordBreak("leetcode",["leet","code"]));`,
            python: `def wordBreak(s,wordDict):
    pass

print(wordBreak("leetcode",["leet","code"]))`,
            java: `class Solution {
public static boolean wordBreak(String s,List<String> wordDict){

return false;
}
}`
        },
        expectedOutput: {
            javascript: "true",
            python: "True",
            java: "true"
        }
    },

    "median-of-two-sorted-arrays": {
        id: "median-of-two-sorted-arrays",
        title: "Median of Two Sorted Arrays",
        difficulty: "Hard",
        category: "Binary Search",
        description: {
            text: "Find the median of the two sorted arrays.",
            notes: []
        },
        examples: [
            { input: "nums1=[1,3], nums2=[2]", output: "2" }
        ],
        constraints: [
            "0 ≤ nums1.length, nums2.length ≤ 1000"
        ],
        starterCode: {
            javascript: `function findMedianSortedArrays(nums1,nums2){

}

// Test
console.log(findMedianSortedArrays([1,3],[2]));`,
            python: `def findMedianSortedArrays(nums1,nums2):
    pass

print(findMedianSortedArrays([1,3],[2]))`,
            java: `class Solution {
public static double findMedianSortedArrays(int[] nums1,int[] nums2){

return 0;
}
}`
        },
        expectedOutput: {
            javascript: "2",
            python: "2",
            java: "2"
        }
    },

    "minimum-window-substring": {
        id: "minimum-window-substring",
        title: "Minimum Window Substring",
        difficulty: "Hard",
        category: "Sliding Window",
        description: {
            text: "Return the minimum window substring of s such that every character in t is included.",
            notes: []
        },
        examples: [
            { input: 's="ADOBECODEBANC", t="ABC"', output: '"BANC"' }
        ],
        constraints: [
            "1 ≤ s.length, t.length ≤ 10⁵"
        ],
        starterCode: {
            javascript: `function minWindow(s,t){

}

// Test
console.log(minWindow("ADOBECODEBANC","ABC"));`,
            python: `def minWindow(s,t):
    pass

print(minWindow("ADOBECODEBANC","ABC"))`,
            java: `class Solution {
public static String minWindow(String s,String t){

return "";
}
}`
        },
        expectedOutput: {
            javascript: "BANC",
            python: "BANC",
            java: "BANC"
        }
    },

    "trapping-rain-water": {
        id: "trapping-rain-water",
        title: "Trapping Rain Water",
        difficulty: "Hard",
        category: "Two Pointers • Stack",
        description: {
            text: "Compute how much water it can trap after raining.",
            notes: []
        },
        examples: [
            { input: "height=[0,1,0,2,1,0,1,3,2,1,2,1]", output: "6" }
        ],
        constraints: [
            "1 ≤ height.length ≤ 2*10⁴"
        ],
        starterCode: {
            javascript: `function trap(height){

}

// Test
console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]));`,
            python: `def trap(height):
    pass

print(trap([0,1,0,2,1,0,1,3,2,1,2,1]))`,
            java: `class Solution {
public static int trap(int[] height){

return 0;
}
}`
        },
        expectedOutput: {
            javascript: "6",
            python: "6",
            java: "6"
        }
    },

    "edit-distance": {
        id: "edit-distance",
        title: "Edit Distance",
        difficulty: "Hard",
        category: "Dynamic Programming",
        description: {
            text: "Return the minimum number of operations required to convert word1 to word2.",
            notes: []
        },
        examples: [
            { input: 'word1="horse", word2="ros"', output: "3" }
        ],
        constraints: [
            "0 ≤ word1.length, word2.length ≤ 500"
        ],
        starterCode: {
            javascript: `function minDistance(word1,word2){

}

// Test
console.log(minDistance("horse","ros"));`,
            python: `def minDistance(word1,word2):
    pass

print(minDistance("horse","ros"))`,
            java: `class Solution {
public static int minDistance(String word1,String word2){

return 0;
}
}`
        },
        expectedOutput: {
            javascript: "3",
            python: "3",
            java: "3"
        }
    }

};


export const LANGUAGE_CONFIG = {
    javascript: {
        name: "JavaScript",
        icon: "/javascript.png",
        monacoLang: "javascript",
    },
    python: {
        name: "Python",
        icon: "/python.png",
        monacoLang: "python",
    },
    java: {
        name: "Java",
        icon: "/java.png",
        monacoLang: "java",
    },
};