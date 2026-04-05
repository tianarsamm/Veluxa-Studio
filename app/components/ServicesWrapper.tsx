import dynamic from 'next/dynamic';

// ✅ CRITICAL FIX untuk Vercel production
// Dynamic import dengan ssr: false memastikan:
// - Component HANYA jalan di client
// - Tidak ada SSR hydration mismatch
// - DOM manipulation aman

const ServicesAndContact = dynamic(
  () => import('./Services'),
  { 
    ssr: false,
    loading: () => <div className="bg-wrapper" style={{ minHeight: '100vh' }} suppressHydrationWarning />
  }
);

export default ServicesAndContact;
