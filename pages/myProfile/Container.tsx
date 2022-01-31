import React, { FunctionComponent } from "react";
import {
  Loading,
  Header,
  AboutMe,
  Experience,
  Project,
  Skills,
  Frameworks,
  Tools,
} from "./View";
import ProfileController from "./controller";
import { Box } from "../../components/Grid";

const MyProfileContainer: FunctionComponent = () => {
  const {
    firstOpen,
    scrollToTop,
    projectRef,
    projectScroll,
    experienceRef,
    experienceScroll,
    skillsRef,
    skillsScroll,
    frameworksRef,
    frameworksScroll,
    toolsRef,
    toolsScroll,
  } = ProfileController();

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
      {firstOpen ? (
        <Loading />
      ) : (
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
      )}
    </Box>
  );
};

export default MyProfileContainer;
