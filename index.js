
let value=1;
let str="";
for(let i=0;i<5;i++){
    for(let j=0;j<5-i-1;j++){
        str+=" ";
    }

    for(let k=0;k<2*i+1;k++){
        str+=value+"  ";
        value++;
    }
    console.log(str);
    value=1;
    str="";
}