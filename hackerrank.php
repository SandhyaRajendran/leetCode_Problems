<?php
// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

// Example

// The minimum sum is  and the maximum sum is . The function prints

// arr = [1,2,3,4,5];
// Sample Input

// 1 2 3 4 5
// Sample Output

// 10 14
// Explanation

// The numbers are , , , , and . Calculate the following sums using four of the five integers:

// Sum everything except , the sum is .
// Sum everything except , the sum is .
// Sum everything except , the sum is .
// Sum everything except , the sum is .
// Sum everything except , the sum is .

function miniMaxSum($arr) {
    // Write your code here
        // $values =  [$firstSetOfValues $secondSetOfValues];
   
    $firstSetOfValues = 0;
    $secondSetOfValues = 0;
    $thirdSetOfValues = 0;
    $fourthSetOfValues = 0;
    $fifthSetOfValues = 0;
    
    for($i=1; $i<count($arr); $i++){
        // print_r($arr[$i]);
        $firstSetOfValues += $arr[$i]; 
    }
    // echo $firstSetOfValues;
    for($j=0; $j<count($arr); $j++){
        if($j == 1){
            continue;
        }
        $secondSetOfValues += $arr[$j];
    }
    
    for($k=0; $k<count($arr); $k++){
        if($k == 2){
            continue;
        }
        $thirdSetOfValues += $arr[$k];

    }
     for($l=0; $l<count($arr); $l++){
         if($l == 3){
            continue;
        }
        $fourthSetOfValues += $arr[$l];
    }
     for($m=0; $m<count($arr)-1; $m++){
        $fifthSetOfValues += $arr[$m];
    }
    // echo $secondSetOfValues;
   
     $wholeArray =[$firstSetOfValues,$secondSetOfValues,$thirdSetOfValues,                                  $fourthSetOfValues,$fifthSetOfValues];
    // echo $firstSetOfValues." ".$secondSetOfValues;
     $max = $wholeArray[0];
     $min = $wholeArray[0];
    
    for($x=0; $x<count($wholeArray); $x++){
        // print_r($wholeArray[$x]);
        
        if($wholeArray[$x] > $max){
            $max = $wholeArray[$x];
        }
        else if($wholeArray[$x] < $min){
            $min = $wholeArray[$x];
        }
        
    }
    // echo "max". $max."\n";
    
    
    // echo "min". $min."\n";
    
    
    
    echo $min." ".$max;
}
