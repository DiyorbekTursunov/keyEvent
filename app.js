const press = document.querySelector('.press')
const keyCode = document.querySelector('#keyCodeID')
const keyValueID = document.querySelector('#keyValueID')
const keyEventCodeID = document.querySelector('#keyEventCodeID')
const key = document.querySelector('.key')

window.addEventListener('keypress',(e)=>{
    if(e){
        press.style.display='none'
        key.style.display='block'
        console.log(e);
    }
    if(e){
        keyCode.textContent=e.keyCode
        keyValueID.textContent=e.key
        keyEventCodeID.textContent=e.code
    }else{
        window.location.reload()
    }
})
