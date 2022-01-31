import React, { useState, useRef } from "react";

const MyProfileController = () => {
  const [firstOpen, setFirstOpen] = useState(true);

  setTimeout(() => {
    setFirstOpen(false);
  }, 3000);

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

  return {
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
  };
};

export default MyProfileController;
