
(function(){
  const body = document.body;
  const overlay = document.getElementById('hs69Overlay');
  const modal = document.getElementById('hs69Modal');
  const slidesEl = document.getElementById('hs69Slides');
  const dotsEl = document.getElementById('hs69Dots');
  const tapPrev = document.getElementById('tapPrev');
  const tapNext = document.getElementById('tapNext');

  let openBtn = document.getElementById('openHS69');
  if(!openBtn){
    openBtn = document.createElement('button');
    openBtn.id = 'openHS69';
    openBtn.className = 'hs69-launcher';
    openBtn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg> Xem nhanh sản phẩm';
    document.body.appendChild(openBtn);
  }
  const closeBtn = document.getElementById('closeHS69');

  const products = [
    {
      title: 'Cua Y7 · Hàng to gạch son',
      price: 'Liên hệ',
      labels: ['cua', 'cua Cà Mau', 'gạch son'],
      desc: 'Cỡ ~700g/con, thịt dày cộm, gạch thơm béo. Hấp, rang me hay nấu lẩu đều “đã cái nư”.',
      mediaType: 'image',
      media: 'https://raw.githubusercontent.com/hpnam/haisan69/6/templateism/images/banner/crab-400x150.jpg',
      cta: { buy:'#main-wrapper', zalo:'https://zalo.me/0369794114', phone:'tel:+84369794114' }
    },
    {
      title: 'Cua Tứ · Thịt chắc đậm vị',
      price: 'Giá tốt',
      labels: ['cua', 'cua tươi sống'],
      desc: 'Cứng cáp, thịt ngọt, dễ chế biến. Hấp sả, rang me hay nướng mọi đều hợp khẩu vị gia đình.',
      mediaType: 'image',
      media: 'https://raw.githubusercontent.com/hpnam/haisan69/6/templateism/images/banner/crab-400x150.jpg',
      cta: { buy:'#main-wrapper', zalo:'https://zalo.me/0369794114', phone:'tel:+84369794114' }
    },
    {
      title: 'Cua Gạch Loại 1 · Gạch đỏ au',
      price: 'Liên hệ',
      labels: ['cua', 'cua gạch', 'gạch đỏ au'],
      desc: 'Nữ hoàng gạch son: gạch béo thơm, bày mâm là sáng bàn ăn. Hấp – rang me – lẩu đều “bắt miệng”.',
      mediaType: 'image',
      media: 'https://raw.githubusercontent.com/hpnam/haisan69/6/templateism/images/banner/crab-400x150.jpg',
      cta: { buy:'#main-wrapper', zalo:'https://zalo.me/0369794114', phone:'tel:+84369794114' }
    },
    {
      title: 'Cua Cốm · Gạch non béo bùi',
      price: 'Giá liên hệ',
      labels: ['cua', 'cua cốm'],
      desc: 'Cua mới lột, thịt dẻo ngọt, gạch non béo bùi. Hấp sả, rang me, nấu lẩu đều ngon.',
      mediaType: 'image',
      media: 'https://raw.githubusercontent.com/hpnam/haisan69/6/templateism/images/banner/crab-400x150.jpg',
      cta: { buy:'#main-wrapper', zalo:'https://zalo.me/0369794114', phone:'tel:+84369794114' }
    },
    {
      title: 'Cua Y5 · Vừa tầm gia đình',
      price: 'Giá tốt',
      labels: ['cua', 'y5'],
      desc: 'Khoảng ~500g/con, thịt chắc ngọt, giá hợp lý. Hấp – lẩu – rang me đều chuẩn vị.',
      mediaType: 'image',
      media: 'https://raw.githubusercontent.com/hpnam/haisan69/6/templateism/images/banner/crab-400x150.jpg',
      cta: { buy:'#main-wrapper', zalo:'https://zalo.me/0369794114', phone:'tel:+84369794114' }
    },
    {
      title: 'Cua Gạch Loại 2 · Ngon giá mềm',
      price: 'Liên hệ',
      labels: ['cua', 'cua gạch'],
      desc: 'Gạch nhiều, giá dễ chịu. Hấp bia sả, rang me, lẩu cua béo ngọt – ăn là ghiền.',
      mediaType: 'image',
      media: 'https://raw.githubusercontent.com/hpnam/haisan69/6/templateism/images/banner/crab-400x150.jpg',
      cta: { buy:'#main-wrapper', zalo:'https://zalo.me/0369794114', phone:'tel:+84369794114' }
    },
    {
      title: 'Cua Y3 · Gọn nhẹ dễ nấu',
      price: 'Giá tốt',
      labels: ['cua', 'y3'],
      desc: '~300–350g/con, nhanh chín, hợp bữa thường ngày. Rang me chua ngọt hay lẩu đều hợp.',
      mediaType: 'image',
      media: 'https://raw.githubusercontent.com/hpnam/haisan69/6/templateism/images/banner/crab-400x150.jpg',
      cta: { buy:'#main-wrapper', zalo:'https://zalo.me/0369794114', phone:'tel:+84369794114' }
    },
    {
      title: 'Cua Yếm Vuông Gạch Vàng',
      price: 'Liên hệ',
      labels: ['cua', 'yếm vuông', 'gạch vàng'],
      desc: 'Yếm vuông chắc khoẻ, gạch vàng béo thơm. Hấp sả khoe vị, rang me “bắt cơm”, lẩu ấm bụng.',
      mediaType: 'image',
      media: 'https://raw.githubusercontent.com/hpnam/haisan69/6/templateism/images/banner/crab-400x150.jpg',
      cta: { buy:'#main-wrapper', zalo:'https://zalo.me/0369794114', phone:'tel:+84369794114' }
    }
  ];

  // Render
  const H = window.innerHeight; slidesEl.style.height = (products.length * H) + 'px';
  products.forEach((p, i)=>{
    const slide = document.createElement('section'); slide.className='hs69-slide'; slide.style.transform='translateY('+(i*H)+'px)';
    const mediaWrap = document.createElement('div'); mediaWrap.className='hs69-media';
    if(p.mediaType==='video'){ const v=document.createElement('video'); v.src=p.media; v.playsInline=true; v.muted=true; v.loop=true; v.autoplay=true; mediaWrap.appendChild(v);} else { const img=document.createElement('img'); img.src=p.media; img.loading='lazy'; img.alt=p.title; mediaWrap.appendChild(img);} 
    const card = document.createElement('div'); card.className='hs69-card';
    card.innerHTML = '\n<h3 class="hs69-title">'+p.title+'</h3>\n<div class="hs69-meta"><span>'+p.price+'</span> · <span>Hải Sản 69</span></div>\n<div class="hs69-badges">'+p.labels.map(t=>'<span class="hs69-badge">'+t+'</span>').join('')+'</div>\n<p class="hs69-desc">'+p.desc+'</p>\n<div class="hs69-cta">\n  <a class="hs69-btn" href="'+p.cta.zalo+'" target="_blank" rel="noopener">Zalo</a>\n  <a class="hs69-btn" href="'+p.cta.phone+'">Gọi ngay</a>\n  <a class="hs69-btn primary" href="'+p.cta.buy+'">Xem chi tiết</a>\n</div>\n<div class="safe-bottom"></div>';
    slide.appendChild(mediaWrap); slide.appendChild(card); slidesEl.appendChild(slide);
    const dot = document.createElement('div'); dot.className='hs69-dot'+(i===0?' active':''); dotsEl.appendChild(dot);
  });

  let index=0; const max=products.length-1; let startY=0, deltaY=0, isTouching=false, startTime=0;
  function updateDots(){ [...dotsEl.children].forEach((d,i)=> d.classList.toggle('active', i===index)); }
  function goto(i){ index=Math.max(0, Math.min(max, i)); slidesEl.style.transform='translateY(' + (-index*H) + 'px)'; updateDots(); document.querySelectorAll('.hs69-media video').forEach((v,vi)=>{ if(vi===index){v.play().catch(()=>{});} else {v.pause();} }); }
  function onTouchStart(e){ isTouching=true; startY=e.touches[0].clientY; deltaY=0; startTime=Date.now(); }
  function onTouchMove(e){ if(!isTouching) return; deltaY=e.touches[0].clientY-startY; const offset=-index*H + deltaY; slidesEl.style.transition='none'; slidesEl.style.transform='translateY(' + offset + 'px)'; }
  function onTouchEnd(){ if(!isTouching) return; isTouching=false; slidesEl.style.transition='transform .3s ease'; const elapsed=Date.now()-startTime; const threshold=80; const quick=elapsed<220 && Math.abs(deltaY)>30; if(deltaY<-threshold || (quick && deltaY<0)) goto(index+1); else if(deltaY>threshold || (quick && deltaY>0)) goto(index-1); else goto(index); }

  tapPrev.addEventListener('click', ()=>goto(index-1));
  tapNext.addEventListener('click', ()=>goto(index+1));
  function open(){ overlay.classList.add('open'); modal.classList.add('open'); body.style.overflow='hidden'; goto(index); }
  function close(){ overlay.classList.remove('open'); modal.classList.remove('open'); body.style.overflow=''; }
  openBtn.addEventListener('click', open);
  closeBtn.addEventListener('click', close);
  overlay.addEventListener('click', close);
  const viewport = document.getElementById('hs69Viewport');
  viewport.addEventListener('touchstart', onTouchStart, {passive:true});
  viewport.addEventListener('touchmove', onTouchMove, {passive:true});
  viewport.addEventListener('touchend', onTouchEnd, {passive:true});
  window.addEventListener('resize', ()=>{ const h=window.innerHeight; slidesEl.style.height=(products.length*h)+'px'; goto(index); });
})();
