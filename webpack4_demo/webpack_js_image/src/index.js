import "./index.css";

import img from "./images/a.jpg";

console.log(img); // img/a.jpg

let imgEl = document.createElement("img");
imgEl.src = img;
document.body.appendChild(imgEl);
