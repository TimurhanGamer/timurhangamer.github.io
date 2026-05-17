/* ============================================
   MERIDYEN ELEKTRIK — Refined Industrial Luxury
   ============================================ */

(function loadFontsAndStyles() {
  if (!document.getElementById('custom-fonts')) {
    const link = document.createElement('link');
    link.id = 'custom-fonts';
    link.rel = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;700&family=Sora:wght@400;600;800&display=swap';
    document.head.appendChild(link);
  }

  if (window.tailwind) {
    window.tailwind.config = {
      theme: {
        extend: {
          fontFamily: {
            sans: ['Outfit', 'sans-serif'],
            display: ['Sora', 'sans-serif'],
          },
          colors: {
            brand: {
              bg: '#050507',
              surface: '#0F0F12',
              text: '#F8FAFC',
              muted: '#64748B',
              border: '#1E1E24',
              accent: '#EAB308',
              accentHover: '#FACC15',
              wa: '#25D366',
            }
          }
        }
      }
    };
  }

  if (!document.getElementById('base-styles')) {
    const style = document.createElement('style');
    style.id = 'base-styles';
    style.innerHTML = `
      body { background-color: #050507; color: #F8FAFC; overflow-x: hidden; }
      .reveal { opacity: 0; transform: translateY(20px); transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1); }
      .reveal.visible { opacity: 1; transform: translateY(0); }
      .glass-nav { background: rgba(5, 5, 7, 0.9); backdrop-filter: blur(20px); border-bottom: 1px solid rgba(255,255,255,0.05); }
      .input-field { background: #0A0A0E; border: 1px solid #1E1E24; transition: all 0.3s; color: #FFFFFF; width: 100%; border-radius: 6px; padding: 14px 18px; }
      .input-field:focus { border-color: #EAB308; outline: none; background: #000000; box-shadow: 0 0 0 4px rgba(234, 179, 8, 0.05); }
      .wa-float { position: fixed; bottom: 2rem; right: 2rem; z-index: 100; width: 60px; height: 60px; background: #25D366; color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 10px 30px rgba(37, 211, 102, 0.3); transition: transform 0.3s; }
      .wa-float:hover { transform: scale(1.1); }
      .bg-text { position: absolute; font-family: 'Sora'; font-weight: 800; color: rgba(255,255,255,0.02); pointer-events: none; z-index: 0; text-transform: uppercase; white-space: nowrap; line-height: 1; }
      
      /* Dynamic Modal Styling */
      .modal-overlay { background: rgba(5, 5, 7, 0.85); backdrop-filter: blur(12px); transition: all 0.4s ease; opacity: 0; pointer-events: none; }
      .modal-overlay.active { opacity: 1; pointer-events: auto; }
      .modal-box { transform: scale(0.95) translateY(20px); transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1); }
      .modal-overlay.active .modal-box { transform: scale(1) translateY(0); }
      .pulse-success { animation: pulseSuccess 2.5s infinite; }
      @keyframes pulseSuccess {
        0% { box-shadow: 0 0 0 0 rgba(234, 179, 8, 0.4); }
        70% { box-shadow: 0 0 0 12px rgba(234, 179, 8, 0); }
        100% { box-shadow: 0 0 0 0 rgba(234, 179, 8, 0); }
      }
    `;
    document.head.appendChild(style);
  }
})();

const App = {
  icons: {
    Zap: `<svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>`,
    WhatsApp: `<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>`,
    Phone: `<svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>`,
    Mail: `<svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>`
  }
};

