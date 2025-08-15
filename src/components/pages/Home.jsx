import React from 'react';
import About from './About';
import Skills from './Skills';
import Banner from '../Banner';
import Projects from './Projects';
import Education from './Education';
import ContactForm from './ContactForm';

const Home = () => {
  return (
    <div>
      
      <Banner />
            <div className="w-11/12 sm:w-10/12 md:w-10/12 lg:w-8/12 mx-auto">

        <About />
        <Projects />
        <Skills />
        <Education />
        <ContactForm />
      </div>
    </div>
  );
};

export default Home;
