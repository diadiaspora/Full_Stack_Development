console.log("Hello World");


var removeElement = function(nums, val) {

    nums.map((num, index) => {
        nums = [ 1, 2 ,3, 3, 4, 3, 5, 3];
val = 3
        if(index === val) {
            nums.splice(index, 1)
            return nums
            console.log(removeElement);
        }

        
    });
};

var removeElement = function(nums, val) {
    
    let k = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[k] = nums[i];
            k++;
        }
    }

    return k;
};



