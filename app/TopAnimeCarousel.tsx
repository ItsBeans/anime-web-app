// components/TopAnimeCarousel.js

"use client";

import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Router from 'next/router';
import { useRouter } from 'next/navigation';

const TopAnimeCarousel = () => {
  const router = useRouter();
  const [topAnime, setTopAnime] = useState([]);

  const handleAnimeClick = (id: number) => {
    router.push(`/anime/${id}`);
  };

  useEffect(() => {
    const fetchTopAnime = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_JIKAN_API_URL}/top/anime`);
        const data = await response.json();
        setTopAnime(data.data.slice(0, 5)); // top 5 anime
      } catch (error) {
        console.error('Error fetching top anime:', error);
      }
    };

    fetchTopAnime();
  }, []);

  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      loop={true}
      autoplay={{ delay: 3500 }}
      className="top-anime-carousel"
    >
      {topAnime.map((anime) => (
        <SwiperSlide key={anime.mal_id}>
        <div className="carousel-slide" >
          <img src={anime.images.jpg.large_image_url} alt={anime.title} className="carousel-image" />
          <div className="carousel-content">
            <span className="carousel-tag">#{anime.rank} ranked anime</span>
            <h2>{anime.title}</h2>
            <h3>({anime.title_japanese})</h3>
            <p>{anime.synopsis ? anime.synopsis.slice(0, 100) + '...' : 'No description available.'}</p>
            <div className="carousel-info ">
              <span>⭐ {anime.score} ({anime.scored_by} ratings)</span>
              <span>Episodes: {anime.episodes}</span>
            </div>
            <div className="carousel-buttons">
              <button onClick={() => handleAnimeClick(anime.mal_id)} className="detail-btn">More info</button>
            </div>
          </div>
        </div>
      </SwiperSlide>
      
      ))}
    </Swiper>
  );
};

export default TopAnimeCarousel;
