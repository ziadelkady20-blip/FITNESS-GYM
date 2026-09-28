(function(){
  const style=document.createElement('style');style.textContent=`
    .gym-live-status{position:relative;z-index:4;display:inline-flex;align-items:center;gap:10px;margin-bottom:4px;padding:9px 13px;border:1px solid rgba(255,255,255,.12);background:rgba(5,5,5,.55);backdrop-filter:blur(12px);border-radius:999px;text-transform:uppercase;letter-spacing:.12em}.gym-live-status small{display:block;color:#777;font-size:7px;letter-spacing:.18em}.gym-live-status b{display:inline-block;font-size:12px;margin-right:7px}.gym-live-status em{font-style:normal;color:#999;font-size:9px}.live-dot{width:8px;height:8px;border-radius:50%;background:#aaa;box-shadow:0 0 12px currentColor}.gym-live-status.busy .live-dot{background:#ff1616;color:#ff1616}.gym-live-status.medium .live-dot{background:#f3b21b;color:#f3b21b}.gym-live-status.quiet .live-dot{background:#42d17a;color:#42d17a}
    .offers-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-top:45px}.exclusive-card{border:1px solid var(--line);background:linear-gradient(145deg,#121212,#080808);overflow:hidden;position:relative}.offer-image{aspect-ratio:1.5;overflow:hidden;background:#0b0b0b}.offer-image img{width:100%;height:100%;object-fit:cover;display:block;transition:.5s var(--ease)}.exclusive-card:hover .offer-image img{transform:scale(1.04)}.offer-body{padding:22px}.offer-badge{display:inline-block;color:#fff;background:var(--red);padding:6px 8px;font-size:8px;font-weight:900;letter-spacing:.14em}.offer-body h3{font:900 34px Anton;margin:16px 0 8px}.offer-body p{color:#888;font-size:11px;line-height:1.7;min-height:38px}.offer-meta{display:flex;align-items:baseline;gap:10px;margin-top:16px}.offer-price{font:900 34px Anton;color:var(--red)}.offer-price small{font:900 10px Inter}.offer-old{text-decoration:line-through;color:#555;font-size:11px}.offer-expiry{color:#555;font-size:9px;letter-spacing:.1em;text-transform:uppercase}@media(max-width:900px){.offers-grid{grid-template-columns:1fr 1fr}}@media(max-width:620px){.gym-live-status{margin-top:5px}.offers-grid{grid-template-columns:1fr}.offer-body h3{font-size:30px}}
    .floating-fb{position:fixed;z-index:120;right:22px;bottom:92px;width:58px;height:58px;border-radius:50%;display:grid;place-items:center;background:#1877F2;color:#fff;box-shadow:0 12px 40px rgba(24,119,242,.28);transition:.35s var(--ease);text-decoration:none}.floating-fb:hover{transform:scale(1.08) translateY(-4px);box-shadow:0 16px 46px rgba(24,119,242,.38)}.floating-fb svg{width:28px;height:28px;fill:currentColor}@media(max-width:620px){.floating-fb{right:16px;bottom:84px;width:52px;height:52px}.floating-fb svg{width:25px;height:25px}}

    /* Language switcher */
    .language-switcher{display:inline-flex;align-items:center;gap:0;margin-left:auto;margin-right:18px;padding:3px;border:1px solid rgba(255,255,255,.14);background:rgba(10,10,10,.72);backdrop-filter:blur(14px);border-radius:999px;box-shadow:0 8px 30px rgba(0,0,0,.2)}
    .language-switcher button{border:0;background:transparent;color:#777;min-width:42px;height:30px;padding:0 11px;border-radius:999px;font:800 10px Inter,sans-serif;letter-spacing:.08em;cursor:pointer;transition:.25s ease}
    .language-switcher button:hover{color:#fff}
    .language-switcher button.active{background:var(--red);color:#fff;box-shadow:0 4px 15px rgba(255,22,22,.22)}
    .language-switcher .lang-divider{width:1px;height:15px;background:rgba(255,255,255,.12)}
    html.lang-ar body,.lang-ar{font-family:Inter,"Arial",sans-serif}
    html.lang-ar .nav-links,.lang-ar .nav-links{direction:rtl}
    html.lang-ar .hero-copy{text-align:right;margin-left:0;margin-right:7vw}
    html.lang-ar .hero-copy p{margin-right:0;margin-left:auto}
    html.lang-ar .hero-index{right:auto;left:5vw}
    html.lang-ar .hero-index b{margin-right:0;margin-left:8px}
    html.lang-ar .fg-actions{justify-content:flex-start;flex-direction:row-reverse}
    html.lang-ar .space-intro,.lang-ar .space-intro{direction:rtl}
    html.lang-ar .space-copy{margin-right:0;margin-left:auto}
    html.lang-ar .stats,.lang-ar .stats{direction:rtl}
    html.lang-ar .gallery-grid,.lang-ar .gallery-grid{direction:ltr}
    html.lang-ar .gallery-card span{left:auto;right:16px;text-align:right;direction:rtl}
    html.lang-ar .membership-head,.lang-ar .membership-head{direction:rtl}
    html.lang-ar .plans,.lang-ar .plans{direction:rtl}
    html.lang-ar .plan-card ul{direction:rtl}
    html.lang-ar .plan-card li{flex-direction:row-reverse}
    html.lang-ar .final-cta,.lang-ar .final-cta{direction:rtl}
    html.lang-ar .footer,.lang-ar .footer{direction:rtl}
    html.lang-ar .footer-bottom{text-align:right}
    html.lang-ar .gym-live-status{direction:rtl;text-align:right}
    html.lang-ar .gym-live-status b{margin-right:0;margin-left:7px}
    html.lang-ar .offer-body,.lang-ar .offer-body{direction:rtl;text-align:right}
    html.lang-ar .offer-meta{direction:rtl}
    html.lang-ar .offer-badge{letter-spacing:0}
    @media(max-width:1050px){.language-switcher{margin-left:auto;margin-right:12px}.site-nav{gap:8px}}
    @media(max-width:620px){.language-switcher{margin-left:auto;margin-right:7px;padding:2px}.language-switcher button{min-width:35px;height:28px;padding:0 8px;font-size:9px}.language-switcher .lang-divider{height:13px}.nav-cta{white-space:nowrap}.hero-copy{margin-right:0!important}.hero-index{left:18px!important;right:auto!important}}
  `;document.head.appendChild(style);

  const facebookUrl='https://www.facebook.com/share/14sgcfbPFvf/?mibextid=wwXIfr';
  function ensureFacebookButton(){
    if(!document.body||document.querySelector('.floating-fb'))return;
    const fb=document.createElement('a');
    fb.className='floating-fb';
    fb.href=facebookUrl;
    fb.target='_blank';
    fb.rel='noopener noreferrer';
    fb.setAttribute('aria-label','Facebook FITNESS GYM');
    fb.title='Facebook FITNESS GYM';
    fb.innerHTML='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M13.5 8.5V7c0-.7.3-1 1-1h1.5V3h-2.5C10.8 3 9 4.8 9 7.4v1.1H6.5v3H9V21h3.5v-9.5H15l.5-3h-3.5z"/></svg>';
    document.body.appendChild(fb);
  }

  const statusMap={quiet:{label:'QUIET',ar:'هادي',className:'quiet'},medium:{label:'MEDIUM',ar:'متوسط',className:'medium'},busy:{label:'BUSY',ar:'زحمة',className:'busy'}};
  const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

  const asset=u=>String(u||'');
  let lastSignature='';
  let requestInFlight=false;

  function statusHtml(status){
    const s=statusMap[status]||statusMap.medium;
    return `<div class="gym-live-status ${s.className}"><span class="live-dot"></span><span><small>GYM STATUS</small><b>${s.label}</b><em>${s.ar}</em></span></div>`;
  }

  function offerCard(o){
    const image=o.image?`<div class="offer-image"><img src="${esc(asset(o.image))}" alt="${esc(o.title)}" loading="lazy" decoding="async" fetchpriority="low"></div>`:'';
    const price=o.price?`<div class="offer-price">${esc(o.price)}<small> LE</small></div>`:'';
    const old=o.oldPrice?`<div class="offer-old">${esc(o.oldPrice)} LE</div>`:'';
    return `<article class="exclusive-card">${image}<div class="offer-body"><span class="offer-badge">EXCLUSIVE OFFER</span><h3>${esc(o.title)}</h3><p>${esc(o.description||'Limited-time offer from FITNESS GYM.')}</p><div class="offer-meta">${price}${old}</div>${o.expiresAt?`<small class="offer-expiry">Until ${esc(o.expiresAt)}</small>`:''}</div></article>`;
  }

  /* =========================
     ARABIC / ENGLISH LANGUAGE UI
     Arabic is the default on first visit.
     The user's choice is remembered on this device.
  ========================== */
  const languageNames={ar:'العربية',en:'English'};
  const translations={
    ar:{
      nav:['التجربة','مواعيد العمل','العضويات','المعرض'],
      join:'اشترك الآن',
      eyebrow:'FITNESS GYM CLUB · الفيوم',
      heroTitle:'اتمرّن<br><span>بشكل مختلف.</span>',
      heroText:'تمرّن في مساحة حقيقية مصممة للانضباط والقوة والاستمرارية. اكتشف الجيم، شاهد المكان واختر العضوية المناسبة لروتينك.',
      explore:'استكشف العضويات ←',
      call:'اتصل 01033659722',
      heroIndex:'ادخل التجربة',
      marquee1:'اتمرّن بقوة <b>///</b> حافظ على الاستمرارية <b>///</b> طوّر نفسك <b>///</b> FITNESS GYM CLUB <b>///</b> اتمرّن بقوة <b>///</b> حافظ على الاستمرارية <b>///</b> طوّر نفسك <b>///</b> FITNESS GYM CLUB <b>///</b>',
      expKicker:'02 / التجربة',expHeading:'مش مجرد<br><em>جيم.</em>',
      expCopy:'تجربة بصرية مبنية حول المكان الحقيقي لـ FITNESS GYM. الصور مدمجة داخل التصميم لإظهار المكان ومعداته بشكل واضح.',
      stats:["دخول الرجال","مواعيد السيدات","مستويات العضوية"],
      galleryKicker:'03 / المكان',galleryHeading:'شوف<br><em>الجيم الحقيقي.</em>',galleryNote:'صور حقيقية من الجيم · كل الصور المرفوعة مدمجة داخل التجربة.',
      gallery:['منطقة التمرين الرئيسية','منطقة التدريب','منطقة المرايا','الأوزان الحرة','حامل الدمبلز','منطقة المعدات','محطة الكابل','مدخل الجيم','منطقة القوة','أرضية التدريب','أجهزة القوة','واجهة الجيم','المنطقة الداخلية','منطقة الأجهزة','المنطقة الوظيفية','منطقة الكارديو','الاستقبال'],
      hoursKicker:'04 / مواعيد العمل',hoursHeading:'وقتك.<br><em>قواعدك.</em>',
      men:'رجال',women:'سيدات',daily:'يوميًا',menText:'مفتوح كل يوم طوال اليوم.',womenText:'مواعيد تدريب مخصصة للسيدات.',
      marquee2:'انضباط <b>///</b> قوة <b>///</b> استمرارية <b>///</b> تطور <b>///</b> انضباط <b>///</b> قوة <b>///</b> استمرارية <b>///</b> تطور <b>///</b>',
      membershipKicker:'05 / العضويات',membershipHeading:'اختار<br><em>مستواك.</em>',membershipCopy:'اختار نظام العضوية المناسب ليومك وروتين تمرينك. الأسعار المعروضة هي الأسعار المسجلة للجيم.',
      frequencies:['مرتين أسبوعيًا','3 أيام أسبوعيًا','4 أيام أسبوعيًا','5 أيام أسبوعيًا','كل يوم · جلسات بلا حدود'],
      periods:['شهر','شهرين','3 شهور','6 شهور','12 شهر'],ask:'اسأل عن',
      finalKicker:'06 / جاهز؟',finalHeading:'خد<br><span>الخطوة.</span>',finalText:'عندك سؤال عن العضويات أو المواعيد أو الاشتراك؟ تواصل مباشرة مع FITNESS GYM.',finalButton:'واتساب 01033659722 ←',
      hoursLabel:'مواعيد العمل',contactLabel:'تواصل معنا',whatsapp:'واتساب',footer:'© FITNESS GYM CLUB · جميع الحقوق محفوظة.',
      status:'حالة الجيم',exclusive:'عرض حصري',until:'حتى',limited:'عرض لفترة محدودة من FITNESS GYM.'
    },
    en:{
      nav:['Experience','Hours','Memberships','Gallery'],join:'Join Now',eyebrow:'FITNESS GYM CLUB · FAYOUM',heroTitle:'TRAIN<br><span>DIFFERENT.</span>',heroText:'Train in a real space built for discipline, strength and consistency. Explore the club, see the facility and choose the membership that fits your routine.',explore:'Explore Memberships →',call:'Call 01033659722',heroIndex:'ENTER THE EXPERIENCE',
      marquee1:'TRAIN HARD <b>///</b> STAY CONSISTENT <b>///</b> BUILD YOURSELF <b>///</b> FITNESS GYM CLUB <b>///</b> TRAIN HARD <b>///</b> STAY CONSISTENT <b>///</b> BUILD YOURSELF <b>///</b> FITNESS GYM CLUB <b>///</b>',
      expKicker:'02 / THE EXPERIENCE',expHeading:'NOT JUST<br><em>A GYM.</em>',expCopy:'A visual experience built around the real FITNESS GYM space. The photography is integrated into the layout to showcase the facility and equipment clearly.',stats:["Men's access","Women's hours","Membership levels"],galleryKicker:'03 / THE SPACE',galleryHeading:'SEE THE<br><em>REAL GYM.</em>',galleryNote:'Real club photography · All supplied images integrated into the experience.',
      gallery:['Main training floor','Training area','Mirror zone','Free weights','Dumbbell rack','Equipment floor','Cable station','Club entrance','Strength zone','Training floor','Strength machine','Club exterior','Interior','Machine zone','Functional area','Cardio area','Reception'],
      hoursKicker:'04 / OPENING HOURS',hoursHeading:'YOUR TIME.<br><em>YOUR RULES.</em>',men:'MEN',women:'WOMEN',daily:'DAILY',menText:'Open every day, all day.',womenText:'Women-only training hours.',marquee2:'DISCIPLINE <b>///</b> STRENGTH <b>///</b> CONSISTENCY <b>///</b> PROGRESS <b>///</b> DISCIPLINE <b>///</b> STRENGTH <b>///</b> CONSISTENCY <b>///</b> PROGRESS <b>///</b>',
      membershipKicker:'05 / MEMBERSHIPS',membershipHeading:'CHOOSE YOUR<br><em>LEVEL.</em>',membershipCopy:'Choose the membership plan that fits your schedule and training routine. Prices shown are the gym\'s registered membership prices.',frequencies:['2 DAYS WEEKLY','3 DAYS WEEKLY','4 DAYS WEEKLY','5 DAYS WEEKLY','EVERY DAY · ∞ SESSIONS'],periods:['1 Month','2 Months','3 Months','6 Months','12 Months'],ask:'Ask about',finalKicker:'06 / READY?',finalHeading:'MAKE<br><span>THE MOVE.</span>',finalText:'Questions about memberships, hours or joining? Talk directly to FITNESS GYM.',finalButton:'WhatsApp 01033659722 →',hoursLabel:'HOURS',contactLabel:'CONTACT',whatsapp:'WhatsApp',footer:'© FITNESS GYM CLUB · All rights reserved.',status:'GYM STATUS',exclusive:'EXCLUSIVE OFFER',until:'Until',limited:'Limited-time offer from FITNESS GYM.'
    }
  };

  const planNames=['Prime','Matrix','Elite','Legend','Unlimited'];
  const planKeys=['prime','matrix','elite','legend','unlimited'];

  function setLanguage(lang){
    const next=lang==='en'?'en':'ar';
    localStorage.setItem('fitness-gym-language',next);
    document.documentElement.lang=next;
    document.documentElement.dir=next==='ar'?'rtl':'ltr';
    document.documentElement.classList.toggle('lang-ar',next==='ar');
    document.body.classList.toggle('lang-ar',next==='ar');
    const t=translations[next];
    const nav=document.querySelectorAll('.nav-links a');
    t.nav.forEach((v,i)=>{if(nav[i])nav[i].textContent=v});
    const set=(sel,val)=>{const el=document.querySelector(sel);if(el)el.innerHTML=val};
    set('.nav-cta',t.join);set('.hero-copy .fg-eyebrow',t.eyebrow);set('.hero-copy h1',t.heroTitle);set('.hero-copy p',t.heroText);set('.hero-copy .fg-actions .primary',t.explore);set('.hero-copy .fg-actions a:not(.primary)',t.call);set('.hero-index',`<b>01</b> ${t.heroIndex}`);
    const marquees=document.querySelectorAll('.fg-marquee-track');if(marquees[0])marquees[0].innerHTML=t.marquee1;if(marquees[1])marquees[1].innerHTML=t.marquee2;
    set('#experience .fg-kicker',t.expKicker);set('#experience .fg-heading',t.expHeading);set('#experience .space-copy',t.expCopy);
    document.querySelectorAll('.stats .stat span').forEach((el,i)=>{if(t.stats[i])el.textContent=t.stats[i]});
    set('#gallery .fg-kicker',t.galleryKicker);set('#gallery .fg-heading',t.galleryHeading);set('.gallery-note',t.galleryNote);
    document.querySelectorAll('.gallery-card span').forEach((el,i)=>{if(t.gallery[i])el.textContent=t.gallery[i]});
    set('#hours .fg-kicker',t.hoursKicker);set('#hours .fg-heading',t.hoursHeading);const cards=document.querySelectorAll('.hour-card');if(cards[0]){cards[0].querySelector('.fg-kicker').textContent=t.men;cards[0].querySelector('p').textContent=t.menText}if(cards[1]){cards[1].querySelector('.fg-kicker').textContent=t.women;cards[1].querySelector('h3').textContent=t.daily;cards[1].querySelector('p').textContent=t.womenText}
    set('#memberships .membership-head .fg-kicker',t.membershipKicker);set('#memberships .membership-head .fg-heading',t.membershipHeading);set('#memberships .membership-head p',t.membershipCopy);
    document.querySelectorAll('.plan-card').forEach((card,i)=>{const freq=card.querySelector('.frequency');if(freq&&t.frequencies[i])freq.textContent=t.frequencies[i];card.querySelectorAll('li').forEach((li,j)=>{const b=li.querySelector('b');if(b&&t.periods[j])li.childNodes[0].nodeValue=t.periods[j]+' ';});const cta=card.querySelector('.plan-cta');if(cta)cta.textContent=`${t.ask} ${planNames[i]}`});
    set('.final-cta .fg-kicker',t.finalKicker);set('.final-cta h2',t.finalHeading);set('.final-cta p',t.finalText);set('.final-cta .fg-btn',t.finalButton);
    const footerPs=document.querySelectorAll('.footer p');if(footerPs[1])footerPs[1].innerHTML=`<strong style="color:#fff">${t.hoursLabel}</strong><br>${t.men} · 24 / 7<br>${t.women} · 8 AM to 10 PM`;if(footerPs[2])footerPs[2].innerHTML=`<strong style="color:#fff">${t.contactLabel}</strong><br><a href="tel:01033659722">01033659722</a><br><a href="https://wa.me/201033659722" target="_blank" rel="noopener">${t.whatsapp}</a>`;const fb=document.querySelector('.footer-bottom');if(fb)fb.textContent=t.footer;
    document.title=next==='ar'?'FITNESS GYM — اتمرّن بشكل مختلف.':'FITNESS GYM — Train Different.';
    const meta=document.querySelector('meta[name="description"]');if(meta)meta.content=next==='ar'?'FITNESS GYM Club — جيم مميز في الفيوم. الرجال 24/7 والسيدات من 8 صباحًا حتى 10 مساءً.':'FITNESS GYM Club — premium training in Fayoum. Men 24/7. Women 8 AM to 10 PM.';
    const status=document.querySelector('.gym-live-status');if(status){status.querySelector('small').textContent=t.status;const key=[...status.classList].find(c=>['quiet','medium','busy'].includes(c));const s=statusMap[key]||statusMap.medium;status.querySelector('b').textContent=next==='ar'?s.ar:s.label;status.querySelector('em').textContent=next==='ar'?'':s.ar}
    document.querySelectorAll('.language-switcher button').forEach(btn=>btn.classList.toggle('active',btn.dataset.lang===next));
  }

  function ensureLanguageSwitcher(){
    if(!document.body||document.querySelector('.language-switcher'))return;
    const nav=document.querySelector('.site-nav');if(!nav)return;
    const cta=nav.querySelector('.nav-cta');
    const wrap=document.createElement('div');wrap.className='language-switcher';wrap.setAttribute('aria-label','Language');
    wrap.innerHTML='<button type="button" data-lang="ar" aria-label="العربية">AR</button><span class="lang-divider"></span><button type="button" data-lang="en" aria-label="English">EN</button>';
    wrap.addEventListener('click',e=>{const btn=e.target.closest('button[data-lang]');if(btn)setLanguage(btn.dataset.lang)});
    if(cta)nav.insertBefore(wrap,cta);else nav.appendChild(wrap);
  }

  function applyLanguage(){ensureLanguageSwitcher();setLanguage(localStorage.getItem('fitness-gym-language')||'ar')}

  function render(data){
    ensureFacebookButton();
    const hero=document.querySelector('.hero-copy');
    if(hero){let status=hero.querySelector('.gym-live-status');const next=statusHtml(data.status);if(!status){hero.insertAdjacentHTML('afterbegin',next)}else{status.outerHTML=next}}
    const gallery=document.querySelector('.gallery-grid');
    if(gallery&&Array.isArray(data.gallery))gallery.innerHTML=data.gallery.map(g=>`<figure class="gallery-card"><img src="${esc(asset(g.image))}" alt="${esc(g.title)}" loading="lazy" decoding="async" fetchpriority="low"><span>${esc(g.title)}</span></figure>`).join('');
    let section=document.getElementById('exclusive-offers');
    const offers=Array.isArray(data.offers)?data.offers.filter(o=>o.active!==false):[];
    if(offers.length){const memberships=document.getElementById('memberships');if(!section&&memberships){section=document.createElement('section');section.id='exclusive-offers';section.className='fg-section';section.innerHTML=`<div class="reveal"><div class="fg-kicker">05.5 / EXCLUSIVE</div><h2 class="fg-heading">EXCLUSIVE<br><em>OFFERS.</em></h2></div><div class="offers-grid reveal"></div>`;memberships.before(section)}if(section){const grid=section.querySelector('.offers-grid');if(grid)grid.innerHTML=offers.map(offerCard).join('');section.querySelectorAll('.reveal').forEach(e=>e.classList.add('in'))}}else if(section){section.remove()}
    applyLanguage();
  }

  async function boot(force=false){
    if(requestInFlight||document.visibilityState==='hidden')return;requestInFlight=true;
    try{const res=await fetch(`/api/site-data?t=${Date.now()}`,{cache:'no-store',headers:{'Cache-Control':'no-cache'}});if(!res.ok)return;const data=await res.json();const signature=JSON.stringify(data);if(force||signature!==lastSignature){lastSignature=signature;render(data)}else{ensureFacebookButton();ensureLanguageSwitcher()}}catch(e){console.warn('CMS data unavailable',e);ensureFacebookButton();ensureLanguageSwitcher()}finally{requestInFlight=false}
  }

  function start(){ensureFacebookButton();ensureLanguageSwitcher();applyLanguage();boot(true);setInterval(()=>boot(),2000);document.addEventListener('visibilitychange',()=>{if(document.visibilityState==='visible')boot(true)});}
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',start,{once:true});else start();
})();