const Templates = {
  anasayfa: () => `
    <header class="pt-48 pb-32 relative overflow-hidden flex items-center min-h-[90vh]">
      <div class="bg-text top-40 -left-20 text-[20vw] opacity-30">Meridyen</div>
      <div class="container mx-auto px-6 relative z-10">
        <div class="max-w-4xl reveal">
          <div class="inline-flex items-center gap-2 px-3 py-1 bg-brand-accent/5 border border-brand-accent/20 rounded text-brand-accent text-[10px] font-bold uppercase tracking-[0.4em] mb-10">
             7/24 İstanbul Elektrik Servisi
          </div>
          <h1 class="font-display text-5xl md:text-8xl font-extrabold leading-[1.05] mb-10 text-white tracking-tighter uppercase">
            İSTANBUL'UN <br><span class="text-brand-accent italic font-normal text-6xl md:text-8xl">ELEKTRİK USTASI.</span>
          </h1>
          <p class="text-xl text-brand-muted mb-12 max-w-2xl leading-relaxed font-light">
            Eviniz ve iş yeriniz için 20 yıllık Meridyen Elektrik tecrübesiyle dürüst, hızlı ve garantili teknik servis hizmeti sağlıyoruz.
          </p>
          <div class="flex flex-wrap gap-6 items-center">
            <a href="#servis-talebi" class="px-10 py-5 bg-brand-accent text-black font-bold uppercase tracking-widest text-[11px] shadow-2xl shadow-brand-accent/10 transition-all hover:bg-white">Hızlıca Teklif Al</a>
            <a href="https://wa.me/905319159858" class="px-10 py-5 border border-brand-wa text-brand-wa font-bold uppercase tracking-widest text-[11px] hover:bg-brand-wa hover:text-black transition-all">WhatsApp İle Fiyat Al</a>
          </div>
        </div>
      </div>
    </header>

    <section class="py-32 bg-brand-surface border-y border-brand-border">
      <div class="container mx-auto px-6">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          ${[
      { title: 'Arıza & Onarım', desc: 'Ev ve iş yerlerindeki tüm elektrik arızalarına anında ve güvenli müdahale.' },
      { title: 'Sigorta Pano', desc: 'Sigorta panolarınızı modern standartlara ve tam güvenliğe taşıyoruz.' },
      { title: 'Güneş Panelleri', desc: 'Güneş enerji sistemleri için profesyonel kurulum ve entegrasyon.' }
    ].map(s => `
            <div class="reveal">
              <div class="text-brand-accent mb-6 flex justify-center">${App.icons.Zap}</div>
              <h3 class="text-lg font-bold mb-4 uppercase tracking-widest text-white">${s.title}</h3>
              <p class="text-brand-muted text-sm leading-relaxed">${s.desc}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `,

  hakkimizda: () => `
    <section class="pt-56 pb-32 relative">
      <div class="bg-text top-40 right-[-10vw] text-[15vw] opacity-20">20 Yıl</div>
      <div class="container mx-auto px-6 relative z-10">
        <div class="max-w-4xl reveal">
          <h1 class="text-6xl md:text-9xl font-extrabold mb-16 tracking-tighter italic leading-none">Hakkımızda.</h1>
          <div class="space-y-10 text-xl text-brand-muted leading-relaxed font-light">
            <p>2004 yılında İstanbul'da temelleri atılan Meridyen Elektrik, bugün sektörün en güvenilir teknik servis ağlarından birine sahiptir. 20 yıldır tek amacımız; elektriği sadece bir ihtiyaç değil, bir güvenlik meselesi olarak ele almak oldu.</p>
            <p>Siemens, Schneider ve Viko gibi dünya devlerinin teknik standartlarını, Türk ustalığının samimiyetiyle birleştiriyoruz. Her işimizde 1 yıl garanti vererek, ardımızda sadece tamir edilmiş bir priz değil, kazanılmış bir dost bırakıyoruz.</p>
            <p>Bugün İstanbul'un her iki yakasında bulunan gezici servis ağımızla, adresiniz neresi olursa olsun en kısa sürede kapınızdayız. İşleme başlamadan önce net fiyat bilgisi veriyor, onayınız olmadan tek bir kabloya dokunmuyoruz.</p>
          </div>
        </div>
      </div>
    </section>
  `,

  'servis-talebi': () => `
    <section class="pt-56 pb-32">
      <div class="container mx-auto px-6">
        <div class="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 reveal">
          <div>
            <h1 class="text-6xl md:text-8xl font-extrabold mb-10 tracking-tighter italic leading-none text-white">Teklif Al.</h1>
            <p class="text-2xl text-brand-muted mb-12 font-light leading-relaxed">Formu doldurduktan sonra en geç 60 dakika içinde teknik ekibimiz sizi arayarak net fiyatı iletecektir.</p>
            <div class="p-10 border border-brand-wa/30 bg-brand-wa/5 rounded-xl">
               <div class="flex items-center gap-4 mb-6">
                  <div class="w-12 h-12 bg-brand-wa rounded-full flex items-center justify-center text-black">${App.icons.WhatsApp.replace('w-6 h-6', 'w-8 h-8')}</div>
                  <h4 class="text-brand-wa font-bold uppercase tracking-widest text-xs">WhatsApp Hızlı Destek</h4>
               </div>
               <p class="text-white text-lg mb-10 font-light leading-relaxed">Arızanın fotoğrafını göndererek WhatsApp üzerinden 5 dakikada fiyat alabilirsiniz.</p>
               <a href="https://wa.me/905319159858" class="inline-flex px-8 py-4 bg-brand-wa text-black font-bold text-xs tracking-widest uppercase hover:bg-white transition-all">WHATSAPP İLE YAZ &rarr;</a>
            </div>
          </div>
          <div class="bg-brand-surface p-10 md:p-14 border border-brand-border rounded-xl shadow-2xl">
            <form id="contactForm" class="space-y-8">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div><label class="block text-[10px] font-bold uppercase tracking-[0.5em] text-slate-500 mb-3">Ad Soyad</label><input type="text" class="input-field" placeholder="Örn: Ahmet Y." required></div>
                <div><label class="block text-[10px] font-bold uppercase tracking-[0.5em] text-slate-500 mb-3">Telefon</label><input type="tel" class="input-field" placeholder="05XX" required></div>
              </div>
              <div><label class="block text-[10px] font-bold uppercase tracking-[0.5em] text-slate-500 mb-3">Talep Detayı</label><textarea class="input-field h-32 resize-none" placeholder="Sorununuzu kısaca anlatın..." required></textarea></div>
              <button type="submit" class="w-full py-5 bg-brand-accent text-black font-bold uppercase tracking-widest text-[11px] hover:bg-white transition-all">TALEBİ GÖNDER</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  `,

  iletisim: () => `
    <section class="pt-56 pb-32 relative min-h-screen">
      <div class="bg-text top-40 left-10 text-[20vw] opacity-10">Servis</div>
      <div class="container mx-auto px-6 relative z-10">
        <div class="max-w-6xl mx-auto reveal">
          <h1 class="text-6xl md:text-9xl font-extrabold mb-24 tracking-tighter italic leading-none text-white">İletişim.</h1>
          
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div class="p-12 bg-brand-surface border border-brand-border rounded-2xl hover:border-brand-accent transition-all group">
               <div class="w-14 h-14 bg-brand-bg rounded-full flex items-center justify-center text-brand-accent mb-10 group-hover:bg-brand-accent group-hover:text-black transition-all">${App.icons.Phone.replace('w-5 h-5', 'w-8 h-8')}</div>
               <h4 class="text-white text-lg font-bold mb-4 uppercase tracking-widest">7/24 Teknik Hat</h4>
               <a href="tel:+905319159858" class="text-3xl font-bold text-white block mb-2">0531 915 98 58</a>
               <p class="text-brand-muted text-xs uppercase tracking-widest">İstanbul Geneli Servis</p>
            </div>

            <div class="p-12 bg-brand-surface border border-brand-wa/30 rounded-2xl hover:border-brand-wa transition-all group">
               <div class="w-14 h-14 bg-brand-bg rounded-full flex items-center justify-center text-brand-wa mb-10 group-hover:bg-brand-wa group-hover:text-black transition-all">${App.icons.WhatsApp.replace('w-6 h-6', 'w-8 h-8')}</div>
               <h4 class="text-brand-wa text-lg font-bold mb-4 uppercase tracking-widest">WhatsApp Destek</h4>
               <a href="https://wa.me/905319159858" class="text-3xl font-bold text-white block mb-2">Anında Yaz</a>
               <p class="text-brand-muted text-xs uppercase tracking-widest">Fiyat & Fotoğraf Bilgi</p>
            </div>

            <div class="p-12 bg-brand-surface border border-brand-border rounded-2xl hover:border-brand-accent transition-all group">
               <div class="w-14 h-14 bg-brand-bg rounded-full flex items-center justify-center text-brand-accent mb-10 group-hover:bg-brand-accent group-hover:text-black transition-all">${App.icons.Mail.replace('w-5 h-5', 'w-8 h-8')}</div>
               <h4 class="text-white text-lg font-bold mb-4 uppercase tracking-widest">E-Posta Hattı</h4>
               <a href="mailto:info@meridyenelektrik.com" class="text-xl font-bold text-white block mb-2 truncate">info@meridyenelektrik.com</a>
               <p class="text-brand-muted text-xs uppercase tracking-widest">Teklif & İş Birliği</p>
            </div>
          </div>

          <div class="mt-20 p-10 bg-brand-surface border border-brand-border rounded-2xl flex flex-col md:flex-row justify-between items-center gap-10 reveal">
             <div>
                <h4 class="text-white text-xl font-bold mb-2">Merkez Ofis</h4>
                <p class="text-brand-muted max-w-sm">İstanbul genelinde mobil ekiplerimizle en hızlı hizmeti sağlıyoruz.</p>
             </div>
             <div class="text-right">
                <span class="block text-brand-accent font-bold uppercase tracking-[0.4em] text-[10px] mb-2 italic">Servis Saatleri</span>
                <p class="text-white text-2xl font-bold uppercase tracking-tighter">7 Gün / 24 Saat</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  `
};

function renderApp() {
  const hash = window.location.hash.substring(1) || 'anasayfa';
  const appDiv = document.getElementById('app');

  appDiv.innerHTML = `
    <nav id="navbar" class="fixed top-0 inset-x-0 z-[100] transition-all duration-500 py-6 md:py-8 glass-nav">
      <div class="container mx-auto px-6 flex items-center justify-between">
        <a href="#anasayfa" class="block group">
          <img src="assets/logo.png" alt="Logo" class="h-8 md:h-10 w-auto brightness-0 invert opacity-70 group-hover:opacity-100 transition-all">
        </a>
        <div class="hidden md:flex items-center space-x-12 text-[10px] font-bold uppercase tracking-[0.4em] text-slate-500">
          <a href="#anasayfa" class="hover:text-white ${hash === 'anasayfa' ? 'text-white' : ''}">Ana Sayfa</a>
          <a href="#hakkimizda" class="hover:text-white ${hash === 'hakkimizda' ? 'text-white' : ''}">Hakkımızda</a>
          <a href="#iletisim" class="hover:text-white ${hash === 'iletisim' ? 'text-white' : ''}">İletişim</a>
          <a href="#servis-talebi" class="px-8 py-3.5 bg-brand-accent text-black font-bold tracking-widest text-[11px] shadow-xl shadow-brand-accent/10 transition-all hover:bg-white">TEKLİF AL</a>
        </div>
        <button class="md:hidden text-white p-2" id="mobileMenuBtn"><svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg></button>
      </div>
    </nav>

    <div id="mobileMenu" class="fixed inset-0 z-[120] bg-brand-bg flex flex-col p-8 md:p-12 transform translate-x-full transition-transform duration-500 ease-in-out">
      <div class="flex justify-between items-center mb-16">
        <img src="assets/logo.png" alt="Logo" class="h-8 w-auto brightness-0 invert">
        <button id="closeMenuBtn" class="text-white p-2"><svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l18 18"></path></svg></button>
      </div>
      <div class="flex flex-col space-y-6 font-display uppercase font-extrabold italic tracking-tighter text-5xl sm:text-6xl leading-none">
        <a href="#anasayfa" class="mobile-link text-white hover:text-brand-accent transition-colors">Ana Sayfa</a>
        <a href="#hakkimizda" class="mobile-link text-white hover:text-brand-accent transition-colors">Hakkımızda</a>
        <a href="#iletisim" class="mobile-link text-white hover:text-brand-accent transition-colors">İletişim</a>
        <a href="#servis-talebi" class="mobile-link text-brand-accent not-italic">Teklif Al</a>
      </div>
      <div class="mt-auto pt-10 border-t border-white/10">
         <p class="text-brand-muted text-xs uppercase tracking-[0.4em] font-bold mb-4 italic">Bize Ulaşın</p>
         <p class="text-white text-3xl font-bold">0531 915 98 58</p>
      </div>
    </div>

    <main class="min-h-screen">${Templates[hash] ? Templates[hash]() : Templates.anasayfa()}</main>

    <footer class="bg-black pt-24 pb-12 relative overflow-hidden border-t border-white/5">
      <div class="bg-text bottom-0 left-1/2 -translate-x-1/2 text-[25vw] opacity-[0.02]">Meridyen</div>
      <div class="container mx-auto px-6 relative z-10">
        <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-10 mb-16">
          <div>
            <img src="assets/logo.png" class="h-10 w-auto mb-6 brightness-0 invert opacity-40">
            <p class="text-slate-600 text-[10px] font-bold uppercase tracking-[0.4em] leading-relaxed">20 Yıllık Güven, <br>İstanbul Elektrik Teknik Servisi.</p>
          </div>
          <div class="flex flex-wrap gap-8 text-[10px] font-bold uppercase tracking-[0.5em] text-slate-500">
             <a href="#anasayfa" class="hover:text-brand-accent transition-colors">Ana Sayfa</a><a href="#hakkimizda" class="hover:text-brand-accent transition-colors">Hakkımızda</a><a href="#iletisim" class="hover:text-brand-accent transition-colors">İletişim</a>
          </div>
          <div class="md:text-right">
             <p class="text-brand-accent text-3xl font-extrabold tracking-tighter mb-1">0531 915 98 58</p>
             <p class="text-slate-700 text-[10px] uppercase tracking-[0.4em] font-bold">7/24 Aktif Servis Hattı</p>
          </div>
        </div>
        <div class="pt-10 border-t border-white/5 text-center text-[10px] font-bold uppercase tracking-[0.5em] text-slate-900">
          © 2024 Meridyen Elektrik. Tüm İstanbul'da 7/24 profesyonel teknik destek.
        </div>
      </div>
    </footer>

    <!-- Şık Başarı Modalı -->
    <div id="successModal" class="modal-overlay fixed inset-0 z-[150] flex items-center justify-center p-6" style="display: none;">
      <div class="modal-box w-full max-w-md bg-[#0F0F12] border border-[#1E1E24] p-8 rounded-2xl shadow-2xl text-center relative overflow-hidden">
        <div class="absolute top-0 right-0 w-24 h-24 bg-brand-accent/5 rounded-bl-full pointer-events-none"></div>
        <div class="w-16 h-16 bg-brand-accent/10 text-brand-accent rounded-full flex items-center justify-center mx-auto mb-6 pulse-success">
          <svg class="w-8 h-8" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </div>
        <h3 class="font-display text-2xl font-bold text-white mb-2 uppercase tracking-wide">TALEBİNİZ ALINDI!</h3>
        <p class="text-sm text-brand-muted mb-8 leading-relaxed">
          Sayın <span id="modalCustomerName" class="text-white font-bold"></span>, servis talebiniz 7/24 nöbetçi teknik destek ekiplerimize başarıyla ulaştırılmıştır. En geç 60 dakika içinde sizinle iletişime geçeceğiz.
        </p>
        <button id="closeModalBtn" class="w-full py-4 bg-brand-accent text-black font-bold uppercase tracking-widest text-[11px] hover:bg-white transition-all duration-300">
          KAPAT & ANA SAYFA
        </button>
      </div>
    </div>

    <a href="https://wa.me/905319159858" target="_blank" class="wa-float" aria-label="WhatsApp Destek">
       ${App.icons.WhatsApp}
    </a>
  `;

  window.scrollTo(0, 0);
  initUI();
}

function initUI() {
  const observe = () => {
    const observer = new IntersectionObserver((entries) => { entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } }); }, { threshold: 0.1 });
    document.querySelectorAll('.reveal').forEach(r => observer.observe(r));
  };
  observe();
  const navbar = document.getElementById('navbar');
  window.onscroll = () => {
    if (window.scrollY > 50) { navbar.classList.add('bg-[#050507]/95', 'py-4', 'shadow-2xl'); navbar.classList.remove('py-6', 'md:py-8'); }
    else { navbar.classList.remove('bg-[#050507]/95', 'py-4', 'shadow-2xl'); navbar.classList.add('py-6', 'md:py-8'); }
  };
  const menuBtn = document.getElementById('mobileMenuBtn');
  const closeBtn = document.getElementById('closeMenuBtn');
  const menu = document.getElementById('mobileMenu');
  const links = document.querySelectorAll('.mobile-link');
  const toggleMenu = (open) => {
    menu.classList.toggle('translate-x-full', !open);
    document.body.style.overflow = open ? 'hidden' : '';
  };
  if (menuBtn) menuBtn.onclick = () => toggleMenu(true);
  if (closeBtn) closeBtn.onclick = () => toggleMenu(false);
  links.forEach(l => l.onclick = () => toggleMenu(false));
  const form = document.getElementById('contactForm');
  if (form) {
    form.onsubmit = (e) => {
      e.preventDefault();
      
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      
      // Yükleniyor Durumu
      submitBtn.innerHTML = `
        <span class="inline-flex items-center gap-2 justify-center">
          <svg class="animate-spin h-4 w-4 text-black" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          İletiliyor...
        </span>
      `;
      submitBtn.disabled = true;

      const name = form.querySelector('input[type="text"]').value;
      const phone = form.querySelector('input[type="tel"]').value;
      const detail = form.querySelector('textarea').value;

      const payload = {
        adSoyad: name,
        telefon: phone,
        talep: detail
      };

      const googleScriptUrl = "https://script.google.com/macros/s/AKfycbwzKbbxku7Kn0zdn4b7MtQ9n7dvp3KX_FLF0VbKjvrL1w9zltgt0Du_t1H4w-FpSC8dNw/exec";

      fetch(googleScriptUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      .then(() => {
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        form.reset();
        showSuccessModal(name);
      })
      .catch(err => {
        console.error("Hata oluştu:", err);
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        showSuccessModal(name);
      });
    };
  }
  
  const closeBtnModal = document.getElementById('closeModalBtn');
  if (closeBtnModal) {
    closeBtnModal.onclick = closeModal;
  }
}

function showSuccessModal(name) {
  const modal = document.getElementById('successModal');
  const nameSpan = document.getElementById('modalCustomerName');
  if (nameSpan) nameSpan.innerText = name;
  if (modal) {
    modal.style.display = 'flex';
    setTimeout(() => modal.classList.add('active'), 10);
  }
}

function closeModal() {
  const modal = document.getElementById('successModal');
  if (modal) {
    modal.classList.remove('active');
    setTimeout(() => {
      modal.style.display = 'none';
      window.location.hash = 'anasayfa';
    }, 400);
  }
}

window.onhashchange = renderApp;
window.onload = renderApp;
