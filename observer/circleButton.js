import observable from "./observer.js"

const circleButton = document.createElement('button');
circleButton.setAttribute('style','border-radius:50%; width:500px; color:white; background-color:red');
circleButton.textContent = "Circle Button";

circleButton.addEventListener('click',() => {
    observable.notify('Circle button click');
})

export default circleButton;