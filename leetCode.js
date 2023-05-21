// ===================================================================
// 1. Two Sum
// Easy
// 46.3K
// 1.5K
// Companies
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// answer


// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]



0/5
function twoSum(param_1,param_2){
    let output = []
    for(let i=0; i < param_1.length; i++){
    for(let j=i+1; j < param_1.length; j++){

        
        // console.log(nums[i]);
        // console.log(nums[i])
        // console.log(nums[i+1])
        let sum = param_1[i]+param_1[j];

        if(sum == param_2){
            // console.log([i],[i+1])
            output.push(i);          
            output.push(j);          
            return output;
        }
        }
    
    }
}
// console.log(twoSum([3,2,3],6))
console.log(twoSum([2,1,8,15],9))


// others solution


// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}
//  */
var twoSum = function(nums, target) {
    //base
    if(nums.length===2)return [0,1];
    let memo = {};

    for(let i=0; i<nums.length; i++){
        let num2 = target - nums[i];
        if(memo[num2] !== undefined){
            return [memo[num2], i]
        }
        memo[nums[i]] = i;
    }
};


// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}
//  */
var twoSum = function(nums, target) {
    const previousValues = {};
    for(let i = 0; i< nums.length; i++){
        const currentNumber = nums[i];
        const neededValues = target - currentNumber;
        const index2 = previousValues[neededValues];
        if(index2!=null){
            return [index2, i]
        }else{
            previousValues[currentNumber] = i;
        }
    }

};
// ===================================================================
