import '../css/image_viewer.css';

import alicia from '../assets/alicia-silverstone.jpg';
import emily from '../assets/emily-blunt.jpg';
import emma from '../assets/emma-stone.jpg';
import jennifer from '../assets/jennifer-love-hewitt.jpg';
import kate from '../assets/kate-hudson.jpg';
import michelle from '../assets/michelle-yeoh.jpg';
import olivia from '../assets/olivia-wilde.jpg';
import tilda from '../assets/tilda-swinston.jpg';
import zoe from '../assets/zoe-soldana.jpg';

export default () => {
    const mordolenta = [alicia, emily, emma, jennifer, kate, michelle, olivia, tilda, zoe];

    // const randomImage = document.createElement('img');
    // randomImage.src = 'http://lorempixel.com/100/100';
    // document.body.appendChild(randomImage);

    mordolenta.forEach(function(imageSource) {
        const image = document.createElement('img');
        image.src = imageSource;
        document.body.appendChild(image);
    });
};