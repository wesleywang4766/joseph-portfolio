// Imports
import CustomLink from "../../common/CustomLink/CustomLink";
import { Link, animateScroll as scroll } from "react-scroll";

// Functions
const Hero = () => {
  return (
    <div className="relative" id="hero">
      <section className="section-py relative z-20 flex min-h-screen w-full flex-col justify-center gap-16 bg-[url('/images/hero-background.jpg')] bg-cover text-white">
        <section className="page-width flex flex-col gap-8">
          <h1>
            Software engineer who <br /> loves learning and challenge
          </h1>
          <p>
            I&apos;m an experienced full-stack developer focused on crafting
            exceptional user experiences for web and mobile.
          </p>
          <Link
            className="flex gap-4 hover:cursor-pointer"
            to="about"
            spy={true}
            smooth={true}
            duration={500}
          >
            <span>{"->"}</span>
            <span className="underline">Get to know me</span>
          </Link>
        </section>
      </section>
    </div>
  );
};

// Exports
export default Hero;
