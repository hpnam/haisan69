(function(){
  const body=document.body;
  const overlay=document.getElementById('hs69Overlay');
  const modal=document.getElementById('hs69Modal');
  const slidesEl=document.getElementById('hs69Slides');
  const dotsEl=document.getElementById('hs69Dots');
  const tapPrev=document.getElementById('tapPrev');
  const tapNext=document.getElementById('tapNext');
  const openBtn=document.getElementById('openHS69');
  const closeBtn=document.getElementById('closeHS69');
  const viewport=document.getElementById('hs69Viewport');

  // ====== DANH SÁCH SẢN PHẨM (chỉ tag "cua") + INTRO (trước <!--more-->) ======
  const products=[
    {
      title:'Cua Y7 · Hàng to gạch son',
      price:'Liên hệ',
      labels:['cua','cua Cà Mau','gạch son'],
      mediaType:'image',
      media:'https://raw.githubusercontent.com/hpnam/haisan69/6/templateism/images/banner/crab-400x150.jpg',
      intro:'Cua Y7 là “hàng bự” xứ Cà Mau, khoảng ~700g/con, càng to thịt dày, gạch son béo thơm. Tuyển chọn cua sống khoẻ, dây nhỏ, giữ hồ nước mặn – mở thùng là còn cựa quậy. Thịt ngọt thanh, cắn một miếng thấy nước ngọt lan đầu lưỡi; gạch vàng óng chỉ cần muối tiêu chanh là “đã cái nư”. Hấp, rang me hay nấu lẩu đều hợp vị gia đình.',
      cta:{buy:'#main-wrapper',zalo:'https://zalo.me/0369794114',phone:'tel:+84369794114'}
    },
    {
      title:'Cua Tứ · Thịt chắc đậm vị',
      price:'Giá tốt',
      labels:['cua','cua tươi sống'],
      mediaType:'image',
      media:'https://raw.githubusercontent.com/hpnam/haisan69/6/templateism/images/banner/crab-400x150.jpg',
      intro:'Cua Tứ cứng cáp, thịt săn chắc, vị ngọt ổn định – “dễ ăn dễ nấu”. Hấp giữ vị thanh, rang me chua ngọt bắt cơm, nướng mọi thơm nức mũi đều ngon. Cua sống giao tận nơi, cân đủ, hương biển mằn mặn đặc trưng đất mũi.',
      cta:{buy:'#main-wrapper',zalo:'https://zalo.me/0369794114',phone:'tel:+84369794114'}
    },
    {
      title:'Cua Gạch Loại 1 · Gạch đỏ au',
      price:'Liên hệ',
      labels:['cua','cua gạch','gạch đỏ au'],
      mediaType:'image',
      media:'https://raw.githubusercontent.com/hpnam/haisan69/6/templateism/images/banner/crab-400x150.jpg',
      intro:'Nữ hoàng gạch son của Cà Mau: gạch đỏ vàng óng ả, béo thơm; thịt vẫn ngọt chắc. Hấp khoe vị tự nhiên, rang me “bắt cơm”, nấu lẩu thì gạch tan vào nước dùng béo ngậy. Hàng sống khoẻ, dây nhỏ, đóng oxy – bày mâm là sáng rực cả bàn ăn.',
      cta:{buy:'#main-wrapper',zalo:'https://zalo.me/0369794114',phone:'tel:+84369794114'}
    },
    {
      title:'Cua Cốm · Gạch non béo bùi',
      price:'Giá liên hệ',
      labels:['cua','cua cốm'],
      mediaType:'image',
      media:'https://raw.githubusercontent.com/hpnam/haisan69/6/templateism/images/banner/crab-400x150.jpg',
      intro:'Cua mới lột, thịt dẻo ngọt, gạch non bùi béo – mùi thơm rất riêng. Hấp bia sả giữ vị, rang me đậm đà hay nấu lẩu ấm bụng đều hợp. Mua online giao tận nơi, mở thùng thấy cua còn sống – yên tâm vào bếp.',
      cta:{buy:'#main-wrapper',zalo:'https://zalo.me/0369794114',phone:'tel:+84369794114'}
    },
    {
      title:'Cua Y5 · Vừa tầm gia đình',
      price:'Giá tốt',
      labels:['cua','y5'],
      mediaType:'image',
      media:'https://raw.githubusercontent.com/hpnam/haisan69/6/templateism/images/banner/crab-400x150.jpg',
      intro:'Khoảng ~500g/con, cân bằng giữa giá và chất. Thịt chắc ngọt, gạch vừa; hấp – rang me – lẩu đều ngon. Lựa chọn “vừa túi tiền” cho bữa cơm thường ngày vẫn đậm vị Cà Mau.',
      cta:{buy:'#main-wrapper',zalo:'https://zalo.me/0369794114',phone:'tel:+84369794114'}
    },
    {
      title:'Cua Gạch Loại 2 · Ngon giá mềm',
      price:'Liên hệ',
      labels:['cua','cua gạch'],
      mediaType:'image',
      media:'https://raw.githubusercontent.com/hpnam/haisan69/6/templateism/images/banner/crab-400x150.jpg',
      intro:'Gạch nhiều, béo bùi, giá dễ chịu. Hấp bia sả lên là dậy mùi, rang me chua ngọt “tốn cơm”, nấu lẩu thì nước dùng béo ngọt khó cưỡng. Hợp cho đãi bạn, ăn gia đình tiết kiệm.',
      cta:{buy:'#main-wrapper',zalo:'https://zalo.me/0369794114',phone:'tel:+84369794114'}
    },
    {
      title:'Cua Y3 · Gọn nhẹ dễ nấu',
      price:'Giá tốt',
      labels:['cua','y3'],
      mediaType:'image',
      media:'https://raw.githubusercontent.com/hpnam/haisan69/6/templateism/images/banner/crab-400x150.jpg',
      intro:'Cỡ 300–350g/con, nhanh chín – tiện bữa thường ngày. Thịt ngọt, gạch vừa; rang me, hấp hay nấu lẩu đều hợp. Đặt là có ngay, giao nhanh tận nơi.',
      cta:{buy:'#main-wrapper',zalo:'https://zalo.me/0369794114',phone:'tel:+84369794114'}
    },
    {
      title:'Cua Yếm Vuông Gạch Vàng',
      price:'Liên hệ',
      labels:['cua','yếm vuông','gạch vàng'],
      mediaType:'image',
      media:'https://raw.githubusercontent.com/hpnam/haisan69/6/templateism/images/banner/crab-400x150.jpg',
      intro:'Yếm vuông chắc khoẻ, gạch vàng béo thơm – bày mâm sang trọng. Hấp giữ vị tự nhiên, rang me đậm đà, nấu lẩu ấm bụng. Cân đủ, cua khoẻ, đúng chất cua Cà Mau.',
      cta:{buy:'#main-wrapper',zalo:'https://zalo.me/0369794114',phone:'tel:+84369794114'}
    }
  ];

  // ====== RENDER ======
  function render(){
    const H=window.innerHeight;
    slidesEl.style.height=(products.length*H)+'px';
    slidesEl.innerHTML=''; dotsEl.innerHTML='';

    products.forEach((p,i)=>{
      const slide=document.createElement('section');
      slide.className='hs69-slide';
      slide.style.transform='translateY('+(i*H)+'px)';

      // Media
      const mediaWrap=document.createElement('div');
      mediaWrap.className='hs69-media';
      if(p.mediaType==='video'){
        const v=document.createElement('video'); v.src=p.media; v.playsInline=true; v.muted=true; v.loop=true; v.autoplay=true; v.preload='metadata';
        mediaWrap.appendChild(v);
      }else{
        const img=document.createElement('img'); img.src=p.media; img.alt=p.title; img.loading='lazy';
        mediaWrap.appendChild(img);
      }

      // Card
      const introId='intro-'+i;
      const needToggle=(p.intro||'').length>220;
      const card=document.createElement('div'); card.className='hs69-card';
      card.innerHTML=
        '<h3 class="hs69-title">'+p.title+'</h3>'+
        '<div class="hs69-meta"><span>'+p.price+'</span> · <span>Hải Sản 69</span></div>'+
        '<div class="hs69-badges">'+(p.labels||[]).map(t=>'<span class="hs69-badge">'+t+'</span>').join('')+'</div>'+
        '<p id="'+introId+'" class="hs69-intro '+(needToggle?'collapsed':'')+'">'+(p.intro||'')+'</p>'+
        (needToggle?'<button class="hs69-btn ghost" data-intro="'+introId+'">Xem thêm</button>':'')+
        '<div class="hs69-cta">'+
          '<a class="hs69-btn" href="'+p.cta.zalo+'" target="_blank" rel="noopener">Zalo</a>'+
          '<a class="hs69-btn" href="'+p.cta.phone+'">Gọi ngay</a>'+
          '<a class="hs69-btn primary" href="'+p.cta.buy+'">Xem chi tiết</a>'+
        '</div>'+
        '<div class="safe-bottom"></div>';

      slide.appendChild(mediaWrap); slide.appendChild(card); slidesEl.appendChild(slide);

      const dot=document.createElement('div'); dot.className='hs69-dot'+(i===0?' active':''); dotsEl.appendChild(dot);
    });
  }

  render();

  // ====== NAV STATE ======
  let index=0; const max=products.length-1;
  let startY=0, deltaY=0, isTouching=false, startTime=0;

  function updateDots(){[...dotsEl.children].forEach((d,i)=>d.classList.toggle('active', i===index));}
  function goto(i){
    index=Math.max(0, Math.min(max, i));
    slidesEl.style.transform='translateY('+(-index*window.innerHeight)+'px)';
    updateDots();
    document.querySelectorAll('.hs69-media video').forEach((v,vi)=>{ if(vi===index){v.play().catch(()=>{});} else {v.pause();} });
  }

  // Swipe
  function onTouchStart(e){isTouching=true; startY=e.touches[0].clientY; deltaY=0; startTime=Date.now();}
  function onTouchMove(e){if(!isTouching)return; e.preventDefault(); deltaY=e.touches[0].clientY-startY; const offset=-index*window.innerHeight+deltaY; slidesEl.style.transition='none'; slidesEl.style.transform='translateY('+offset+'px)';}
  function onTouchEnd(){if(!isTouching)return; isTouching=false; slidesEl.style.transition='transform .3s ease'; const elapsed=Date.now()-startTime; const threshold=80; const quick=elapsed<220&&Math.abs(deltaY)>30; if(deltaY<-threshold||(quick&&deltaY<0))goto(index+1); else if(deltaY>threshold||(quick&&deltaY>0))goto(index-1); else goto(index);}

  // Tap zones
  tapPrev.addEventListener('click', ()=>goto(index-1));
  tapNext.addEventListener('click', ()=>goto(index+1));

  // Open/Close
  function open(){ overlay.classList.add('open'); modal.classList.add('open'); body.style.overflow='hidden'; goto(index); document.addEventListener('keydown', onKey); viewport.addEventListener('wheel', onWheel, {passive:true}); }
  function close(){ overlay.classList.remove('open'); modal.classList.remove('open'); body.style.overflow=''; document.removeEventListener('keydown', onKey); viewport.removeEventListener('wheel', onWheel); }

  openBtn.addEventListener('click', open);
  closeBtn.addEventListener('click', close);
  overlay.addEventListener('click', close);

  // Touch listeners (LƯU Ý: touchmove không passive để preventDefault)
  viewport.addEventListener('touchstart', onTouchStart, {passive:true});
  viewport.addEventListener('touchmove',  onTouchMove,  {passive:false});
  viewport.addEventListener('touchend',   onTouchEnd,   {passive:true});

  // Keyboard + Wheel
  function onKey(e){
    if(!modal.classList.contains('open')) return;
    if(['ArrowDown','PageDown',' '].includes(e.key)){ e.preventDefault(); goto(index+1); }
    else if(['ArrowUp','PageUp'].includes(e.key)){ e.preventDefault(); goto(index-1); }
    else if(e.key==='Escape'){ e.preventDefault(); close(); }
  }
  let wheelLock=false;
  function onWheel(e){
    if(!modal.classList.contains('open')) return;
    if(wheelLock) return;
    wheelLock=true;
    if(e.deltaY>0) goto(index+1); else if(e.deltaY<0) goto(index-1);
    setTimeout(()=>wheelLock=false, 280);
  }

  // Toggle intro (xem thêm/thu gọn)
  slidesEl.addEventListener('click', (e)=>{
    const btn=e.target.closest('[data-intro]');
    if(!btn) return;
    const id=btn.getAttribute('data-intro');
    const el=document.getElementById(id);
    el.classList.toggle('collapsed');
    btn.textContent = el.classList.contains('collapsed') ? 'Xem thêm' : 'Thu gọn';
  });

  // Resize safety
  window.addEventListener('resize', ()=>{ slidesEl.style.height=(products.length*window.innerHeight)+'px'; goto(index); });
})();
