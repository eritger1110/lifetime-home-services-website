(function(){
  const PHONE_DISPLAY = "(833) 941-6888";
  const PHONE_E164 = "+18339416888";
  // normalize any tel: links
  document.querySelectorAll('a[href^="tel:"]').forEach(a=>{
    a.setAttribute('href', 'tel:'+PHONE_E164);
    if(!a.textContent.trim() || /\(?\d{3}\)?[-.\s]\d{3}[-.\s]\d{4}/.test(a.textContent)) {
      a.textContent = PHONE_DISPLAY;
    }
  });
  // elements that should show phone
  document.querySelectorAll('[data-phone], .phone, .phone-link').forEach(el=>{
    if(el.tagName.toLowerCase()==='a'){
      el.setAttribute('href', 'tel:'+PHONE_E164);
      el.textContent = PHONE_DISPLAY;
    } else {
      el.textContent = PHONE_DISPLAY;
    }
  });
})();
