function writeCards(arr, eventName) {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(`Thank you, ${arr[i]}, for the wonderful ${eventName} gift!`);
    }
return newArr;
}


function countDown(num) {
    while (num >= 0) {
        console.log(num);
        num -= 1;
    }
}

