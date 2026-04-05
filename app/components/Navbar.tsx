"use client";

export default function Navbar() {
  return (
    <>
      <header className="header">
        <h1>Veluxa Studio</h1>

        <nav>
          <a href="#hero">Home</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <style jsx>{`
        .header {
          width: 100%;
          padding: 10px 40px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: linear-gradient(135deg, #020202, #030712, #04182f);
          color: white;
        }

        .header h1 {
          font-size: 24px;
          font-weight: 700;
        }

        nav a {
          margin-left: 30px;
          color: #b8d8ff;
          text-decoration: none;
          transition: 0.3s;
        }
        nav a:hover {
          color: white;
        }
      `}</style>
    </>
  );
}
