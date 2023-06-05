document.getElementById('generate-btn').addEventListener('click',function(){
    const generateInput = document.getElementById('generate-input')
    const random = Math.round(Math.random()*10000)
    const randomSave = random + '';
    if(randomSave.length == 4){
        generateInput.value=randomSave;
    }
    return randomSave;
})
document.getElementById('number-body').addEventListener('click',function(e){
    const pin = document.getElementById('pin-type')
    const pinVal = pin.value;
    const previous = e.target.innerText;
    if(isNaN(previous)){
        if(previous == 'C'){
            pin.value = ''
        }
    }else{
        const newN =  pinVal + previous ;
        pin.value = newN;
    }
    
})
document.getElementById('submit').addEventListener('click',function(){
    const generatePin = document.getElementById('generate-input').value;
    const pinMatch = document.getElementById('pin-type').value;
    const notifySuccess = document.getElementById('notify-success');
    const notifyFailed = document.getElementById('notify-failed');
    if(generatePin == pinMatch){
        notifySuccess.style.display = 'block'
        notifyFailed.style.display = 'none'
    }else{
        notifySuccess.style.display = 'none'
        notifyFailed.style.display = 'block'
    }
})