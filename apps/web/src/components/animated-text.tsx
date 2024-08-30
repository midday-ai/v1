"use client";

import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useState, useCallback } from "react";

const lettersAndSymbols = "abcdefghijklmnopqrstuvwxyz!@#$%^&*-_+=;:<>,";

interface AnimatedTextProps {
  text: string;
}

export function AnimatedText({ text }: AnimatedTextProps) {
  const controls = useAnimation();
  const [animatedText, setAnimatedText] = useState("");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  const getRandomChar = useCallback(
    () =>
      lettersAndSymbols[Math.floor(Math.random() * lettersAndSymbols.length)],
    [],
  );

  const animateText = useCallback(async () => {
    const duration = 50; // Increased duration for slower character changes
    const revealDuration = 80; // Increased reveal duration for slower reveal
    const initialRandomDuration = 300; // Reduced total duration

    const generateRandomText = () =>
      text
        .split("")
        .map(() => getRandomChar())
        .join("");

    setAnimatedText(generateRandomText());

    const endTime = Date.now() + initialRandomDuration;
    while (Date.now() < endTime) {
      await new Promise((resolve) => setTimeout(resolve, duration));
      setAnimatedText(generateRandomText());
    }

    for (let i = 0; i < text.length; i++) {
      await new Promise((resolve) => setTimeout(resolve, revealDuration));
      setAnimatedText(
        (prevText) =>
          text.slice(0, i + 1) +
          prevText
            .slice(i + 1)
            .split("")
            .map(() => getRandomChar())
            .join(""),
      );
    }
  }, [text, getRandomChar]);

  useEffect(() => {
    controls.start("visible");
    animateText();
  }, [controls, text, animateText]);

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate={controls}
      className="relative inline-block"
    >
      {animatedText}
    </motion.div>
  );
}
