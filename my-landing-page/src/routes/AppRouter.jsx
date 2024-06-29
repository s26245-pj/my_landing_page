import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from '../components/Navbar';
import App from '../App'; 
import Footer from '../components/Footer';

const AppRouter = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default AppRouter;
