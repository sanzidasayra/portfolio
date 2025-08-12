import React from 'react';

const Education = () => {
  return (
    <section
      id="education"
      className="py-14 "
    >
      {/* Heading - outside card and centered */}
      <div className="relative mb-12 text-center mx-auto w-full max-w-md">
  <h2 className="text-3xl md:text-4xl lg:text-5xl  font-bold mb-6 text-fuchsia-600">
  Educational <br className='inline-block whitespace-nowrap' /> Qualification
</h2>
  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 md:w-60 w-40  h-[6px] bg-gradient-to-r from-fuchsia-500 to-[#2e026d] rounded-full mt-6"></div>
</div>


      {/* Card content */}
      <div className="bg-white/5 border border-white/10 rounded-2xl p-6 shadow-lg backdrop-blur-xl hover:scale-[1.02] transition-transform">
        <h3 className="text-2xl font-semibold mb-1 text-gray-50">
          Bachelor of Science in Computer Science and Engineering (BSc in CSE)
        </h3>
        <p className="italic text-gray-400 mb-1">Northern University Bangladesh</p>
        <p className="text-gray-300 mb-3">
          2021 – 2024 (Ongoing — Final Year Project/Thesis Pending)
        </p>
        <ul className="list-disc list-inside space-y-1 text-gray-300">
          <li>Core courses completed: Data Structures, Algorithms, Database Systems, Software Engineering, Computer Networks, AI, Machine Learning</li>
          <li>Actively involved in software development projects and research work</li>
          <li>Expected Graduation: 2025</li>
        </ul>
      </div>
    </section>
  );
};

export default Education;
