function getmin(a){
    let min=a[0];
    for (i=1;i<a.length;i++){
        if (a[i]<min){
            min=a[i];

        }
    }return min;
}
let x=0;
let mang=new Array;
function input1(){
    mang[x]=document.getElementById("id").value;
    x++
}
function click1(){
    let a=""
    for (let i=0;i<mang.length;i++){
        a+="element"+i+"="+mang[i]+"<br>"

    }document.getElementById("so").innerHTML=a;
}

function timf(){
    let c=mang
    let d=getmin(c)
    document.getElementById("result").innerHTML=d+ " là giá trị nhỏ nhất trong mảng"
}
