
"use client";

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Header from '@/app/Header';
import Footer from '@/app/Footer';

interface AnimeDetails {
  mal_id: number;
  title: string;
  images: { jpg: { large_image_url: string } };
  synopsis: string;
  episodes: number;
  score: number;
  rank: number;
  status: string;
  aired: { string: string };
}

const AnimeDetail = () => {
  const { id } = useParams();
  const [anime, setAnime] = useState<AnimeDetails | null>(null);

  useEffect(() => {
    if (id) {
      const fetchAnime = async () => {
        try {
          const response = await fetch(`https://api.jikan.moe/v4/anime/${id}`);
          const data = await response.json();
          setAnime(data.data);
        } catch (error) {
          console.error('Error fetching anime details:', error);
        }
      };

      fetchAnime();
    }
  }, [id]);

  if (!anime) return <p>Loading...</p>;

  return (
    <>
    <Header/>
    <div className="anime-detail-container">
      <div className="anime-image">
        <img src={anime.images?.jpg?.large_image_url} alt={anime.title} />
      </div>
      <div className="anime-details">
        <h1 className="anime-title">{anime.title}</h1>
        <p className="anime-description">{anime.synopsis}</p>
        <ul className="anime-info">
          <li><strong>Episodes:</strong> {anime.episodes}</li>
          <li><strong>Score:</strong> {anime.score}</li>
          <li><strong>Ranked:</strong> #{anime.rank}</li>
          <li><strong>Status:</strong> {anime.status}</li>
          <li><strong>Aired:</strong> {anime.aired.string}</li>

        </ul>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default AnimeDetail;
