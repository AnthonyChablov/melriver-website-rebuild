"use client";
import { useState, useEffect } from "react";

const useIntroAnimation = () => {
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    const hasSeenIntro = sessionStorage.getItem("hasSeenIntro");

    if (!hasSeenIntro) {
      setShouldAnimate(true);
      sessionStorage.setItem("hasSeenIntro", "true");
    }
  }, []);

  return shouldAnimate;
};

export default useIntroAnimation;
