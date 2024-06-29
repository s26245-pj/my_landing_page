import { useLayoutEffect, useMemo } from 'react';
import useUnsplashPhotos from '../hooks/useUnsplashPhotos';
import { useTranslation } from 'react-i18next';

const Gallery = () => {
  const { t } = useTranslation();
  const { photos, loading, error } = useUnsplashPhotos('Virtual reality', 3);

  useLayoutEffect(() => {
    document.title = t('gallery.title');
  }, [t]);


  const processedPhotos = useMemo(() => {
    return photos.map(photo => ({
      id: photo.id,
      url: photo.urls.small,
      description: photo.alt_description,
    }));
  }, [photos]);

  if (loading) {
    return <p>{t('gallery.loading')}</p>;
  }

  if (error) {
    return <p>{t('gallery.error')}</p>;
  }

  return (
    <div id="gallery" className="container mx-auto py-12">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wider">
        {t('gallery.title')}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {processedPhotos.map(photo => (
          <div key={photo.id}>
            <img src={photo.url} alt={photo.description} className="w-full h-auto rounded-lg" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
