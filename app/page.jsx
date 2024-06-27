import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";
import StairTransition from "@/components/StairTransition";
import PageTransition from "@/components/PageTransition";

const Home = () => {
  return (
    <>
      <StairTransition />
      <PageTransition />
      <section className="h-full">
        <div className="container mx-auto h-full ">
          <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
            {/* text */}
            <div className="text-center xl:text-left order-2 xl:order-none">
              <span className="text-xl">
                Web Developer | Software Developer
              </span>
              <h1 className="h1">
                Hello I'm <br />
                <span className="text-accent">Devesh Borkar</span>
              </h1>
              <p className="max-w-[500px] mb-9 text-white/80">
                I excel at crafting elegant digital experiences and I am
                proficient in various programming languages and technologies.
              </p>
              {/* button and socials */}
              <div className="flex flex-col xl:flex-row items-center gap-8">
                <a
                  href="/Resume_DeveshBorkar.pdf"
                  download="Resume_DeveshBorkar.pdf"
                >
                  <Button
                    variant="outline"
                    size="lg"
                    className="uppercase flex items-center gap-2 font-bold"
                  >
                    <span>Resume</span>
                    <FiDownload className="text-xl"></FiDownload>
                  </Button>
                </a>

                <div className="">
                  <Social
                    containerStyles="flex gap-6"
                    iconStyles="w-9 h-9 flex items-center justify-center border border-accent rounded-full text-accent text-base hover:bg-accent hover:text-primary transition-all duration-500"
                  />
                </div>
              </div>
            </div>

            {/* photo */}
            <div className="order-1 xl:order-none mb-8 xL:mb-0">
              <Photo />
            </div>
          </div>
        </div>
        <Stats />
      </section>
      <PageTransition />
      <StairTransition />
    </>
  );
};

export default Home;
