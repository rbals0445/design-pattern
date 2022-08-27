import redButton from './redButton.js';
import blueButton from "./blueButton.js";
import singletonCounter from './singleton.js';

const root = document.querySelector('#root');
const nodeList = [redButton,blueButton]

root.append(...nodeList);

