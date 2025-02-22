# Mergesort

Implement an iterative (no recursive calls) and in-place version of mergesort.
Use the template I've provided in `code.js`. Test your new function; I've
provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`.

Hint: To make merge sort in-place, think about what happens during the merge --
where are elements moved to and from? To make it iterative, think about the
part of the array each recursive call considers.

## Runtime Analysis

Analyse the time complexity of your implementation and give a $\Theta$ bound for
its worst-case runtime. Add your answer, including your reasoning, to this
markdown file.

The breakdown:

my implementation is made up of 4 loops.

```javascript
    for (let width = 1; width < n; width *= 2) {
        for (let i = 0; i < n; i += 2 * width) {
            while (leftIndex <= L_bounds[1] && rightIndex <= R_bounds[1]) {
                for (let i = leftIndex; i < rightIndex; i++){
                    //do stuff
                }
            }
        }
    }
```

as far as i can tell the outer loop must run $\log_2(n)$ because the width variable doubles each time it runs untill it becomes larger than the input array.

the second loop ends up running $(\frac{n}{width})$ times, but since width starts at 1 and doubles each time... accross all passes it sums up to (n). i know this is true because in the code i made a counter at this spot and it summed up to (n + 1), but ignoring constants its just n.

the inner too loops are anoying! i know that it must be $(n^2)$ because for each element in the array it might have to shift each element in the array up a spot in the array to allow for insertion of a smaller element...

Because of this $n^2 * log_2(n) \epsilon \Theta(n^2logn)$ 

I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.