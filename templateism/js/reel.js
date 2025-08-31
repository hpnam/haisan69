<script>
// 1) Copy phần intro từ khối ẩn (trước <!--more-->) nếu có
document.addEventListener('DOMContentLoaded', function(){
  var hidden = document.getElementById('item-description-hide');
  var target = document.getElementById('item-description');
  if (hidden && target) target.innerHTML = hidden.innerHTML;
});

// 2) Biến danh sách bài thành "reel" lướt dọc TikTok:
//    - Tự tìm container chứa các .postdata và gắn .hs69-reel
//    - Hỗ trợ phím ↑/↓ và cuộn chuột để nhảy giữa các slide
(function(){
  function findPostsContainer(){
    // Các selector phổ biến trong Blogger template
    return document.querySelector('.blog-posts, #Blog1, .main .blog-posts, #main-wrapper') || document.body;
  }

  function makeReel(){
    const container = findPostsContainer();
    if (!container) return;
    // Nếu container chưa có class, thêm để kích hoạt CSS scroll-snap
    if (!container.classList.contains('hs69-reel')) {
      container.classList.add('hs69-reel');
    }
  }

  // Điều hướng slide (scroll tới postdata gần nhất theo direction)
  function scrollToSlide(dir){
    const container = document.querySelector('.hs69-reel');
    if (!container) return;
    const slides = Array.from(container.querySelectorAll('.postdata'));
    if (!slides.length) return;

    // Tìm slide đang ở vị trí gần đỉnh viewport của container
    const top = container.scrollTop;
    let currentIndex = 0;
    let minDelta = Infinity;
    slides.forEach((el, idx) => {
      const delta = Math.abs(el.offsetTop - top);
      if (delta < minDelta){ minDelta = delta; currentIndex = idx; }
    });

    let nextIndex = currentIndex + (dir > 0 ? 1 : -1);
    nextIndex = Math.max(0, Math.min(slides.length - 1, nextIndex));
    container.scrollTo({ top: slides[nextIndex].offsetTop, behavior: 'smooth' });
  }

  function onKey(e){
    const container = document.querySelector('.hs69-reel');
    if (!container) return;
    if (['ArrowDown','PageDown',' '].includes(e.key)){ e.preventDefault(); scrollToSlide(+1); }
    else if (['ArrowUp','PageUp'].includes(e.key)){ e.preventDefault(); scrollToSlide(-1); }
  }

  let wheelLock = false;
  function onWheel(e){
    const container = document.querySelector('.hs69-reel');
    if (!container) return;
    if (wheelLock) return;
    wheelLock = true;
    if (e.deltaY > 0) scrollToSlide(+1);
    else if (e.deltaY < 0) scrollToSlide(-1);
    setTimeout(()=> wheelLock = false, 260);
  }

  document.addEventListener('DOMContentLoaded', function(){
    makeReel();

    // Gắn listener khi có reel
    const container = document.querySelector('.hs69-reel');
    if (!container) return;

    // Bàn phím & wheel (desktop)
    document.addEventListener('keydown', onKey);
    container.addEventListener('wheel', onWheel, {passive:true});

    // Lướt bằng touch: scroll-snap đã xử lý mượt;
    // không cần chặn mặc định để giữ trải nghiệm tự nhiên.
  });
})();
</script>
