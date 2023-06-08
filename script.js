document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".button").addEventListener("click", function () {
    document.body.style.backgroundColor = "white";
    document.querySelector(".text-yellow").style.color = "#1D1AA9";
    document.querySelector(".text-yellow").style.animationPlayState = "paused";
    document.querySelector(".text-yellow").style.opacity = "1";
    document.querySelector(".button").style.display = "none";

    document.querySelector(".photoContainer").classList.remove("d-none");
    document.querySelector(".imageGallery").classList.remove("d-none");
    document.querySelector(".imgContainer").classList.remove("d-none");
    document.querySelector(".textContainer").classList.remove("d-none");
    document.querySelector(".buttonContainer").classList.remove("d-none");

    var buttonContainer = document.querySelector(".buttonContainer");
    buttonContainer.innerHTML = `
      <button class="prevButton btn btn-primary rounded-circle btn-lg shadow" style="background-color: #1D1AA9; color: white">
        <i class="fa fa-angle-left"></i>
      </button>
      <button class="nextButton btn btn-primary rounded-circle btn-lg shadow" style="background-color: #1D1AA9; color: white">
        <i class="fa fa-angle-right"></i>
      </button>
    `;

    document.querySelector('.prevButton').addEventListener('click', previousSlide);
    document.querySelector('.nextButton').addEventListener('click', nextSlide);
  });

  function redirectToLink(event) {
    event.preventDefault();
    window.location.href = event.target.parentElement.href;
  }

  var slides = document.querySelectorAll('.slide');
  var currentIndex = 0;

  function showSlide(index) {
    slides.forEach(function (slide) {
      slide.style.display = 'none';
    });

    slides[index].style.display = 'block';
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }

  function previousSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
  }

  setInterval(nextSlide, 4000);

  document.querySelector('.prevButton').addEventListener('click', previousSlide);
  document.querySelector('.nextButton').addEventListener('click', nextSlide);

  document.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      document.querySelector(".imageGallery").classList.remove("d-none");
      document.querySelector(".prevButton").style.display = "block";
      document.querySelector(".nextButton").style.display = "block";
    }
  });

  var circle = document.getElementById('animated-circle');
  var directionX = 1; // 水平方向移动的方向，1代表向右移动，-1代表向左移动
  var directionY = 1; // 垂直方向移动的方向，1代表向下移动，-1代表向上移动

  function animateCircle() {
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;
    var circleWidth = circle.offsetWidth;
    var circleHeight = circle.offsetHeight;
    var circleX = circle.offsetLeft;
    var circleY = circle.offsetTop;

    // 计算下一帧的位置
    var nextX = circleX + directionX * 4;
    var nextY = circleY + directionY * 4;

    // 检查是否碰到边界并更新移动方向
    if (nextX + circleWidth > windowWidth || nextX < 0) {
      directionX *= -1;
    }
    if (nextY + circleHeight > windowHeight || nextY < 0) {
      directionY *= -1;
    }

    // 更新圆形的位置
    circle.style.left = nextX + 'px';
    circle.style.top = nextY + 'px';

    // 循环调用动画函数
    requestAnimationFrame(animateCircle);
  }

  // 开始动画
  animateCircle();

  // 新加入的函数
  function myFunction() {
    // 在这里添加您的代码
  }
});
