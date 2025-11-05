(function () {
  let banner = document.querySelector(".banner");
  let bannerList = document.querySelector(".banner-list");
  let leftBtn = document.querySelector(".left-btn");
  let rightBtn = document.querySelector(".right-btn");
  let circleOl = document.querySelector(".circle-ol");
  let circleLis = circleOl.querySelectorAll("li");

  // 克隆第一个li元素，并添加
  let cloneLi = bannerList.firstElementChild.cloneNode(true);
  bannerList.appendChild(cloneLi);

  let idx = 0; //当前显示第几页

  rightBtn.onclick = rightHandler;
  leftBtn.onclick = leftHandler;

  function rightHandler() {
    if (isLock()) return;
    lock();

    idx++;
    moveBanner(idx, true);
    // 如果是最后一页，瞬间移动到第一页
    if (idx >= 5) {
      setTimeout(function () {
        idx = 0;
        moveBanner(idx, false);
      }, 500);
    }
    setPoints();

    unlock();
  }

  function leftHandler() {
    if (isLock()) return;
    lock();

    // 如果是第一页，瞬间移动到最后一页
    if (idx === 0) {
      moveBanner(5, false);
      idx = 4;
      // 异步执行
      setTimeout(function () {
        moveBanner(idx, true);
      }, 0);
    } else {
      idx--;
      moveBanner(idx, true);
    }
    setPoints();

    unlock();
  }

  // 移动
  function moveBanner(idx, isAnim) {
    if (isAnim) {
      bannerList.style.transition = "transform .5s ease 0s";
    } else {
      bannerList.style.transition = "none";
    }
    bannerList.style.transform = "translateX(" + -16.66 * idx + "%)";
  }

  let flagLock = false; //节流锁

  // 锁住
  function lock() {
    flagLock = true;
  }

  // 解锁
  function unlock() {
    setTimeout(function () {
      flagLock = false;
    }, 500);
  }

  // 是否锁住
  function isLock() {
    return flagLock;
  }

  // 设置指示器
  function setPoints() {
    for (var i = 0; i < circleLis.length; i++) {
      if (i === idx % 5) {
        circleLis[i].classList.add("active");
      } else {
        circleLis[i].classList.remove("active");
      }
    }
  }

  // 点击指示器
  circleOl.onclick = function (e) {
    if (e.target.tagName.toLowerCase() == "li") {
      var n = Number(e.target.getAttribute("data-n"));
      idx = n;
      moveBanner(idx, true);
      setPoints();
    }
  };

  // 轮播定时器
  let timer = setInterval(rightHandler, 2000);
  banner.onmouseenter = function () {
    clearInterval(timer);
  };
  banner.onmouseleave = function () {
    clearInterval(timer);
    timer = setInterval(rightHandler, 2000);
  };
})();
