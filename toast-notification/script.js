const btn=document.getElementById('btn');
const cont=document.getElementById('cont');
btn.addEventListener('click',()=>{
    createNotification();
})
function createNotification(){
    const note=document.createElement('div');
    note.classList.add('add');
    note.innerText="i am cool";
    cont.appendChild(note);
    setTimeout(() => {
        note.remove();
    },3000);
}