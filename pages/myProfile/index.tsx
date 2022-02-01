import React, { FunctionComponent, useState, useRef } from "react";
import {
  Loading,
  Header,
  AboutMe,
  Experience,
  Project,
  Skills,
  Frameworks,
  Tools,
} from "../../components/myProfile";
import { Box } from "../../components/Grid";

const MyProfileContainer: FunctionComponent = () => {
  const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const projectRef = useRef(null);
  const projectScroll = () => scrollToRef(projectRef);

  const experienceRef = useRef(null);
  const experienceScroll = () => scrollToRef(experienceRef);

  const skillsRef = useRef(null);
  const skillsScroll = () => scrollToRef(skillsRef);

  const frameworksRef = useRef(null);
  const frameworksScroll = () => scrollToRef(frameworksRef);

  const toolsRef = useRef(null);
  const toolsScroll = () => scrollToRef(toolsRef);

  const ProfileLayout = [
    {
      ref: scrollToTop,
      display: <AboutMe />,
    },
    {
      ref: projectRef,
      display: <Project />,
    },
    {
      ref: experienceRef,
      display: <Experience />,
    },
    {
      ref: skillsRef,
      display: <Skills />,
    },
    {
      ref: frameworksRef,
      display: <Frameworks />,
    },
    {
      ref: toolsRef,
      display: <Tools />,
    },
  ];
  return (
    <Box>
      <Box position="sticky" top={0} zIndex={1}>
        <Header
          profileClick={scrollToTop}
          projectScroll={projectScroll}
          experienceScroll={experienceScroll}
          skillsScroll={skillsScroll}
          frameworksScroll={frameworksScroll}
          toolsScroll={toolsScroll}
        />
      </Box>
      {ProfileLayout?.map((item, index) => (
        <>
          {index !== 0 && <Box className="lineColor" />}
          <Box ref={item.ref} key={index}>
            {item.display}
          </Box>
        </>
      ))}
    </Box>
  );
};

export default MyProfileContainer;
