import React from 'react';
import Introduction from '../Banner';
import About from './About';
import Skills from './Skills';
import Banner from '../Banner';

const Home = () => {
  return (
    <div>
      <Introduction />
      <div className="w-11/12 sm:w-10/12 md:w-10/12 lg:w-8/12 mx-auto">
      {/* <Banner /> */}
        <About />
      </div>
        <Skills />
    </div>
  );
};

export default Home;
