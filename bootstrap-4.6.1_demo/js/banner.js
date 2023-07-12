$(function () {
  // 当前屏幕大小
  var currentScreen = "none";
  // 轮播图数据
  var banners = [
    { id: 0, bigUrl: "./images/banner0.png", smUrl: "./images/banner0_sm.png" },
    { id: 1, bigUrl: "./images/banner1.png", smUrl: "./images/banner1_sm.png" },
    { id: 2, bigUrl: "./images/banner2.png", smUrl: "./images/banner2_sm.png" },
  ];

  $(window).on(
    "resize",
    throttle(function () {
      var winWidth = $(this).outerWidth();
      var isBigScreen = winWidth >= 768;
      if (currentScreen === "none") {
        renderBanner(banners, isBigScreen);
      }
      if (currentScreen === "big" && !isBigScreen) {
        renderBanner(banners, isBigScreen);
      }
      if (currentScreen === "small" && isBigScreen) {
        renderBanner(banners, isBigScreen);
      }
    })
  );
  $(window).trigger("resize");

  function renderBanner(banners = [], isBigScreen) {
    currentScreen = isBigScreen ? "big" : "small";
    // 取消定时器
    $(".carousel").carousel("dispose");
    var bannerHtmlStr = "";
    banners.forEach(function (item, index) {
      var active = index === 0 ? "active" : "";
      var imgUrl = isBigScreen ? item.bigUrl : item.smUrl;
      bannerHtmlStr += `<div class="carousel-item ${active}">
      <img src="${imgUrl}" class="d-block w-100" alt="..." />
  </div>`;
    });
    $(".carousel-inner").empty().append(bannerHtmlStr);
    // 开始轮播
    $(".carousel").carousel("cycle");
  }
});

/*
<div class="carousel-item active">
    <img src="./images/banner0.png" class="d-block w-100" alt="..." />
</div>
<div class="carousel-item">
    <img src="./images/banner1.png" class="d-block w-100" alt="..." />
</div>
<div class="carousel-item">
    <img src="./images/banner2.png" class="d-block w-100" alt="..." />
</div>
*/
