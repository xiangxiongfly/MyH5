import render from "./index.art";
console.log("index.js");
let html = render({ data: "hello world" });
console.log(html);
let content = document.querySelector("#content");
content.innerHTML = html;
