// 点击下载按钮时弹出提示
const downloadButton = document.getElementById('download-btn');
downloadButton.addEventListener('click', () => {
  alert('简历已发送至您的邮箱');
});

// 当技能条进入视口时触发动画
const skillBars = document.querySelectorAll('.skill-fill');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

skillBars.forEach((bar) => {
  observer.observe(bar);
});