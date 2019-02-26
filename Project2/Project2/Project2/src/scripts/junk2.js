import '../styles/bg1.css';
import pic from '../images/pic.jpg';

(function () {
    var selfPic = document.getElementById('picture');

    var image = new Image();
    image.src = pic;

    selfPic.appendChild(image);
    

})();