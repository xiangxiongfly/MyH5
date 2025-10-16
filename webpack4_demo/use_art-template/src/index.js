import render from "./index.art";
console.log("index.jquery");
let html = render({ data: "hello world" });
console.log(html);
let content = document.querySelector("#content");
content.innerHTML = html;
