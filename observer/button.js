import observable from "./observer.js"

const button = document.createElement('button')
button.setAttribute('style','background-color:blue; color:white; width:50px')
button.textContent = 'Click Me!'
button.addEventListener('click', () => {
    observable.notify("User click button");
})

export default button;