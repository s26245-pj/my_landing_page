import { useReducer, useRef } from 'react';
import { resourcesLinks, platformLinks, communityLinks } from "../constants";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const initialState = {
  name: "",
  email: "",
  message: "",
  phone: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_FIELD':
      return {
        ...state,
        [action.field]: action.value,
      };
    case 'RESET_FORM':
      return initialState;
    default:
      return state;
  }
};

const Footer = () => {
  const { t } = useTranslation();
  const [state, dispatch] = useReducer(reducer, initialState);
  const formRef = useRef();

  const validationSchema = Yup.object().shape({
    name: Yup.string().required(t("footer.errors.nameRequired")),
    email: Yup.string().email(t("footer.errors.emailInvalid")).required(t("footer.errors.emailRequired")),
    message: Yup.string().required(t("footer.errors.messageRequired")),
    phone: Yup.string()
  });

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    console.log(values);
    setSubmitting(false);
    resetForm();
    dispatch({ type: 'RESET_FORM' });
  };

  return (
    <footer className="mt-20 border-t py-10 border-neutral-700" aria-labelledby="footer-heading">
      <div id="contact" className="container mx-auto px-4">
        <div className="mt-10 text-center">
          <h3 id="footer-heading" className="text-md font-semibold mb-4">{t('footer.contactUs')}</h3>
          <Formik
            initialValues={state}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
            innerRef={formRef}
            enableReinitialize // Dodane, aby wartości formularza były aktualizowane na podstawie stanu
          >
            {({ isSubmitting, values, handleChange }) => (
              <Form className="space-y-4 max-w-4xl mx-auto" aria-labelledby="contact-form">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-neutral-300">{t('footer.name')}</label>
                    <Field
                      type="text"
                      id="name"
                      name="name"
                      value={values.name}
                      onChange={(e) => {
                        handleChange(e);
                        dispatch({ type: 'SET_FIELD', field: 'name', value: e.target.value });
                      }}
                      className="w-full p-2 rounded-md border border-neutral-600 bg-neutral-800 text-neutral-100"
                      aria-required="true"
                    />
                    <ErrorMessage name="name" component="div" className="text-red-500" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-neutral-300">{t('footer.email')}</label>
                    <Field
                      type="email"
                      id="email"
                      name="email"
                      value={values.email}
                      onChange={(e) => {
                        handleChange(e);
                        dispatch({ type: 'SET_FIELD', field: 'email', value: e.target.value });
                      }}
                      className="w-full p-2 rounded-md border border-neutral-600 bg-neutral-800 text-neutral-100"
                      aria-required="true"
                    />
                    <ErrorMessage name="email" component="div" className="text-red-500" />
                  </div>
                </div>
                <div>
                  <label htmlFor="phone" className="block text-neutral-300">{t('footer.phone')}</label>
                  <Field
                    type="tel"
                    id="phone"
                    name="phone"
                    value={values.phone}
                    onChange={(e) => {
                      handleChange(e);
                      dispatch({ type: 'SET_FIELD', field: 'phone', value: e.target.value });
                    }}
                    className="w-full p-2 rounded-md border border-neutral-600 bg-neutral-800 text-neutral-100"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-neutral-300">{t('footer.message')}</label>
                  <Field
                    as="textarea"
                    id="message"
                    name="message"
                    value={values.message}
                    onChange={(e) => {
                      handleChange(e);
                      dispatch({ type: 'SET_FIELD', field: 'message', value: e.target.value });
                    }}
                    className="w-full p-2 rounded-md border border-neutral-600 bg-neutral-800 text-neutral-100"
                    aria-required="true"
                  />
                  <ErrorMessage name="message" component="div" className="text-red-500" />
                </div>
                <button type="submit" disabled={isSubmitting} className="w-full py-2 px-4 bg-orange-600 rounded-md text-neutral-100 hover:bg-orange-700">
                  {t('footer.submit')}
                </button>
              </Form>
            )}
          </Formik>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-center lg:text-left mt-10" aria-labelledby="footer-links">
          <div className="lg:mr-auto">
            <h3 className="text-md font-semibold mb-4">{t('footer.product')}</h3>
            <ul className="space-y-2">
              {resourcesLinks.map((link, index) => (
                <li key={index}>
                  <a className="text-neutral-300 hover:text-white" href={link.href}>
                    {t(`footer.resourcesLinks.${link.text}`)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:mx-auto">
            <h3 className="text-md font-semibold mb-4">{t('footer.company')}</h3>
            <ul className="space-y-2">
              {platformLinks.map((link, index) => (
                <li key={index}>
                  <a className="text-neutral-300 hover:text-white" href={link.href}>
                    {t(`footer.platformLinks.${link.text}`)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:ml-auto">
            <h3 className="text-md font-semibold mb-4">{t('footer.legal')}</h3>
            <ul className="space-y-2">
              {communityLinks.map((link, index) => (
                <li key={index}>
                  <a className="text-neutral-300 hover:text-white" href={link.href}>
                    {t(`footer.communityLinks.${link.text}`)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex justify-between items-center mt-10 border-t border-neutral-700 pt-6" aria-labelledby="social-media">
          <div>
            <p className="text-neutral-500 text-sm">
              <a href="/privacy-policy" className="hover:underline">{t('footer.privacyPolicy')}</a> • <a href="/terms-of-service" className="hover:underline">{t('footer.termsOfService')}</a>
            </p>
            <p className="text-neutral-500 text-sm mt-2">
              {t('footer.copyright')}
            </p>
          </div>
          <div className="flex space-x-4" aria-label="Social Media Links">
            <a href="https://facebook.com" aria-label="Follow us on Facebook" className="text-neutral-300 hover:text-white">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" aria-label="Follow us on Twitter" className="text-neutral-300 hover:text-white">
              <FaTwitter />
            </a>
            <a href="https://linkedin.com" aria-label="Follow us on LinkedIn" className="text-neutral-300 hover:text-white">
              <FaLinkedinIn />
            </a>
            <a href="https://github.com" aria-label="Follow us on Github" className="text-neutral-300 hover:text-white">
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
