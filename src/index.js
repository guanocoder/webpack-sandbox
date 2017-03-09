//import sum from "./sum";
//import './image_viewer'; // import just for instant execution purpose
// let x = 5;
// let y = 8;
// console.log(`The sum of ${x} and ${y} equals to ${sum(x,y)}`);

const button = document.createElement('button');
button.innerText = 'Click me';
button.onclick = () => {
    System.import('./image_viewer').then(module => {
        module.default();
    });    
};

document.body.appendChild(button);