"use client";
import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { BsArrowDownCircle, BsArrowUpCircle } from "react-icons/bs";
import { ScrollContext } from "@/context/scroll-context";
import Nav from "@/components/nav";
import AboutSection from "@/components/about";
import ProjectSection from "@/components/projects";
import ContactSection from "@/components/contact";

const PortfolioPage = () => {
  const aboutSectionRef = useRef<HTMLDivElement>(null);
  const projectSectionRef = useRef<HTMLDivElement>(null);
  const contactSectionRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useMemo(
    () => [aboutSectionRef, projectSectionRef, contactSectionRef],
    []
  );
  const [activeSection, setActiveSection] = useState(1);
  const { number, decreaseNumber, increaseNumber, setCurrentNumberScroll } =
    useContext(ScrollContext);
  const isMaxSection = number === sectionRefs.length;
  const isMinSection = number === 1;
  const isBetweenSections = number > 1 && number < sectionRefs.length;

  const scrollToSection = useCallback(
    (sectionNumber: number) => {
      sectionRefs[sectionNumber - 1]?.current?.scrollIntoView({
        behavior: "smooth",
      });
    },
    [sectionRefs]
  );

  const handleSectionChange = useCallback(
    (sectionNumber: number) => {
      scrollToSection(sectionNumber);
      setActiveSection(sectionNumber);
      setCurrentNumberScroll(sectionNumber);
    },
    [scrollToSection, setCurrentNumberScroll]
  );

  useEffect(() => {
    scrollToSection(activeSection);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleScrollDownButton = () => {
    increaseNumber();
    handleSectionChange(activeSection + 1);
  };

  const handleScrollUpButton = () => {
    decreaseNumber();
    handleSectionChange(activeSection - 1);
  };

  return (
    <>
      <Nav onScroll={handleSectionChange} active={activeSection} />
      <div className="section-layout pt-16" ref={aboutSectionRef}>
        <AboutSection />
      </div>
      <div className="section-layout pt-16" ref={projectSectionRef}>
        <ProjectSection />
      </div>
      <div className="section-layout pt-16" ref={contactSectionRef}>
        <ContactSection />
      </div>
      <div className="flex gap-2 fixed bottom-5 right-1/2 translate-x-1/2">
        {(isBetweenSections || isMinSection) && (
          <BsArrowDownCircle
            onClick={handleScrollDownButton}
            size={25}
            className="animate-bounce"
          />
        )}
        {(isBetweenSections || isMaxSection) && (
          <BsArrowUpCircle
            onClick={handleScrollUpButton}
            size={25}
            className="animate-bounce"
          />
        )}
      </div>
    </>
  );
};

export default PortfolioPage;
