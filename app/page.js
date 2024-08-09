import HeroImage from '@/components/Home/HeroImage';
import Navbar from '@/components/Home/Navbar';
import Brand from '@/components/Home/Content/Brand';
import Discover from '@/components/Home/Content/Discover';
import Separator from '@/components/Home/Content/Separator';
import Destinations from '@/components/Home/Content/DestinationsGallery';
import LuxuryGallery from '@/components/Home/Content/LuxuryGallery';
import InfoCheckIn from '@/components/Home/Content/InfoCheckIn';
import Articles from '@/components/Home/Content/Articles';
import Footer from '@/components/Home/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroImage />
      <Brand />
      <Discover />
      <Separator />
      <Destinations />
      <LuxuryGallery />
      <InfoCheckIn />
      <Articles />
      <Footer />
    </>
  );
}
