// index.jquery

let smallWrap = document.querySelector(".small_wrap");
let mask = document.querySelector(".mask");
let smallImg = document.querySelector(".small_img");
let bigWrap = document.querySelector(".big_wrap");
let bigImg = document.querySelector(".big_img");
let prev = document.querySelector(".prev");
let next = document.querySelector(".next");
let ul = document.querySelector(".pic_list ul");

let imgIndex = 0;

initBottom();

//初始化底部缩略图
function initBottom() {
    for (let i = 0; i < imageUrls.length; i++) {
        let li = document.createElement("li");
        let img = document.createElement("img");
        img.src = imageUrls[i].s;
        li.appendChild(img);
        li.onclick = function () {
            imgIndex = i;
            smallImg.src = imageUrls[imgIndex].s;
            bigImg.src = imageUrls[imgIndex].b;
        };
        ul.appendChild(li);
    }
}

initMagnifier();

//初始化放大镜
function initMagnifier() {
    smallImg.src = imageUrls[imgIndex].s;
    bigImg.src = imageUrls[imgIndex].b;

    smallWrap.onmousemove = function (e) {
        let left =
            e.clientX - smallWrap.getBoundingClientRect().left - mask.offsetWidth / 2;
        let top =
            e.clientY - smallWrap.getBoundingClientRect().top - mask.offsetHeight / 2;

        //边界限制
        if (left < 0) {
            left = 0;
        } else if (left > smallWrap.clientWidth - mask.offsetWidth) {
            left = smallWrap.clientWidth - mask.offsetWidth;
        }
        if (top < 0) {
            top = 0;
        } else if (top > smallWrap.clientHeight - mask.offsetHeight) {
            top = smallWrap.clientHeight - mask.offsetHeight;
        }

        //移动mask
        mask.style.left = left + "px";
        mask.style.top = top + "px";

        //移动距离比例
        let scale =
            (smallWrap.clientWidth - mask.offsetWidth) /
            (bigImg.offsetWidth - bigWrap.clientWidth);

        //移动大图片
        bigImg.style.left = -(left / scale) + "px";
        bigImg.style.top = -(top / scale) + "px";
    };
}

initTurn();

function initTurn() {
    let liList = document.querySelectorAll(".pic_list ul li");
    //起点
    let start = 0;
    //步长
    let step = (liList[0].offsetWidth + 20) * 2;
    //范围
    let endRange = (liList.length - 5) * (liList[0].offsetWidth + 20);

    prev.onclick = function () {
        start += step;
        if (start > 0) {
            start = 0;
        }
        ul.style.left = start + "px";
    };

    next.onclick = function () {
        start -= step;
        if (start < -endRange) {
            start = -endRange;
        }
        ul.style.left = start + "px";
    };
}
