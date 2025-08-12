import React from 'react';
import About from './About';
import Skills from './Skills';
import Banner from '../Banner';
import Projects from './Projects';

const Home = () => {
  return (
    <div>
      
      <div className="w-11/12 sm:w-10/12 md:w-10/12 lg:w-8/12 mx-auto">
      <Banner />
        <About />
        <Projects />
      </div>
        <Skills />
    </div>
  );
};

export default Home;
