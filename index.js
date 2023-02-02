// Code your solutions in this file
function writeCards(arr, verb){
    const newArr = [];
    for (let i=0; i<arr.length; i++){
        newArr.push(`Thank you, ${arr[i]}, for the wonderful ${verb} gift!`);
    }
    return newArr;
}

console.log(writeCards(names, "surprise"))


function countDown(num){
    for (let i=num; i>=0; i--)
        console.log(num--)
}


