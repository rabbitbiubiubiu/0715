function bigSum(arr1,arr2) {
    var sum = [];
    var temp = 0;
    var m = 0;
    arr1 = arr1.split("");
    arr2 = arr2.split("");
    var c = arr1.length >= arr2.length?arr1.length:arr2.length;
    for(var i=0;i<c;i++){
        if(arr1.length!=0 && arr2.length!=0){
            temp = arr1.pop()*1 + arr2.pop()*1 + m;
            if(temp>9){
                m = parseInt(temp/10);
            }else{
                m=0;
            }
            sum.unshift((temp-m*10));
        }
        if(arr1.length != 0 && arr2.length == 0){
            sum.unshift(arr1.pop()*1+m);
        }
        if(arr1.length == 0 && arr2.length != 0){
            sum.unshift(arr2.pop()*1+m);
        }
        if(arr1.length == 0 && arr2.length == 0){
            return sum.toString().replace(/,/g,'')
        }
    }
}
console.log(bigSum('123456789123456789','23456789'));
