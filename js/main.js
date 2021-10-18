//Selectors
const faq = document.querySelector('.faq');
console.log(faq);

//Event Listeners
faq.addEventListener('click', answerToggle);

//Functions
function answerToggle(e){
    let status = e.target.parentElement;
    console.log(e.target);
    if(e.target.classList.contains('question')){
    if(status.classList.contains('info--active')){
        console.log(e.target);
        status.classList.toggle('info--active');        
    }else{
        console.log(e.target);
        let previous = document.querySelector('.info--active')
        if(previous){
            previous.classList.remove('info--active');
    }
        status.classList.toggle('info--active');        
    }
}
}
