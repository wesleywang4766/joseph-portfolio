// Imports
import { BiRightArrow } from "react-icons/bi";
import Image from "next/image";
import { IAboutListItemProps } from "./About.types";

// Functions
const About = () => {
  return (
    <section className="section-py flex" id="about">
      <div className="page-width flex flex-col gap-16 md:flex-row">
        <section className="flex flex-col gap-8">
          <h2>About</h2>
          <p className="md:w-2/3">
            Joseph Song is a software engineer who values passion for
            innovation. Throughout his career, he consistently concentrated in
            utilizing advanced frameworks and best practices which reduce the
            development cost of software while improving quality. With over 8
            years of experience in the tech industry, he has refined his
            expertise in designing, developing, and testing experience on
            everything from mobile software and web applications to protocols
            and APIs. Proven track record of leading projects from planning to
            launch, on time and within budget. Enjoy working with a team of
            talented members collaboratively solving problems and building
            inspiring products.
          </p>
        </section>
      </div>
    </section>
  );
};

// Export
export default About;
