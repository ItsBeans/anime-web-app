import Image from "next/image";
import Header from "./Header";
import TopAnimeCarousel from "./TopAnimeCarousel";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Footer from "./Footer";

export default function Home() {
  return (
    <>
    <Header/>
    <TopAnimeCarousel/>
    <Footer/>
    </>
  );
}
