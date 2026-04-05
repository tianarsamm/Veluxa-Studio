// import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ServicesWrapper from "./components/ServicesWrapper"; // ✅ Menggunakan wrapper dengan ssr: false
// import Contact from "./components/Contact";
// import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      {/* <Navbar /> */}
      <Hero />
      <ServicesWrapper />
      {/* <Contact /> */}
      {/* <Footer /> */}
    </>
  );
}
