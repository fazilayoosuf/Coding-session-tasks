
let inputArray=[1,2,3,4,5];

function myMap(array,cb){
    let outputArr=[];
    for(let i=0;i<array.length;i++){
        let value=array[i];
        let cbFuncArgument=cb(value);
        outputArr.push(cbFuncArgument);

    }
    return outputArr;
}

let result = myMap(inputArray,function(num){
    return num * 2;
});

console.log(result);
