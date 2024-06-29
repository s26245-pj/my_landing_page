import video1 from "../assets/video1.mp4"
import video2 from "../assets/video2.mp4"
import { useTranslation } from 'react-i18next';

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <div id="hero" className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        {t('heroSection.title')}
        <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
          {t('heroSection.titleSpan')}
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4-xl">
        {t('heroSection.description')}
      </p>
      <div className="flex justify-center my-10">
        <a href="#" className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md text-white hover:bg-orange-700" aria-label={t('heroSection.startForFreeAria')}>
          {t('heroSection.startForFree')}
        </a>
        <a href="#" className="py-3 px-4 mx-3 rounded-md border text-white hover:bg-neutral-700" aria-label={t('heroSection.documentationAria')}>
          {t('heroSection.documentation')}
        </a>
      </div>
      <div className="flex mt-10 justify-center">
        <video autoPlay loop muted className="rounded-lg w-1/2 border-orange-700 shadow-orange-400 mx-2 my-4" aria-label={t('heroSection.video1Aria')}>
          <source src={video1} type="video/mp4" />
          {t('heroSection.videoFallback')}
        </video>
        <video autoPlay loop muted className="rounded-lg w-1/2 border-orange-700 shadow-orange-400 mx-2 my-4" aria-label={t('heroSection.video2Aria')}>
          <source src={video2} type="video/mp4" />
          {t('heroSection.videoFallback')}
        </video>
      </div>
    </div>
  );
};

export default HeroSection;
