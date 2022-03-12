function CreateObject(arr) {
    // Write your code here
    let k=[];
    let v=[];
    let obj={};
    for (let i=0;i<arr.length;i++){
        if(i%2===0){
            k.push(arr[i]);
        }
        else{
            v.push(arr[i]);
        }     
    }
    for (i=0;i<k.length;i++){
        obj[k[i]]=v[i];
    }
    return obj;
}
module.exports = CreateObject;
