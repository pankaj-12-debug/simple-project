const open=document.getElementById('open');
const closed=document.getElementById('closed');
const container=document.getElementById('container');
open.addEventListener('click',()=>{
    container.classList.add('active');
});
closed.addEventListener('click',()=>{
    container.classList.remove('active');
})