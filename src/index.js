import _ from 'lodash';
import './styles.css';
import Icon from './icon.png';
import printMe from './printMe.js';

function component() {
    const myIcon = new Image();
    myIcon.src = Icon;
    const element = document.createElement('div');
    const btn = document.createElement('button');

    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'from',"the", 'Stack Fails', "blog."], ' ')
    element.classList.add('hello');
    btn.innerHTML = 'Click me and check the console'
    btn.onclick = printMe;



    element.appendChild(btn);
    return element ;
}

document.body.appendChild(component());


