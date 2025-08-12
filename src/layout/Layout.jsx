import React, { useEffect, useState } from 'react';
import { Outlet} from 'react-router';
import Navbar from '../components/shared/Navbar';
import Footer from '../components/shared/Footer';
import Intro from '../components/Intro';

const Layout = () => {
    const [showIntro, setShowIntro] = useState(true);

    useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (showIntro) {
    return <Intro />;
  }

    return (
        <div>
            <Navbar />
              <Outlet />
            <Footer />
        </div>
    );
};

export default Layout;