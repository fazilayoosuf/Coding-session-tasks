
let inputArray=[1,2,3,4,5];

function myFilter(array,cb){
    let outputArr=[];
    for(let i=0;i<array.length;i++){
        let value=array[i];
        let cbFuncArgument=cb(value);
        if(cbFuncArgument){
        outputArr.push(value);
        }

    }
    return outputArr;
}

let result = myFilter(inputArray,function(num){
    return false ;
});

console.log(result);
