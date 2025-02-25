"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Header from '../Header'; 
import Footer from '../Footer';

interface Anime {
  mal_id: number;
  title: string;
  images: { jpg: { image_url: string } };
  synopsis: string | null;
}

const SearchPage = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Anime[]>([]);
  const router = useRouter();

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();

    if (query.trim()) {
      try {
        const response = await fetch(`https://api.jikan.moe/v4/anime?q=${query}&limit=10`);
        const data = await response.json();
        setResults(data.data);
      } catch (error) {
        console.error('Error fetching search results:', error);
      }
    }
  };

  const handleAnimeClick = (id: number) => {
    router.push(`/anime/${id}`);
  };

  return (
    <>
      <Header />
      <div className="search-container">
        <h1 className="search-title">Search for a specific anime</h1>
        <form onSubmit={handleSearch} className="search-form">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Enter anime title..."
            className="search-input"
          />
          <button type="submit" className="search-button">Search</button>
        </form>

        <div className="results">
          {results.map((anime) => (
            <div key={anime.mal_id} className="result-item" onClick={() => handleAnimeClick(anime.mal_id)}>
              <img src={anime.images.jpg.image_url} alt={anime.title} width={100} className="result-image" />
              <div>
                <h3>{anime.title}</h3>
                <p>{anime.synopsis ? anime.synopsis.slice(0, 100) + '...' : 'No description available.'}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default SearchPage;

