"use client";

import { useState, useEffect, useRef, useCallback } from 'react';

/* ─── Data ─────────────────────────────────────────────────────────────────── */
const servicesData = {
  website: [
    {
      title: "Landing Page Bisnis",
      desc: "Website promosi 1 halaman modern & responsive.",
      price: "Rp 300.000",
      badge: "",
      features: ["1 Halaman scrolling", "Desain modern & responsive", "Integrasi WhatsApp", "Optimasi mobile", "Revisi 2x"],
      icon: "🌐",
    },
    {
      title: "Company Profile",
      desc: "Website profesional untuk brand Anda.",
      price: "Rp 500.000",
      badge: "⭐ Terpopuler",
      features: ["Hingga 5 halaman", "Desain premium & elegan", "Form kontak", "Integrasi Google Maps", "SEO dasar", "Revisi 3x"],
      icon: "🏢",
    },
    {
      title: "Portfolio Pribadi",
      desc: "Tampilkan karya & personal branding Anda.",
      price: "Rp 350.000",
      badge: "",
      features: ["Halaman profil personal", "Galeri karya", "Desain clean & modern", "Mobile friendly", "Integrasi sosial media"],
      icon: "🗂️",
    },
    {
      title: "Website Custom",
      desc: "Solusi website sesuai kebutuhan spesifik Anda.",
      price: "Mulai Rp 700.000",
      badge: "",
      features: ["Fitur custom sesuai request", "Sistem lebih kompleks", "Konsultasi gratis", "UI/UX premium", "Support pengembangan"],
      icon: "⚙️",
    },
    {
      title: "Web Undangan Digital",
      desc: "Undangan online modern & interaktif.",
      price: "Rp 150.000",
      badge: "🔥 Paling Hemat",
      features: ["Subdomain (nama.web.com)", "Galeri foto & video", "Navigasi Google Maps", "Musik & RSVP", "Nama tamu unlimited", "Amplop digital"],
      icon: "💌",
    },
  ],
  desain: [
    {
      title: "Desain Poster",
      desc: "Poster promosi menarik & profesional.",
      price: "Rp 50.000",
      badge: "",
      features: ["Desain HD", "Siap upload sosial media", "Revisi 2x", "File JPG/PNG"],
      icon: "🎨",
    },
    {
      title: "Feed Instagram",
      desc: "Konten visual konsisten & estetik untuk IG.",
      price: "Rp 25.000 / desain",
      badge: "",
      features: ["Desain sesuai branding", "Ukuran IG optimal", "Revisi 1x", "File siap upload"],
      icon: "📸",
    },
    {
      title: "Desain Logo",
      desc: "Identitas visual brand yang berkesan.",
      price: "Rp 100.000",
      badge: "",
      features: ["2 konsep desain", "Revisi 3x", "File PNG + transparan", "Resolusi tinggi"],
      icon: "✏️",
    },
    {
      title: "Banner & Brosur",
      desc: "Media promosi online & offline siap pakai.",
      price: "Rp 75.000",
      badge: "",
      features: ["Desain fleksibel", "Siap cetak / digital", "Revisi 2x"],
      icon: "🖼️",
    },
  ],
  undangan: [
    {
      title: "Undangan Pernikahan",
      desc: "Elegant, interaktif & penuh kenangan.",
      price: "Rp 200.000",
      badge: "",
      features: ["Tema premium", "Galeri foto", "Musik background", "RSVP & buku tamu", "Navigasi lokasi"],
      icon: "💍",
    },
    {
      title: "Undangan Ulang Tahun",
      desc: "Fun, personal & mudah dibagikan.",
      price: "Rp 120.000",
      badge: "",
      features: ["Desain custom", "Musik opsional", "RSVP", "Share link mudah"],
      icon: "🎂",
    },
    {
      title: "Undangan Event",
      desc: "Profesional & formal untuk acara Anda.",
      price: "Rp 150.000",
      badge: "",
      features: ["Desain clean", "Informasi acara lengkap", "Google Maps", "RSVP"],
      icon: "🎤",
    },
  ],
  keuangan: [
    {
      title: "Template Keuangan",
      desc: "Pencatatan keuangan siap pakai.",
      price: "Rp 50.000",
      badge: "",
      features: ["Excel / Google Sheets", "Pemasukan & pengeluaran", "Mudah digunakan"],
      icon: "📋",
    },
    {
      title: "Dashboard Keuangan",
      desc: "Visualisasi data bisnis otomatis.",
      price: "Rp 150.000",
      badge: "",
      features: ["Grafik otomatis", "Ringkasan keuangan", "Mudah dipahami"],
      icon: "📊",
    },
  ],
  paket: [
    {
      title: "Paket Starter",
      desc: "Mulai digital untuk UMKM & usaha baru.",
      price: "Rp 400.000",
      badge: "🟢 Pemula",
      features: ["Landing Page", "Desain Poster (2x)", "Integrasi WhatsApp", "Mobile friendly"],
      icon: "🚀",
    },
    {
      title: "Paket Business",
      desc: "Solusi digital lengkap untuk bisnis berkembang.",
      price: "Rp 750.000",
      badge: "⭐ Best Value",
      features: ["Website Company Profile", "Feed Instagram (5x)", "Logo Basic", "SEO dasar", "Integrasi sosial media"],
      icon: "💼",
    },
    {
      title: "Paket Premium",
      desc: "All-in-one digital solution untuk brand serius.",
      price: "Rp 1.200.000",
      badge: "🚀 Lengkap",
      features: ["Website Custom / Company Profile", "Branding (Logo + Feed + Poster)", "Dashboard Keuangan", "Konsultasi bisnis digital", "Prioritas support"],
      icon: "👑",
    },
    {
      title: "Paket Undangan Pro",
      desc: "Undangan digital lengkap dengan branding personal.",
      price: "Rp 300.000",
      badge: "💌 Spesial",
      features: ["Undangan Pernikahan Premium", "Desain Logo / Monogram", "Galeri foto tak terbatas", "Amplop digital", "RSVP & musik", "Revisi 3x"],
      icon: "💍",
    },
    {
      title: "Paket Sosial Media",
      desc: "Tingkatkan kehadiran brand di media sosial.",
      price: "Rp 500.000",
      badge: "📱 Viral",
      features: ["Feed Instagram (10x)", "Desain Stories (5x)", "Desain Logo", "Poster Promo (3x)", "Konsisten & estetik"],
      icon: "📱",
    },
    {
      title: "Paket UMKM Digital",
      desc: "Paket hemat serba ada untuk usaha kecil.",
      price: "Rp 350.000",
      badge: "🔥 Hemat",
      features: ["Landing Page sederhana", "Desain Logo Basic", "Poster Promosi (2x)", "Integrasi WhatsApp & Maps"],
      icon: "🏪",
    },
  ],
};

