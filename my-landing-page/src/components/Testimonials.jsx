import { useTranslation } from 'react-i18next';
import { testimonials } from "../constants";

const Testimonials = () => {
  const { t } = useTranslation();

  return (
    <div id="testimonials" className="mt-20 tracking-wide" aria-labelledby="testimonials-heading">
      <h2 id="testimonials-heading" className="text-3xl sm:text-5xl lg:text-6xl text-center my-100 lg:my-20">
        {t('testimonials.title', 'What people are saying')}
      </h2>
      <div className="flex flex-wrap justify-center">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2">
            <div className="bg-neutral-800 rounded-md p-6 text-md border border-neutral-700 font-thin">
              <p className="text-neutral-100">{t(`testimonials.feedback.${index}.text`, testimonial.text)}</p>
              <div className="flex mt-8 items-start">
                <img
                  className="w-12 h-12 mr-6 rounded-full border border-neutral-500"
                  src={testimonial.image}
                  alt={testimonial.user}
                />
              </div>
              <h6 className="text-neutral-100">{testimonial.user}</h6>
              <span className="text-sm font-normal italic text-neutral-400">
                {testimonial.company}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
