// fullCodeDummyData.js

const fullCodeDummyData = {
    "two-sum": [
        {
            language: "javascript",
            fullCode: `function twoSum(nums, target) {
    const map = {};
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map.hasOwnProperty(complement)) {
            return [map[complement], i];
        }
        map[nums[i]] = i;
    }
    return [];
}

// Test cases
console.log(twoSum([2, 7, 11, 15], 9)); // Expected: [0, 1]
console.log(twoSum([3, 2, 4], 6)); // Expected: [1, 2]
console.log(twoSum([3, 3], 6)); // Expected: [0, 1]`,
            createdAt: new Date()
        },
        {
            language: "python",
            fullCode: `def twoSum(nums, target):
    num_map = {}
    for i, num in enumerate(nums):
        complement = target - num
        if complement in num_map:
            return [num_map[complement], i]
        num_map[num] = i
    return []

# Test cases
print(twoSum([2, 7, 11, 15], 9))  # Expected: [0, 1]
print(twoSum([3, 2, 4], 6))  # Expected: [1, 2]
print(twoSum([3, 3], 6))  # Expected: [0, 1]`,
            createdAt: new Date()
        },
        {
            language: "java",
            fullCode: `import java.util.*;

class TwoSumSolution {
    public static int[] twoSum(int[] nums, int target) {
        Map<Integer, Integer> map = new HashMap<>();
        for (int i = 0; i < nums.length; i++) {
            int complement = target - nums[i];
            if (map.containsKey(complement)) {
                return new int[]{map.get(complement), i};
            }
            map.put(nums[i], i);
        }
        return new int[0];
    }

    public static void main(String[] args) {
        System.out.println(Arrays.toString(twoSum(new int[]{2, 7, 11, 15}, 9))); // Expected: [0, 1]
        System.out.println(Arrays.toString(twoSum(new int[]{3, 2, 4}, 6))); // Expected: [1, 2]
        System.out.println(Arrays.toString(twoSum(new int[]{3, 3}, 6))); // Expected: [0, 1]
    }
}`,
            createdAt: new Date()
        }
    ],

    "reverse-string": [
        {
            language: "javascript",
            fullCode: `function reverseString(s) {
    let left = 0, right = s.length - 1;
    while (left < right) {
        [s[left], s[right]] = [s[right], s[left]];
        left++;
        right--;
    }
}

// Test cases
let test1 = ["h","e","l","l","o"];
reverseString(test1);
console.log(test1); // Expected: ["o","l","l","e","h"]

let test2 = ["H","a","n","n","a","h"];
reverseString(test2);
console.log(test2); // Expected: ["h","a","n","n","a","H"]`,
            createdAt: new Date()
        },
        {
            language: "python",
            fullCode: `def reverseString(s):
    left, right = 0, len(s) - 1
    while left < right:
        s[left], s[right] = s[right], s[left]
        left += 1
        right -= 1

# Test cases
test1 = ["h","e","l","l","o"]
reverseString(test1)
print(test1)  # Expected: ['o', 'l', 'l', 'e', 'h']

test2 = ["H","a","n","n","a","h"]
reverseString(test2)
print(test2)  # Expected: ['h', 'a', 'n', 'n', 'a', 'H']`,
            createdAt: new Date()
        },
        {
            language: "java",
            fullCode: `import java.util.*;

class Solution {
    public static void reverseString(char[] s) {
        int left = 0, right = s.length - 1;
        while (left < right) {
            char temp = s[left];
            s[left] = s[right];
            s[right] = temp;
            left++;
            right--;
        }
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
            createdAt: new Date()
        }
    ],

    "valid-palindrome": [
        {
            language: "javascript",
            fullCode: `function isPalindrome(s) {
    s = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    let left = 0, right = s.length - 1;
    while (left < right) {
        if (s[left] !== s[right]) return false;
        left++;
        right--;
    }
    return true;
}

// Test cases
console.log(isPalindrome("A man, a plan, a canal: Panama")); // Expected: true
console.log(isPalindrome("race a car")); // Expected: false
console.log(isPalindrome(" ")); // Expected: true`,
            createdAt: new Date()
        },
        {
            language: "python",
            fullCode: `def isPalindrome(s):
    s = ''.join(c.lower() for c in s if c.isalnum())
    left, right = 0, len(s) - 1
    while left < right:
        if s[left] != s[right]:
            return False
        left += 1
        right -= 1
    return True

# Test cases
print(isPalindrome("A man, a plan, a canal: Panama"))  # Expected: True
print(isPalindrome("race a car"))  # Expected: False
print(isPalindrome(" "))  # Expected: True`,
            createdAt: new Date()
        },
        {
            language: "java",
            fullCode: `class Solution {
    public static boolean isPalindrome(String s) {
        s = s.replaceAll("[^a-zA-Z0-9]", "").toLowerCase();
        int left = 0, right = s.length() - 1;
        while (left < right) {
            if (s.charAt(left) != s.charAt(right)) return false;
            left++;
            right--;
        }
        return true;
    }

    public static void main(String[] args) {
        System.out.println(isPalindrome("A man, a plan, a canal: Panama")); // Expected: true
        System.out.println(isPalindrome("race a car")); // Expected: false
        System.out.println(isPalindrome(" ")); // Expected: true
    }
}`,
            createdAt: new Date()
        }
    ],

    "maximum-subarray": [
        {
            language: "javascript",
            fullCode: `function maxSubArray(nums) {
    let maxSum = nums[0];
    let currentSum = nums[0];
    
    for (let i = 1; i < nums.length; i++) {
        currentSum = Math.max(nums[i], currentSum + nums[i]);
        maxSum = Math.max(maxSum, currentSum);
    }
    return maxSum;
}

// Test cases
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])); // Expected: 6
console.log(maxSubArray([1])); // Expected: 1
console.log(maxSubArray([5,4,-1,7,8])); // Expected: 23`,
            createdAt: new Date()
        },
        {
            language: "python",
            fullCode: `def maxSubArray(nums):
    max_sum = current_sum = nums[0]
    for num in nums[1:]:
        current_sum = max(num, current_sum + num)
        max_sum = max(max_sum, current_sum)
    return max_sum

# Test cases
print(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))  # Expected: 6
print(maxSubArray([1]))  # Expected: 1
print(maxSubArray([5,4,-1,7,8]))  # Expected: 23`,
            createdAt: new Date()
        },
        {
            language: "java",
            fullCode: `class Solution {
    public static int maxSubArray(int[] nums) {
        int maxSum = nums[0];
        int currentSum = nums[0];
        for (int i = 1; i < nums.length; i++) {
            currentSum = Math.max(nums[i], currentSum + nums[i]);
            maxSum = Math.max(maxSum, currentSum);
        }
        return maxSum;
    }
    
    public static void main(String[] args) {
        System.out.println(maxSubArray(new int[]{-2,1,-3,4,-1,2,1,-5,4})); // Expected: 6
        System.out.println(maxSubArray(new int[]{1})); // Expected: 1
        System.out.println(maxSubArray(new int[]{5,4,-1,7,8})); // Expected: 23
    }
}`,
            createdAt: new Date()
        }
    ],

    "container-with-most-water": [
        {
            language: "javascript",
            fullCode: `function maxArea(height) {
    let left = 0, right = height.length - 1;
    let maxArea = 0;
    
    while (left < right) {
        const width = right - left;
        const currentArea = Math.min(height[left], height[right]) * width;
        maxArea = Math.max(maxArea, currentArea);
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    
    return maxArea;
}

// Test cases
console.log(maxArea([1,8,6,2,5,4,8,3,7])); // Expected: 49
console.log(maxArea([1,1])); // Expected: 1`,
            createdAt: new Date()
        },
        {
            language: "python",
            fullCode: `def maxArea(height):
    left, right = 0, len(height) - 1
    max_area = 0
    while left < right:
        width = right - left
        current_area = min(height[left], height[right]) * width
        max_area = max(max_area, current_area)
        if height[left] < height[right]:
            left += 1
        else:
            right -= 1
    return max_area

# Test cases
print(maxArea([1,8,6,2,5,4,8,3,7]))  # Expected: 49
print(maxArea([1,1]))  # Expected: 1`,
            createdAt: new Date()
        },
        {
            language: "java",
            fullCode: `class Solution {
    public static int maxArea(int[] height) {
        int left = 0, right = height.length - 1;
        int maxArea = 0;
        while (left < right) {
            int width = right - left;
            int currentArea = Math.min(height[left], height[right]) * width;
            maxArea = Math.max(maxArea, currentArea);
            if (height[left] < height[right]) {
                left++;
            } else {
                right--;
            }
        }
        return maxArea;
    }
    
    public static void main(String[] args) {
        System.out.println(maxArea(new int[]{1,8,6,2,5,4,8,3,7})); // Expected: 49
        System.out.println(maxArea(new int[]{1,1})); // Expected: 1
    }
}`,
            createdAt: new Date()
        }
    ],

    "product-of-array-except-self": [
        {
            problemId: "product-of-array-except-self",
            language: "javascript",
            fullCode: `function productExceptSelf(nums) {
    const n = nums.length;
    const result = new Array(n).fill(1);
    
    // Left products
    let leftProd = 1;
    for (let i = 0; i < n; i++) {
        result[i] = leftProd;
        leftProd *= nums[i];
    }
    
    // Right products
    let rightProd = 1;
    for (let i = n - 1; i >= 0; i--) {
        result[i] *= rightProd;
        rightProd *= nums[i];
    }
    
    return result;
}

// Test cases
console.log(productExceptSelf([1,2,3,4])); // Expected: [24,12,8,6]
console.log(productExceptSelf([-1,1,0,-3,3])); // Expected: [0,0,9,0,0]
console.log(productExceptSelf([2,3,4])); // Expected: [12,8,6]`,
            createdAt: new Date()
        },
        {
            problemId: "product-of-array-except-self",
            language: "python",
            fullCode: `def productExceptSelf(nums):
    n = len(nums)
    result = [1] * n
    
    # Left products
    left_prod = 1
    for i in range(n):
        result[i] = left_prod
        left_prod *= nums[i]
    
    # Right products
    right_prod = 1
    for i in range(n - 1, -1, -1):
        result[i] *= right_prod
        right_prod *= nums[i]
    
    return result

# Test cases
print(productExceptSelf([1,2,3,4]))  # Expected: [24,12,8,6]
print(productExceptSelf([-1,1,0,-3,3]))  # Expected: [0,0,9,0,0]
print(productExceptSelf([2,3,4]))  # Expected: [12,8,6]`,
            createdAt: new Date()
        },
        {
            problemId: "product-of-array-except-self",
            language: "java",
            fullCode: `import java.util.*;

class Solution {
    public static int[] productExceptSelf(int[] nums) {
        int n = nums.length;
        int[] result = new int[n];
        Arrays.fill(result, 1);
        
        int leftProd = 1;
        for (int i = 0; i < n; i++) {
            result[i] = leftProd;
            leftProd *= nums[i];
        }
        
        int rightProd = 1;
        for (int i = n - 1; i >= 0; i--) {
            result[i] *= rightProd;
            rightProd *= nums[i];
        }
        
        return result;
    }

    public static void main(String[] args) {
        System.out.println(Arrays.toString(productExceptSelf(new int[]{1,2,3,4}))); // Expected: [24,12,8,6]
        System.out.println(Arrays.toString(productExceptSelf(new int[]{-1,1,0,-3,3}))); // Expected: [0,0,9,0,0]
        System.out.println(Arrays.toString(productExceptSelf(new int[]{2,3,4}))); // Expected: [12,8,6]
    }
}`,
            createdAt: new Date()
        }
    ],


    "valid-parentheses": [
        {
            problemId: "valid-parentheses",
            language: "javascript",
            fullCode: `function isValid(s) {
    const stack = [];
    const map = {')': '(', '}': '{', ']': '['};
    
    for (let char of s) {
        if (map[char]) {
            if (stack.pop() !== map[char]) return false;
        } else {
            stack.push(char);
        }
    }
    return stack.length === 0;
}

// Test cases
console.log(isValid("()[]")); // Expected: true
console.log(isValid("(]"));   // Expected: false
console.log(isValid("{[]}")); // Expected: true`,
            createdAt: new Date()
        },
        {
            problemId: "valid-parentheses",
            language: "python",
            fullCode: `def isValid(s):
    stack = []
    mapping = {')': '(', '}': '{', ']': '['}
    
    for char in s:
        if char in mapping:
            if not stack or stack.pop() != mapping[char]:
                return False
        else:
            stack.append(char)
    return not stack

# Test cases
print(isValid("()[]"))  # Expected: True
print(isValid("(]"))    # Expected: False
print(isValid("{[]}"))  # Expected: True`,
            createdAt: new Date()
        },
        {
            problemId: "valid-parentheses",
            language: "java",
            fullCode: `import java.util.*;

class Solution {
    public static boolean isValid(String s) {
        Stack<Character> stack = new Stack<>();
        Map<Character, Character> map = Map.of(')', '(', '}', '{', ']', '[');
        
        for (char c : s.toCharArray()) {
            if (map.containsKey(c)) {
                if (stack.isEmpty() || stack.pop() != map.get(c)) return false;
            } else {
                stack.push(c);
            }
        }
        return stack.isEmpty();
    }

    public static void main(String[] args) {
        System.out.println(isValid("()[]")); // Expected: true
        System.out.println(isValid("(]"));   // Expected: false
        System.out.println(isValid("{[]}")); // Expected: true
    }
}`,
            createdAt: new Date()
        }

    ],

    "binary-search": [
        {
            problemId: "binary-search",
            language: "javascript",
            fullCode: `function search(nums, target) {
    let left = 0, right = nums.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) return mid;
        else if (nums[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return -1;
}

// Test cases
console.log(search([-1,0,3,5,9,12],9)); // Expected: 4
console.log(search([-1,0,3,5,9,12],2)); // Expected: -1
console.log(search([1,2,3,4,5],4)); // Expected: 3`,
            createdAt: new Date()
        },
        {
            problemId: "binary-search",
            language: "python",
            fullCode: `def search(nums, target):
    left, right = 0, len(nums) - 1
    while left <= right:
        mid = (left + right) // 2
        if nums[mid] == target:
            return mid
        elif nums[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    return -1

# Test cases
print(search([-1,0,3,5,9,12],9)) # Expected: 4
print(search([-1,0,3,5,9,12],2)) # Expected: -1
print(search([1,2,3,4,5],4)) # Expected: 3`,
            createdAt: new Date()
        },
        {
            problemId: "binary-search",
            language: "java",
            fullCode: `class Solution {
    public static int search(int[] nums, int target) {
        int left = 0, right = nums.length - 1;
        while (left <= right) {
            int mid = left + (right - left) / 2;
            if (nums[mid] == target) return mid;
            else if (nums[mid] < target) left = mid + 1;
            else right = mid - 1;
        }
        return -1;
    }

    public static void main(String[] args) {
        System.out.println(search(new int[]{-1,0,3,5,9,12},9)); // Expected: 4
        System.out.println(search(new int[]{-1,0,3,5,9,12},2)); // Expected: -1
        System.out.println(search(new int[]{1,2,3,4,5},4)); // Expected: 3
    }
}`,
            createdAt: new Date()
        }
    ],
    "longest-substring-without-repeating": [
        {
            problemId: "longest-substring-without-repeating",
            language: "javascript",
            fullCode: `function lengthOfLongestSubstring(s) {
    const set = new Set();
    let left = 0, maxLength = 0;

    for (let right = 0; right < s.length; right++) {
        while (set.has(s[right])) {
            set.delete(s[left]);
            left++;
        }
        set.add(s[right]);
        maxLength = Math.max(maxLength, right - left + 1);
    }
    return maxLength;
}

// Test cases
console.log(lengthOfLongestSubstring("abcabcbb")); // Expected: 3
console.log(lengthOfLongestSubstring("bbbbb")); // Expected: 1
console.log(lengthOfLongestSubstring("pwwkew")); // Expected: 3`,
            createdAt: new Date()
        },
        {
            problemId: "longest-substring-without-repeating",
            language: "python",
            fullCode: `def lengthOfLongestSubstring(s):
    char_set = set()
    left = 0
    max_length = 0

    for right, char in enumerate(s):
        while char in char_set:
            char_set.remove(s[left])
            left += 1
        char_set.add(char)
        max_length = max(max_length, right - left + 1)
    return max_length

# Test cases
print(lengthOfLongestSubstring("abcabcbb")) # Expected: 3
print(lengthOfLongestSubstring("bbbbb"))    # Expected: 1
print(lengthOfLongestSubstring("pwwkew"))   # Expected: 3`,
            createdAt: new Date()
        },
        {
            problemId: "longest-substring-without-repeating",
            language: "java",
            fullCode: `import java.util.*;

class Solution {
    public static int lengthOfLongestSubstring(String s) {
        Set<Character> set = new HashSet<>();
        int left = 0, maxLength = 0;

        for (int right = 0; right < s.length(); right++) {
            while (set.contains(s.charAt(right))) {
                set.remove(s.charAt(left));
                left++;
            }
            set.add(s.charAt(right));
            maxLength = Math.max(maxLength, right - left + 1);
        }
        return maxLength;
    }

    public static void main(String[] args) {
        System.out.println(lengthOfLongestSubstring("abcabcbb")); // Expected: 3
        System.out.println(lengthOfLongestSubstring("bbbbb"));    // Expected: 1
        System.out.println(lengthOfLongestSubstring("pwwkew"));   // Expected: 3
    }
}`,
            createdAt: new Date()
        }
    ],
    "three-sum": [
        {
            problemId: "three-sum",
            language: "javascript",
            fullCode: `function threeSum(nums) {
    nums.sort((a, b) => a - b);
    const res = [];
    
    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        let left = i + 1, right = nums.length - 1;
        
        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];
            if (sum === 0) {
                res.push([nums[i], nums[left], nums[right]]);
                while (left < right && nums[left] === nums[left + 1]) left++;
                while (left < right && nums[right] === nums[right - 1]) right--;
                left++;
                right--;
            } else if (sum < 0) left++;
            else right--;
        }
    }
    return res;
}

// Test cases
console.log(threeSum([-1,0,1,2,-1,-4])); // Expected: [[-1,-1,2],[-1,0,1]]
console.log(threeSum([0,1,1])); // Expected: []
console.log(threeSum([0,0,0])); // Expected: [[0,0,0]]`,
            createdAt: new Date()
        },
        {
            problemId: "three-sum",
            language: "python",
            fullCode: `def threeSum(nums):
    nums.sort()
    res = []
    for i in range(len(nums) - 2):
        if i > 0 and nums[i] == nums[i-1]:
            continue
        left, right = i + 1, len(nums) - 1
        while left < right:
            total = nums[i] + nums[left] + nums[right]
            if total == 0:
                res.append([nums[i], nums[left], nums[right]])
                while left < right and nums[left] == nums[left + 1]:
                    left += 1
                while left < right and nums[right] == nums[right - 1]:
                    right -= 1
                left += 1
                right -= 1
            elif total < 0:
                left += 1
            else:
                right -= 1
    return res

# Test cases
print(threeSum([-1,0,1,2,-1,-4])) # Expected: [[-1,-1,2],[-1,0,1]]
print(threeSum([0,1,1]))          # Expected: []
print(threeSum([0,0,0]))          # Expected: [[0,0,0]]`,
            createdAt: new Date()
        },
        {
            problemId: "three-sum",
            language: "java",
            fullCode: `import java.util.*;

class Solution {
    public static List<List<Integer>> threeSum(int[] nums) {
        Arrays.sort(nums);
        List<List<Integer>> res = new ArrayList<>();
        
        for (int i = 0; i < nums.length - 2; i++) {
            if (i > 0 && nums[i] == nums[i-1]) continue;
            int left = i + 1, right = nums.length - 1;
            
            while (left < right) {
                int sum = nums[i] + nums[left] + nums[right];
                if (sum == 0) {
                    res.add(Arrays.asList(nums[i], nums[left], nums[right]));
                    while (left < right && nums[left] == nums[left + 1]) left++;
                    while (left < right && nums[right] == nums[right - 1]) right--;
                    left++;
                    right--;
                } else if (sum < 0) left++;
                else right--;
            }
        }
        return res;
    }

    public static void main(String[] args) {
        System.out.println(threeSum(new int[]{-1,0,1,2,-1,-4})); // Expected: [[-1,-1,2],[-1,0,1]]
        System.out.println(threeSum(new int[]{0,1,1}));           // Expected: []
        System.out.println(threeSum(new int[]{0,0,0}));           // Expected: [[0,0,0]]
    }
}`,
            createdAt: new Date()
        }
    ],
    "group-anagrams": [
        {
            problemId: "group-anagrams",
            language: "javascript",
            fullCode: `function groupAnagrams(strs) {
    const map = new Map();
    for (let str of strs) {
        const key = str.split('').sort().join('');
        if (!map.has(key)) map.set(key, []);
        map.get(key).push(str);
    }
    return Array.from(map.values());
}

// Test cases
console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"])); // Expected: [["eat","tea","ate"],["tan","nat"],["bat"]]
console.log(groupAnagrams([""])); // Expected: [[""]]
console.log(groupAnagrams(["a"])); // Expected: [["a"]]`,
            createdAt: new Date()
        },
        {
            problemId: "group-anagrams",
            language: "python",
            fullCode: `def groupAnagrams(strs):
    from collections import defaultdict
    map = defaultdict(list)
    for s in strs:
        key = ''.join(sorted(s))
        map[key].append(s)
    return list(map.values())

# Test cases
print(groupAnagrams(["eat","tea","tan","ate","nat","bat"])) # Expected: [['eat','tea','ate'],['tan','nat'],['bat']]
print(groupAnagrams([""])) # Expected: [['']]
print(groupAnagrams(["a"])) # Expected: [['a']]`,
            createdAt: new Date()
        },
        {
            problemId: "group-anagrams",
            language: "java",
            fullCode: `import java.util.*;

class Solution {
    public static List<List<String>> groupAnagrams(String[] strs) {
        Map<String, List<String>> map = new HashMap<>();
        for (String s : strs) {
            char[] arr = s.toCharArray();
            Arrays.sort(arr);
            String key = new String(arr);
            map.computeIfAbsent(key, k -> new ArrayList<>()).add(s);
        }
        return new ArrayList<>(map.values());
    }

    public static void main(String[] args) {
        System.out.println(groupAnagrams(new String[]{"eat","tea","tan","ate","nat","bat"})); // Expected: [[eat, tea, ate], [tan, nat], [bat]]
        System.out.println(groupAnagrams(new String[]{""})); // Expected: [[ ]]
        System.out.println(groupAnagrams(new String[]{"a"})); // Expected: [[a]]
    }
}`,
            createdAt: new Date()
        }
    ],
    "subarray-sum-equals-k": [
        {
            problemId: "subarray-sum-equals-k",
            language: "javascript",
            fullCode: `function subarraySum(nums, k) {
    const map = new Map();
    map.set(0, 1);
    let sum = 0, count = 0;
    
    for (let num of nums) {
        sum += num;
        if (map.has(sum - k)) count += map.get(sum - k);
        map.set(sum, (map.get(sum) || 0) + 1);
    }
    
    return count;
}

// Test cases
console.log(subarraySum([1,1,1],2)); // Expected: 2
console.log(subarraySum([1,2,3],3)); // Expected: 2
console.log(subarraySum([1,-1,0],0)); // Expected: 3`,
            createdAt: new Date()
        },
        {
            problemId: "subarray-sum-equals-k",
            language: "python",
            fullCode: `def subarraySum(nums, k):
    from collections import defaultdict
    prefix = defaultdict(int)
    prefix[0] = 1
    count = 0
    total = 0
    
    for num in nums:
        total += num
        count += prefix.get(total - k, 0)
        prefix[total] += 1
        
    return count

# Test cases
print(subarraySum([1,1,1],2))  # Expected: 2
print(subarraySum([1,2,3],3))  # Expected: 2
print(subarraySum([1,-1,0],0))  # Expected: 3`,
            createdAt: new Date()
        },
        {
            problemId: "subarray-sum-equals-k",
            language: "java",
            fullCode: `import java.util.*;

class Solution {
    public static int subarraySum(int[] nums, int k) {
        Map<Integer, Integer> map = new HashMap<>();
        map.put(0, 1);
        int sum = 0, count = 0;
        
        for (int num : nums) {
            sum += num;
            count += map.getOrDefault(sum - k, 0);
            map.put(sum, map.getOrDefault(sum, 0) + 1);
        }
        
        return count;
    }

    public static void main(String[] args) {
        System.out.println(subarraySum(new int[]{1,1,1},2)); // Expected: 2
        System.out.println(subarraySum(new int[]{1,2,3},3)); // Expected: 2
        System.out.println(subarraySum(new int[]{1,-1,0},0)); // Expected: 3
    }
}`,
            createdAt: new Date()
        }
    ],

    "jump-game": [
        {
            problemId: "jump-game",
            language: "javascript",
            fullCode: `function canJump(nums) {
    let maxReach = 0;
    for (let i = 0; i < nums.length; i++) {
        if (i > maxReach) return false;
        maxReach = Math.max(maxReach, i + nums[i]);
    }
    return true;
}

// Test cases
console.log(canJump([2,3,1,1,4])); // Expected: true
console.log(canJump([3,2,1,0,4])); // Expected: false
console.log(canJump([2,0,0])); // Expected: true`,
            createdAt: new Date()
        },
        {
            problemId: "jump-game",
            language: "python",
            fullCode: `def canJump(nums):
    max_reach = 0
    for i, num in enumerate(nums):
        if i > max_reach:
            return False
        max_reach = max(max_reach, i + num)
    return True

# Test cases
print(canJump([2,3,1,1,4]))  # Expected: True
print(canJump([3,2,1,0,4]))  # Expected: False
print(canJump([2,0,0]))  # Expected: True`,
            createdAt: new Date()
        },
        {
            problemId: "jump-game",
            language: "java",
            fullCode: `class Solution {
    public static boolean canJump(int[] nums) {
        int maxReach = 0;
        for (int i = 0; i < nums.length; i++) {
            if (i > maxReach) return false;
            maxReach = Math.max(maxReach, i + nums[i]);
        }
        return true;
    }

    public static void main(String[] args) {
        System.out.println(canJump(new int[]{2,3,1,1,4})); // Expected: true
        System.out.println(canJump(new int[]{3,2,1,0,4})); // Expected: false
        System.out.println(canJump(new int[]{2,0,0})); // Expected: true
    }
}`,
            createdAt: new Date()
        }
    ],
    "search-insert-position": [
        {
            problemId: "search-insert-position",
            language: "javascript",
            fullCode: `function searchInsert(nums, target) {
    let left = 0, right = nums.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) return mid;
        else if (nums[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return left;
}

// Test cases
console.log(searchInsert([1,3,5,6],5)); // Expected: 2
console.log(searchInsert([1,3,5,6],2)); // Expected: 1
console.log(searchInsert([1,3,5,6],7)); // Expected: 4`,
            createdAt: new Date()
        },
        {
            problemId: "search-insert-position",
            language: "python",
            fullCode: `def searchInsert(nums, target):
    left, right = 0, len(nums) - 1
    while left <= right:
        mid = (left + right) // 2
        if nums[mid] == target:
            return mid
        elif nums[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    return left

# Test cases
print(searchInsert([1,3,5,6],5))  # Expected: 2
print(searchInsert([1,3,5,6],2))  # Expected: 1
print(searchInsert([1,3,5,6],7))  # Expected: 4`,
            createdAt: new Date()
        },
        {
            problemId: "search-insert-position",
            language: "java",
            fullCode: `class Solution {
    public static int searchInsert(int[] nums, int target) {
        int left = 0, right = nums.length - 1;
        while (left <= right) {
            int mid = left + (right - left) / 2;
            if (nums[mid] == target) return mid;
            else if (nums[mid] < target) left = mid + 1;
            else right = mid - 1;
        }
        return left;
    }

    public static void main(String[] args) {
        System.out.println(searchInsert(new int[]{1,3,5,6},5)); // Expected: 2
        System.out.println(searchInsert(new int[]{1,3,5,6},2)); // Expected: 1
        System.out.println(searchInsert(new int[]{1,3,5,6},7)); // Expected: 4
    }
}`,
            createdAt: new Date()
        }
    ],

    "merge-intervals": [
        {
            problemId: "merge-intervals",
            language: "javascript",
            fullCode: `function merge(intervals) {
    if (intervals.length === 0) return [];
    
    // Sort intervals by start time
    intervals.sort((a, b) => a[0] - b[0]);
    const merged = [intervals[0]];
    
    for (let i = 1; i < intervals.length; i++) {
        let last = merged[merged.length - 1];
        if (intervals[i][0] <= last[1]) {
            last[1] = Math.max(last[1], intervals[i][1]);
        } else {
            merged.push(intervals[i]);
        }
    }
    
    return merged;
}

// Test cases
console.log(merge([[1,3],[2,6],[8,10],[15,18]])); // Expected: [[1,6],[8,10],[15,18]]
console.log(merge([[1,4],[4,5]])); // Expected: [[1,5]]
console.log(merge([[1,4],[0,4]])); // Expected: [[0,4]]`,
            createdAt: new Date()
        },
        {
            problemId: "merge-intervals",
            language: "python",
            fullCode: `def merge(intervals):
    if not intervals:
        return []
    
    intervals.sort(key=lambda x: x[0])
    merged = [intervals[0]]
    
    for i in range(1, len(intervals)):
        last = merged[-1]
        if intervals[i][0] <= last[1]:
            last[1] = max(last[1], intervals[i][1])
        else:
            merged.append(intervals[i])
    
    return merged

# Test cases
print(merge([[1,3],[2,6],[8,10],[15,18]])) # Expected: [[1,6],[8,10],[15,18]]
print(merge([[1,4],[4,5]])) # Expected: [[1,5]]
print(merge([[1,4],[0,4]])) # Expected: [[0,4]]`,
            createdAt: new Date()
        },
        {
            problemId: "merge-intervals",
            language: "java",
            fullCode: `import java.util.*;

class Solution {
    public static int[][] merge(int[][] intervals) {
        if (intervals.length == 0) return new int[0][0];
        
        Arrays.sort(intervals, (a,b) -> Integer.compare(a[0], b[0]));
        List<int[]> merged = new ArrayList<>();
        merged.add(intervals[0]);
        
        for (int i = 1; i < intervals.length; i++) {
            int[] last = merged.get(merged.size() - 1);
            if (intervals[i][0] <= last[1]) {
                last[1] = Math.max(last[1], intervals[i][1]);
            } else {
                merged.add(intervals[i]);
            }
        }
        
        return merged.toArray(new int[merged.size()][]);
    }

    public static void main(String[] args) {
        System.out.println(Arrays.deepToString(merge(new int[][]{{1,3},{2,6},{8,10},{15,18}})));
        System.out.println(Arrays.deepToString(merge(new int[][]{{1,4},{4,5}})));
        System.out.println(Arrays.deepToString(merge(new int[][]{{1,4},{0,4}})));
    }
}`,
            createdAt: new Date()
        }
    ],

    "kth-largest-element": [
        {
            problemId: "kth-largest-element",
            language: "javascript",
            fullCode: `function findKthLargest(nums, k) {
    // Use a min heap of size k
    const heap = [];
    
    for (let num of nums) {
        heap.push(num);
        heap.sort((a,b) => a-b); // min heap
        if (heap.length > k) heap.shift();
    }
    
    return heap[0];
}

// Test cases
console.log(findKthLargest([3,2,1,5,6,4],2)); // Expected: 5
console.log(findKthLargest([3,2,3,1,2,4,5,5,6],4)); // Expected: 4
console.log(findKthLargest([1],1)); // Expected: 1`,
            createdAt: new Date()
        },
        {
            problemId: "kth-largest-element",
            language: "python",
            fullCode: `import heapq

def findKthLargest(nums, k):
    # Min heap of size k
    heap = []
    for num in nums:
        heapq.heappush(heap, num)
        if len(heap) > k:
            heapq.heappop(heap)
    return heap[0]

# Test cases
print(findKthLargest([3,2,1,5,6,4],2)) # Expected: 5
print(findKthLargest([3,2,3,1,2,4,5,5,6],4)) # Expected: 4
print(findKthLargest([1],1)) # Expected: 1`,
            createdAt: new Date()
        },
        {
            problemId: "kth-largest-element",
            language: "java",
            fullCode: `import java.util.*;

class Solution {
    public static int findKthLargest(int[] nums, int k) {
        PriorityQueue<Integer> minHeap = new PriorityQueue<>();
        for (int num : nums) {
            minHeap.add(num);
            if (minHeap.size() > k) {
                minHeap.poll();
            }
        }
        return minHeap.peek();
    }

    public static void main(String[] args) {
        System.out.println(findKthLargest(new int[]{3,2,1,5,6,4},2)); // Expected: 5
        System.out.println(findKthLargest(new int[]{3,2,3,1,2,4,5,5,6},4)); // Expected: 4
        System.out.println(findKthLargest(new int[]{1},1)); // Expected: 1
    }
}`,
            createdAt: new Date()
        }
    ],
    "move-zeroes": [
        {
            problemId: "move-zeroes",
            language: "javascript",
            fullCode: `function moveZeroes(nums) {
    let lastNonZeroFoundAt = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            [nums[lastNonZeroFoundAt], nums[i]] = [nums[i], nums[lastNonZeroFoundAt]];
            lastNonZeroFoundAt++;
        }
    }
}

// Test cases
let a=[0,1,0,3,12]; moveZeroes(a); console.log(a); // Expected: [1,3,12,0,0]
let b=[0]; moveZeroes(b); console.log(b); // Expected: [0]
let c=[1,0,1]; moveZeroes(c); console.log(c); // Expected: [1,1,0]`,
            createdAt: new Date()
        },
        {
            problemId: "move-zeroes",
            language: "python",
            fullCode: `def moveZeroes(nums):
    lastNonZeroFoundAt = 0
    for i in range(len(nums)):
        if nums[i] != 0:
            nums[i], nums[lastNonZeroFoundAt] = nums[lastNonZeroFoundAt], nums[i]
            lastNonZeroFoundAt += 1

# Test cases
a=[0,1,0,3,12]; moveZeroes(a); print(a)  # Expected: [1,3,12,0,0]
b=[0]; moveZeroes(b); print(b)           # Expected: [0]
c=[1,0,1]; moveZeroes(c); print(c)      # Expected: [1,1,0]`,
            createdAt: new Date()
        },
        {
            problemId: "move-zeroes",
            language: "java",
            fullCode: `import java.util.*;

class Solution {
    public static void moveZeroes(int[] nums) {
        int lastNonZeroFoundAt = 0;
        for (int i = 0; i < nums.length; i++) {
            if (nums[i] != 0) {
                int temp = nums[i];
                nums[i] = nums[lastNonZeroFoundAt];
                nums[lastNonZeroFoundAt] = temp;
                lastNonZeroFoundAt++;
            }
        }
    }

    public static void main(String[] args) {
        int[] a = {0,1,0,3,12};
        moveZeroes(a);
        System.out.println(Arrays.toString(a)); // Expected: [1,3,12,0,0]
    }
}`,
            createdAt: new Date()
        }
    ],

    "reverse-linked-list":  [
    {
        problemId: "reverse-linked-list",
        language: "javascript",
        fullCode: `function reverseList(arr) {
    let prev = null;
    let current = arr;
    let result = [];
    
    // Simulate linked list reversal
    for (let i = arr.length - 1; i >= 0; i--) {
        result.push(arr[i]);
    }
    
    return result;
}

// Test cases
console.log(reverseList([1,2,3,4,5])); // Expected: [5,4,3,2,1]
console.log(reverseList([1,2])); // Expected: [2,1]
console.log(reverseList([])); // Expected: []`,
        createdAt: new Date()
    },
    {
        problemId: "reverse-linked-list",
        language: "python",
        fullCode: `def reverseList(arr):
    return arr[::-1]

# Test cases
print(reverseList([1,2,3,4,5])) # Expected: [5,4,3,2,1]
print(reverseList([1,2])) # Expected: [2,1]
print(reverseList([])) # Expected: []`,
        createdAt: new Date()
    },
    {
        problemId: "reverse-linked-list",
        language: "java",
        fullCode: `import java.util.*;

class Solution {
    public static int[] reverseList(int[] arr) {
        int n = arr.length;
        int[] result = new int[n];
        for (int i = 0; i < n; i++) {
            result[i] = arr[n - 1 - i];
        }
        return result;
    }

    public static void main(String[] args) {
        System.out.println(Arrays.toString(reverseList(new int[]{1,2,3,4,5}))); // Expected: [5,4,3,2,1]
        System.out.println(Arrays.toString(reverseList(new int[]{1,2}))); // Expected: [2,1]
        System.out.println(Arrays.toString(reverseList(new int[]{}))); // Expected: []
    }
}`,
        createdAt: new Date()
    }
],

"maximum-depth-binary-tree": [
    {
        problemId: "maximum-depth-binary-tree",
        language: "javascript",
        fullCode: `function maxDepth(root) {
    if (!root || root.length === 0) return 0;

    function helper(index) {
        if (index >= root.length || root[index] === null) return 0;
        const left = helper(2 * index + 1);
        const right = helper(2 * index + 2);
        return Math.max(left, right) + 1;
    }

    return helper(0);
}

// Test cases
console.log(maxDepth([3,9,20,null,null,15,7])); // Expected: 3
console.log(maxDepth([1,null,2])); // Expected: 2
console.log(maxDepth([])); // Expected: 0`,
        createdAt: new Date()
    },
    {
        problemId: "maximum-depth-binary-tree",
        language: "python",
        fullCode: `def maxDepth(root):
    if not root:
        return 0

    def helper(index):
        if index >= len(root) or root[index] is None:
            return 0
        left = helper(2 * index + 1)
        right = helper(2 * index + 2)
        return max(left, right) + 1

    return helper(0)

# Test cases
print(maxDepth([3,9,20,None,None,15,7])) # Expected: 3
print(maxDepth([1,None,2])) # Expected: 2
print(maxDepth([])) # Expected: 0`,
        createdAt: new Date()
    },
    {
        problemId: "maximum-depth-binary-tree",
        language: "java",
        fullCode: `class Solution {
    public static int maxDepth(int[] root) {
        if (root == null || root.length == 0) return 0;

        return helper(root, 0);
    }

    private static int helper(int[] root, int index) {
        if (index >= root.length || root[index] == 0) return 0;
        int left = helper(root, 2 * index + 1);
        int right = helper(root, 2 * index + 2);
        return Math.max(left, right) + 1;
    }

    public static void main(String[] args) {
        System.out.println(maxDepth(new int[]{3,9,20,0,0,15,7})); // Expected: 3
        System.out.println(maxDepth(new int[]{1,0,2})); // Expected: 2
        System.out.println(maxDepth(new int[]{})); // Expected: 0
    }
}`,
        createdAt: new Date()
    }
],

"invert-binary-tree": [
    {
        problemId: "invert-binary-tree",
        language: "javascript",
        fullCode: `function invertTree(root) {
    if (!root || root.length === 0) return [];

    function helper(index) {
        if (index >= root.length || root[index] === null) return null;

        const leftIndex = 2 * index + 1;
        const rightIndex = 2 * index + 2;

        const leftVal = helper(leftIndex);
        const rightVal = helper(rightIndex);

        // Swap left and right in place
        root[leftIndex] = rightVal;
        root[rightIndex] = leftVal;

        return root[index];
    }

    helper(0);
    return root;
}

// Test cases
console.log(invertTree([4,2,7,1,3,6,9])); // Expected: [4,7,2,9,6,3,1]
console.log(invertTree([2,1,3])); // Expected: [2,3,1]
console.log(invertTree([])); // Expected: []`,
        createdAt: new Date()
    },
    {
        problemId: "invert-binary-tree",
        language: "python",
        fullCode: `def invertTree(root):
    if not root:
        return []

    def helper(index):
        if index >= len(root) or root[index] is None:
            return None

        left_index = 2 * index + 1
        right_index = 2 * index + 2

        left_val = helper(left_index)
        right_val = helper(right_index)

        # Swap left and right in place
        if left_index < len(root):
            root[left_index] = right_val
        if right_index < len(root):
            root[right_index] = left_val

        return root[index]

    helper(0)
    return root

# Test cases
print(invertTree([4,2,7,1,3,6,9])) # Expected: [4, 7, 2, 9, 6, 3, 1]
print(invertTree([2,1,3])) # Expected: [2, 3, 1]
print(invertTree([])) # Expected: []`,
        createdAt: new Date()
    },
    {
        problemId: "invert-binary-tree",
        language: "java",
        fullCode: `class Solution {
    public static int[] invertTree(int[] root) {
        if (root == null || root.length == 0) return root;

        helper(root, 0);
        return root;
    }

    private static void helper(int[] root, int index) {
        if (index >= root.length || root[index] == 0) return;

        int leftIndex = 2 * index + 1;
        int rightIndex = 2 * index + 2;

        int leftVal = leftIndex < root.length ? root[leftIndex] : 0;
        int rightVal = rightIndex < root.length ? root[rightIndex] : 0;

        // Swap left and right
        if (leftIndex < root.length) root[leftIndex] = rightVal;
        if (rightIndex < root.length) root[rightIndex] = leftVal;

        helper(root, leftIndex);
        helper(root, rightIndex);
    }

    public static void main(String[] args) {
        System.out.println(java.util.Arrays.toString(invertTree(new int[]{4,2,7,1,3,6,9}))); // Expected: [4, 7, 2, 9, 6, 3, 1]
        System.out.println(java.util.Arrays.toString(invertTree(new int[]{2,1,3}))); // Expected: [2,3,1]
        System.out.println(java.util.Arrays.toString(invertTree(new int[]{}))); // Expected: []
    }
}`,
        createdAt: new Date()
    }
],

"best-time-stock":  [
    {
        problemId: "best-time-stock",
        language: "javascript",
        fullCode: `function maxProfit(prices){
    let minPrice = Infinity;
    let maxProfit = 0;
    
    for (let price of prices) {
        minPrice = Math.min(minPrice, price);
        maxProfit = Math.max(maxProfit, price - minPrice);
    }
    
    return maxProfit;
}

// Test cases
console.log(maxProfit([7,1,5,3,6,4])); // Expected: 5
console.log(maxProfit([7,6,4,3,1])); // Expected: 0
console.log(maxProfit([2,4,1])); // Expected: 2`,
        createdAt: new Date()
    },
    {
        problemId: "best-time-stock",
        language: "python",
        fullCode: `def maxProfit(prices):
    min_price = float('inf')
    max_profit = 0
    
    for price in prices:
        min_price = min(min_price, price)
        max_profit = max(max_profit, price - min_price)
    
    return max_profit

# Test cases
print(maxProfit([7,1,5,3,6,4])) # Expected: 5
print(maxProfit([7,6,4,3,1])) # Expected: 0
print(maxProfit([2,4,1])) # Expected: 2`,
        createdAt: new Date()
    },
    {
        problemId: "best-time-stock",
        language: "java",
        fullCode: `class Solution{
    public static int maxProfit(int[] prices){
        int minPrice = Integer.MAX_VALUE;
        int maxProfit = 0;
        
        for (int price : prices) {
            minPrice = Math.min(minPrice, price);
            maxProfit = Math.max(maxProfit, price - minPrice);
        }
        
        return maxProfit;
    }

    public static void main(String[] args){
        System.out.println(maxProfit(new int[]{7,1,5,3,6,4})); // Expected: 5
        System.out.println(maxProfit(new int[]{7,6,4,3,1})); // Expected: 0
        System.out.println(maxProfit(new int[]{2,4,1})); // Expected: 2
    }
}`,
        createdAt: new Date()
    }
],


"top-k-frequent-elements":  [
    {
        problemId: "top-k-frequent-elements",
        language: "javascript",
        fullCode: `function topKFrequent(nums, k) {
    const freqMap = {};
    for (let num of nums) {
        freqMap[num] = (freqMap[num] || 0) + 1;
    }
    
    const sorted = Object.keys(freqMap).sort((a,b) => freqMap[b]-freqMap[a]);
    return sorted.slice(0, k).map(Number);
}

// Test cases
console.log(topKFrequent([1,1,1,2,2,3],2)); // Expected: [1,2]
console.log(topKFrequent([1],1)); // Expected: [1]
console.log(topKFrequent([4,4,4,6,6,7],1)); // Expected: [4]`,
        createdAt: new Date()
    },
    {
        problemId: "top-k-frequent-elements",
        language: "python",
        fullCode: `from collections import Counter

def topKFrequent(nums, k):
    count = Counter(nums)
    return [item for item, freq in count.most_common(k)]

# Test cases
print(topKFrequent([1,1,1,2,2,3],2)) # Expected: [1,2]
print(topKFrequent([1],1)) # Expected: [1]
print(topKFrequent([4,4,4,6,6,7],1)) # Expected: [4]`,
        createdAt: new Date()
    },
    {
        problemId: "top-k-frequent-elements",
        language: "java",
        fullCode: `import java.util.*;

class Solution {
    public static int[] topKFrequent(int[] nums, int k) {
        Map<Integer, Integer> countMap = new HashMap<>();
        for (int num : nums) {
            countMap.put(num, countMap.getOrDefault(num, 0) + 1);
        }

        PriorityQueue<Integer> heap = new PriorityQueue<>((a,b) -> countMap.get(a) - countMap.get(b));
        for (int num : countMap.keySet()) {
            heap.offer(num);
            if (heap.size() > k) heap.poll();
        }

        int[] res = new int[k];
        for (int i = k - 1; i >= 0; i--) {
            res[i] = heap.poll();
        }
        return res;
    }

    public static void main(String[] args){
        System.out.println(Arrays.toString(topKFrequent(new int[]{1,1,1,2,2,3},2))); // Expected: [1,2]
        System.out.println(Arrays.toString(topKFrequent(new int[]{1},1))); // Expected: [1]
        System.out.println(Arrays.toString(topKFrequent(new int[]{4,4,4,6,6,7},1))); // Expected: [4]
    }
}`,
        createdAt: new Date()
    }
],

"daily-temperatures":  [
    {
        problemId: "daily-temperatures",
        language: "javascript",
        fullCode: `function dailyTemperatures(temperatures){
    const n = temperatures.length;
    const res = new Array(n).fill(0);
    const stack = []; // stores indices
    
    for (let i = 0; i < n; i++) {
        while (stack.length && temperatures[i] > temperatures[stack[stack.length - 1]]) {
            const idx = stack.pop();
            res[idx] = i - idx;
        }
        stack.push(i);
    }
    
    return res;
}

// Test cases
console.log(dailyTemperatures([73,74,75,71,69,72,76,73])); // Expected: [1,1,4,2,1,1,0,0]
console.log(dailyTemperatures([30,40,50,60])); // Expected: [1,1,1,0]
console.log(dailyTemperatures([30,60,90])); // Expected: [1,1,0]`,
        createdAt: new Date()
    },
    {
        problemId: "daily-temperatures",
        language: "python",
        fullCode: `def dailyTemperatures(temperatures):
    n = len(temperatures)
    res = [0] * n
    stack = []  # stores indices
    
    for i, temp in enumerate(temperatures):
        while stack and temp > temperatures[stack[-1]]:
            idx = stack.pop()
            res[idx] = i - idx
        stack.append(i)
    
    return res

# Test cases
print(dailyTemperatures([73,74,75,71,69,72,76,73]))  # Expected: [1,1,4,2,1,1,0,0]
print(dailyTemperatures([30,40,50,60]))  # Expected: [1,1,1,0]
print(dailyTemperatures([30,60,90]))  # Expected: [1,1,0]`,
        createdAt: new Date()
    },
    {
        problemId: "daily-temperatures",
        language: "java",
        fullCode: `import java.util.*;

class Solution{
    public static int[] dailyTemperatures(int[] temperatures){
        int n = temperatures.length;
        int[] res = new int[n];
        Stack<Integer> stack = new Stack<>(); // stores indices
        
        for (int i = 0; i < n; i++) {
            while (!stack.isEmpty() && temperatures[i] > temperatures[stack.peek()]) {
                int idx = stack.pop();
                res[idx] = i - idx;
            }
            stack.push(i);
        }
        
        return res;
    }

    public static void main(String[] args){
        System.out.println(Arrays.toString(dailyTemperatures(new int[]{73,74,75,71,69,72,76,73}))); // Expected: [1,1,4,2,1,1,0,0]
        System.out.println(Arrays.toString(dailyTemperatures(new int[]{30,40,50,60}))); // Expected: [1,1,1,0]
        System.out.println(Arrays.toString(dailyTemperatures(new int[]{30,60,90}))); // Expected: [1,1,0]
    }
}`,
        createdAt: new Date()
    }
],
"house-robber":  [
    {
        problemId: "house-robber",
        language: "javascript",
        fullCode: `function rob(nums) {
    const n = nums.length;
    if (n === 0) return 0;
    if (n === 1) return nums[0];
    
    let prev1 = 0, prev2 = 0;
    
    for (let num of nums) {
        let temp = prev1;
        prev1 = Math.max(prev2 + num, prev1);
        prev2 = temp;
    }
    
    return prev1;
}

// Test cases
console.log(rob([1,2,3,1])); // Expected: 4
console.log(rob([2,7,9,3,1])); // Expected: 12
console.log(rob([2,1,1,2])); // Expected: 4`,
        createdAt: new Date()
    },
    {
        problemId: "house-robber",
        language: "python",
        fullCode: `def rob(nums):
    prev1, prev2 = 0, 0
    for num in nums:
        prev1, prev2 = max(prev2 + num, prev1), prev1
    return prev1

# Test cases
print(rob([1,2,3,1])) # Expected: 4
print(rob([2,7,9,3,1])) # Expected: 12
print(rob([2,1,1,2])) # Expected: 4`,
        createdAt: new Date()
    },
    {
        problemId: "house-robber",
        language: "java",
        fullCode: `class Solution{
    public static int rob(int[] nums){
        int prev1 = 0, prev2 = 0;
        for (int num : nums) {
            int temp = prev1;
            prev1 = Math.max(prev2 + num, prev1);
            prev2 = temp;
        }
        return prev1;
    }

    public static void main(String[] args){
        System.out.println(rob(new int[]{1,2,3,1})); // Expected: 4
        System.out.println(rob(new int[]{2,7,9,3,1})); // Expected: 12
        System.out.println(rob(new int[]{2,1,1,2})); // Expected: 4
    }
}`,
        createdAt: new Date()
    }
],

"coin-change":  [
    {
        problemId: "coin-change",
        language: "javascript",
        fullCode: `function coinChange(coins, amount) {
    const dp = Array(amount + 1).fill(Infinity);
    dp[0] = 0;
    
    for (let coin of coins) {
        for (let i = coin; i <= amount; i++) {
            dp[i] = Math.min(dp[i], dp[i - coin] + 1);
        }
    }
    
    return dp[amount] === Infinity ? -1 : dp[amount];
}

// Test cases
console.log(coinChange([1,2,5],11)); // Expected: 3
console.log(coinChange([2],3)); // Expected: -1
console.log(coinChange([1],0)); // Expected: 0`,
        createdAt: new Date()
    },
    {
        problemId: "coin-change",
        language: "python",
        fullCode: `def coinChange(coins, amount):
    dp = [float('inf')] * (amount + 1)
    dp[0] = 0
    
    for coin in coins:
        for i in range(coin, amount + 1):
            dp[i] = min(dp[i], dp[i - coin] + 1)
    
    return dp[amount] if dp[amount] != float('inf') else -1

# Test cases
print(coinChange([1,2,5],11)) # Expected: 3
print(coinChange([2],3)) # Expected: -1
print(coinChange([1],0)) # Expected: 0`,
        createdAt: new Date()
    },
    {
        problemId: "coin-change",
        language: "java",
        fullCode: `import java.util.Arrays;

class Solution{
    public static int coinChange(int[] coins, int amount){
        int[] dp = new int[amount + 1];
        Arrays.fill(dp, amount + 1);
        dp[0] = 0;
        
        for (int coin : coins) {
            for (int i = coin; i <= amount; i++) {
                dp[i] = Math.min(dp[i], dp[i - coin] + 1);
            }
        }
        
        return dp[amount] > amount ? -1 : dp[amount];
    }

    public static void main(String[] args){
        System.out.println(coinChange(new int[]{1,2,5},11)); // Expected: 3
        System.out.println(coinChange(new int[]{2},3)); // Expected: -1
        System.out.println(coinChange(new int[]{1},0)); // Expected: 0
    }
}`,
        createdAt: new Date()
    }
],

"contains-duplicate": [
  {
    problemId: "contains-duplicate",
    language: "javascript",
    fullCode: `function containsDuplicate(nums) {
    const seen = new Set();
    for (let num of nums) {
        if (seen.has(num)) return true;
        seen.add(num);
    }
    return false;
}

// Test cases
console.log(containsDuplicate([1,2,3,1])); // Expected: true
console.log(containsDuplicate([1,2,3,4])); // Expected: false
console.log(containsDuplicate([1,1,1,3,3,4])); // Expected: true`,
    createdAt: new Date()
  },
  {
    problemId: "contains-duplicate",
    language: "python",
    fullCode: `def containsDuplicate(nums):
    seen = set()
    for num in nums:
        if num in seen:
            return True
        seen.add(num)
    return False

# Test cases
print(containsDuplicate([1,2,3,1])) # Expected: True
print(containsDuplicate([1,2,3,4])) # Expected: False
print(containsDuplicate([1,1,1,3,3,4])) # Expected: True`,
    createdAt: new Date()
  },
  {
    problemId: "contains-duplicate",
    language: "java",
    fullCode: `import java.util.HashSet;

class Solution {
    public static boolean containsDuplicate(int[] nums) {
        HashSet<Integer> seen = new HashSet<>();
        for (int num : nums) {
            if (seen.contains(num)) return true;
            seen.add(num);
        }
        return false;
    }

    public static void main(String[] args) {
        System.out.println(containsDuplicate(new int[]{1,2,3,1})); // Expected: true
        System.out.println(containsDuplicate(new int[]{1,2,3,4})); // Expected: false
        System.out.println(containsDuplicate(new int[]{1,1,1,3,3,4})); // Expected: true
    }
}`,
    createdAt: new Date()
  }
],

"gas-station":  [
  {
    problemId: "gas-station",
    language: "javascript",
    fullCode: `function canCompleteCircuit(gas, cost) {
    let total = 0, tank = 0, start = 0;
    for (let i = 0; i < gas.length; i++) {
        total += gas[i] - cost[i];
        tank += gas[i] - cost[i];
        if (tank < 0) {
            start = i + 1;
            tank = 0;
        }
    }
    return total >= 0 ? start : -1;
}

// Test cases
console.log(canCompleteCircuit([1,2,3,4,5],[3,4,5,1,2])); // Expected: 3
console.log(canCompleteCircuit([2,3,4],[3,4,3])); // Expected: -1
console.log(canCompleteCircuit([5],[4])); // Expected: 0`,
    createdAt: new Date()
  },
  {
    problemId: "gas-station",
    language: "python",
    fullCode: `def canCompleteCircuit(gas, cost):
    total = tank = start = 0
    for i in range(len(gas)):
        total += gas[i] - cost[i]
        tank += gas[i] - cost[i]
        if tank < 0:
            start = i + 1
            tank = 0
    return start if total >= 0 else -1

# Test cases
print(canCompleteCircuit([1,2,3,4,5],[3,4,5,1,2])) # Expected: 3
print(canCompleteCircuit([2,3,4],[3,4,3])) # Expected: -1
print(canCompleteCircuit([5],[4])) # Expected: 0`,
    createdAt: new Date()
  },
  {
    problemId: "gas-station",
    language: "java",
    fullCode: `class Solution {
    public static int canCompleteCircuit(int[] gas, int[] cost) {
        int total = 0, tank = 0, start = 0;
        for (int i = 0; i < gas.length; i++) {
            total += gas[i] - cost[i];
            tank += gas[i] - cost[i];
            if (tank < 0) {
                start = i + 1;
                tank = 0;
            }
        }
        return total >= 0 ? start : -1;
    }

    public static void main(String[] args) {
        System.out.println(canCompleteCircuit(new int[]{1,2,3,4,5}, new int[]{3,4,5,1,2})); // Expected: 3
        System.out.println(canCompleteCircuit(new int[]{2,3,4}, new int[]{3,4,3})); // Expected: -1
        System.out.println(canCompleteCircuit(new int[]{5}, new int[]{4})); // Expected: 0
    }
}`,
    createdAt: new Date()
  }
],

"longest-palindromic-substring": [
  {
    problemId: "longest-palindromic-substring",
    language: "javascript",
    fullCode: `function longestPalindrome(s) {
    if (!s || s.length < 1) return "";
    let start = 0, end = 0;
    
    function expandAroundCenter(left, right) {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
        }
        return right - left - 1;
    }
    
    for (let i = 0; i < s.length; i++) {
        const len1 = expandAroundCenter(i, i);
        const len2 = expandAroundCenter(i, i + 1);
        const len = Math.max(len1, len2);
        if (len > end - start) {
            start = i - Math.floor((len - 1) / 2);
            end = i + Math.floor(len / 2);
        }
    }
    
    return s.substring(start, end + 1);
}

// Test cases
console.log(longestPalindrome("babad")); // Expected: "bab" or "aba"
console.log(longestPalindrome("cbbd"));  // Expected: "bb"
console.log(longestPalindrome("a"));     // Expected: "a"`,
    createdAt: new Date()
  },
  {
    problemId: "longest-palindromic-substring",
    language: "python",
    fullCode: `def longestPalindrome(s):
    if not s or len(s) < 1:
        return ""
    start = end = 0
    
    def expandAroundCenter(left, right):
        while left >= 0 and right < len(s) and s[left] == s[right]:
            left -= 1
            right += 1
        return right - left - 1
    
    for i in range(len(s)):
        len1 = expandAroundCenter(i, i)
        len2 = expandAroundCenter(i, i + 1)
        length = max(len1, len2)
        if length > end - start:
            start = i - (length - 1) // 2
            end = i + length // 2
    return s[start:end+1]

# Test cases
print(longestPalindrome("babad")) # Expected: "bab" or "aba"
print(longestPalindrome("cbbd"))  # Expected: "bb"
print(longestPalindrome("a"))     # Expected: "a"`,
    createdAt: new Date()
  },
  {
    problemId: "longest-palindromic-substring",
    language: "java",
    fullCode: `class Solution {
    public static String longestPalindrome(String s) {
        if (s == null || s.length() < 1) return "";
        int start = 0, end = 0;
        
        for (int i = 0; i < s.length(); i++) {
            int len1 = expandAroundCenter(s, i, i);
            int len2 = expandAroundCenter(s, i, i + 1);
            int len = Math.max(len1, len2);
            if (len > end - start) {
                start = i - (len - 1) / 2;
                end = i + len / 2;
            }
        }
        return s.substring(start, end + 1);
    }
    
    private static int expandAroundCenter(String s, int left, int right) {
        while (left >= 0 && right < s.length() && s.charAt(left) == s.charAt(right)) {
            left--;
            right++;
        }
        return right - left - 1;
    }

    public static void main(String[] args) {
        System.out.println(longestPalindrome("babad")); // Expected: "bab" or "aba"
        System.out.println(longestPalindrome("cbbd"));  // Expected: "bb"
        System.out.println(longestPalindrome("a"));     // Expected: "a"
    }
}`,
    createdAt: new Date()
  }
],

"number-of-islands": [
  {
    problemId: "number-of-islands",
    language: "javascript",
    fullCode: `function numIslands(grid) {
    if (!grid || grid.length === 0) return 0;
    let count = 0;
    const rows = grid.length, cols = grid[0].length;

    function dfs(r, c) {
        if (r < 0 || c < 0 || r >= rows || c >= cols || grid[r][c] === "0") return;
        grid[r][c] = "0"; // mark visited
        dfs(r+1, c);
        dfs(r-1, c);
        dfs(r, c+1);
        dfs(r, c-1);
    }

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] === "1") {
                count++;
                dfs(r, c);
            }
        }
    }
    return count;
}

// Test cases
console.log(numIslands([
["1","1","1","1","0"],
["1","1","0","1","0"],
["1","1","0","0","0"],
["0","0","0","0","0"]
])); // Expected: 1

console.log(numIslands([
["1","1","0","0","0"],
["1","1","0","0","0"],
["0","0","1","0","0"],
["0","0","0","1","1"]
])); // Expected: 3

console.log(numIslands([["0"]])); // Expected: 0`,
    createdAt: new Date()
  },
  {
    problemId: "number-of-islands",
    language: "python",
    fullCode: `def numIslands(grid):
    if not grid or not grid[0]:
        return 0
    rows, cols = len(grid), len(grid[0])
    count = 0

    def dfs(r, c):
        if r < 0 or c < 0 or r >= rows or c >= cols or grid[r][c] == "0":
            return
        grid[r][c] = "0"
        dfs(r+1, c)
        dfs(r-1, c)
        dfs(r, c+1)
        dfs(r, c-1)

    for r in range(rows):
        for c in range(cols):
            if grid[r][c] == "1":
                count += 1
                dfs(r, c)
    return count

# Test cases
print(numIslands([
["1","1","1","1","0"],
["1","1","0","1","0"],
["1","1","0","0","0"],
["0","0","0","0","0"]
])) # Expected: 1

print(numIslands([
["1","1","0","0","0"],
["1","1","0","0","0"],
["0","0","1","0","0"],
["0","0","0","1","1"]
])) # Expected: 3

print(numIslands([["0"]])) # Expected: 0`,
    createdAt: new Date()
  },
  {
    problemId: "number-of-islands",
    language: "java",
    fullCode: `class Solution {
    public static int numIslands(char[][] grid) {
        if (grid == null || grid.length == 0) return 0;
        int count = 0;
        int rows = grid.length, cols = grid[0].length;

        for (int r = 0; r < rows; r++) {
            for (int c = 0; c < cols; c++) {
                if (grid[r][c] == '1') {
                    count++;
                    dfs(grid, r, c, rows, cols);
                }
            }
        }
        return count;
    }

    private static void dfs(char[][] grid, int r, int c, int rows, int cols) {
        if (r < 0 || c < 0 || r >= rows || c >= cols || grid[r][c] == '0') return;
        grid[r][c] = '0'; // mark visited
        dfs(grid, r+1, c, rows, cols);
        dfs(grid, r-1, c, rows, cols);
        dfs(grid, r, c+1, rows, cols);
        dfs(grid, r, c-1, rows, cols);
    }

    public static void main(String[] args) {
        char[][] grid1 = {
            {'1','1','1','1','0'},
            {'1','1','0','1','0'},
            {'1','1','0','0','0'},
            {'0','0','0','0','0'}
        };
        System.out.println(numIslands(grid1)); // Expected: 1

        char[][] grid2 = {
            {'1','1','0','0','0'},
            {'1','1','0','0','0'},
            {'0','0','1','0','0'},
            {'0','0','0','1','1'}
        };
        System.out.println(numIslands(grid2)); // Expected: 3

        char[][] grid3 = {{'0'}};
        System.out.println(numIslands(grid3)); // Expected: 0
    }
}`,
    createdAt: new Date()
  }
],

"longest-consecutive-sequence": [
  {
    problemId: "longest-consecutive-sequence",
    language: "javascript",
    fullCode: `function longestConsecutive(nums) {
    const numSet = new Set(nums);
    let longest = 0;

    for (const num of numSet) {
        if (!numSet.has(num - 1)) { // start of a sequence
            let currentNum = num;
            let length = 1;

            while (numSet.has(currentNum + 1)) {
                currentNum++;
                length++;
            }

            longest = Math.max(longest, length);
        }
    }

    return longest;
}

// Test cases
console.log(longestConsecutive([100,4,200,1,3,2])); // Expected: 4
console.log(longestConsecutive([0,3,7,2,5,8,4,6,0,1])); // Expected: 9
console.log(longestConsecutive([])); // Expected: 0`,
    createdAt: new Date()
  },
  {
    problemId: "longest-consecutive-sequence",
    language: "python",
    fullCode: `def longestConsecutive(nums):
    num_set = set(nums)
    longest = 0

    for num in num_set:
        if num - 1 not in num_set:  # start of a sequence
            current_num = num
            length = 1

            while current_num + 1 in num_set:
                current_num += 1
                length += 1

            longest = max(longest, length)

    return longest

# Test cases
print(longestConsecutive([100,4,200,1,3,2])) # Expected: 4
print(longestConsecutive([0,3,7,2,5,8,4,6,0,1])) # Expected: 9
print(longestConsecutive([])) # Expected: 0`,
    createdAt: new Date()
  },
  {
    problemId: "longest-consecutive-sequence",
    language: "java",
    fullCode: `import java.util.*;

class Solution{
    public static int longestConsecutive(int[] nums){
        Set<Integer> numSet = new HashSet<>();
        for (int num : nums) numSet.add(num);
        int longest = 0;

        for (int num : numSet) {
            if (!numSet.contains(num - 1)) { // start of a sequence
                int currentNum = num;
                int length = 1;

                while (numSet.contains(currentNum + 1)) {
                    currentNum++;
                    length++;
                }

                longest = Math.max(longest, length);
            }
        }

        return longest;
    }

    public static void main(String[] args){
        System.out.println(longestConsecutive(new int[]{100,4,200,1,3,2})); // Expected: 4
        System.out.println(longestConsecutive(new int[]{0,3,7,2,5,8,4,6,0,1})); // Expected: 9
        System.out.println(longestConsecutive(new int[]{})); // Expected: 0
    }
}`,
    createdAt: new Date()
  }
],

"set-matrix-zeroes": [
  {
    problemId: "set-matrix-zeroes",
    language: "javascript",
    fullCode: `function setZeroes(matrix) {
    const m = matrix.length;
    const n = matrix[0].length;
    let firstRowZero = false;
    let firstColZero = false;

    // Check first row and column
    for (let i = 0; i < m; i++) if (matrix[i][0] === 0) firstColZero = true;
    for (let j = 0; j < n; j++) if (matrix[0][j] === 0) firstRowZero = true;

    // Use first row/col as markers
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (matrix[i][j] === 0) {
                matrix[i][0] = 0;
                matrix[0][j] = 0;
            }
        }
    }

    // Set zeroes based on markers
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (matrix[i][0] === 0 || matrix[0][j] === 0) matrix[i][j] = 0;
        }
    }

    // Zero first row/col if needed
    if (firstRowZero) for (let j = 0; j < n; j++) matrix[0][j] = 0;
    if (firstColZero) for (let i = 0; i < m; i++) matrix[i][0] = 0;

    return matrix;
}

// Test cases
console.log(setZeroes([[1,1,1],[1,0,1],[1,1,1]]));
console.log(setZeroes([[0,1,2,0],[3,4,5,2],[1,3,1,5]]));
console.log(setZeroes([[1]]));`,
    createdAt: new Date()
  },
  {
    problemId: "set-matrix-zeroes",
    language: "python",
    fullCode: `def setZeroes(matrix):
    m, n = len(matrix), len(matrix[0])
    first_row_zero = any(matrix[0][j] == 0 for j in range(n))
    first_col_zero = any(matrix[i][0] == 0 for i in range(m))

    # Use first row/col as markers
    for i in range(1, m):
        for j in range(1, n):
            if matrix[i][j] == 0:
                matrix[i][0] = 0
                matrix[0][j] = 0

    # Set zeros based on markers
    for i in range(1, m):
        for j in range(1, n):
            if matrix[i][0] == 0 or matrix[0][j] == 0:
                matrix[i][j] = 0

    # Zero first row/col if needed
    if first_row_zero:
        for j in range(n):
            matrix[0][j] = 0
    if first_col_zero:
        for i in range(m):
            matrix[i][0] = 0

    return matrix

# Test cases
print(setZeroes([[1,1,1],[1,0,1],[1,1,1]]))
print(setZeroes([[0,1,2,0],[3,4,5,2],[1,3,1,5]]))
print(setZeroes([[1]]))`,
    createdAt: new Date()
  },
  {
    problemId: "set-matrix-zeroes",
    language: "java",
    fullCode: `import java.util.*;

class Solution{
    public static void setZeroes(int[][] matrix){
        int m = matrix.length;
        int n = matrix[0].length;
        boolean firstRowZero = false;
        boolean firstColZero = false;

        // Check first row and column
        for (int i = 0; i < m; i++) if (matrix[i][0] == 0) firstColZero = true;
        for (int j = 0; j < n; j++) if (matrix[0][j] == 0) firstRowZero = true;

        // Use first row/col as markers
        for (int i = 1; i < m; i++){
            for (int j = 1; j < n; j++){
                if (matrix[i][j] == 0){
                    matrix[i][0] = 0;
                    matrix[0][j] = 0;
                }
            }
        }

        // Set zeros based on markers
        for (int i = 1; i < m; i++){
            for (int j = 1; j < n; j++){
                if (matrix[i][0] == 0 || matrix[0][j] == 0) matrix[i][j] = 0;
            }
        }

        // Zero first row/col if needed
        if (firstRowZero) for (int j = 0; j < n; j++) matrix[0][j] = 0;
        if (firstColZero) for (int i = 0; i < m; i++) matrix[i][0] = 0;
    }

    public static void main(String[] args){
        int[][] mat1 = {{1,1,1},{1,0,1},{1,1,1}};
        setZeroes(mat1);
        System.out.println(Arrays.deepToString(mat1));

        int[][] mat2 = {{0,1,2,0},{3,4,5,2},{1,3,1,5}};
        setZeroes(mat2);
        System.out.println(Arrays.deepToString(mat2));

        int[][] mat3 = {{1}};
        setZeroes(mat3);
        System.out.println(Arrays.deepToString(mat3));
    }
}`,
    createdAt: new Date()
  }
],

"permutations": [
  {
    problemId: "permutations",
    language: "javascript",
    fullCode: `function permute(nums) {
    const result = [];

    function backtrack(path, used) {
        if (path.length === nums.length) {
            result.push([...path]);
            return;
        }

        for (let i = 0; i < nums.length; i++) {
            if (used[i]) continue;
            used[i] = true;
            path.push(nums[i]);
            backtrack(path, used);
            path.pop();
            used[i] = false;
        }
    }

    backtrack([], Array(nums.length).fill(false));
    return result;
}

// Test cases
console.log(permute([1,2,3]));
console.log(permute([0,1]));
console.log(permute([1]));`
  },
  {
    problemId: "permutations",
    language: "python",
    fullCode: `def permute(nums):
    result = []

    def backtrack(path, used):
        if len(path) == len(nums):
            result.append(path[:])
            return
        for i in range(len(nums)):
            if used[i]:
                continue
            used[i] = True
            path.append(nums[i])
            backtrack(path, used)
            path.pop()
            used[i] = False

    backtrack([], [False]*len(nums))
    return result

# Test cases
print(permute([1,2,3]))
print(permute([0,1]))
print(permute([1]))`
  },
  {
    problemId: "permutations",
    language: "java",
    fullCode: `import java.util.*;

class Solution{
    public static List<List<Integer>> permute(int[] nums){
        List<List<Integer>> result = new ArrayList<>();
        backtrack(nums, new ArrayList<>(), new boolean[nums.length], result);
        return result;
    }

    private static void backtrack(int[] nums, List<Integer> path, boolean[] used, List<List<Integer>> result){
        if(path.size() == nums.length){
            result.add(new ArrayList<>(path));
            return;
        }

        for(int i = 0; i < nums.length; i++){
            if(used[i]) continue;
            used[i] = true;
            path.add(nums[i]);
            backtrack(nums, path, used, result);
            path.remove(path.size() - 1);
            used[i] = false;
        }
    }

    public static void main(String[] args){
        System.out.println(permute(new int[]{1,2,3}));
        System.out.println(permute(new int[]{0,1}));
        System.out.println(permute(new int[]{1}));
    }
}`
  }
],

"search-2d-matrix":  [
  {
    problemId: "search-2d-matrix",
    language: "javascript",
    fullCode: `function searchMatrix(matrix, target) {
    if (!matrix || matrix.length === 0 || matrix[0].length === 0) return false;

    let m = matrix.length, n = matrix[0].length;
    let left = 0, right = m * n - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        let val = matrix[Math.floor(mid / n)][mid % n];
        if (val === target) return true;
        else if (val < target) left = mid + 1;
        else right = mid - 1;
    }
    return false;
}

// Test cases
console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]],3)); // true
console.log(searchMatrix([[1,3,5],[7,9,11]],8)); // false
console.log(searchMatrix([[1]],1)); // true`
  },
  {
    problemId: "search-2d-matrix",
    language: "python",
    fullCode: `def searchMatrix(matrix, target):
    if not matrix or not matrix[0]:
        return False

    m, n = len(matrix), len(matrix[0])
    left, right = 0, m * n - 1

    while left <= right:
        mid = (left + right) // 2
        val = matrix[mid // n][mid % n]
        if val == target:
            return True
        elif val < target:
            left = mid + 1
        else:
            right = mid - 1
    return False

# Test cases
print(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]],3)) # True
print(searchMatrix([[1,3,5],[7,9,11]],8)) # False
print(searchMatrix([[1]],1)) # True`
  },
  {
    problemId: "search-2d-matrix",
    language: "java",
    fullCode: `class Solution{
    public static boolean searchMatrix(int[][] matrix,int target){
        if(matrix == null || matrix.length == 0 || matrix[0].length == 0) return false;
        int m = matrix.length, n = matrix[0].length;
        int left = 0, right = m * n - 1;

        while(left <= right){
            int mid = left + (right - left) / 2;
            int val = matrix[mid / n][mid % n];
            if(val == target) return true;
            else if(val < target) left = mid + 1;
            else right = mid - 1;
        }
        return false;
    }

    public static void main(String[] args){
        System.out.println(searchMatrix(new int[][]{{1,3,5,7},{10,11,16,20},{23,30,34,60}},3)); // true
        System.out.println(searchMatrix(new int[][]{{1,3,5},{7,9,11}},8)); // false
        System.out.println(searchMatrix(new int[][]{{1}},1)); // true
    }
}`
  }
],

"merge-two-sorted-lists":  [
  {
    problemId: "merge-two-sorted-lists",
    language: "javascript",
    fullCode: `function mergeTwoLists(list1, list2) {
    let merged = [];
    let i = 0, j = 0;

    while (i < list1.length && j < list2.length) {
        if (list1[i] < list2[j]) {
            merged.push(list1[i]);
            i++;
        } else {
            merged.push(list2[j]);
            j++;
        }
    }

    // Append remaining elements
    while (i < list1.length) merged.push(list1[i++]);
    while (j < list2.length) merged.push(list2[j++]);

    return merged;
}

// Test cases
console.log(mergeTwoLists([1,2,4],[1,3,4])); // [1,1,2,3,4,4]
console.log(mergeTwoLists([],[]));           // []
console.log(mergeTwoLists([],[0]));         // [0]`
  },
  {
    problemId: "merge-two-sorted-lists",
    language: "python",
    fullCode: `def mergeTwoLists(list1, list2):
    merged = []
    i, j = 0, 0

    while i < len(list1) and j < len(list2):
        if list1[i] < list2[j]:
            merged.append(list1[i])
            i += 1
        else:
            merged.append(list2[j])
            j += 1

    merged.extend(list1[i:])
    merged.extend(list2[j:])
    return merged

# Test cases
print(mergeTwoLists([1,2,4],[1,3,4])) # [1,1,2,3,4,4]
print(mergeTwoLists([],[]))           # []
print(mergeTwoLists([],[0]))          # [0]`
  },
  {
    problemId: "merge-two-sorted-lists",
    language: "java",
    fullCode: `import java.util.*;

class Solution{
    public static int[] mergeTwoLists(int[] list1,int[] list2){
        int n = list1.length, m = list2.length;
        int[] merged = new int[n + m];
        int i = 0, j = 0, k = 0;

        while(i < n && j < m){
            if(list1[i] < list2[j]) merged[k++] = list1[i++];
            else merged[k++] = list2[j++];
        }

        while(i < n) merged[k++] = list1[i++];
        while(j < m) merged[k++] = list2[j++];
        return merged;
    }

    public static void main(String[] args){
        System.out.println(Arrays.toString(mergeTwoLists(new int[]{1,2,4}, new int[]{1,3,4}))); // [1,1,2,3,4,4]
        System.out.println(Arrays.toString(mergeTwoLists(new int[]{}, new int[]{})));            // []
        System.out.println(Arrays.toString(mergeTwoLists(new int[]{}, new int[]{0})));         // [0]
    }
}`
  }
],

};

export default fullCodeDummyData;