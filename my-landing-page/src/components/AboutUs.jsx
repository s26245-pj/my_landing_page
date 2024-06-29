import { useTranslation } from 'react-i18next';
import { teamMembers } from '../constants';
import '../styles/aboutUs.css'; 

const AboutUs = () => {
  const { t } = useTranslation();

  return (
    <div id="about" className="container mx-auto py-12 px-4 about-us-section">
      <div className="text-center mb-10 about-us-title">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl tracking-wide text-white mb-4" aria-label={t('aboutUs.titleAria')}>
          {t('aboutUs.title')}
        </h2>
        <p className="text-lg text-neutral-500 max-w-4xl mx-auto" aria-label={t('aboutUs.missionAria')}>
          {t('aboutUs.mission')}
        </p>
      </div>
      <div className="text-center mb-10 about-us-values">
        <h3 className="text-3xl sm:text-4xl lg:text-5xl tracking-wide text-white mb-4" aria-label={t('aboutUs.valuesTitleAria')}>
          {t('aboutUs.valuesTitle')}
        </h3>
        <p className="text-lg text-neutral-500 max-w-4xl mx-auto" aria-label={t('aboutUs.valuesDescriptionAria')}>
          {t('aboutUs.valuesDescription')}
        </p>
      </div>
      <div className="text-center mb-10 about-us-team">
        <h3 className="text-3xl sm:text-4xl lg:text-5xl tracking-wide text-white mb-4" aria-label={t('aboutUs.teamTitleAria')}>
          {t('aboutUs.teamTitle')}
        </h3>
        <div className="flex flex-wrap justify-center team-members">
          {teamMembers.map((member, index) => (
            <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-4 team-member">
              <div className="bg-neutral-800 p-6 rounded-lg text-center member-card">
                <img className="w-24 h-24 rounded-full mx-auto mb-4 member-image" src={member.image} alt={t(`teamMembers.${member.name}.name`)} />
                <h4 className="text-xl text-white mb-2 member-name">{t(`teamMembers.${member.name}.name`)}</h4>
                <p className="text-md text-orange-500 mb-2 member-role">{t(`teamMembers.${member.name}.role`)}</p>
                <p className="text-neutral-500 member-bio">{t(`teamMembers.${member.name}.bio`)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
