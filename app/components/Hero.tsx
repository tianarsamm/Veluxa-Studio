"use client";

import { useEffect } from 'react';

export default function HomePage() {
  useEffect(() => {
    const handleSmoothScroll = (e: Event) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a[href^="#"]') as HTMLAnchorElement | null;
      
      if (!link) return;
      
      e.preventDefault();
      const targetId = link.getAttribute('href')?.substring(1);
      const targetElement = document.getElementById(targetId!);
      
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    };

    document.addEventListener('click', handleSmoothScroll, true);

    return () => {
      document.removeEventListener('click', handleSmoothScroll, true);
    };
  }, []);
  return (
    <>
      <div className="hero-wrapper" suppressHydrationWarning>

        {/* NAVBAR */}
        <nav className="navbar">
          <div className="logo">Veluxa<span>Studio</span></div>

          <ul className="nav-links">
            <li><a href="#hero">Home</a></li>
            <li><a href="#services">Layanan</a></li>
            <li><a href="#contact">Kontak</a></li>
          </ul>

          {/* <button className="btn-login">Get Started</button> */}
        </nav>

        {/* HERO — CENTERED */}
        <section className="hero">
<h4 className="mini-title">Langkah Mudah Menuju Dunia Digital</h4>

<h1 className="title">
            Bangun Bisnis <span>Digital Anda</span> Bersama 
          </h1>

{/* <p className="subtitle">
            Kami menyediakan solusi digital lengkap mulai dari pembuatan website, desain kreatif, undangan digital, hingga sistem keuangan digital untuk membantu bisnis Anda berkembang lebih modern dan profesional.
          </p> */}

          <div className="services-highlight">
            Website • Desain • Undangan Digital • Keuangan Digital
          </div>

          <div className="cta-group">
<button className="cta-primary" onClick={() => {
              const text = encodeURIComponent('Halo Veluxa Studio, saya ingin berkonsultasi. Mohon informasikan langkah selanjutnya. Terima kasih!');
              window.open(`https://wa.me/6281338858678?text=${text}`, '_blank');
            }}>Konsultasi</button>
            <a href="#services" className="cta-secondary">Lihat Layanan</a>
          </div>
        </section>
      </div>

      {/* STYLES */}
      <style jsx>{`
        /* ============================
            PREMIUM BACKGROUND
        ============================ */
        .hero-wrapper {
          width: 100%;
          min-height: 100vh;
          padding: 0 6rem;
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          align-items: center;

          background:
            radial-gradient(circle at 40% 20%, rgba(59,255,179,0.16), transparent 60%),
            linear-gradient(135deg, #020b0e, #000507);
        }

        .hero-wrapper::after {
          content: "";
          position: absolute;
          inset: 0;
          opacity: 0.22;
          background-image: url("data:image/svg+xml,%3Csvg width='900' height='700' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 350 Q200 280 450 350 T900 350' stroke='%233bffb322' stroke-width='2' fill='none'/%3E%3C/svg%3E");
          background-size: cover;
          pointer-events: none;
        }
          

        /* ============================
                NAVBAR
        ============================ */
        .navbar {
          width: 100%;
          max-width: 1300px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 2rem 0;
          z-index: 10;
        }

        .logo {
          font-size: 1.8rem;
          font-weight: 700;
          color: white;
        }
        .logo span {
          color: #3bffb3;
        }

        .nav-links {
          display: flex;
          gap: 2rem;
          list-style: none;
        }
        .nav-links a {
          color: #cdcdcd;
          text-decoration: none;
          font-size: 1rem;
          transition: color 0.3s ease;
        }

        .nav-links a:hover {
          color: #3bffb3;
        }

        .btn-login {
          padding: 0.7rem 1.4rem;
          background: #3bffb3;
          border: none;
          border-radius: 6px;
          color: #000;
          font-weight: 600;
        }

        /* ============================
                HERO CENTER
        ============================ */
        .hero-wrapper::before {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 160px;
          background: linear-gradient(
            to bottom,
            rgba(0,0,0,0) 0%,
            #001014 90%
          );
          pointer-events: none;
          z-index: 2;
        }

        .hero {
          text-align: center;
          margin-top: 6rem;
          max-width: 700px;
          z-index: 10;

        }

        .mini-title {
          color: #3bffb3;
          font-size: 1rem;
          margin-bottom: 1rem;
          letter-spacing: 1px;
          opacity: 0;
          transform: translateY(30px);
          animation: fadeInUp 0.8s ease-out 0.2s forwards;
        }

        .title {
          font-size: 3.4rem;
          line-height: 1.2;
          color: white;
          margin-bottom: 1.5rem;
          font-weight: 700;
          opacity: 0;
          transform: translateY(30px);
          animation: fadeInUp 1s ease-out 0.4s forwards;
        }

.title span {
          color: #3bffb3;
          text-shadow: 0 0 20px rgba(59,255,179,0.5);
        }

        .subtitle {
          color: #d0d0d0;
          font-size: 1.15rem;
          line-height: 1.7;
          margin-bottom: 1.5rem;
          opacity: 0;
          transform: translateY(30px);
          animation: fadeInUp 0.8s ease-out 0.6s forwards;
        }

        .services-highlight {
          color: #a0a0a0;
          font-size: 1.1rem;
          font-weight: 500;
          margin-bottom: 3rem;
          letter-spacing: 0.5px;
          opacity: 0;
          transform: translateY(30px);
          animation: fadeInUp 0.8s ease-out 0.9s forwards;
          display: flex;
          justify-content: center;
          gap: 1.5rem;
          flex-wrap: wrap;
        }

        @media (max-width: 900px) {
          .services-highlight {
            font-size: 1rem;
            gap: 1rem;
            flex-direction: column;
            align-items: center;
          }
        }

        .cta-group {
          display: flex;
          justify-content: center;
          gap: 1rem;
          opacity: 0;
          transform: translateY(30px);
          animation: fadeInUp 0.8s ease-out 0.8s forwards;
        }

        /* Keyframes for animations */
        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

.cta-primary {
          background: linear-gradient(135deg, #3bffb3, #2ff39b);
          color: black;
          padding: 0.9rem 1.8rem;
          border: none;
          border-radius: 8px;
          font-weight: 600;
          font-size: 1rem;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(59,255,179,0.3);
        }

        .cta-primary:hover {
          transform: translateY(-2px) scale(1.05);
          box-shadow: 0 8px 25px rgba(59,255,179,0.5);
        }

.cta-secondary {
          background: transparent;
          color: white;
          padding: 0.9rem 1.8rem;
          border: 2px solid #3bffb3;
          border-radius: 8px;
          font-weight: 600;
          font-size: 1rem;
          transition: all 0.3s ease;
        }

        .cta-secondary:hover {
          background: rgba(59,255,179,0.15);
          box-shadow: 0 0 20px rgba(59,255,179,0.4);
          transform: translateY(-2px);
        }

        /* ============================
                RESPONSIVE
        ============================ */
        @media (max-width: 900px) {
          .nav-links {
            display: none;
          }
          .hero-wrapper {
            padding: 0 2rem;
          }
          .title {
            font-size: 2.6rem;
          }
          .subtitle {
            font-size: 1.05rem;
          }
          .cta-group {
            flex-direction: column;
            align-items: center;
            gap: 1rem;
          }
        }
      `}</style>
    </>
  );
}
