"use client";

import React, { useEffect, useState } from "react";
import s from "./Learning.module.scss";
import ProgressBar from "@/components/ProgressBar/ProgressBar";
import { useRouter } from "next/navigation";
import questionsData from "../../../questions.json";

const Learning = () => {
  const [completedQuestions, setCompletedQuestions] = useState(0);

  const router = useRouter();

  const handleButtonClick = () => {
    router.push("/questions");
  };

  useEffect(() => {
    const savedCompleted = JSON.parse(
      localStorage.getItem("completedQuestions") || "[]",
    );
    setCompletedQuestions(savedCompleted.length);
  }, []);
  return (
    <div className={s.learningContainer} onClick={handleButtonClick}>
      <div className={s.categoryWrapper}>
        <div className={s.categoryWrapperLeft}>
          <img alt="hat-icon" src="/icons/hat.svg" />
          <div>
            <span className={s.title}>Learning</span>
            <p className={s.subTitle}>Category В</p>
          </div>
        </div>
        <button className={s.button}>
          <img alt="arrow-icon" src="/icons/arrowRight.svg" />
        </button>
      </div>
      <ProgressBar
        completedQuestions={completedQuestions}
        totalQuestions={questionsData.length}
      />
    </div>
  );
};

export default Learning;
