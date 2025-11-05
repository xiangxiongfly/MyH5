(function () {
  let bannerNav = document.querySelector(".banner-nav");
  let bannerNavWrap = document.querySelector(".banner-nav .banner-nav-wrap");
  let bannerNavLis = document.querySelectorAll(".banner-nav .banner-nav-wrap li");
  let menus = document.querySelectorAll(".banner-subnav .menu-box");

  bannerNavWrap.onmouseover = function (e) {
    if (e.target.tagName.toLowerCase() == "li") {
      let t = e.target.getAttribute("data-t");

      for (let i = 0; i < bannerNavLis.length; i++) {
        bannerNavLis[i].classList.remove("active");
      }
      e.target.classList.add("active");

      for (let i = 0; i < menus.length; i++) {
        let data_t = menus[i].getAttribute("data-t");
        if (t === data_t) {
          menus[i].style.display = "block";
        } else {
          menus[i].style.display = "none";
        }
      }
    }
  };

  bannerNav.onmouseleave = function () {
    for (let i = 0; i < menus.length; i++) {
      bannerNavLis[i].classList.remove("active");
      menus[i].style.display = "none";
    }
  };
})();
