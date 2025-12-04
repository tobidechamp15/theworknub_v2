import Blog from "@/components/blog/Blog";
import Features from "@/components/features/Features";
import Footer from "@/components/footer/Footer";
import GalleryContainer from "@/components/gallery/GalleryContainer";
import HeroContainer from "@/components/hero/HeroContainer";
import Pricing from "@/components/pricing/Pricing";
import SpacesContainer from "@/components/spaces/SpacesContainer";

const HomePage = () => {
  return (
    <>
      <HeroContainer />
      <Features />
      <SpacesContainer />
      <Pricing />
      <Blog />
      <GalleryContainer />
      <Footer />
    </>
  );
};
export default HomePage;
