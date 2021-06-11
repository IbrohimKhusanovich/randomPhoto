const BOXS =document.querySelector('.boxs')
const BTN_LOAD =document.querySelector('.btn-load')

const promises=[];

promises.push('guy')
let guy=[]
function showBox(){
    for(let i=0;i<6;i++){
    let randomImg= Math.floor(Math.random()*300)
 guy.push(` <div class="box">
 <img class="images"
   src="https://picsum.photos/id/${randomImg}/300"
   alt="not found"
 />
</div>`)
}
BOXS.innerHTML=guy.join('')
}

function createLoad(){
    let load=document.createElement('div')
    load.classList.add('loader')
    BOXS.appendChild(load)
}

    BTN_LOAD.addEventListener('click',()=>{
        createLoad()
        setTimeout(showBtn,1000)
    
       
    })
    
    function showBtn(){ 
         showBox()
         BTN_LOAD.classList.add('btn-active')
        //  BTN_LOAD.disabled= true
     }
    

    