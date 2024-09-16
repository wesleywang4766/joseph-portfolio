// Imports

import Link from "next/link";

// Functions
const Experience = () => {
  return (
    <section className="section-py flex flex-col gap-16" id="experience">
      <section className="page-width flex flex-col gap-8">
        <h2>Experience</h2>
        <Link
          href="https://www.linkedin.com/in/joseph-song-994662325/"
          className="flex gap-4"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>{"->"}</span>
          <span className="underline">View LinkedIn</span>
        </Link>
      </section>
      <section className="page-width flex flex-col gap-16 md:gap-32">
        <section className="flex flex-col gap-8">
          <h3>Experience</h3>
          <ul className="flex flex-col gap-8 md:flex-row md:gap-32">
            <li className="flex flex-col gap-4">
              <h4 className="font-medium">Quality IT</h4>
              <p className="text-gray-500">March 2021 - Present</p>
              <p>Senior Software Engineer</p>
            </li>
            <li className="flex flex-col gap-4">
              <h4 className="font-medium">Brain Station 23 PLC</h4>
              <p className="text-gray-500">February 2019 - June 2021</p>
              <p>Senior Full Stack Developer</p>
            </li>
            <li className="flex flex-col gap-4">
              <h4 className="font-medium">Infobip</h4>
              <p className="text-gray-500">November 2017 - January 2020</p>
              <p>Full Stack Developer</p>
            </li>
          </ul>
        </section>
        <section className="flex flex-col gap-8">
          <h3>Education</h3>
          <ul className="flex flex-col gap-8">
            <li className="flex flex-col gap-4">
              <h4 className="font-medium">University of Nottingham</h4>
              <p className="text-gray-500">February 2012 - February 2016</p>
              <p>Bachelor of Science in Computer Science</p>
            </li>
          </ul>
        </section>
      </section>
    </section>
  );
};

// Exports
export default Experience;
