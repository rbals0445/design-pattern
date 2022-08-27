import singletonCounter from "./singleton.js";

const button = document.createElement('button');

button.setAttribute('style','background-color:blue; width:100px; height:100px; color:white');
button.textContent = 'Decrement'

button.addEventListener('click', () => {
    singletonCounter.decrement();
    
    console.log(singletonCounter.getCount())
})

export default button;


