import React from "react";
import { useState, useEffect, useRef } from "react";
import { FadeInDiv } from "./styled";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const FadeIn: React.FC<Props> = ({ children }) => {
  const [show, setShow] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const handleScroll = () => {
    let element = ref.current;
    if (!element) return;
    let elementTop = element.getBoundingClientRect().top;
    let elementBottom = element.getBoundingClientRect().bottom;
    let screenHeight = window.innerHeight;
    if (elementTop < screenHeight && elementBottom >= 0) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <FadeInDiv ref={ref} className="fade-in" show={show}>
      {children}
    </FadeInDiv>
  );
};

export default FadeIn;
