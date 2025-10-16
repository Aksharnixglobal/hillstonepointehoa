import Header from '@/components/Header';
import Hero from '@/components/Hero';
import FeaturedNews from '@/components/FeaturedNews';
import RecentDocuments from '@/components/RecentDocuments';
import QuickLinks from '@/components/QuickLinks';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <Hero />
        <FeaturedNews />
        <RecentDocuments />
        <QuickLinks />
      </main>
      <Footer />
    </div>
  );
}
