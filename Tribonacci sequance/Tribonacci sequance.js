/*Tribonacci sequance
Type of sequances,the value of each element in it (except the first 3 elements) equals the sum of the three elements before it*/

let tribonacci = (signature, n) => {
    /*signature : the first three elements in the sequance
      n: the length of the sequance*/

    //push the first three elements in the sequance to a new array 
    let arr = [...signature]

    //make function that push new elements to the tribonacci sequance
    const pushEl = () => {
        while (arr.length < n) {
            arr[arr.length] = arr[arr.length - 1] + arr[arr.length - 2] + arr[arr.length - 3]
        }
    }

    //check if (n) is bigger than the arra length(3) and then call (pushEl) else : assign the array length to (n)
    arr.length < n ? pushEl() : arr.length = n
    return arr
}