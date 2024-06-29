// src/components/Navbar.jsx
import { Menu, X } from "lucide-react";
import { useState, useCallback, useContext } from "react";
import logo from "../assets/logo.png";
import { navItems } from "../constants";
import { useTranslation } from 'react-i18next';
import { HashLink as Link } from 'react-router-hash-link';
import { LanguageContext } from '../contexts/LanguageContext';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const { language, setLanguage } = useContext(LanguageContext);
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = useCallback(() => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  }, [mobileDrawerOpen]);

  const changeLanguage = useCallback((lng) => {
    i18n.changeLanguage(lng);
    setLanguage(lng);
  }, [i18n, setLanguage]);

  return (
    <nav className={`sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80 ${language === 'pl' ? 'navbar-pl' : 'navbar-en'}`} aria-label="Main Navigation">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img className="h-10 w-10 mr-2" src={logo} alt="VirtualR company logo" />
            <span className="text-xl tracking-tight text-white">VirtualR</span>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link smooth to={`/#${item.href}`} aria-label={`Go to ${t(`navbar.${item.labelKey}`)}`} className="text-white hover:text-orange-400">
                  {t(`navbar.${item.labelKey}`)}
                </Link>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex justify-center space-x-12 items-center">
            <Link to="/sign-in" className="py-2 px-3 border rounded-md text-white hover:bg-neutral-700">
              {t('navbar.signIn')}
            </Link>
            <Link to="/create-account" className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md text-white">
              {t('navbar.createAccount')}
            </Link>
            <div className="flex space-x-2">
              <button onClick={() => changeLanguage('pl')} className={`py-1 px-2 rounded-md ${language === 'pl' ? 'bg-orange-500' : 'bg-neutral-800'} text-neutral-200 hover:bg-neutral-700`} aria-label="Change language to Polish">PL</button>
              <button onClick={() => changeLanguage('en')} className={`py-1 px-2 rounded-md ${language === 'en' ? 'bg-orange-500' : 'bg-neutral-800'} text-neutral-200 hover:bg-neutral-700`} aria-label="Change language to English">EN</button>
            </div>
          </div>
          <div className="lg:hidden md:flex-col justify-end">
            <button onClick={toggleNavbar} aria-label="Toggle navigation menu">
              {mobileDrawerOpen ? <X className="text-white"/> : <Menu className="text-white"/>}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden" aria-label="Mobile Navigation Menu">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4">
                  <Link smooth to={`/#${item.href}`} aria-label={`Go to ${t(`navbar.${item.labelKey}`)}`} className="text-white hover:text-orange-400">
                    {t(`navbar.${item.labelKey}`)}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex space-x-6">
              <Link to="/sign-in" className="py-2 px-3 border rounded-md text-white hover:bg-neutral-700">
                {t('navbar.signIn')}
              </Link>
              <Link to="/create-account" className="py-2 px-3 rounded-md bg-gradient-to-r from-orange-500 to-orange-800 text-white">
                {t('navbar.createAccount')}
              </Link>
              <div className="flex space-x-2">
                <button onClick={() => changeLanguage('pl')} className={`py-1 px-2 rounded-md ${language === 'pl' ? 'bg-orange-500' : 'bg-neutral-800'} text-neutral-200 hover:bg-neutral-700`} aria-label="Change language to Polish">PL</button>
                <button onClick={() => changeLanguage('en')} className={`py-1 px-2 rounded-md ${language === 'en' ? 'bg-orange-500' : 'bg-neutral-800'} text-neutral-200 hover:bg-neutral-700`} aria-label="Change language to English">EN</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
