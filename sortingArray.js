//highest to lowest
function sortingarrays(arr){
    while(true){
        var x = null;
        for(let i = 0;i<arr.length;i++){
            if(arr[i] < arr[i+1]){
                x = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = x;                
            }
        }
        if(x == null){
            break;
        }
    }
    return arr;
}

var Arr = [3,8,10,-9,-2];
console.log(sortingarrays(Arr));
