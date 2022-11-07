const text="we are best in the world";
let index=0;
function writeContex(){
    document.body.innerText=text.slice(0,index);
    index++;
    if(index>text.length)
    {
        index=0;
    }
}
//setInterval(writeContex,100);
setInterval(() => {
    writeContex();
},100);