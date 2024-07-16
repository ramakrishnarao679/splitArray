function chunkArray(arr, size){
    const chunkedArr =[];
    for(let i=0; i<arr.length; i+=size){
        chunkedArr.push(arr.slice(i, i+size));
    }
    return chunkedArr;
}
console.log(chunkArray([1, 2, 3, 4, 5, 6, 7],3));