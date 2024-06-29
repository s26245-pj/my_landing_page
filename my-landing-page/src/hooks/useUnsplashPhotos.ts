import { useState, useEffect } from 'react';
import axios from 'axios';

interface Photo {
  id: string;
  urls: {
    small: string;
    full: string;
    regular: string;
    thumb: string;
  };
  alt_description: string;
}

interface UseUnsplashPhotosResult {
  photos: Photo[];
  loading: boolean;
  error: string | null;
}

const useUnsplashPhotos = (query: string, count: number): UseUnsplashPhotosResult => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await axios.get('https://api.unsplash.com/search/photos', {
          params: { query, per_page: count },
          headers: {
            Authorization: `Client-ID xoRGrsF2mv5qxy4pA5E7RYkP7-vNocHz66ip_9xZbss`,
          },
        });
        setPhotos(response.data.results);
      } catch (err: any) {
        setError(err.message || 'Error fetching photos');
      } finally {
        setLoading(false);
      }
    };

    fetchPhotos();
  }, [query, count]);

  return { photos, loading, error };
};

export default useUnsplashPhotos;
