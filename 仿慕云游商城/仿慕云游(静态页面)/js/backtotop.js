(function () {
  let rootElement = document.documentElement;
  let backToTop = document.querySelector(".backtotop");
  let timer;

  backToTop.onclick = function () {
    clearInterval(timer);
    timer = setInterval(() => {
      rootElement.scrollTop -= 100;
      if (rootElement.scrollTop <= 0) {
        clearInterval(timer);
      }
    }, 20);
  };

  window.onscroll = function () {
    let scrollTop = rootElement.scrollTop || window.scrollY;
    if (scrollTop === 0) {
      backToTop.style.display = "none";
    } else {
      backToTop.style.display = "block";
    }
  };
})();