const tabLabels: Record<string, string> = {
  website:  'Website & Dev',
  desain:   'Desain Kreatif',
  undangan: 'Undangan Digital',
  keuangan: 'Sistem Keuangan',
  paket:    '🔥 Paket Hemat',
};

type Category = keyof typeof servicesData;

const clamp = (v: number, min: number, max: number) => Math.min(Math.max(v, min), max);

/* ─── Component ─────────────────────────────────────────────────────────────── */
export default function ServicesAndContact() {
  const [activeCategory, setActiveCategory] = useState<Category>('website');
  const [activeIndex,    setActiveIndex]    = useState(0);

  const carouselRef = useRef<HTMLDivElement>(null);
  const cardRefs    = useRef<(HTMLDivElement | null)[]>([]);
  const rafRef      = useRef<number | null>(null);
  const snapTimer   = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isDragging  = useRef(false);
  const dragStartX  = useRef(0);
  const dragScrollL = useRef(0);

  const cards = servicesData[activeCategory];

  /* ── Core: apply styles real-time per scroll frame ── */
  const applyStyles = useCallback(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const containerCenter = carousel.scrollLeft + carousel.clientWidth / 2;
    let closestIdx = 0;
    let minDist    = Infinity;

    cardRefs.current.forEach((card, i) => {
      if (!card) return;
      const cardCenter = card.offsetLeft + card.clientWidth / 2;
      const dist       = Math.abs(containerCenter - cardCenter);
      const ratio      = clamp(dist / (card.clientWidth * 0.85), 0, 1);

      const scale   = 1 - ratio * 0.16;
      const opacity = 1 - ratio * 0.50;

      card.style.transform = `scale(${scale.toFixed(4)})`;
      card.style.opacity   = `${opacity.toFixed(4)}`;

      const inner = card.querySelector<HTMLElement>('.card-inner');
      if (inner) {
        const glow = clamp(1 - ratio * 6, 0, 1);
        inner.style.borderColor = `rgba(59,255,179,${(0.25 + glow * 0.75).toFixed(3)})`;
        inner.style.boxShadow   = glow > 0
          ? `0 0 ${(glow * 30).toFixed(0)}px rgba(59,255,179,${(glow * 0.35).toFixed(3)}), 0 20px 50px rgba(0,0,0,0.4)`
          : 'none';
        inner.style.background  = `rgba(255,255,255,${(0.07 + glow * 0.06).toFixed(3)})`;
      }

      if (dist < minDist) { minDist = dist; closestIdx = i; }
    });

    setActiveIndex(closestIdx);
  }, []);

  /* ── scrollToCard ── */
  const scrollToCard = useCallback((index: number) => {
    const carousel = carouselRef.current;
    const card     = cardRefs.current[index];
    if (!carousel || !card) return;
    const target = card.offsetLeft + card.clientWidth / 2 - carousel.clientWidth / 2;
    carousel.style.scrollBehavior = 'smooth';
    carousel.scrollTo({ left: target, behavior: 'smooth' });
    setActiveIndex(index);
  }, []);

  /* ── Scroll listener ── */
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const onScroll = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(applyStyles);

      if (snapTimer.current) clearTimeout(snapTimer.current);
      snapTimer.current = setTimeout(() => {
        const center = carousel.scrollLeft + carousel.clientWidth / 2;
        let closest = 0, minD = Infinity;
        cardRefs.current.forEach((card, i) => {
          if (!card) return;
          const d = Math.abs(card.offsetLeft + card.clientWidth / 2 - center);
          if (d < minD) { minD = d; closest = i; }
        });
        scrollToCard(closest);
      }, 100);
    };

    carousel.addEventListener('scroll', onScroll, { passive: true });
    requestAnimationFrame(applyStyles);

    return () => {
      carousel.removeEventListener('scroll', onScroll);
      if (rafRef.current)    cancelAnimationFrame(rafRef.current);
      if (snapTimer.current) clearTimeout(snapTimer.current);
    };
  }, [applyStyles, scrollToCard]);

  /* ── Category reset ── */
  useEffect(() => {
    setActiveIndex(0);
    cardRefs.current = [];
    const carousel = carouselRef.current;
    if (carousel) {
      carousel.style.scrollBehavior = 'auto';
      carousel.scrollLeft = 0;
    }
    const t = setTimeout(() => {
      scrollToCard(0);
      requestAnimationFrame(applyStyles);
    }, 60);
    return () => clearTimeout(t);
  }, [activeCategory, scrollToCard, applyStyles]);

  /* ── Mouse drag ── */
  const onMouseDown = (e: React.MouseEvent) => {
    const carousel = carouselRef.current;
    if (!carousel) return;
    isDragging.current  = true;
    dragStartX.current  = e.pageX;
    dragScrollL.current = carousel.scrollLeft;
    carousel.style.scrollBehavior = 'auto';
    carousel.style.cursor         = 'grabbing';
    carousel.style.userSelect     = 'none';
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    const carousel = carouselRef.current;
    if (!carousel) return;
    carousel.scrollLeft = dragScrollL.current - (e.pageX - dragStartX.current) * 1.6;
  };

  const onMouseUp = () => {
    if (!isDragging.current) return;
    isDragging.current = false;
    const carousel = carouselRef.current;
    if (!carousel) return;
    carousel.style.cursor     = 'grab';
    carousel.style.userSelect = '';
    const center = carousel.scrollLeft + carousel.clientWidth / 2;
    let closest = 0, minD = Infinity;
    cardRefs.current.forEach((card, i) => {
      if (!card) return;
      const d = Math.abs(card.offsetLeft + card.clientWidth / 2 - center);
      if (d < minD) { minD = d; closest = i; }
    });
    scrollToCard(closest);
  };

  const goPrev = () => scrollToCard(Math.max(activeIndex - 1, 0));
  const goNext = () => scrollToCard(Math.min(activeIndex + 1, cards.length - 1));

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('anim-in'); }),
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    document.querySelectorAll('.anim').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <div className="bg-wrapper" suppressHydrationWarning>

        <section id="services" className="section anim">
          <h3 className="title anim">Layanan Kami</h3>

          {/* TABS */}
          <div className="tabs-container anim">
            {(Object.keys(servicesData) as Category[]).map(cat => (
              <button
                key={cat}
                className={`tab-btn ${activeCategory === cat ? 'active' : ''} ${cat === 'paket' ? 'tab-paket' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {tabLabels[cat]}
              </button>
            ))}
          </div>

          {/* CAROUSEL */}
          <div className="carousel-outer anim">
            <button className="nav-btn nav-prev" onClick={goPrev} disabled={activeIndex === 0} aria-label="Previous">‹</button>

            <div
              ref={carouselRef}
              className="carousel"
              onMouseDown={onMouseDown}
              onMouseMove={onMouseMove}
              onMouseUp={onMouseUp}
              onMouseLeave={onMouseUp}
            >
              <div className="carousel-spacer" aria-hidden="true" />

              {cards.map((service, index) => (
                <div
                  key={`${activeCategory}-${index}`}
                  ref={el => { cardRefs.current[index] = el; }}
                  className={`service-card ${activeCategory === 'paket' ? 'paket-card' : ''}`}
                  onClick={() => scrollToCard(index)}
                >
                  <div className="card-inner">
                    {service.badge && (
                      <span className="card-badge">{service.badge}</span>
                    )}
                    <span className="card-icon">{service.icon}</span>
                    <h4 className="service-title">{service.title}</h4>
                    <p className="service-desc">{service.desc}</p>
                    <div className="price-tag">{service.price}</div>
                    <ul className="feature-list">
                      {service.features.map((f, fi) => (
                        <li key={fi} className="feature-item">
                          <span className="feature-check">✓</span> {f}
                        </li>
                      ))}
                    </ul>
                    <button
                      className="cta-btn"
                      onClick={e => {
                        e.stopPropagation();
                        const text = encodeURIComponent(
                          `Halo Veluxa Studio, saya ingin memesan produk ${service.title}. Mohon bantuannya untuk info detail harga, paket, dan timeline pengerjaan.Terima Kasih!`
                        );
                        window.open(`https://wa.me/6281338858678?text=${text}`, '_blank');
                      }}
                    >
                      Pesan Sekarang
                    </button>
                  </div>
                </div>
              ))}

              <div className="carousel-spacer" aria-hidden="true" />
            </div>

            <button className="nav-btn nav-next" onClick={goNext} disabled={activeIndex === cards.length - 1} aria-label="Next">›</button>
          </div>

          {/* DOTS */}
          <div className="dots-container">
            {cards.map((_, i) => (
              <button
                key={i}
                className={`dot ${activeIndex === i ? 'active' : ''}`}
                onClick={() => scrollToCard(i)}
                aria-label={`Card ${i + 1}`}
              />
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="section contact anim">
          <h3 className="anim">Kontak Kami</h3>
          <p className="anim">Siap memulai project Anda? Hubungi Veluxa Studio untuk penawaran terbaik.</p>
          <div className="address">
            <p className="anim">Jl. Tukad Badung XII A, Renon, Denpasar Selatan, Kota Denpasar, Bali</p>
          </div>
          <div className="social-media anim">
            <a href="https://www.instagram.com/tianarsamm/" target="_blank" rel="noopener noreferrer" className="social-link">
              <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a href="https://wa.me/6281338858678" target="_blank" rel="noopener noreferrer" className="social-link">
              <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
            </a>
            <a href="https://www.facebook.com/?locale=id_ID" target="_blank" rel="noopener noreferrer" className="social-link">
              <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
          </div>
        </section>

        <footer className="footer anim">© 2025 Veluxa Studio — Crafted with Elegance</footer>

      </div>

      <style jsx>{`
        /* ── BACKGROUND ── */
        .bg-wrapper {
          position: relative; overflow: hidden;
          background:
            radial-gradient(circle at 30% 20%, rgba(0,255,194,0.14), transparent 60%),
            radial-gradient(circle at 80% 70%, rgba(0,255,194,0.08), transparent 65%),
            linear-gradient(135deg, #00151c, #00080c);
        }
        .bg-wrapper::after {
          content: ""; position: absolute; inset: 0; opacity: 0.18; pointer-events: none;
          background-image: url("data:image/svg+xml,%3Csvg width='700' height='600' viewBox='0 0 700 600' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 300 Q150 250 350 300 T700 300' stroke='%233bffb344' stroke-width='2' fill='none'/%3E%3Cpath d='M0 360 Q150 310 350 360 T700 360' stroke='%233bffb322' stroke-width='2' fill='none'/%3E%3C/svg%3E");
          background-size: cover;
        }
        .bg-wrapper::before {
          content: ""; position: absolute; inset: 0; pointer-events: none;
          background: radial-gradient(circle at 70% 40%, rgba(0,255,200,0.12), transparent 60%);
        }

        /* ── SECTION ── */
        .section { padding: 120px 0; color: white; position: relative; z-index: 5; }
        .title   { font-size: 38px; margin-bottom: 48px; text-align: center; font-weight: 700; color: #3bffb3; }

        /* ── TABS ── */
        .tabs-container {
          display: flex; justify-content: center; gap: 0.75rem;
          margin-bottom: 3rem; flex-wrap: wrap; padding: 0 20px;
        }
        .tab-btn {
          padding: 11px 22px;
          background: rgba(255,255,255,0.05);
          border: 2px solid rgba(59,255,179,0.3);
          border-radius: 50px; color: #c8fff0; font-weight: 600;
          cursor: pointer; transition: all 0.3s ease;
          backdrop-filter: blur(10px); font-size: 0.9rem; white-space: nowrap;
        }
        .tab-btn:hover  { border-color: #3bffb3; box-shadow: 0 0 18px rgba(59,255,179,0.35); color: #fff; }
        .tab-btn.active {
          background: linear-gradient(135deg, #3bffb3, #2aeba3);
          border-color: transparent; color: #001a14;
          box-shadow: 0 8px 25px rgba(59,255,179,0.45); transform: translateY(-2px);
        }
        /* Paket tab — gold accent when inactive */
        .tab-paket {
          border-color: rgba(255,200,50,0.5);
          color: #ffe680;
        }
        .tab-paket:hover {
          border-color: #ffe680;
          box-shadow: 0 0 18px rgba(255,220,50,0.4);
          color: #fff;
        }
        .tab-paket.active {
          background: linear-gradient(135deg, #ffd93d, #ffaa00);
          border-color: transparent;
          color: #1a0f00;
          box-shadow: 0 8px 25px rgba(255,180,0,0.5);
        }

        /* ── CAROUSEL OUTER ── */
        .carousel-outer {
          position: relative; display: flex; align-items: center;
          max-width: 1100px; margin: 0 auto;
        }
        .nav-btn {
          position: absolute; z-index: 10;
          width: 44px; height: 44px; border-radius: 50%;
          border: 2px solid rgba(59,255,179,0.5);
          background: rgba(0,21,28,0.85); color: #3bffb3;
          font-size: 1.7rem; line-height: 1; cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          transition: all 0.25s ease; backdrop-filter: blur(10px); flex-shrink: 0;
        }
        .nav-btn:hover:not(:disabled) { background: rgba(59,255,179,0.2); border-color: #3bffb3; box-shadow: 0 0 16px rgba(59,255,179,0.5); }
        .nav-btn:disabled { opacity: 0.2; cursor: default; }
        .nav-prev { left: 6px; }
        .nav-next { right: 6px; }

        /* ── CAROUSEL TRACK ── */
        .carousel {
          display: flex; align-items: flex-start; gap: 1.5rem;
          overflow-x: auto; overflow-y: visible;
          scroll-snap-type: x mandatory;
          scrollbar-width: none; -ms-overflow-style: none;
          cursor: grab; padding: 3rem 0; width: 100%;
        }
        .carousel::-webkit-scrollbar { display: none; }
        .carousel-spacer { flex: 0 0 calc(50% - 150px); pointer-events: none; min-width: 0; }

        /* ── SERVICE CARDS ── */
        .service-card {
          flex: 0 0 300px;
          scroll-snap-align: center;
          cursor: pointer;
          will-change: transform, opacity;
        }

        /* Paket cards are taller */
        .paket-card { flex: 0 0 300px; }

        .card-inner {
          border-radius: 24px;
          padding: 1.8rem 1.6rem 1.6rem;
          backdrop-filter: blur(20px);
          text-align: center;
          min-height: 380px;
          display: flex; flex-direction: column; align-items: center; gap: 0.6rem;
          position: relative;
        }

        /* Badge */
        .card-badge {
          position: absolute;
          top: -12px;
          left: 50%;
          transform: translateX(-50%);
          background: linear-gradient(135deg, #ffd93d, #ffaa00);
          color: #1a0f00;
          font-size: 0.72rem;
          font-weight: 800;
          padding: 4px 14px;
          border-radius: 50px;
          white-space: nowrap;
          letter-spacing: 0.03em;
          box-shadow: 0 4px 12px rgba(255,180,0,0.4);
        }

        .card-icon     { font-size: 2rem; display: block; line-height: 1; margin-top: 0.4rem; }
        .service-title { color: #3bffb3; font-size: 1.1rem; font-weight: 700; margin: 0; text-shadow: 0 2px 8px rgba(59,255,179,0.3); line-height: 1.3; }
        .service-desc  { color: #c8f0e0; line-height: 1.5; font-size: 0.85rem; margin: 0; }

        /* Price */
        .price-tag {
          background: linear-gradient(135deg, rgba(59,255,179,0.15), rgba(59,255,179,0.08));
          border: 1.5px solid rgba(59,255,179,0.4);
          border-radius: 12px;
          padding: 6px 18px;
          color: #3bffb3;
          font-size: 1rem;
          font-weight: 800;
          letter-spacing: 0.01em;
          width: 100%;
          text-align: center;
        }

        /* Feature list */
        .feature-list {
          list-style: none;
          padding: 0; margin: 0;
          width: 100%;
          text-align: left;
          display: flex;
          flex-direction: column;
          gap: 4px;
          flex: 1;
        }
        .feature-item {
          font-size: 0.8rem;
          color: #b8e8d8;
          display: flex;
          align-items: flex-start;
          gap: 6px;
          line-height: 1.4;
        }
        .feature-check {
          color: #3bffb3;
          font-weight: 700;
          flex-shrink: 0;
          margin-top: 1px;
        }

        /* CTA button */
        .cta-btn {
          margin-top: auto;
          width: 100%;
          padding: 10px 0;
          background: linear-gradient(135deg, #3bffb3, #2aeba3);
          border: none;
          border-radius: 12px;
          color: #001a14;
          font-weight: 700;
          font-size: 0.88rem;
          cursor: pointer;
          transition: all 0.25s ease;
          box-shadow: 0 4px 15px rgba(59,255,179,0.3);
          letter-spacing: 0.02em;
        }
        .cta-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(59,255,179,0.5);
        }

        /* ── DOTS ── */
        .dots-container { display: flex; justify-content: center; gap: 0.9rem; margin-top: 1.5rem; }
        .dot {
          width: 10px; height: 10px; border-radius: 50%;
          background: rgba(255,255,255,0.3); border: none;
          cursor: pointer; transition: all 0.3s ease; padding: 0;
        }
        .dot.active             { background: #3bffb3; transform: scale(1.4); box-shadow: 0 0 12px rgba(59,255,179,0.8); }
        .dot:hover:not(.active) { background: rgba(59,255,179,0.5); transform: scale(1.2); }

        /* ── CONTACT ── */
        .contact     { padding: 100px 40px; }
        .contact h3  { font-size: 36px; margin-bottom: 16px; color: #3bffb3; font-weight: 700; }
        .contact p   { font-size: 17px; color: #c8fff0; max-width: 560px; line-height: 1.7; }
        .address     { margin: 20px 0; }
        .social-media { display: flex; gap: 18px; margin-top: 24px; }
        .social-link  { transition: transform 0.3s ease, filter 0.3s ease; }
        .social-link:hover { transform: scale(1.15); filter: drop-shadow(0 0 8px rgba(59,255,179,0.6)); }
        .social-icon  { width: 38px; height: 38px; color: #c8fff0; }

        /* ── FOOTER ── */
        .footer { padding: 40px 20px; text-align: center; color: #a6bcd9; position: relative; z-index: 5; font-size: 0.9rem; }

        /* ── ANIMATIONS ── */
        .anim    { opacity: 0; transform: translateY(28px); transition: opacity 0.6s ease-out, transform 0.6s ease-out; }
        .anim-in { opacity: 1; transform: translateY(0); }

        /* ── RESPONSIVE ── */
        @media (max-width: 900px) {
          .service-card    { flex: 0 0 270px; }
          .carousel-spacer { flex: 0 0 calc(50% - 135px); }
          .nav-btn         { display: none; }
        }
        @media (max-width: 600px) {
          .section         { padding: 80px 0; }
          .title           { font-size: 28px; margin-bottom: 32px; }
          .tabs-container  { gap: 0.5rem; margin-bottom: 2rem; }
          .tab-btn         { padding: 9px 14px; font-size: 0.82rem; }
          .service-card    { flex: 0 0 82vw; max-width: 340px; }
          .carousel-spacer { flex: 0 0 calc(50% - 41vw); }
          .card-inner      { min-height: 340px; padding: 1.5rem 1.2rem; }
          .contact         { padding: 80px 24px; }
          .contact h3      { font-size: 28px; }
        }
        @media (max-width: 380px) {
          .service-card    { flex: 0 0 88vw; }
          .carousel-spacer { flex: 0 0 calc(50% - 44vw); }
        }
      `}</style>
    </>
  );
}