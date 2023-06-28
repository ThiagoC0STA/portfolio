import React, { useEffect, useState } from "react";
import { LoadingContainer } from "./styled";

const LoadingAnimation = () => {
  const [showLoading, setShowLoading] = useState(true);
  const [delayAnimation, setDelayAnimation] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowLoading(false);
    }, 6200);

    setTimeout(() => {
      setDelayAnimation(true);
    }, 2400);
  }, []);

  return showLoading ? (
    <LoadingContainer>
      <h1>Rodc Dev</h1>
      <p>Front-End Developer</p>
      {delayAnimation && <p>Thanks for visiting my website 👾</p>}
    </LoadingContainer>
  ) : (
    <></>
  );
};

export default LoadingAnimation;
