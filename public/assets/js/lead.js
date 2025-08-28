document.addEventListener('DOMContentLoaded', () => {
  const qs = new URLSearchParams(location.search);
  const set = (n,v) => { 
    const el = document.querySelector(`[name="${n}"]`); 
    if (el) el.value = v || ''; 
  };
  
  // Populate UTM and tracking fields
  set('URL__c', location.href);
  set('utm_source__c', qs.get('utm_source'));
  set('utm_medium__c', qs.get('utm_medium'));
  set('utm_campaign__c', qs.get('utm_campaign'));
  set('gclid__c', qs.get('gclid'));
  
  // Set referrer if available
  if (document.referrer) {
    set('referrer__c', document.referrer);
  }
  
  // Track form submissions for analytics
  const forms = document.querySelectorAll('form');
  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      // Track lead submission event
      if (typeof gtag !== 'undefined') {
        gtag('event', 'lead_submit', {
          event_category: 'Lead Generation',
          event_label: 'Contact Form',
          value: 1
        });
      }
      
      // Track Facebook Pixel if available
      if (typeof fbq !== 'undefined') {
        fbq('track', 'Lead');
      }
      
      // Basic form validation
      const requiredFields = form.querySelectorAll('[required]');
      let isValid = true;
      
      requiredFields.forEach(field => {
        if (!field.value.trim()) {
          field.classList.add('error');
          isValid = false;
        } else {
          field.classList.remove('error');
        }
      });
      
      // Email validation
      const emailFields = form.querySelectorAll('input[type="email"]');
      emailFields.forEach(field => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (field.value && !emailRegex.test(field.value)) {
          field.classList.add('error');
          isValid = false;
        }
      });
      
      // Phone validation (basic)
      const phoneFields = form.querySelectorAll('input[type="tel"]');
      phoneFields.forEach(field => {
        const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
        const cleanPhone = field.value.replace(/\D/g, '');
        if (field.value && cleanPhone.length < 10) {
          field.classList.add('error');
          isValid = false;
        }
      });
      
      if (!isValid) {
        e.preventDefault();
        const firstError = form.querySelector('.error');
        if (firstError) {
          firstError.focus();
          firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }
    });
  });
  
  // Anti-spam honeypot check
  const honeypots = document.querySelectorAll('input[name="website"], input[name="url"]');
  honeypots.forEach(honeypot => {
    honeypot.style.display = 'none';
    honeypot.setAttribute('tabindex', '-1');
    honeypot.setAttribute('autocomplete', 'off');
  });
  
  // Phone number formatting
  const phoneInputs = document.querySelectorAll('input[type="tel"]');
  phoneInputs.forEach(input => {
    input.addEventListener('input', (e) => {
      let value = e.target.value.replace(/\D/g, '');
      if (value.length >= 6) {
        value = `(${value.slice(0,3)}) ${value.slice(3,6)}-${value.slice(6,10)}`;
      } else if (value.length >= 3) {
        value = `(${value.slice(0,3)}) ${value.slice(3)}`;
      }
      e.target.value = value;
    });
  });
});

