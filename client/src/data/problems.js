export const PROBLEMS = {
    "two-sum": {
        id: "two-sum",
        title: "Two Sum",
        difficulty: "Easy",
        category: "Array • Hash Table",
        importanceScore: 8,
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
        importanceScore: 7,
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
        importanceScore: 7,
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
        importanceScore: 9,
        description: {
            text: "Given an integer array nums, find the subarray with the largest sum, and return its sum.",
            notes: ["Use Kadane's algorithm to solve this problem efficiently.",
                "Iterate through the array, keeping track of the current subarray sum and the maximum sum found so far."
            ],
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
        importanceScore: 8,

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
                explanation: "The vertical lines are represented by array [1,1]. In this case, the max area of water the container can contain is 1.",
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


    "product-of-array-except-self": {
        id: "product-of-array-except-self",
        title: "Product of Array Except Self",
        difficulty: "Medium",
        category: "Array • Prefix Product",
        importanceScore: 9,

        description: {
            text: "Given an integer array nums, return an array answer such that answer[i] is equal to the product of all elements of nums except nums[i].",
            notes: [
                "You must solve it without using division.",
                "The solution should run in O(n) time complexity."
            ],
        },

        examples: [
            {
                input: "nums = [1,2,3,4]",
                output: "[24,12,8,6]",
                explanation: "Each index stores product of all elements except itself."
            },
            {
                input: "nums = [-1,1,0,-3,3]",
                output: "[0,0,9,0,0]",
                explanation: "Because of the zero, many products become zero."
            },
            {
                input: "nums = [2,3,4]",
                output: "[12,8,6]",
                explanation: "Multiply remaining numbers except index."
            }
        ],

        constraints: [
            "2 ≤ nums.length ≤ 10⁵",
            "-30 ≤ nums[i] ≤ 30",
            "Product of any prefix or suffix fits in 32-bit integer"
        ],

        starterCode: {
            javascript: `function productExceptSelf(nums) {
  // Write your solution here
  
}

// Test cases
console.log(productExceptSelf([1,2,3,4])); // Expected: [24,12,8,6]
console.log(productExceptSelf([-1,1,0,-3,3])); // Expected: [0,0,9,0,0]
console.log(productExceptSelf([2,3,4])); // Expected: [12,8,6]`,

            python: `def productExceptSelf(nums):
    # Write your solution here
    pass

# Test cases
print(productExceptSelf([1,2,3,4]))  # Expected: [24,12,8,6]
print(productExceptSelf([-1,1,0,-3,3]))  # Expected: [0,0,9,0,0]
print(productExceptSelf([2,3,4]))  # Expected: [12,8,6]`,

            java: `import java.util.*;

class Solution {
    public static int[] productExceptSelf(int[] nums) {
        // Write your solution here
        
        return new int[0];
    }

    public static void main(String[] args) {
        System.out.println(Arrays.toString(productExceptSelf(new int[]{1,2,3,4}))); // Expected: [24,12,8,6]
        System.out.println(Arrays.toString(productExceptSelf(new int[]{-1,1,0,-3,3}))); // Expected: [0,0,9,0,0]
        System.out.println(Arrays.toString(productExceptSelf(new int[]{2,3,4}))); // Expected: [12,8,6]
    }
}`
        },

        expectedOutput: {
            javascript: "[24,12,8,6]\n[0,0,9,0,0]\n[12,8,6]",
            python: "[24, 12, 8, 6]\n[0, 0, 9, 0, 0]\n[12, 8, 6]",
            java: "[24, 12, 8, 6]\n[0, 0, 9, 0, 0]\n[12, 8, 6]"
        }
    },

    "valid-parentheses": {
        id: "valid-parentheses",
        title: "Valid Parentheses",
        difficulty: "Easy",
        category: "Stack • String",
        importanceScore: 8,

        description: {
            text: "Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.",
            notes: [
                "An input string is valid if brackets close in the correct order.",
                "Every closing bracket must correspond to the same type of opening bracket."
            ],
        },

        examples: [
            {
                input: 's = "()[]"',
                output: "true",
                explanation: "All brackets are closed properly."
            },
            {
                input: 's = "(]"',
                output: "false",
                explanation: "Different bracket types mismatch."
            },
            {
                input: 's = "{[]}"',
                output: "true",
                explanation: "Nested brackets are valid."
            }
        ],

        constraints: [
            "1 ≤ s.length ≤ 10⁴",
            "s consists of parentheses only",
            "Valid characters are ()[]{}"
        ],

        starterCode: {
            javascript: `function isValid(s) {
  // Write your solution here
  
}

// Test cases
console.log(isValid("()[]")); // Expected: true
console.log(isValid("(]")); // Expected: false
console.log(isValid("{[]}")); // Expected: true`,

            python: `def isValid(s):
    # Write your solution here
    pass

print(isValid("()[]"))  # Expected: True
print(isValid("(]"))  # Expected: False
print(isValid("{[]}"))  # Expected: True`,

            java: `class Solution {
    public static boolean isValid(String s) {
        // Write your solution here
        
        return false;
    }

    public static void main(String[] args) {
        System.out.println(isValid("()[]")); // Expected: true
        System.out.println(isValid("(]")); // Expected: false
        System.out.println(isValid("{[]}")); // Expected: true
    }
}`
        },

        expectedOutput: {
            javascript: "true\nfalse\ntrue",
            python: "True\nFalse\nTrue",
            java: "true\nfalse\ntrue"
        }
    },

    "binary-search": {
        id: "binary-search",
        title: "Binary Search",
        difficulty: "Easy",
        category: "Binary Search • Array",
        importanceScore: 9,

        description: {
            text: "Given a sorted array of integers nums and an integer target, return the index of target if found, otherwise return -1.",
            notes: [
                "Use binary search to achieve O(log n) time complexity.",
                "The array is sorted in ascending order."
            ],
        },

        examples: [
            {
                input: "nums = [-1,0,3,5,9,12], target = 9",
                output: "4",
                explanation: "Target 9 is found at index 4."
            },
            {
                input: "nums = [-1,0,3,5,9,12], target = 2",
                output: "-1",
                explanation: "Target not found."
            },
            {
                input: "nums = [1,2,3,4,5], target = 4",
                output: "3",
                explanation: "4 exists at index 3."
            }
        ],

        constraints: [
            "1 ≤ nums.length ≤ 10⁴",
            "-10⁴ < nums[i], target < 10⁴",
            "All integers in nums are unique"
        ],

        starterCode: {
            javascript: `function search(nums, target) {
  // Write your solution here
  
}

console.log(search([-1,0,3,5,9,12],9)); // Expected: 4
console.log(search([-1,0,3,5,9,12],2)); // Expected: -1
console.log(search([1,2,3,4,5],4)); // Expected: 3`,

            python: `def search(nums, target):
    # Write your solution here
    pass

print(search([-1,0,3,5,9,12],9)) # Expected: 4
print(search([-1,0,3,5,9,12],2)) # Expected: -1
print(search([1,2,3,4,5],4)) # Expected: 3`,

            java: `class Solution {
    public static int search(int[] nums, int target) {
        // Write your solution here
        
        return -1;
    }

    public static void main(String[] args) {
        System.out.println(search(new int[]{-1,0,3,5,9,12},9)); // Expected: 4
        System.out.println(search(new int[]{-1,0,3,5,9,12},2)); // Expected: -1
        System.out.println(search(new int[]{1,2,3,4,5},4)); // Expected: 3
    }
}`
        },

        expectedOutput: {
            javascript: "4\n-1\n3",
            python: "4\n-1\n3",
            java: "4\n-1\n3"
        }
    },

    "longest-substring-without-repeating": {
        id: "longest-substring-without-repeating",
        title: "Longest Substring Without Repeating Characters",
        difficulty: "Medium",
        category: "String • Sliding Window",
        importanceScore: 9,

        description: {
            text: "Given a string s, find the length of the longest substring without repeating characters.",
            notes: [
                "Use the sliding window technique to maintain a valid substring.",
                "Move the left pointer whenever a duplicate character appears."
            ],
        },

        examples: [
            {
                input: 's = "abcabcbb"',
                output: "3",
                explanation: "The answer is 'abc', which has length 3."
            },
            {
                input: 's = "bbbbb"',
                output: "1",
                explanation: "The answer is 'b'."
            },
            {
                input: 's = "pwwkew"',
                output: "3",
                explanation: "The answer is 'wke'."
            }
        ],

        constraints: [
            "0 ≤ s.length ≤ 5 * 10⁴",
            "s consists of English letters, digits, symbols and spaces",
            "Substring must contain unique characters"
        ],

        starterCode: {
            javascript: `function lengthOfLongestSubstring(s) {
  // Write your solution here
  
}

// Test cases
console.log(lengthOfLongestSubstring("abcabcbb")); // Expected: 3
console.log(lengthOfLongestSubstring("bbbbb")); // Expected: 1
console.log(lengthOfLongestSubstring("pwwkew")); // Expected: 3`,
            python: `def lengthOfLongestSubstring(s):
    # Write your solution here
    pass

print(lengthOfLongestSubstring("abcabcbb")) # Expected: 3
print(lengthOfLongestSubstring("bbbbb")) # Expected: 1
print(lengthOfLongestSubstring("pwwkew")) # Expected: 3`,
            java: `class Solution {
    public static int lengthOfLongestSubstring(String s) {
        // Write your solution here
        
        return 0;
    }

    public static void main(String[] args) {
        System.out.println(lengthOfLongestSubstring("abcabcbb")); // Expected: 3
        System.out.println(lengthOfLongestSubstring("bbbbb")); // Expected: 1
        System.out.println(lengthOfLongestSubstring("pwwkew")); // Expected: 3
    }
}`
        },

        expectedOutput: {
            javascript: "3\n1\n3",
            python: "3\n1\n3",
            java: "3\n1\n3"
        }
    },

    "three-sum": {
        id: "three-sum",
        title: "3Sum",
        difficulty: "Medium",
        category: "Array • Two Pointers",
        importanceScore: 9,

        description: {
            text: "Given an integer array nums, return all unique triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k and nums[i] + nums[j] + nums[k] == 0.",
            notes: [
                "The solution set must not contain duplicate triplets.",
                "Sorting the array helps in applying the two pointer approach."
            ],
        },

        examples: [
            {
                input: "nums = [-1,0,1,2,-1,-4]",
                output: "[[-1,-1,2],[-1,0,1]]",
                explanation: "Two triplets sum to zero."
            },
            {
                input: "nums = [0,1,1]",
                output: "[]",
                explanation: "No triplets sum to zero."
            },
            {
                input: "nums = [0,0,0]",
                output: "[[0,0,0]]",
                explanation: "Only one valid triplet."
            }
        ],

        constraints: [
            "3 ≤ nums.length ≤ 3000",
            "-10⁵ ≤ nums[i] ≤ 10⁵",
            "Result must not contain duplicate triplets"
        ],

        starterCode: {
            javascript: `function threeSum(nums) {
  // Write your solution here
  
}

console.log(threeSum([-1,0,1,2,-1,-4])); // Expected: [[-1,-1,2],[-1,0,1]]
console.log(threeSum([0,1,1])); // Expected: []
console.log(threeSum([0,0,0])); // Expected: [[0,0,0]]`,
            python: `def threeSum(nums):
    # Write your solution here
    pass

print(threeSum([-1,0,1,2,-1,-4])) # Expected: [[-1,-1,2],[-1,0,1]]
print(threeSum([0,1,1])) # Expected: []
print(threeSum([0,0,0])) # Expected: [[0,0,0]]`,
            java: `import java.util.*;

class Solution {
    public static List<List<Integer>> threeSum(int[] nums) {
        // Write your solution here
        
        return new ArrayList<>();
    }

    public static void main(String[] args) {
        System.out.println(threeSum(new int[]{-1,0,1,2,-1,-4}));
        System.out.println(threeSum(new int[]{0,1,1}));
        System.out.println(threeSum(new int[]{0,0,0}));
    }
}`
        },

        expectedOutput: {
            javascript: "[[-1,-1,2],[-1,0,1]]\n[]\n[[0,0,0]]",
            python: "[[-1, -1, 2], [-1, 0, 1]]\n[]\n[[0, 0, 0]]",
            java: "[[-1, -1, 2], [-1, 0, 1]]\n[]\n[[0, 0, 0]]"
        }
    },

    "group-anagrams": {
        id: "group-anagrams",
        title: "Group Anagrams",
        difficulty: "Medium",
        category: "Hash Map • String",
        importanceScore: 8,

        description: {
            text: "Given an array of strings strs, group the anagrams together.",
            notes: [
                "An anagram is a word formed by rearranging letters of another.",
                "Sorting characters of each string can help create a grouping key."
            ],
        },

        examples: [
            {
                input: 'strs = ["eat","tea","tan","ate","nat","bat"]',
                output: '[["eat","tea","ate"],["tan","nat"],["bat"]]',
                explanation: "Words with same sorted letters form groups."
            },
            {
                input: 'strs = [""]',
                output: '[[""]]',
                explanation: "Only one word."
            },
            {
                input: 'strs = ["a"]',
                output: '[["a"]]',
                explanation: "Single character."
            }
        ],

        constraints: [
            "1 ≤ strs.length ≤ 10⁴",
            "0 ≤ strs[i].length ≤ 100",
            "strs[i] consists of lowercase English letters"
        ],

        starterCode: {
            javascript: `function groupAnagrams(strs) {
  // Write your solution here
  
}

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));
console.log(groupAnagrams([""]));
console.log(groupAnagrams(["a"]));`,
            python: `def groupAnagrams(strs):
    # Write your solution here
    pass

print(groupAnagrams(["eat","tea","tan","ate","nat","bat"]))
print(groupAnagrams([""]))
print(groupAnagrams(["a"]))`,
            java: `import java.util.*;

class Solution {
    public static List<List<String>> groupAnagrams(String[] strs) {
        // Write your solution here
        
        return new ArrayList<>();
    }

    public static void main(String[] args) {
        System.out.println(groupAnagrams(new String[]{"eat","tea","tan","ate","nat","bat"}));
        System.out.println(groupAnagrams(new String[]{""}));
        System.out.println(groupAnagrams(new String[]{"a"}));
    }
}`
        },

        expectedOutput: {
            javascript: '[["eat","tea","ate"],["tan","nat"],["bat"]]\n[[""]]\n[["a"]]',
            python: "[['eat','tea','ate'],['tan','nat'],['bat']]\n[['']]\n[['a']]",
            java: "[[eat, tea, ate], [tan, nat], [bat]]\n[[ ]]\n[[a]]"
        }
    },

    "subarray-sum-equals-k": {
        id: "subarray-sum-equals-k",
        title: "Subarray Sum Equals K",
        difficulty: "Medium",
        category: "Array • Prefix Sum",
        importanceScore: 9,

        description: {
            text: "Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals k.",
            notes: [
                "A subarray is a contiguous part of the array.",
                "Using a prefix sum with a hashmap can reduce time complexity to O(n)."
            ],
        },

        examples: [
            {
                input: "nums = [1,1,1], k = 2",
                output: "2",
                explanation: "Subarrays [1,1] at index (0,1) and (1,2) sum to 2."
            },
            {
                input: "nums = [1,2,3], k = 3",
                output: "2",
                explanation: "Subarrays [1,2] and [3] sum to 3."
            },
            {
                input: "nums = [1,-1,0], k = 0",
                output: "3",
                explanation: "Subarrays [1,-1], [-1,0], and [1,-1,0] sum to 0."
            }
        ],

        constraints: [
            "1 ≤ nums.length ≤ 2 * 10⁴",
            "-1000 ≤ nums[i] ≤ 1000",
            "-10⁷ ≤ k ≤ 10⁷"
        ],

        starterCode: {
            javascript: `function subarraySum(nums, k) {
  // Write your solution here
  
}

// Test cases
console.log(subarraySum([1,1,1],2)); // Expected: 2
console.log(subarraySum([1,2,3],3)); // Expected: 2
console.log(subarraySum([1,-1,0],0)); // Expected: 3`,

            python: `def subarraySum(nums, k):
    # Write your solution here
    pass

print(subarraySum([1,1,1],2))  # Expected: 2
print(subarraySum([1,2,3],3))  # Expected: 2
print(subarraySum([1,-1,0],0))  # Expected: 3`,

            java: `class Solution {
    public static int subarraySum(int[] nums, int k) {
        // Write your solution here
        
        return 0;
    }

    public static void main(String[] args) {
        System.out.println(subarraySum(new int[]{1,1,1},2)); // Expected: 2
        System.out.println(subarraySum(new int[]{1,2,3},3)); // Expected: 2
        System.out.println(subarraySum(new int[]{1,-1,0},0)); // Expected: 3
    }
}`
        },

        expectedOutput: {
            javascript: "2\n2\n3",
            python: "2\n2\n3",
            java: "2\n2\n3"
        }
    },

    "jump-game": {
        id: "jump-game",
        title: "Jump Game",
        difficulty: "Medium",
        category: "Greedy • Array",
        importanceScore: 8,

        description: {
            text: "You are given an integer array nums where each element represents the maximum jump length from that position. Determine if you can reach the last index.",
            notes: [
                "Use a greedy approach to track the farthest reachable index.",
                "If at any point your current index exceeds the reachable range, return false."
            ],
        },

        examples: [
            {
                input: "nums = [2,3,1,1,4]",
                output: "true",
                explanation: "Jump from index 0 → 1 → 4."
            },
            {
                input: "nums = [3,2,1,0,4]",
                output: "false",
                explanation: "You get stuck at index 3."
            },
            {
                input: "nums = [2,0,0]",
                output: "true",
                explanation: "Direct jump to the last index."
            }
        ],

        constraints: [
            "1 ≤ nums.length ≤ 10⁴",
            "0 ≤ nums[i] ≤ 10⁵",
            "You start at index 0"
        ],

        starterCode: {
            javascript: `function canJump(nums) {
  // Write your solution here
  
}

// Test cases
console.log(canJump([2,3,1,1,4])); // Expected: true
console.log(canJump([3,2,1,0,4])); // Expected: false
console.log(canJump([2,0,0])); // Expected: true`,

            python: `def canJump(nums):
    # Write your solution here
    pass

print(canJump([2,3,1,1,4]))  # Expected: True
print(canJump([3,2,1,0,4]))  # Expected: False
print(canJump([2,0,0]))  # Expected: True`,

            java: `class Solution {
    public static boolean canJump(int[] nums) {
        // Write your solution here
        
        return false;
    }

    public static void main(String[] args) {
        System.out.println(canJump(new int[]{2,3,1,1,4})); // Expected: true
        System.out.println(canJump(new int[]{3,2,1,0,4})); // Expected: false
        System.out.println(canJump(new int[]{2,0,0})); // Expected: true
    }
}`
        },

        expectedOutput: {
            javascript: "true\nfalse\ntrue",
            python: "True\nFalse\nTrue",
            java: "true\nfalse\ntrue"
        }
    },

    "search-insert-position": {
        id: "search-insert-position",
        title: "Search Insert Position",
        difficulty: "Easy",
        category: "Binary Search • Array",
        importanceScore: 7,

        description: {
            text: "Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be inserted.",
            notes: [
                "The algorithm must run in O(log n) time.",
                "Binary search is ideal for solving this efficiently."
            ],
        },

        examples: [
            {
                input: "nums = [1,3,5,6], target = 5",
                output: "2",
                explanation: "Target exists at index 2."
            },
            {
                input: "nums = [1,3,5,6], target = 2",
                output: "1",
                explanation: "Target would be inserted at index 1."
            },
            {
                input: "nums = [1,3,5,6], target = 7",
                output: "4",
                explanation: "Target inserted at end."
            }
        ],

        constraints: [
            "1 ≤ nums.length ≤ 10⁴",
            "-10⁴ ≤ nums[i], target ≤ 10⁴",
            "nums contains distinct integers sorted in ascending order"
        ],

        starterCode: {
            javascript: `function searchInsert(nums, target) {
  // Write your solution here
  
}

// Test cases
console.log(searchInsert([1,3,5,6],5)); // Expected: 2
console.log(searchInsert([1,3,5,6],2)); // Expected: 1
console.log(searchInsert([1,3,5,6],7)); // Expected: 4`,

            python: `def searchInsert(nums, target):
    # Write your solution here
    pass

print(searchInsert([1,3,5,6],5))  # Expected: 2
print(searchInsert([1,3,5,6],2))  # Expected: 1
print(searchInsert([1,3,5,6],7))  # Expected: 4`,

            java: `class Solution {
    public static int searchInsert(int[] nums, int target) {
        // Write your solution here
        
        return -1;
    }

    public static void main(String[] args) {
        System.out.println(searchInsert(new int[]{1,3,5,6},5)); // Expected: 2
        System.out.println(searchInsert(new int[]{1,3,5,6},2)); // Expected: 1
        System.out.println(searchInsert(new int[]{1,3,5,6},7)); // Expected: 4
    }
}`
        },

        expectedOutput: {
            javascript: "2\n1\n4",
            python: "2\n1\n4",
            java: "2\n1\n4"
        }
    },

    "merge-intervals": {
        id: "merge-intervals",
        title: "Merge Intervals",
        difficulty: "Hard",
        category: "Array • Sorting",
        importanceScore: 8,

        description: {
            text: "Given an array of intervals where intervals[i] = [start, end], merge all overlapping intervals and return the resulting array.",
            notes: [
                "Sort intervals based on the starting time before merging.",
                "If two intervals overlap, merge them into a single interval."
            ],
        },

        examples: [
            {
                input: "intervals = [[1,3],[2,6],[8,10],[15,18]]",
                output: "[[1,6],[8,10],[15,18]]",
                explanation: "[1,3] and [2,6] overlap, so they merge into [1,6]."
            },
            {
                input: "intervals = [[1,4],[4,5]]",
                output: "[[1,5]]",
                explanation: "Intervals touching at edges also merge."
            },
            {
                input: "intervals = [[1,4],[0,4]]",
                output: "[[0,4]]",
                explanation: "Second interval fully covers the first."
            }
        ],

        constraints: [
            "1 ≤ intervals.length ≤ 10⁴",
            "intervals[i].length == 2",
            "0 ≤ start ≤ end ≤ 10⁴"
        ],

        starterCode: {
            javascript: `function merge(intervals) {
  // Write your solution here
  
}

// Test cases
console.log(merge([[1,3],[2,6],[8,10],[15,18]])); // Expected: [[1,6],[8,10],[15,18]]
console.log(merge([[1,4],[4,5]])); // Expected: [[1,5]]
console.log(merge([[1,4],[0,4]])); // Expected: [[0,4]]`,

            python: `def merge(intervals):
    # Write your solution here
    pass

print(merge([[1,3],[2,6],[8,10],[15,18]])) # Expected: [[1,6],[8,10],[15,18]]
print(merge([[1,4],[4,5]])) # Expected: [[1,5]]
print(merge([[1,4],[0,4]])) # Expected: [[0,4]]`,

            java: `import java.util.*;

class Solution {
    public static int[][] merge(int[][] intervals) {
        // Write your solution here
        
        return new int[0][0];
    }

    public static void main(String[] args) {
        System.out.println(Arrays.deepToString(merge(new int[][]{{1,3},{2,6},{8,10},{15,18}})));
        System.out.println(Arrays.deepToString(merge(new int[][]{{1,4},{4,5}})));
        System.out.println(Arrays.deepToString(merge(new int[][]{{1,4},{0,4}})));
    }
}`
        },

        expectedOutput: {
            javascript: "[[1,6],[8,10],[15,18]]\n[[1,5]]\n[[0,4]]",
            python: "[[1, 6], [8, 10], [15, 18]]\n[[1, 5]]\n[[0, 4]]",
            java: "[[1, 6], [8, 10], [15, 18]]\n[[1, 5]]\n[[0, 4]]"
        }
    },

    "kth-largest-element": {
        id: "kth-largest-element",
        title: "Kth Largest Element in an Array",
        difficulty: "Medium",
        category: "Heap • Sorting",
        importanceScore: 8,

        description: {
            text: "Given an integer array nums and an integer k, return the kth largest element in the array.",
            notes: [
                "You must find the kth largest element, not the kth distinct element.",
                "A min heap of size k is an efficient solution."
            ],
        },

        examples: [
            {
                input: "nums = [3,2,1,5,6,4], k = 2",
                output: "5",
                explanation: "The 2nd largest element is 5."
            },
            {
                input: "nums = [3,2,3,1,2,4,5,5,6], k = 4",
                output: "4",
                explanation: "The 4th largest element is 4."
            },
            {
                input: "nums = [1], k = 1",
                output: "1",
                explanation: "Only element is the answer."
            }
        ],

        constraints: [
            "1 ≤ k ≤ nums.length ≤ 10⁵",
            "-10⁴ ≤ nums[i] ≤ 10⁴",
            "Array may contain duplicates"
        ],

        starterCode: {
            javascript: `function findKthLargest(nums, k) {
  // Write your solution here
  
}

// Test cases
console.log(findKthLargest([3,2,1,5,6,4],2)); // Expected: 5
console.log(findKthLargest([3,2,3,1,2,4,5,5,6],4)); // Expected: 4
console.log(findKthLargest([1],1)); // Expected: 1`,

            python: `def findKthLargest(nums, k):
    # Write your solution here
    pass

print(findKthLargest([3,2,1,5,6,4],2)) # Expected: 5
print(findKthLargest([3,2,3,1,2,4,5,5,6],4)) # Expected: 4
print(findKthLargest([1],1)) # Expected: 1`,

            java: `class Solution {
    public static int findKthLargest(int[] nums, int k) {
        // Write your solution here
        
        return 0;
    }

    public static void main(String[] args) {
        System.out.println(findKthLargest(new int[]{3,2,1,5,6,4},2));
        System.out.println(findKthLargest(new int[]{3,2,3,1,2,4,5,5,6},4));
        System.out.println(findKthLargest(new int[]{1},1));
    }
}`
        },

        expectedOutput: {
            javascript: "5\n4\n1",
            python: "5\n4\n1",
            java: "5\n4\n1"
        }
    },

    "move-zeroes": {
        id: "move-zeroes",
        title: "Move Zeroes",
        difficulty: "Easy",
        category: "Array • Two Pointers",
        importanceScore: 7,

        description: {
            text: "Given an integer array nums, move all 0's to the end while maintaining the relative order of non-zero elements.",
            notes: [
                "You must do this in-place without making a copy of the array.",
                "Use the two pointer technique."
            ],
        },

        examples: [
            {
                input: "nums = [0,1,0,3,12]",
                output: "[1,3,12,0,0]",
                explanation: "All zeroes moved to the end."
            },
            {
                input: "nums = [0]",
                output: "[0]",
                explanation: "Single element."
            },
            {
                input: "nums = [1,0,1]",
                output: "[1,1,0]",
                explanation: "Maintain order of non-zero elements."
            }
        ],

        constraints: [
            "1 ≤ nums.length ≤ 10⁴",
            "-2³¹ ≤ nums[i] ≤ 2³¹ - 1",
            "Must modify array in-place"
        ],

        starterCode: {
            javascript: `function moveZeroes(nums) {
  // Write your solution here
  
}

// Test cases
let a=[0,1,0,3,12]; moveZeroes(a); console.log(a); // Expected: [1,3,12,0,0]
let b=[0]; moveZeroes(b); console.log(b); // Expected: [0]
let c=[1,0,1]; moveZeroes(c); console.log(c); // Expected: [1,1,0]`,

            python: `def moveZeroes(nums):
    # Write your solution here
    pass

a=[0,1,0,3,12]; moveZeroes(a); print(a)
b=[0]; moveZeroes(b); print(b)
c=[1,0,1]; moveZeroes(c); print(c)`,

            java: `import java.util.*;

class Solution {
    public static void moveZeroes(int[] nums) {
        // Write your solution here
        
    }

    public static void main(String[] args) {
        int[] a={0,1,0,3,12};
        moveZeroes(a);
        System.out.println(Arrays.toString(a));
    }
}`
        },

        expectedOutput: {
            javascript: "[1,3,12,0,0]\n[0]\n[1,1,0]",
            python: "[1, 3, 12, 0, 0]\n[0]\n[1, 1, 0]",
            java: "[1, 3, 12, 0, 0]"
        }
    },

    "reverse-linked-list": {
        id: "reverse-linked-list",
        title: "Reverse Linked List",
        difficulty: "Easy",
        category: "Linked List • Iteration",
        importanceScore: 9,

        description: {
            text: "Given the head of a singly linked list, reverse the list and return the reversed list.",
            notes: [
                "You must reverse the pointers of the linked list.",
                "Both iterative and recursive approaches are possible."
            ],
        },

        examples: [
            {
                input: "head = [1,2,3,4,5]",
                output: "[5,4,3,2,1]",
                explanation: "The linked list is reversed."
            },
            {
                input: "head = [1,2]",
                output: "[2,1]",
                explanation: "Swap the two nodes."
            },
            {
                input: "head = []",
                output: "[]",
                explanation: "Empty list remains empty."
            }
        ],

        constraints: [
            "0 ≤ number of nodes ≤ 5000",
            "-5000 ≤ Node.val ≤ 5000",
            "Follow-up: reverse using O(1) extra space"
        ],

        starterCode: {
            javascript: `function reverseList(arr) {
  // Write your solution here
}

// Test cases
console.log(reverseList([1,2,3,4,5])); // Expected: [5,4,3,2,1]
console.log(reverseList([1,2])); // Expected: [2,1]
console.log(reverseList([])); // Expected: []`,

            python: `def reverseList(arr):
    # Write your solution here
    pass

print(reverseList([1,2,3,4,5])) # Expected: [5,4,3,2,1]
print(reverseList([1,2])) # Expected: [2,1]
print(reverseList([])) # Expected: []`,

            java: `import java.util.*;

class Solution {
    public static int[] reverseList(int[] arr) {
        // Write your solution here
        
        return arr;
    }

    public static void main(String[] args) {
        System.out.println(Arrays.toString(reverseList(new int[]{1,2,3,4,5})));
        System.out.println(Arrays.toString(reverseList(new int[]{1,2})));
        System.out.println(Arrays.toString(reverseList(new int[]{})));
    }
}`
        },

        expectedOutput: {
            javascript: "[5,4,3,2,1]\n[2,1]\n[]",
            python: "[5, 4, 3, 2, 1]\n[2, 1]\n[]",
            java: "[5, 4, 3, 2, 1]\n[2, 1]\n[]"
        }
    },

    "maximum-depth-binary-tree": {
        id: "maximum-depth-binary-tree",
        title: "Maximum Depth of Binary Tree",
        difficulty: "Easy",
        category: "Tree • DFS",
        importanceScore: 9,

        description: {
            text: "Given the root of a binary tree, return its maximum depth.",
            notes: [
                "The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.",
                "This can be solved using recursion (DFS)."
            ],
        },

        examples: [
            {
                input: "root = [3,9,20,null,null,15,7]",
                output: "3",
                explanation: "Longest path is 3 nodes."
            },
            {
                input: "root = [1,null,2]",
                output: "2",
                explanation: "Depth is 2."
            },
            {
                input: "root = []",
                output: "0",
                explanation: "Empty tree."
            }
        ],

        constraints: [
            "The number of nodes is in the range [0, 10⁴]",
            "-100 ≤ Node.val ≤ 100",
            "Tree depth will not exceed 1000"
        ],

        starterCode: {
            javascript: `function maxDepth(root) {
  // Write your solution here
}

// Test cases
console.log(maxDepth([3,9,20,null,null,15,7])); // Expected: 3
console.log(maxDepth([1,null,2])); // Expected: 2
console.log(maxDepth([])); // Expected: 0`,

            python: `def maxDepth(root):
    # Write your solution here
    pass

print(maxDepth([3,9,20,None,None,15,7])) # Expected: 3
print(maxDepth([1,None,2])) # Expected: 2
print(maxDepth([])) # Expected: 0`,

            java: `class Solution {
    public static int maxDepth(int[] root) {
        // Write your solution here
        
        return 0;
    }

    public static void main(String[] args) {
        System.out.println(maxDepth(new int[]{3,9,20,0,0,15,7}));
        System.out.println(maxDepth(new int[]{1,0,2}));
        System.out.println(maxDepth(new int[]{}));
    }
}`
        },

        expectedOutput: {
            javascript: "3\n2\n0",
            python: "3\n2\n0",
            java: "3\n2\n0"
        }
    },

    "invert-binary-tree": {
        id: "invert-binary-tree",
        title: "Invert Binary Tree",
        difficulty: "Easy",
        category: "Tree • DFS",
        importanceScore: 8,

        description: {
            text: "Given the root of a binary tree, invert the tree and return its root.",
            notes: [
                "Inverting means swapping the left and right children of every node.",
                "This can be done recursively or iteratively using BFS."
            ],
        },

        examples: [
            {
                input: "root = [4,2,7,1,3,6,9]",
                output: "[4,7,2,9,6,3,1]",
                explanation: "All left and right nodes are swapped."
            },
            {
                input: "root = [2,1,3]",
                output: "[2,3,1]",
                explanation: "Left and right children swapped."
            },
            {
                input: "root = []",
                output: "[]",
                explanation: "Empty tree remains empty."
            }
        ],

        constraints: [
            "The number of nodes in the tree is in the range [0, 100]",
            "-100 ≤ Node.val ≤ 100",
            "Each node has at most two children"
        ],

        starterCode: {
            javascript: `function invertTree(root) {
  // Write your solution here
}

// Test cases
console.log(invertTree([4,2,7,1,3,6,9])); // Expected: [4,7,2,9,6,3,1]
console.log(invertTree([2,1,3])); // Expected: [2,3,1]
console.log(invertTree([])); // Expected: []`,

            python: `def invertTree(root):
    # Write your solution here
    pass

print(invertTree([4,2,7,1,3,6,9]))
print(invertTree([2,1,3]))
print(invertTree([]))`,

            java: `class Solution {
    public static int[] invertTree(int[] root) {
        // Write your solution here
        
        return root;
    }

    public static void main(String[] args) {
        System.out.println(java.util.Arrays.toString(invertTree(new int[]{4,2,7,1,3,6,9})));
    }
}`
        },

        expectedOutput: {
            javascript: "[4,7,2,9,6,3,1]\n[2,3,1]\n[]",
            python: "[4, 7, 2, 9, 6, 3, 1]\n[2, 3, 1]\n[]",
            java: "[4, 7, 2, 9, 6, 3, 1]\n[2, 3, 1]\n[]"
        }
    },

    "best-time-stock": {
        id: "best-time-stock",
        title: "Best Time to Buy and Sell Stock",
        difficulty: "Easy",
        category: "Array • Greedy",
        importanceScore: 9,

        description: {
            text: "You are given an array prices where prices[i] is the price of a given stock on the ith day. Return the maximum profit you can achieve.",
            notes: [
                "You may buy once and sell once.",
                "If no profit possible return 0."
            ]
        },

        examples: [
            { input: "prices = [7,1,5,3,6,4]", output: "5", explanation: "Buy at 1 sell at 6." },
            { input: "prices = [7,6,4,3,1]", output: "0", explanation: "No profitable transaction." },
            { input: "prices = [2,4,1]", output: "2", explanation: "Buy at 2 sell at 4." }
        ],

        constraints: [
            "1 ≤ prices.length ≤ 10⁵",
            "0 ≤ prices[i] ≤ 10⁴",
            "Only one transaction allowed"
        ],

        starterCode: {
            javascript: `function maxProfit(prices){
 // Write your solution here
}

console.log(maxProfit([7,1,5,3,6,4])); // Expected: 5
console.log(maxProfit([7,6,4,3,1])); // Expected: 0
console.log(maxProfit([2,4,1])); // Expected: 2`,
            python: `def maxProfit(prices):
 pass

print(maxProfit([7,1,5,3,6,4]))
print(maxProfit([7,6,4,3,1]))
print(maxProfit([2,4,1]))`,
            java: `class Solution{
 public static int maxProfit(int[] prices){
  return 0;
 }

 public static void main(String[] args){
  System.out.println(maxProfit(new int[]{7,1,5,3,6,4}));
  System.out.println(maxProfit(new int[]{7,6,4,3,1}));
  System.out.println(maxProfit(new int[]{2,4,1}));
 }
}`
        },

        expectedOutput: {
            javascript: "5\n0\n2",
            python: "5\n0\n2",
            java: "5\n0\n2"
        }
    },
    "top-k-frequent-elements": {
        id: "top-k-frequent-elements",
        title: "Top K Frequent Elements",
        difficulty: "Hard",
        category: "Heap • Hash Table",
        importanceScore: 9,

        description: {
            text: "Given an integer array nums and an integer k, return the k most frequent elements.",
            notes: [
                "You may return the answer in any order.",
                "Heap or bucket sort solutions are commonly used."
            ],
        },

        examples: [
            {
                input: "nums = [1,1,1,2,2,3], k = 2",
                output: "[1,2]",
                explanation: "1 appears 3 times and 2 appears 2 times."
            },
            {
                input: "nums = [1], k = 1",
                output: "[1]"
            },
            {
                input: "nums = [4,4,4,6,6,7], k = 1",
                output: "[4]"
            }
        ],

        constraints: [
            "1 ≤ nums.length ≤ 10⁵",
            "-10⁴ ≤ nums[i] ≤ 10⁴",
            "1 ≤ k ≤ number of unique elements"
        ],

        starterCode: {
            javascript: `function topKFrequent(nums,k){
 // Write your solution here
}

console.log(topKFrequent([1,1,1,2,2,3],2));
console.log(topKFrequent([1],1));
console.log(topKFrequent([4,4,4,6,6,7],1));`,
            python: `def topKFrequent(nums,k):
    pass

print(topKFrequent([1,1,1,2,2,3],2))
print(topKFrequent([1],1))
print(topKFrequent([4,4,4,6,6,7],1))`,
            java: `class Solution{
 public static int[] topKFrequent(int[] nums,int k){
  return new int[0];
 }

 public static void main(String[] args){
  System.out.println(java.util.Arrays.toString(topKFrequent(new int[]{1,1,1,2,2,3},2)));
 }
}`
        },

        expectedOutput: {
            javascript: "[1,2]\n[1]\n[4]",
            python: "[1, 2]\n[1]\n[4]",
            java: "[1, 2]\n[1]\n[4]"
        }
    },

    "daily-temperatures": {
        id: "daily-temperatures",
        title: "Daily Temperatures",
        difficulty: "Hard",
        category: "Stack • Array",
        importanceScore: 8,

        description: {
            text: "Given an array of daily temperatures, return an array such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature.",
            notes: [
                "If there is no future day with a warmer temperature, return 0.",
                "A monotonic stack helps solve this efficiently."
            ],
        },

        examples: [
            {
                input: "temperatures = [73,74,75,71,69,72,76,73]",
                output: "[1,1,4,2,1,1,0,0]",
                explanation: "Each index shows how many days until a warmer temperature."
            },
            {
                input: "temperatures = [30,40,50,60]",
                output: "[1,1,1,0]"
            },
            {
                input: "temperatures = [30,60,90]",
                output: "[1,1,0]"
            }
        ],

        constraints: [
            "1 ≤ temperatures.length ≤ 10⁵",
            "30 ≤ temperatures[i] ≤ 100",
            "Return array length equal to input length"
        ],

        starterCode: {
            javascript: `function dailyTemperatures(temperatures){
 // Write your solution here
}

console.log(dailyTemperatures([73,74,75,71,69,72,76,73]));
console.log(dailyTemperatures([30,40,50,60]));
console.log(dailyTemperatures([30,60,90]));`,
            python: `def dailyTemperatures(temperatures):
    pass

print(dailyTemperatures([73,74,75,71,69,72,76,73]))
print(dailyTemperatures([30,40,50,60]))
print(dailyTemperatures([30,60,90]))`,
            java: `class Solution{
 public static int[] dailyTemperatures(int[] temperatures){
  return new int[0];
 }

 public static void main(String[] args){
  System.out.println(java.util.Arrays.toString(dailyTemperatures(new int[]{73,74,75,71,69,72,76,73})));
 }
}`
        },

        expectedOutput: {
            javascript: "[1,1,4,2,1,1,0,0]\n[1,1,1,0]\n[1,1,0]",
            python: "[1, 1, 4, 2, 1, 1, 0, 0]\n[1, 1, 1, 0]\n[1, 1, 0]",
            java: "[1, 1, 4, 2, 1, 1, 0, 0]\n[1, 1, 1, 0]\n[1, 1, 0]"
        }
    },

    "house-robber": {
        id: "house-robber",
        title: "House Robber",
        difficulty: "Hard",
        category: "Dynamic Programming",
        importanceScore: 9,

        description: {
            text: "You are a robber planning to rob houses along a street. Each house has some money. Adjacent houses cannot be robbed on the same night.",
            notes: [
                "Choose houses so that the total money robbed is maximized.",
                "Dynamic programming is commonly used."
            ],
        },

        examples: [
            {
                input: "nums = [1,2,3,1]",
                output: "4",
                explanation: "Rob house 1 and 3."
            },
            {
                input: "nums = [2,7,9,3,1]",
                output: "12",
                explanation: "Rob houses 2,3,5."
            },
            {
                input: "nums = [2,1,1,2]",
                output: "4",
                explanation: "Rob first and last house."
            }
        ],

        constraints: [
            "1 ≤ nums.length ≤ 100",
            "0 ≤ nums[i] ≤ 400",
            "Cannot rob adjacent houses"
        ],

        starterCode: {
            javascript: `function rob(nums){
 // Write your solution here
}

console.log(rob([1,2,3,1]));
console.log(rob([2,7,9,3,1]));
console.log(rob([2,1,1,2]));`,
            python: `def rob(nums):
 pass

print(rob([1,2,3,1]))
print(rob([2,7,9,3,1]))
print(rob([2,1,1,2]))`,
            java: `class Solution{
 public static int rob(int[] nums){
  return 0;
 }

 public static void main(String[] args){
  System.out.println(rob(new int[]{1,2,3,1}));
  System.out.println(rob(new int[]{2,7,9,3,1}));
  System.out.println(rob(new int[]{2,1,1,2}));
 }
}`
        },

        expectedOutput: {
            javascript: "4\n12\n4",
            python: "4\n12\n4",
            java: "4\n12\n4"
        }
    },

    "coin-change": {
        id: "coin-change",
        title: "Coin Change",
        difficulty: "Hard",
        category: "Dynamic Programming",
        importanceScore: 9,

        description: {
            text: "You are given coins of different denominations and a total amount. Return the fewest number of coins needed to make up that amount.",
            notes: [
                "If the amount cannot be made return -1.",
                "This is a classic dynamic programming problem."
            ]
        },

        examples: [
            { input: "coins = [1,2,5], amount = 11", output: "3", explanation: "5 + 5 + 1" },
            { input: "coins = [2], amount = 3", output: "-1" },
            { input: "coins = [1], amount = 0", output: "0" }
        ],

        constraints: [
            "1 ≤ coins.length ≤ 12",
            "1 ≤ coins[i] ≤ 2³¹ − 1",
            "0 ≤ amount ≤ 10⁴"
        ],

        starterCode: {
            javascript: `function coinChange(coins,amount){
 // Write your solution here
}

console.log(coinChange([1,2,5],11));
console.log(coinChange([2],3));
console.log(coinChange([1],0));`,
            python: `def coinChange(coins,amount):
 pass

print(coinChange([1,2,5],11))
print(coinChange([2],3))
print(coinChange([1],0))`,
            java: `class Solution{
 public static int coinChange(int[] coins,int amount){
  return -1;
 }

 public static void main(String[] args){
  System.out.println(coinChange(new int[]{1,2,5},11));
 }
}`
        },

        expectedOutput: {
            javascript: "3\n-1\n0",
            python: "3\n-1\n0",
            java: "3\n-1\n0"
        }
    },

    
    "contains-duplicate": {
        id: "contains-duplicate",
        title: "Contains Duplicate",
        difficulty: "Easy",
        category: "Array • Hash Set",
        importanceScore: 7,

        description: {
            text: "Given an integer array nums, return true if any value appears at least twice in the array.",
            notes: [
                "If any value appears at least twice return true.",
                "HashSet can solve this in O(n) time."
            ],
        },

        examples: [
            {
                input: "nums = [1,2,3,1]",
                output: "true",
                explanation: "1 appears twice."
            },
            {
                input: "nums = [1,2,3,4]",
                output: "false",
                explanation: "All elements are unique."
            },
            {
                input: "nums = [1,1,1,3,3,4]",
                output: "true",
                explanation: "Multiple duplicates exist."
            }
        ],

        constraints: [
            "1 ≤ nums.length ≤ 10⁵",
            "-10⁹ ≤ nums[i] ≤ 10⁹",
            "Return true if duplicate exists"
        ],

        starterCode: {
            javascript: `function containsDuplicate(nums) {
  // Write your solution here
}

console.log(containsDuplicate([1,2,3,1])); 
console.log(containsDuplicate([1,2,3,4])); 
console.log(containsDuplicate([1,1,1,3,3,4]));`,
            python: `def containsDuplicate(nums):
    pass

print(containsDuplicate([1,2,3,1]))
print(containsDuplicate([1,2,3,4]))
print(containsDuplicate([1,1,1,3,3,4]))`,
            java: `class Solution {
    public static boolean containsDuplicate(int[] nums) {
        return false;
    }

    public static void main(String[] args) {
        System.out.println(containsDuplicate(new int[]{1,2,3,1}));
        System.out.println(containsDuplicate(new int[]{1,2,3,4}));
        System.out.println(containsDuplicate(new int[]{1,1,1,3,3,4}));
    }
}`
        },

        expectedOutput: {
            javascript: "true\nfalse\ntrue",
            python: "True\nFalse\nTrue",
            java: "true\nfalse\ntrue"
        }
    },

    "gas-station": {
        id: "gas-station",
        title: "Gas Station",
        difficulty: "Medium",
        category: "Greedy • Array",
        importanceScore: 8,

        description: {
            text: "There are n gas stations along a circular route. Determine the starting gas station index if you can travel around the circuit once.",
            notes: [
                "If there exists a solution it is guaranteed to be unique.",
                "Greedy approach works in O(n)."
            ],
        },

        examples: [
            {
                input: "gas = [1,2,3,4,5], cost = [3,4,5,1,2]",
                output: "3",
                explanation: "Start at index 3."
            },
            {
                input: "gas = [2,3,4], cost = [3,4,3]",
                output: "-1",
                explanation: "Impossible to complete circuit."
            },
            {
                input: "gas = [5], cost = [4]",
                output: "0"
            }
        ],

        constraints: [
            "1 ≤ n ≤ 10⁵",
            "0 ≤ gas[i], cost[i] ≤ 10⁴",
            "If possible solution is unique"
        ],

        starterCode: {
            javascript: `function canCompleteCircuit(gas, cost) {
  // Write your solution here
}

console.log(canCompleteCircuit([1,2,3,4,5],[3,4,5,1,2]));
console.log(canCompleteCircuit([2,3,4],[3,4,3]));
console.log(canCompleteCircuit([5],[4]));`,
            python: `def canCompleteCircuit(gas, cost):
    pass

print(canCompleteCircuit([1,2,3,4,5],[3,4,5,1,2]))
print(canCompleteCircuit([2,3,4],[3,4,3]))
print(canCompleteCircuit([5],[4]))`,
            java: `class Solution {
    public static int canCompleteCircuit(int[] gas, int[] cost) {
        return -1;
    }

    public static void main(String[] args) {
        System.out.println(canCompleteCircuit(new int[]{1,2,3,4,5}, new int[]{3,4,5,1,2}));
        System.out.println(canCompleteCircuit(new int[]{2,3,4}, new int[]{3,4,3}));
    }
}`
        },

        expectedOutput: {
            javascript: "3\n-1\n0",
            python: "3\n-1\n0",
            java: "3\n-1\n0"
        }
    },
    "longest-palindromic-substring": {
        id: "longest-palindromic-substring",
        title: "Longest Palindromic Substring",
        difficulty: "Hard",
        category: "String • Dynamic Programming",
        importanceScore: 9,

        description: {
            text: "Given a string s, return the longest palindromic substring in s.",
            notes: [
                "Palindrome reads same forward and backward.",
                "Expand around center is common approach."
            ],
        },

        examples: [
            {
                input: 's = "babad"',
                output: '"bab"',
                explanation: "Another valid answer is 'aba'."
            },
            {
                input: 's = "cbbd"',
                output: '"bb"'
            },
            {
                input: 's = "a"',
                output: '"a"'
            }
        ],

        constraints: [
            "1 ≤ s.length ≤ 1000",
            "s consists of letters and digits",
            "Only one longest palindrome needed"
        ],

        starterCode: {
            javascript: `function longestPalindrome(s) {
  // Write your solution here
}

console.log(longestPalindrome("babad"));
console.log(longestPalindrome("cbbd"));
console.log(longestPalindrome("a"));`,
            python: `def longestPalindrome(s):
    pass

print(longestPalindrome("babad"))
print(longestPalindrome("cbbd"))
print(longestPalindrome("a"))`,
            java: `class Solution {
    public static String longestPalindrome(String s) {
        return "";
    }

    public static void main(String[] args) {
        System.out.println(longestPalindrome("babad"));
        System.out.println(longestPalindrome("cbbd"));
        System.out.println(longestPalindrome("a"));
    }
}`
        },

        expectedOutput: {
            javascript: "bab\nbb\na",
            python: "bab\nbb\na",
            java: "bab\nbb\na"
        }
    },
    "number-of-islands": {
        id: "number-of-islands",
        title: "Number of Islands",
        difficulty: "Hard",
        category: "Graph • DFS",
        importanceScore: 9,

        description: {
            text: "Given a grid of '1's (land) and '0's (water), return the number of islands.",
            notes: [
                "An island is surrounded by water.",
                "Use DFS or BFS to explore land."
            ]
        },

        examples: [
            {
                input: `grid =
[
["1","1","1","1","0"],
["1","1","0","1","0"],
["1","1","0","0","0"],
["0","0","0","0","0"]
]`,
                output: "1"
            },
            {
                input: `grid =
[
["1","1","0","0","0"],
["1","1","0","0","0"],
["0","0","1","0","0"],
["0","0","0","1","1"]
]`,
                output: "3"
            },
            {
                input: `grid = [["0"]]`,
                output: "0"
            }
        ],

        constraints: [
            "m == grid.length",
            "n == grid[i].length",
            "1 ≤ m, n ≤ 300"
        ],

        starterCode: {
            javascript: `function numIslands(grid){
 // Write your solution here
}`,
            python: `def numIslands(grid):
 pass`,
            java: `class Solution{
 public static int numIslands(char[][] grid){
  return 0;
 }
}`
        },

        expectedOutput: {
            javascript: "1\n3\n0",
            python: "1\n3\n0",
            java: "1\n3\n0"
        }
    },
    "longest-consecutive-sequence": {
        id: "longest-consecutive-sequence",
        title: "Longest Consecutive Sequence",
        difficulty: "Hard",
        category: "Hash Set • Array",
        importanceScore: 9,

        description: {
            text: "Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.",
            notes: [
                "Your algorithm should run in O(n) time.",
                "HashSet can help track consecutive numbers."
            ],
        },

        examples: [
            {
                input: "nums = [100,4,200,1,3,2]",
                output: "4",
                explanation: "Sequence is [1,2,3,4]."
            },
            {
                input: "nums = [0,3,7,2,5,8,4,6,0,1]",
                output: "9"
            },
            {
                input: "nums = []",
                output: "0"
            }
        ],

        constraints: [
            "0 ≤ nums.length ≤ 10⁵",
            "-10⁹ ≤ nums[i] ≤ 10⁹",
            "Must run in O(n)"
        ],

        starterCode: {
            javascript: `function longestConsecutive(nums) {
  // Write your solution here
}

console.log(longestConsecutive([100,4,200,1,3,2]));
console.log(longestConsecutive([0,3,7,2,5,8,4,6,0,1]));
console.log(longestConsecutive([]));`,
            python: `def longestConsecutive(nums):
    pass`,
            java: `class Solution{
 public static int longestConsecutive(int[] nums){
  return 0;
 }
}`
        },

        expectedOutput: {
            javascript: "4\n9\n0",
            python: "4\n9\n0",
            java: "4\n9\n0"
        }
    },

    "set-matrix-zeroes": {
        id: "set-matrix-zeroes",
        title: "Set Matrix Zeroes",
        difficulty: "Medium",
        category: "Matrix • Array",
        importanceScore: 8,

        description: {
            text: "Given an m x n integer matrix, if an element is 0, set its entire row and column to 0.",
            notes: [
                "The modification must be done in-place.",
                "Use the first row and column as markers for an optimal solution."
            ],
        },

        examples: [
            {
                input: "matrix = [[1,1,1],[1,0,1],[1,1,1]]",
                output: "[[1,0,1],[0,0,0],[1,0,1]]",
                explanation: "Row and column containing 0 become all zeros."
            },
            {
                input: "matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]",
                output: "[[0,0,0,0],[0,4,5,0],[0,3,1,0]]"
            },
            {
                input: "matrix = [[1]]",
                output: "[[1]]"
            }
        ],

        constraints: [
            "m == matrix.length",
            "n == matrix[0].length",
            "1 ≤ m, n ≤ 200"
        ],

        starterCode: {
            javascript: `function setZeroes(matrix) {
  // Write your solution here
}

console.log(setZeroes([[1,1,1],[1,0,1],[1,1,1]]));
console.log(setZeroes([[0,1,2,0],[3,4,5,2],[1,3,1,5]]));
console.log(setZeroes([[1]]));`,
            python: `def setZeroes(matrix):
    pass`,
            java: `class Solution{
 public static void setZeroes(int[][] matrix){
 }
}`
        },

        expectedOutput: {
            javascript: "[[1,0,1],[0,0,0],[1,0,1]]\n[[0,0,0,0],[0,4,5,0],[0,3,1,0]]\n[[1]]",
            python: "[[1,0,1],[0,0,0],[1,0,1]]\n[[0,0,0,0],[0,4,5,0],[0,3,1,0]]\n[[1]]",
            java: "[[1,0,1],[0,0,0],[1,0,1]]\n[[0,0,0,0],[0,4,5,0],[0,3,1,0]]\n[[1]]"
        }
    },

    "permutations": {
        id: "permutations",
        title: "Permutations",
        difficulty: "Hard",
        category: "Backtracking",
        importanceScore: 8,

        description: {
            text: "Given an array nums of distinct integers, return all the possible permutations.",
            notes: [
                "Use backtracking to generate permutations.",
                "The number of permutations is n!."
            ],
        },

        examples: [
            {
                input: "nums = [1,2,3]",
                output: "[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]"
            },
            {
                input: "nums = [0,1]",
                output: "[[0,1],[1,0]]"
            },
            {
                input: "nums = [1]",
                output: "[[1]]"
            }
        ],

        constraints: [
            "1 ≤ nums.length ≤ 6",
            "-10 ≤ nums[i] ≤ 10",
            "All integers are unique"
        ],

        starterCode: {
            javascript: `function permute(nums) {
  // Write your solution here
}

console.log(permute([1,2,3]));
console.log(permute([0,1]));
console.log(permute([1]));`,
            python: `def permute(nums):
    pass`,
            java: `class Solution{
 public static java.util.List<java.util.List<Integer>> permute(int[] nums){
  return new java.util.ArrayList<>();
 }
}`
        },

        expectedOutput: {
            javascript: "[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]\n[[0,1],[1,0]]\n[[1]]",
            python: "[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]\n[[0,1],[1,0]]\n[[1]]",
            java: "[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]\n[[0,1],[1,0]]\n[[1]]"
        }
    },

    "search-2d-matrix": {
        id: "search-2d-matrix",
        title: "Search a 2D Matrix",
        difficulty: "Medium",
        category: "Binary Search • Matrix",
        importanceScore: 8,

        description: {
            text: "Write an efficient algorithm that searches for a value in an m x n matrix.",
            notes: [
                "Each row is sorted.",
                "First integer of each row is greater than the last integer of the previous row."
            ],
        },

        examples: [
            {
                input: "matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3",
                output: "true"
            },
            {
                input: "matrix = [[1,3,5],[7,9,11]], target = 8",
                output: "false"
            },
            {
                input: "matrix = [[1]], target = 1",
                output: "true"
            }
        ],

        constraints: [
            "m == matrix.length",
            "n == matrix[i].length",
            "1 ≤ m, n ≤ 100"
        ],

        starterCode: {
            javascript: `function searchMatrix(matrix, target) {
  // Write your solution here
}

console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]],3));
console.log(searchMatrix([[1,3,5],[7,9,11]],8));
console.log(searchMatrix([[1]],1));`,
            python: `def searchMatrix(matrix,target):
    pass`,
            java: `class Solution{
 public static boolean searchMatrix(int[][] matrix,int target){
  return false;
 }
}`
        },

        expectedOutput: {
            javascript: "true\nfalse\ntrue",
            python: "True\nFalse\nTrue",
            java: "true\nfalse\ntrue"
        }
    },

    "merge-two-sorted-lists": {
        id: "merge-two-sorted-lists",
        title: "Merge Two Sorted Lists",
        difficulty: "Easy",
        category: "Linked List",
        importanceScore: 7,

        description: {
            text: "Merge two sorted linked lists and return it as a new sorted list.",
            notes: [
                "The new list should be made by splicing together nodes.",
                "You may solve iteratively or recursively."
            ],
        },

        examples: [
            {
                input: "list1 = [1,2,4], list2 = [1,3,4]",
                output: "[1,1,2,3,4,4]"
            },
            {
                input: "list1 = [], list2 = []",
                output: "[]"
            },
            {
                input: "list1 = [], list2 = [0]",
                output: "[0]"
            }
        ],

        constraints: [
            "The number of nodes in both lists is in the range [0, 50]",
            "-100 ≤ Node.val ≤ 100",
            "Both lists are sorted"
        ],

        starterCode: {
            javascript: `function mergeTwoLists(list1, list2) {
  // Write your solution here
}

console.log(mergeTwoLists([1,2,4],[1,3,4]));
console.log(mergeTwoLists([],[]));
console.log(mergeTwoLists([],[0]));`,
            python: `def mergeTwoLists(list1,list2):
    pass`,
            java: `class Solution{
 public static int[] mergeTwoLists(int[] list1,int[] list2){
  return new int[0];
 }
}`
        },

        expectedOutput: {
            javascript: "[1,1,2,3,4,4]\n[]\n[0]",
            python: "[1,1,2,3,4,4]\n[]\n[0]",
            java: "[1,1,2,3,4,4]\n[]\n[0]"
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