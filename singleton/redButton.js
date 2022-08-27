import singletonCounter from "./singleton.js";

const button = document.createElement('button');

button.style =  'background-color:red; width:100px; height:100px; color:white';
button.textContent = 'Increment'

button.addEventListener('click', () => {
    singletonCounter.increment();
    console.log(singletonCounter.getCount())
})

// 성능 : textContent > innerHTML
// innerText는 css를 고려해서 innerText값을 읽을때 최신 게산값 반영 위해 리플로우 발생.
// textContent는 xss 위험 x

export default button;


