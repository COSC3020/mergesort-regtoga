function mergeSort(array) {
    let n = array.length;
    if (n <= 1) {
        return array;
    }
    //because this grows with a size of 2 i think that this loop executes log_2(n) times
    //stops looping if width is larger than the length of the array
    for (let width = 1; width < n; width *= 2) { //crawl up the array with a size of initially 1 and merge, the size grows aswe merge more and more
        //this one seems to grow 2x as fast as the previous loop so maby log_2(log_2(n))
        //it stops looping if i is larger than the length of the array
        for (let i = 0; i < n; i += 2 * width) {
            let left = i;
            let mid = Math.min(i + width - 1, n - 1);
            let right = Math.min(i + 2 * width - 1, n - 1);

            if (mid < right) {

                let L_bounds = [left, mid];
                let R_bounds = [mid + 1, right];

                let leftIndex = L_bounds[0];
                let rightIndex = R_bounds[0];

                while (leftIndex <= L_bounds[1] && rightIndex <= R_bounds[1]) {
                    
                    if (array[leftIndex] < array[rightIndex]){
                        leftIndex++
                    } else{
                        let temp = array[leftIndex]; // save first one
                        
                        for (let i = leftIndex; i < rightIndex; i++){ //for each element excluding the first move up
                            let temp2 = array[i+1]; // save the next one
                            array[i+1] = temp; // move the previous value up one
                            temp = temp2;
                        }
                        array[leftIndex] = temp;
                        //update the bounds
                        L_bounds[0] = L_bounds[0] + 1;
                        L_bounds[1] = L_bounds[1] + 1;
                        rightIndex++;
                    }
                }
            }
        }
    }

    return array;
}

//console.log(mergeSort([20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]));
//console.log(mergeSort([40,39,38,37,36,35,34,33,32,31,30,29,28,27,26,25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]));
//console.log(mergeSort([1,1,1,1,1,1,1,1,1,1,15,111,1,1,1,1,1,1,1,1,1,1,1,1,1,11,1,1,1,1,1,1,1,222,1,1,12,12,12,56789]))
//console.log(mergeSort([10,9,8,7,6,5,4,3,2,1]));
//console.log(mergeSort([10,2,1]));
//console.log(mergeSort([]));