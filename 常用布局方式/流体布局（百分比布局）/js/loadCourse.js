let freeCourse = document.getElementById("free_course");
let codingCourse = document.getElementById("coding_course");

let freeDatas = [
  {
    courseImg: "./images/course_free/1.jpg",
    courseName: "初识 HTML(5) + CSS(3) - 2020升级版",
    coursePrice: "免费",
  },
  {
    courseImg: "./images/course_free/2.jpg",
    courseName: "  Java 入门第一课（IDEA 工具）2020 升级版",
    coursePrice: "免费",
  },
  {
    courseImg: "./images/course_free/3.jpg",
    courseName: "Linux C 语言编程基本原理与实践",
    coursePrice: "免费",
  },
  {
    courseImg: "./images/course_free/4.jpg",
    courseName: "炫丽的倒计时效果 Canvas 绘图与动画基础",
    coursePrice: "免费",
  },
];
let codingDatas = [
  {
    courseImg: "./images/course_coding/1.jpg",
    courseName: "Go微服务入门到容器化实践，落地可观测的微服务电商项目",
    coursePrice: "¥328",
  },
  {
    courseImg: "./images/course_coding/2.jpg",
    courseName: "Redis 专项进阶课 解决 Redis 工作实际问题 + 掌握Redis6.x 特性",
    coursePrice: "¥298",
  },
  {
    courseImg: "./images/course_coding/3.jpg",
    courseName: "体系课-数据可视化入门到精通-打造前端差异化竞争力",
    coursePrice: "¥848",
  },
  {
    courseImg: "./images/course_coding/4.png",
    courseName: "一天时间迅速准备前端面试 快速构建初级前端知识体系",
    coursePrice: "¥299",
  },
  {
    courseImg: "./images/course_coding/5.png",
    courseName: "PyTorch 入门到进阶 实战计算机视觉与自然语言处理项目",
    coursePrice: "¥499",
  },
];

for (let i = 0; i < freeDatas.length; i++) {
  let itemData = freeDatas[i];
  let liEl = document.createElement("li");
  liEl.className = "course_item";
  let aEl = document.createElement("a");
  let imgEl = document.createElement("img");
  imgEl.src = itemData.courseImg;
  imgEl.className = "course_img";
  let pEl = document.createElement("p");
  pEl.innerText = itemData.courseName;
  pEl.className = "course_name";
  let p2El = document.createElement("p");
  p2El.innerText = itemData.coursePrice;
  p2El.className = "course_price";
  aEl.appendChild(imgEl);
  aEl.appendChild(pEl);
  aEl.appendChild(p2El);
  liEl.appendChild(aEl);
  freeCourse.appendChild(liEl);
}

for (let i = 0; i < codingDatas.length; i++) {
  let itemData = codingDatas[i];
  let liEl = document.createElement("li");
  liEl.className = "course_item";
  let aEl = document.createElement("a");
  let imgEl = document.createElement("img");
  imgEl.src = itemData.courseImg;
  imgEl.className = "course_img";
  let pEl = document.createElement("p");
  pEl.innerText = itemData.courseName;
  pEl.className = "course_name";
  let p2El = document.createElement("p");
  p2El.innerText = itemData.coursePrice;
  p2El.className = "course_price";
  aEl.appendChild(imgEl);
  aEl.appendChild(pEl);
  aEl.appendChild(p2El);
  liEl.appendChild(aEl);
  codingCourse.appendChild(liEl);
}
