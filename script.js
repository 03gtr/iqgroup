const I18N={
en:{boot:"SECURE DIGITAL INTERFACE / INITIALIZING",from:"FROM IRAQ",smarter:"TO A SMARTER TOMORROW",built:"BUILT FOR A",better:"BETTER TOMORROW",people:"PEOPLE",ideas:"IDEAS",solutions:"SOLUTIONS",technology:"TECHNOLOGY",business:"BUSINESS",software:"SOFTWARE",andmore:"AND MORE",member:"MEMBER",access:"ACCESS",possibilities:"ALL POSSIBILITIES",auto:"IDENTITY SCAN COMPLETE",scroll:"SCROLL TO EXPLORE",confirmed:"IDENTITY CONFIRMED",welcome:"WELCOME TO",tagline:"MORE THAN SOLUTIONS.",wa:"Message IQ Group support",website:"OUR WEBSITE",whatwe:"WHAT WE DO",headline:"WE BUILD\\nWHATEVER THE IDEA NEEDS.",intro:"Software, business systems, AI, websites, automation and digital experiences — designed as real products, not just concepts.",s1t:"SOFTWARE DEVELOPMENT",s1:"Desktop, mobile and web applications built around the actual workflow.",s2t:"BUSINESS SYSTEMS",s2:"Sales, inventory, subscriptions, administration, operations and custom workflows.",s3t:"AI & AUTOMATION",s3:"AI assistants, intelligent features, automation and connected business processes.",s4t:"CLOUD & INTEGRATION",s4:"Cloud backends, APIs, authentication, databases and third-party integrations.",s5t:"WEBSITES & DIGITAL EXPERIENCES",s5:"Landing pages, QR experiences, smart business cards and interactive brand interfaces.",s6t:"E-COMMERCE & RETAIL",s6:"Online stores, retail platforms, product catalogs, pricing and operational controls.",s7t:"CUSTOM PRODUCTS",s7:"From a small tool to a complete production platform — architecture, build and delivery.",s8t:"CONSULTING & DIGITAL TRANSFORMATION",s8:"We turn business problems and ideas into practical digital systems.",ourproducts:"IQ GROUP PRODUCTS",ready:"HAVE AN IDEA?",build:"LET'S BUILD IT.",endtext:"Tell us what you need. We design the system, build it and turn it into something you can actually use.",talk:"TALK TO IQ GROUP ↗",site:"VISIT IQ-GROUP.APP ↗",footer:"SAME VISION. A BRIGHTER TOMORROW."},
ar:{boot:"واجهة رقمية آمنة / جارِ التهيئة",from:"من العراق",smarter:"إلى غدٍ أذكى",built:"صُمم من أجل",better:"غدٍ أفضل",people:"الناس",ideas:"الأفكار",solutions:"الحلول",technology:"التكنولوجيا",business:"الأعمال",software:"البرمجيات",andmore:"والمزيد",member:"عضو",access:"الوصول",possibilities:"كل الإمكانيات",auto:"اكتمل التحقق من الهوية",scroll:"اسحب للاستكشاف",confirmed:"تم تأكيد الهوية",welcome:"مرحباً بك في",tagline:"أكثر من مجرد حلول.",wa:"تواصل مع دعم IQ Group",website:"موقعنا",whatwe:"ماذا نقدم",headline:"نبني\\nما تحتاجه فكرتك.",intro:"برمجيات، أنظمة أعمال، ذكاء اصطناعي، مواقع، أتمتة وتجارب رقمية — نحول الفكرة إلى منتج حقيقي قابل للاستخدام.",s1t:"تطوير البرمجيات",s1:"تطبيقات سطح المكتب والموبايل والويب مصممة حسب طريقة عملك.",s2t:"أنظمة الأعمال",s2:"المبيعات، المخزون، الاشتراكات، الإدارة، العمليات وسير العمل المخصص.",s3t:"الذكاء الاصطناعي والأتمتة",s3:"مساعدات ذكية، ميزات AI، أتمتة وربط العمليات.",s4t:"السحابة والتكامل",s4:"خدمات سحابية، APIs، تسجيل الدخول، قواعد البيانات والتكاملات.",s5t:"المواقع والتجارب الرقمية",s5:"صفحات هبوط، تجارب QR، بطاقات أعمال ذكية وواجهات تفاعلية.",s6t:"التجارة الإلكترونية والريتيل",s6:"متاجر إلكترونية، كتالوجات، تسعير وأنظمة تشغيل وإدارة.",s7t:"منتجات مخصصة",s7:"من أداة بسيطة إلى منصة إنتاج متكاملة — هندسة وبناء وتسليم.",s8t:"الاستشارات والتحول الرقمي",s8:"نحوّل مشاكل العمل والأفكار إلى أنظمة رقمية عملية.",ourproducts:"منتجات IQ Group",ready:"عندك فكرة؟",build:"خلينا نبنيها.",endtext:"احچي لنا شتحتاج. نصمم النظام ونبنيه ونحوله إلى شيء تستخدمه فعلياً.",talk:"تواصل مع IQ Group ↗",site:"زيارة iq-group.app ↗",footer:"نفس الرؤية. غدٌ أكثر إشراقاً."}
};

const params=new URLSearchParams(location.search);
const saved=localStorage.getItem("iqg-lang");
const browser=(navigator.language||"en").toLowerCase();
let lang=params.get("lang")||saved||(browser.startsWith("ar")?"ar":"en");
if(!I18N[lang]) lang="en";

function applyLang(){
  document.documentElement.lang=lang;
  document.documentElement.dir=lang==="ar"?"rtl":"ltr";
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const v=I18N[lang][el.dataset.i18n];
    if(v!==undefined) el.innerHTML=v.replace(/\n/g,"<br>");
  });
  document.querySelectorAll(".lang-switch button").forEach(b=>b.classList.toggle("active",b.dataset.lang===lang));
  localStorage.setItem("iqg-lang",lang);
}
applyLang();

document.querySelectorAll(".lang-switch button").forEach(b=>b.addEventListener("click",()=>{
  lang=b.dataset.lang; applyLang();
}));

window.addEventListener("load",()=>{
  setTimeout(()=>document.getElementById("boot").classList.add("hide"),900);
  setTimeout(()=>document.getElementById("identity").classList.add("visible"),2850);
  setTimeout(()=>document.getElementById("services").classList.add("visible"),3300);
  setTimeout(()=>document.querySelector(".end-section").classList.add("visible"),3900);
});

const observer=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("visible")});
},{threshold:.12});
document.querySelectorAll(".reveal").forEach(x=>observer.observe(x));

document.getElementById("cardStage").addEventListener("click",()=>{
  document.getElementById("identity").scrollIntoView({behavior:"smooth"});
});

window.addEventListener("scroll",()=>{
  const y=scrollY;
  const card=document.getElementById("xpsCard");
  if(card && y<innerHeight) card.style.transform=`rotateX(${5+y*.015}deg) rotateZ(${-2+y*.003}deg) translateY(${Math.min(y*.16,35)}px) scale(${Math.max(.94,1-y*.00008)})`;
});
