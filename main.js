//PROBLEM 1
 
// function for calculating
// Non-overlapping sum of two array
function findSum(A, B, n)
{
    let sum = 0;
 
    // Insert elements of Array A in set
    // and add into sum
    let st = new Set();
    for (let i = 0; i < n; i++) {
        st.add(A[i]);
        sum += A[i];
    }
     
    // Check if B's element are there in set
    // if exist then remove current element from
    // set, otherwise add current element into sum
    for (let i = 0; i < n; i++) {
        if (!st.has(B[i])) {
            sum += B[i];
        }
        else {
            sum -= B[i];
        }
    }
 
    // Finally, return sum
    return sum;
}
 
// Driver code
    let A = [ 5, 4, 9, 2, 3 ];
    let B = [ 2, 8, 7, 6, 3 ];
 
    // size of array
    let n = A.length;
 
    // function call
    document.write(findSum(A, B, n));


    //PROBLEM 2

    let vectors = [[7, 1, 1],[6, 0, 2], [5, 7, 0], [3, 1, 2], [2, 3 ,8], [0, 0, 0]]

function dotProduct(vector1, vector2){
    let result = 0;
    for(let i = 0; i < vector1.length; i++){
        result += vector1[i] * vector2[i]
      }
    return result
  }
  
  for(let i = 0; i < vectors.length; i++){
    for(let j = i + 1; j < vectors.length; j++){
      if(dotProduct(vectors[i], vectors[j]) === 0){
          console.log(`${vectors[i]} and ${vectors[j]} are orthogonal `)
      }
    }
  }