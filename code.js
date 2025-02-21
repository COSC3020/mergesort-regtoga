//mergesort([10,9,8,7,6,5,4,3,2,1])

//mergesort([5,4,3,2,1]);

function merge(arr, L_bounds, R_bounds){
    let leftIndex = L_bounds[0];
    let rightIndex = R_bounds[0];

    while (leftIndex <= L_bounds[1] && rightIndex <= R_bounds[1]) {
        
        if (arr[leftIndex] < arr[rightIndex]){
            leftIndex++
        } else{
            let temp = arr[leftIndex]; // save first one
            
            for (let i = leftIndex; i < rightIndex; i++){ //for each element excluding the first move up
                let temp2 = arr[i+1]; // save the next one
                arr[i+1] = temp; // move the previous value up one
                temp = temp2;
            }
            arr[leftIndex] = temp;
        
            L_bounds[0] = L_bounds[0] + 1;
            L_bounds[1] = L_bounds[1] + 1;
            rightIndex++;
        }

    }
    return arr;
}

function mergeSort(array, bounds=[0, array.length-1]) {
    //base case
    if (array.length == 0) {
        return array;
      }
    if (bounds[0] == bounds[1]) {
      return array;
    }
  
    const mid = Math.floor((bounds[0] + bounds[1]) / 2);
    const leftbounds = [bounds[0], mid];
    const rightbounds = [mid+1, bounds[1]];
  
    array = mergeSort(array, leftbounds)
    array = mergeSort(array, rightbounds)

    array = merge(array, leftbounds, rightbounds);

    return array;
}

//console.log(mergeSort([10,9,8,7,6,5,4,3,2,1]));
//console.log(mergeSort([10,2,1]));
//console.log(mergeSort([]));