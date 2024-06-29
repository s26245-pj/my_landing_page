import { CheckCircle2 } from "lucide-react";
import codeImg from "../assets/code.jpg";
import { useTranslation } from 'react-i18next';

const Workflow = () => {
  const { t } = useTranslation();

  const checklistItems = [
    {
      title: t('workflow.checklist.0.title', 'Code merge made easy'),
      description: t('workflow.checklist.0.description', 'Track the performance of your VR apps and gain insights into user behavior.'),
    },
    {
      title: t('workflow.checklist.1.title', 'Review code without worry'),
      description: t('workflow.checklist.1.description', 'Track the performance of your VR apps and gain insights into user behavior.'),
    },
    {
      title: t('workflow.checklist.2.title', 'AI Assistance to reduce time'),
      description: t('workflow.checklist.2.description', 'Track the performance of your VR apps and gain insights into user behavior.'),
    },
    {
      title: t('workflow.checklist.3.title', 'Share work in minutes'),
      description: t('workflow.checklist.3.description', 'Track the performance of your VR apps and gain insights into user behavior.'),
    },
  ];

  return (
    <div id="workflow" className="mt-20">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide">
        {t('workflow.title')}{" "}
        <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
          {t('workflow.subtitle')}
        </span>
      </h2>
      <div className="flex flex-wrap justify-center">
        <div className="p2 w-full lg:w-1/2">
          <img src={codeImg} alt={t('workflow.codeImgAlt', 'Code example')} />
        </div>
        <div className="pt-12 w-full lg:w-1/2">
          {checklistItems.map((item, index) => (
            <div key={index} className="flex mb-12">
              <div className="text-green-400 mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full" aria-hidden="true">
                <CheckCircle2 />
              </div>
              <div>
                <h5 className="mt-1 mb-2 text-xl text-white">{item.title}</h5>
                <p className="text-md text-neutral-500">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Workflow;
